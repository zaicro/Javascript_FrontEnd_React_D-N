import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    background: 'pink',
    height:400
  },
  gridItem: {
    background: 'gray',
    border: '10px solid #1C6EA4'
  },
  anidado: {
    background: 'orange',
    color:'agua',
    border: '10px solid #1ca42e'
  },
}));

function GridComponent() {

  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item className={classes.gridItem} lg={3} md={4} sm={6} xs={12}>
            Grid 1
          </Grid>
          <Grid item className={classes.gridItem} lg={3} md={4} sm={6} xs={12}>
            Grid 2
          </Grid>
          <Grid item className={classes.gridItem} lg={3} md={4} sm={6} xs={12}>
            Grid 3
          </Grid>
          <Grid item className={classes.gridItem} lg={3} md={4} sm={6} xs={12}>
            Grid 4
          </Grid>

          <Grid item className={classes.gridItem} sm={6} xs={12}>
            Grid item con container
            <Grid container>
              <Grid item className={classes.gridItem} lg={3} md={4} sm={6} xs={12}>
                <div className={classes.anidado}>Grid 1</div>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Fragment>
  );
}

export default GridComponent;
