import React, { Component, useState } from "react";
import '../styles/selecteditems.scss';
import PropTypes from "prop-types";

const Item = ({item, onDeleteSelectedItem}) => {
    const [showIcon, setShowIcon] = useState(false);
    return <div className='selected-item' onMouseOver={() => setShowIcon(true)}
                onMouseLeave={() => setShowIcon(false)}>
        {showIcon && <span className="fa fa-times-circle" onClick={() => onDeleteSelectedItem(item)}/>}
        <img src={item.image} width="100"/>
        <div className="selected-item-name">{item.name}</div>
    </div>
}
const SelectedItems = ({data, ...props}) => {
    return <div className='selected-item-list'>
        {data.map(item => { return <Item item={item} key={item.key} {...props}/>
        })}
    </div>
}

SelectedItems.propTypes = {
    data: PropTypes.array.isRequired,
    onDeleteSelectedItem: PropTypes.func.isRequired,
};

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onDeleteSelectedItem: PropTypes.func.isRequired,
};
export default SelectedItems