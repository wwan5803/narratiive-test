import React, { Component } from "react";
import '../styles/app.scss';
import sourceData from '../data.js';
import Left from '../components/left';
import Right from '../components/right';
import SearchBox from '../components/search-box';
import ResultCount from '../components/result-count'
import ItemList from '../components/item-list';
import SelectedItems from '../components/selected-items';
import {isMatched, normaliseData} from '../utils';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            results: [],
            value: '',
            selectedItems: [],
            convertedSourceData: normaliseData(sourceData)
        }
    }
    onChange = (e) => {
        let value = e.target.value;
        this.setState(() => ({ value }));
        if(value.length > 0) {
            this.search(value).then(results => {
                this.setState({results})
            })
        }else{
            this.setState({results: []})
        }
    }
    onDelete = () => {
        this.setState({value: ''})
        this.setState({results: []})
    }
    onSelect = (item) => {
        const newSelectedItems = [...this.state.selectedItems, item];
        this.setState({selectedItems: newSelectedItems})
    }
    onDeleteSelectedItem = (item) => {
        const newSelectedItems = this.state.selectedItems.filter(d => d.key !== item.key);
        this.setState({selectedItems: newSelectedItems})
    }
    search(value){
        const results = [];
        function filterData(data){
            data && data.forEach(d => {
                if (isMatched(d.path, value) || isMatched(d.key, value) || isMatched(d.data.name, value) || isMatched(d.data.key, value) || isMatched(d.data.description, value) ) {
                    results.push(d)
                }
            })
        }
        return new Promise((resolve, reject)=>{
            filterData(this.state.convertedSourceData);
            resolve(results)
        })
    }
    render() {
        const { results, value } = this.state;
        return (
        <div className='container'>
            <Left>
                <SearchBox value={value} onChange={this.onChange} onDelete={this.onDelete}/>
                <ResultCount count={results.length}/>
                <ItemList data={results} selectedItems={this.state.selectedItems} onSelect={this.onSelect}/>
            </Left>
            <Right>
                <SelectedItems onDeleteSelectedItem={this.onDeleteSelectedItem} data={this.state.selectedItems}/>
            </Right>
        </div>
    );
    }
}



export default App;
