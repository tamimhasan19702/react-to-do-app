import React, {useEffect, useState} from 'react'


const ListItem = ({todo , index, handleUpdateItem, handleRemoveItem}) => {
    return (
        <li>
            <span>{todo.todo}</span>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
        </li>
    )
};


const Lists = ({ data, handleRemoveItem, handleUpdateItem}) => {
const [todo, setTodo] = useState([]);

useEffect(() => {
   setTodo(data);
},[data]);



return (
  <ul>
    {todo.map((item, index) => 
    <ListItem 
    key={item.id}
    index={index} 
    handleUpdateItem={handleUpdateItem} 
    handleRemoveItem={handleRemoveItem} 
    todo={item}/>)}
  </ul>
)
}

export default Lists