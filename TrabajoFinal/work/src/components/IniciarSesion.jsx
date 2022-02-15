import React, { Fragment } from "react";
import { withRouter } from 'react-router-dom';
import { Container, makeStyles } from './Material';
import 'react-gallery-carousel/dist/index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    }
}));

const IniciarSesion = () => {
    const classes = useStyles();
    return (
        <div>
            <Fragment>
                <Container className={classes.container}>
                    <h1>En construccion</h1>                    
                    <img src="https://www.unionsanlazaro.com/wp-content/uploads/2021/08/pagina-en-construccion2-1024x640.png" alt="Logo" />;
                </Container>
            </Fragment>
        </div>
    )
}
export default withRouter(IniciarSesion)