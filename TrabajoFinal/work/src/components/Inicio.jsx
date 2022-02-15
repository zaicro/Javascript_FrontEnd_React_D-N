import React, { Fragment } from "react";
import { withRouter } from 'react-router-dom';
import { ListaCarousel } from '../helpers/constants'
import { Container, makeStyles } from './Material';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    }
}));

const Inicio = () => {
    const classes = useStyles();
    return (
        <div>
            <Fragment>
                <Container className={classes.container}>
                    <h1>inicio</h1>                    
                    <Carousel images={ListaCarousel} style={{ height: 500, width: "100%" }} />
                </Container>
            </Fragment>
        </div>
    )
}
export default withRouter(Inicio)