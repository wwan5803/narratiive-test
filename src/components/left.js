import React, { Component } from "react";
import PropTypes from 'prop-types';
import '../styles/main.scss';

const Left = ({children}) => {
    return <div className='left-section'>
        {children}
    </div>
}

Left.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Left