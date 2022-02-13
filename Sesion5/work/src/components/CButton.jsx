import React from "react";
import PropTypes from 'prop-types';

export const CButton = (props) => {
        return (
            <div>
                <button 
                    onClick={props.onClick} 
                    className={props.className}>
                    {props.title}
                </button>
            </div>
        )
}

CButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}