import React from "react";
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '../components/Material';

export const VistaPrevia = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.imagen}
                    alt="imagen"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.descripcion}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

VistaPrevia.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    onClick: PropTypes.func
}