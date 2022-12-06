import React, { useState } from 'react'

function Textfield(addnewItem) {

   const [textVal, setTextVal] = useState('');

   const handleChange = (e) => {
    e.preventDefault();

    setTextVal((prevText) => e.target.val);
   }

   const onSubmit = (e) => {
    e.preventDefault();
    addnewItem({ todo: textVal, status: 'pending'});
    console.log('added new val')
   }

  return (
    <input type="text" onChange={e => handleChange(e)} onSubmit={onSubmit}/>
  )
}

export default Textfield
