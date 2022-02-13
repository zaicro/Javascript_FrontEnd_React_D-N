import React from "react";
import PropTypes from 'prop-types';
import { Link, withRouter} from 'react-router-dom';

const Peliculas = (props) => {
    const {
        match: { url }
    } = props;

    return (
        <div>
            <h1>Peliculas</h1>
        </div>
    )
}

Peliculas.prototype = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}
export default withRouter(Peliculas)