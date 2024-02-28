import './App.css';
import React from 'react';

const App = () => {
  const name = "John";
  let lastname = "doe"
  cont age = 40;
  return (
    <>
    <div className='app-container'>
      hello {name + " "+ lastname}
      <div>im {age}</div>
    </div>
    </>
  )
}
export default App;