import React, { Component } from 'react';
import List from './List';
import AddItem from './AddItem';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {items: []}
    this.updateList = this.updateList.bind(this);
  }

  updateList (itemText) {
    //need new memory address use slice - especially helpful for componentDidUpdate
    const copy = this.state.items.slice()
    copy.push(itemText)
    this.setState({items: copy})
  }

  render() {
    return (
      <div>
        <AddItem updateList={this.updateList}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

export default App;
