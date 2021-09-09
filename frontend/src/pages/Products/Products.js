import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Config from '../../config/config';

import Main from '../../layouts/Main';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    pagination: {
        justifyContent: 'center',
        paddingBottom: 30,
    },
    paginationContainer: {
        paddingTop: '0px',
        paddingBottom: '64px',
    },
    title: {
        wordBreak: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineHeight: '16px',
        maxHeight: '40px',
        fontWeight: 'bold',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical'
    },
    price: {
        fontSize: '16px',
    },
    productButtonGroup: {
        justifyContent: 'space-around'
    },
    shipping: {
        fontSize: '12px',
        textAlign: 'center',
        color: '#3f51b5',
        color: 'lightgrey'
    },
    margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(3),
      },
      textField: {
        width: '100%',
      },
      search: {
        height: '61px',
        marginTop: '4px',
        width: '100%',
      }
}));


export default function Album() {
    console.log("config", Config);

    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [recordsTotal, setRecordsTotal] = useState(0);
    const [title, setTitle] = useState("");
    const [startPrice, setStartPrice] = useState(null);
    const [endPrice, setEndPrice] = useState(null);
    const limit = Config.limit;
    const classes = useStyles();

    useEffect(() => {
        getProducts(page);
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
        getProducts(value);
    };

    const getProducts = () => {
        let filters = "";
        if(title != "") {
            filters += "title|"+title;
        }
        if(startPrice != null && startPrice != "") {
            filters += ",price|gteq|"+startPrice;
        }
        if(endPrice != null && endPrice != "") {
            filters += ",price|lteq|"+endPrice;
        }
        axios.get('v1/products?offset='+limit * (page - 1) + '&limit='+limit+'&filters='+filters)
            .then(response => {
                setProducts(response.data.data.data);
                setRecordsTotal(Math.ceil(response.data.data.recordsTotal / limit))
            });
    }

    return (
        <Main
            title="Products"
            description="ProductsPage"
        >
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <TextField
                            id="outlined-start-adornment"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Name</InputAdornment>,
                            }}
                            variant="outlined"
                            value={title}
                            onChange={evt => setTitle(evt.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <TextField
                            id="outlined-start-adornment"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">€</InputAdornment>,
                            }}
                            variant="outlined"
                            value={startPrice}
                            onChange={evt => setStartPrice(evt.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <TextField
                            id="outlined-start-adornment"
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">€</InputAdornment>,
                            }}
                            variant="outlined"
                            value={endPrice}
                            onChange={evt => setEndPrice(evt.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6} sm={3} md={3} lg={3}>
                        <Button variant="outlined" color="primary" className={classes.search} onClick={getProducts}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    {products.map((product, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image={product.image_link}
                                    title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <div className={classes.title}>
                                        {product.title}
                                    </div>
                                </CardContent>
                                <CardActions className={classes.productButtonGroup}>
                                    <Link to={`product/${product.id}`}>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                    </Link>
                                    <Button size="small" color="primary" className={classes.price}>
                                        {product.price}
                                    </Button>
                                </CardActions>
                                <div className={classes.shipping}>
                                    <LocalShippingIcon/> {product.shipping.split(':::')[1] == '0.00 EUR' ? 'Free Shipping' : product.shipping.split(':::')[1] }
                                </div>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                
            </Container>
            <Container className={classes.paginationContainer} maxWidth="md">
                <Pagination count={recordsTotal} page={page} onChange={handleChange} ariant="outlined" shape="rounded" className={classes.pagination}/>
            </Container>
        </Main>
    );
}