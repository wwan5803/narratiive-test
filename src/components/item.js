import React, { Component } from "react";
import '../styles/itemlist.scss';
import '../styles/global.scss';
import PropTypes from "prop-types";

/**
 *
 * @param item -- {path: '', key: '', data: {name: '', key: '', description: '', image: ''}}
 * @param onSelect
 * @param selectedItems
 * @returns {*}
 * @constructor
 */
const Item = ({item, onSelect, selectedItems}) => {
    const itemData = item.data;
    function isSelected(){
        return selectedItems.findIndex(d => d.key === itemData.key) > -1
    }
    return <div>
        <div>{item.path}</div>
        <div className="item-row">
            <img src={itemData.image} width='100'/>
            <div className="item-row-content">
                <div>{itemData.name}</div>
                <div className="margin-top_small">{itemData.description}</div>
            </div>
            {isSelected() && <button className="main-button disabled" disabled>Selected</button>}
            {!isSelected() && <button className="main-button" onClick={() => onSelect(itemData)}>Select</button>}
        </div>
    </div>
}
Item.propTypes = {
    item: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedItems: PropTypes.array.isRequired,
};
export default Item