import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Main from '../../layouts/Main';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
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
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Main
      title="About Us"
      description="AboutUsPage"
    >
      <article>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
              Contact information
            </Typography>
            <div className='about-us-content'>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <b>Company registration</b><br />
                  KiesProduct B.V.<br />
                  Chamber of Commerce 59260831<br />
                  VAT NL853393163B01<br />
                  Oudeschans 79D<br />
                  1011KW AMSTERDAM
                </Grid>
                <Grid item xs={4}>
                  <b>Our office</b><br />
                  Oudeschans 79D<br />
                  Amsterdam<br />
                  The Netherlands<br /><br />
                  <a href="mailto:info@shoparize.com" style={{textDecoration: 'none'}}>info@shoparize.com</a>
                </Grid>
                <Grid item xs={4}>
                  <b>Contact person</b><br />
                  D. Verburg<br />
                  Oudeschans 79D<br />
                  1011KW AMSTERDAM<br />
                  The Netherlands<br /><br />
                  <a href="mailto:info@shoparize.com" style={{textDecoration: 'none'}}>dirk.verburg@shoparize.com</a>
                </Grid>
              </Grid>
            </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact Us
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </article>
    </Main>
  )
}