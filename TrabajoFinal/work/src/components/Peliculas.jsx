import React, { Fragment } from "react";
import { withRouter } from 'react-router-dom';
import { ListaPeliculas, ListaPeluculasSub } from '../helpers/constants'
import { VistaPrevia } from './VistaPrevia';
import { Grid, Container, makeStyles } from '../components/Material';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    }
}));

const Peliculas = () => {
    const classes = useStyles();

    return (
        <div>
            <Fragment>
                <Container className={classes.container}>
                    <h1>Español</h1>
                    <Grid container spacing={3}>
                        {ListaPeliculas.map((serie) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <VistaPrevia
                                    titulo={serie.name}
                                    imagen={serie.image}
                                    descripcion={serie.description}
                                >
                                </VistaPrevia>
                            </Grid>
                        ))}
                    </Grid>
                </Container>

                <Container className={classes.container}>
                    <h1>Subtituladas</h1>
                    <Grid container spacing={3}>
                        {ListaPeluculasSub.map((serie) => (
                            <Grid item lg={3} md={4} sm={6} xs={12}>
                                <VistaPrevia
                                    titulo={serie.name}
                                    imagen={serie.image}
                                    descripcion={serie.description}
                                >
                                </VistaPrevia>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Fragment>
        </div>
    )
}
export default withRouter(Peliculas)