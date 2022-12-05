import React, {useState,useEffect} from 'react';
import Lists from './Components/Lists';


function App() {

  const dummyData = [
    {todo: 'Feed the Cats', status: 'pending'},
    {todo: 'Study hard and Fast', status: 'pending'},
    {todo: 'Watch World Cup Tonight', status: 'pending'},
    {todo: 'Do a little bit of Coding', status: 'pending'},
    {todo: 'Update everything on the to do list', status: 'pending'},
  ]

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    setTodo(dummyData);
  }, []);

  const handleRemoveItem = (index) => {
    let currentItems = [...todo];
    currentItems.splice(index,1);
    console.log({index , currentItems });
    setTodo(currentItems)
  }

  const handleUpdateItem = (index) => {
    let currentItems = {...todo};
    currentItems[index].status = "completed";
    console.log({index, currentItems});
    setTodo(currentItems);
  };

  if(!todo.length > 0){
    return <p>Requesting data...</p>
  }

  return (
  todo.length > 0 && (
    <Lists
    data={todo}
    handleUpdateItem={handleUpdateItem}
    handleRemoveItem={handleRemoveItem}
    />
  )
    )
}

export default App;
