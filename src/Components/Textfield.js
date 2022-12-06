import React, { useState } from 'react'

function Textfield() {

   const [textVal, setTextVal] = useState('');

   const handleChange = (e) => {
    e.preventDefault();

    setTextVal((prevText) => e.target.val);
   }

   const onSubmit = (e) => {
    console.log('added new val')
   }

  return (
    <input type="text" onChange={e => handleChange(e)} onSubmit={onSubmit}/>
  )
}

export default Textfield
