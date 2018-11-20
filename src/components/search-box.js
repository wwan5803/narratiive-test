import React, {Component, useState} from "react";
import '../styles/searchbox.scss';
import PropTypes from "prop-types";

const SearchBox = ({onChange, onDelete, value}) => {
    const [showIcon, setShowIcon] = useState(false);
    return <div className="search" onMouseLeave={() => setShowIcon(false)}>
        <input value={value} onMouseOver={() => setShowIcon(true)} className='search-box'
               type='text' placeholder='business' onChange={(e)=>{onChange(e)}}/>
        {showIcon && <span className="fa fa-times-circle" onClick={onDelete}/>}
    </div>
}
SearchBox.propTypes = {
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};
export default SearchBox