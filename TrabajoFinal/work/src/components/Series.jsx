import React from "react";
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { ListaSeries } from '../helpers/constants'
import { VistaPrevia } from './VistaPrevia';

const Series = (props) => {
    const {
        match: { url }
    } = props;

    return (
        <div>
            <h1>Series</h1>

            {ListaSeries.map((serie) => (
                <VistaPrevia
                titulo={serie.name}
                imagen={serie.image}
                descripcion={serie.description}
                >
                </VistaPrevia>
            ))}
        </div>
    )
}

Series.prototype = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}
export default withRouter(Series)