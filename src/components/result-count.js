import React, { Component } from "react";
import '../styles/global.scss';
import PropTypes from "prop-types";

const ResultCount = ({count}) => {
    return <div className='text-black text-bold margin-vertical_large'>
        {`Found ${count === 0 ? 'no':count} results`}
    </div>
}
ResultCount.propTypes = {
    count: PropTypes.number.isRequired,
};
export default ResultCount