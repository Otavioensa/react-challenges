import React from 'react';

const userInput = (props) => {
  return (
    <div >
      <input onChange={props.change} />
    </div>
  )
 }

 export default userInput;