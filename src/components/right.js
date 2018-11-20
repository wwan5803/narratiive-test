import React, { Component } from "react";
import '../styles/main.scss';
import PropTypes from "prop-types";
const Right = ({children}) => {
    return <div className='right-section'>
        {children}
    </div>
}
Right.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Right