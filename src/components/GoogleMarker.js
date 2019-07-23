import React from 'react';

const GoogleMarker = ({ text }) => {
  return (
    <div style={{
      color: 'white',
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '80%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  )
}

export default GoogleMarker
