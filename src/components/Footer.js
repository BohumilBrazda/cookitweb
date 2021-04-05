import React from 'react';

const copyright = {
    color : "gray"
}

const footer = {
    backgroundColor: 'white',
    marginTop: '20px',
    padding: '10px'
}
function Copyright() {
    return (
      <div>
        <div align="center">
          <h2>{'CookIT'}</h2>
        </div>
        <div align="center">
          <text style={copyright}>{'Copyright © Bohumil Brázda '}</text>
          <text style={copyright}>{new Date().getFullYear()}</text>
        </div>
      </div>
);
}

export default function Footer() {

return (
      <div style={footer}>
          <Copyright/>
      </div>
  );
}