import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalf';
import Storefront from '@material-ui/icons/Storefront';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import EuroSymbol from '@material-ui/icons/EuroSymbol';
import axios from 'axios';

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
  productImage: {
    width: '100%',
  },
  title: {
    fontWeight: 'bold'
  },
  description: {
    marginTop: '40px',
  },
  star: {
    color: 'green',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '18px',
    display: 'inline'
  }
}));


export default function ProductDetail() {

  const [product, setProduct] = useState({});
  const { id } = useParams();

  const classes = useStyles();

  useEffect(() => {
    getProductsDetail(id);
  }, []);

  const getProductsDetail = (id) => {
    axios.get('/v1/products?filters=id|'+id)
        .then(response => {
          console.log("response", response.data.data.data);
          setProduct(response.data.data.data[0]);
        });
}

  return (
    <Main
      title="Home"
      description="Homepage"
    >
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <img src={product.image_link} className={classes.productImage}/>
          </Grid>
          <Grid item xs={12} sm={6} md={8} lg={8}>
            <Typography component="h6" variant="h6" align="center" color="textPrimary" gutterBottom className={classes.title}>
              { product.title }
            </Typography>
            <Grid container spacing={1} justifyContent="center">
                <Star className={classes.star} /><Star className={classes.star} /><Star className={classes.star} /><StarHalf className={classes.star} /><StarBorder />
            </Grid>
            <Grid container spacing={1} justifyContent="center" className={classes.description}>
                <Grid item>
                  { product.description }
                </Grid>
            </Grid>
            <Grid container spacing={1} justifyContent="space-around" className={classes.description}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <Storefront /> { product.availability == 'in stock' ? 'In Stock' : 'Out of Stock'}
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <BusinessCenter /> { product.brand }
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <EuroSymbol /><div className={classes.price}> { product.price }</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
}
