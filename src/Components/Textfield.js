import React, { useState } from 'react'

function Textfield(addNewItem) {

   const [textVal, setTextVal] = useState('');

   const handleChange = (e) => {
    setTextVal((prevText) => e.target.value);
   }

   const onSubmit = (e) => {
    e.preventDefault();
    addNewItem({ todo: textVal, status: 'pending'});
    setTextVal('');
    console.log('added new val')
   }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" onChange={e => handleChange(e)} />
    </form>
  )
}

export default Textfield
