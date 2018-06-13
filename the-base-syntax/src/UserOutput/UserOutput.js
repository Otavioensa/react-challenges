import React from 'react';

const userOutput = (props) => {
  return (
    <div /*className="userOutput"*/>
      <p /*onClick={props.click}*/>Match: {props.firstTeam} vs {props.secondTeam}</p>
      <p>{props.firstTeam} wins!</p>
    </div>
  )
 }

 export default userOutput;