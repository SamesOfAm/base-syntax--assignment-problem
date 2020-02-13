import React from 'react';

const userOutput = (props) => {
    const style = {
        backgroundColor: '#eee',
        padding: '20px',
        margin: '20px auto',
        borderRadius: '7px'
    };

  return (
      <div style={style} className="output">
          <p>User Name:</p>
          <p>{props.userName}</p>
      </div>
  )
};

export default userOutput;