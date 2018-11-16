import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {items: []}
    this.updateList = this.updateList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    // this.removeItem = this.removeItem.bind(this);
  }

  updateList (itemText) {
    //need new memory address use slice - especially helpful for componentDidUpdate
    const copy = this.state.items.slice()
    copy.push(itemText)
    this.setState({items: copy})
  }

  deleteItem(i) {
    const copy = this.state.items

    const filteredItems = copy.filter(item => {
      console.log('delete item')
      return copy[i] !== item
    })
    this.setState({items: filteredItems})
  }


  render() {
    return (
      <div>
        <AddItem updateList={this.updateList}/>
        <List items={this.state.items} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default App;
