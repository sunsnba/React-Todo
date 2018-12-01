import React, {Component} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props)

        this.state = {itemText: ''}
    }

    render() {
        return (
            //anything that affects the form should be an input tag
            <form onSubmit={event => this.onSubmit(event)}>
              <input type='text' value={this.state.itemText} onChange={event => this.onInputChange(event.target.value)}/>
              <input type='submit' />
              <input type='button' value='remove all'  onClick={this.props.removeAll} />
            </form>
        )
    }
    onInputChange(itemText) {
        this.setState({itemText})
    }

    onSubmit(event) {
        console.log('hi')
        event.preventDefault() 
        // w/out this event.preventDefault the app will immediately clear the list
        this.props.updateList(this.state.itemText);
        this.setState({itemText: ''});
    }

}

export default AddItem;