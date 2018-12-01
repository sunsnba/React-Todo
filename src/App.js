import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {items: []}
    this.updateList = this.updateList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.removeAll = this.removeAll.bind(this);

    //this.onEditSubmit = this.onEditSubmit.bind(this);
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
      return copy[i] !== item
    })
    this.setState({items: filteredItems})
  }

  removeAll() {
    this.setState({items: []})
  }

  // onEditSubmit(itemText, i) {
  //   const copy = this.state.items.slice()
  //   copy[i] = itemText;
  //   this.setState({items: copy})
  // }


  render() {
    return (
      <div>
        <h1>Scott's Todo List</h1>
        <AddItem updateList={this.updateList} removeAll={this.removeAll} />
        <List items={this.state.items} deleteItem={this.deleteItem} //onEditSubmit={this.onEditSubmit}
        />
      </div>
    );
  }
}

export default App;
