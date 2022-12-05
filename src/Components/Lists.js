import React, {useEffect, useState} from 'react'


const ListItem = () => {
    return (
        <li>
            <span>Title</span>
            <button>Action</button>
        </li>
    )
};


const Lists = ({ data, handleRemoveItem, handleUpdateItem}) => {
const [todo, setTodo] = useState([]);

useEffect(() => {
   setTodo(data);
},[]);

if(!(todo.length > 0)){
  return <ul>Please Insert an Item</ul>
}


return (
  <ul>
    {todo.map((item, index) => 
    <ListItem index={index} handleUpdateItem={handleUpdateItem} handleRemoveItem={handleRemoveItem} todo={item}/>)}
  </ul>
)
}

export default Lists