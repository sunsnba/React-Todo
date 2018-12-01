import React from 'react';


const List = (props) => {
    const listItems = props.items.map((itemText, i) => {
        // return <li key={i}>{item} <button onClick={event => this.onDelete(event)}>delete</button></li>
        return <li key={i}>{itemText} 
        <button onClick={ () => props.deleteItem(i)}>delete</button>
        <button onClick={ () => props.onEditSubmit(i, itemText)}>edit</button>
        </li>
    });

  return (
      <ul>
        {listItems}
      </ul>
  )
};

export default List;

