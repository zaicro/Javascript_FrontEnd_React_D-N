import React from "react";
import PropTypes from 'prop-types';
import { Link, withRouter} from 'react-router-dom';

const PlanRedux = (props) => {
    const {
        match: { url }
    } = props;

    return (
        <div>
            <h1>Redux</h1>
            <Link to={`${url}/actions`}>actions</Link>
            <Link to={`${url}/reducers`}>reducers</Link>
            <Link to={`${url}/store`}>store</Link>
        </div>
    )
}

PlanRedux.prototype = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}
export default withRouter(PlanRedux)