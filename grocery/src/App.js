import React from 'react';
import './App.css';
import ShowProducts from './productsList';

function App() {
  return (
    <>
    <header className="header"><h1>My Grocery Store</h1></header>
    <div >
      <ShowProducts id="productsList"/>
    </div>
    </>
  );
}

export default App;
