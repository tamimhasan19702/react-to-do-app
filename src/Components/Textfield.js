import React, { useState } from 'react'

function Textfield() {

   const [textVal, setTextVal] = useState('');

   const handleChange = (e) => {
    e.preventDefault();

    setTextVal((prevText) => e.target.val);
   }

  return (
    <input type="text" onChange={e => handleChange(e)} />
  )
}

export default Textfield
