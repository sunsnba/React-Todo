import React from 'react';


const List = (props) => {
    const listItems = props.items.map((item, i) => {
        // return <li key={i}>{item} <button onClick={event => this.onDelete(event)}>delete</button></li>
        return <li key={i}>{item} 
        <button onClick={ () => props.deleteItem(i)}>delete</button>
        <button onClick={ () => props.onEditSubmit(i, item)}>edit</button>
        </li>
    });

  return (
      <ul>
        {listItems}
      </ul>
  )
};

export default List;

