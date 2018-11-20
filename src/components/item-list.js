import React, { Component } from "react";
import Item from './item';
import '../styles/itemlist.scss';
import PropTypes from "prop-types";

const ItemList = ({data, ...props}) => {
    return <div className='item-list'>
        {data.map(item => { return <Item item={item} key={item.key} {...props}/>
        })}
    </div>
}
ItemList.propTypes = {
    data: PropTypes.array.isRequired,
    selectedItems: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};
export default ItemList