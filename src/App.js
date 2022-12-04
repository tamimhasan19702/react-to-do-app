import React, {useState} from 'react';
import Lists from './Components/Lists';


function App() {

  const dummyData = [
    {todo: 'Feed the Cats', status: 'pending'},
    {todo: 'Study hard and Fast', status: 'pending'},
    {todo: 'Watch World Cup Tonight', status: 'pending'},
    {todo: 'Do a little bit of Coding', status: 'pending'},
    {todo: 'Update everything on the to do list', status: 'pending'},
  ]

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
