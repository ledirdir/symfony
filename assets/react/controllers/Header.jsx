import React from 'react';

export default function Header() {

const headerStyle = {
  backgroundColor: '#00ff11',
  color: '#ff0099',
  padding: '10px',
  textAlign: 'center'
};

return (
  <header style={headerStyle}>
    <h1>Users management</h1>
  </header>
);
}