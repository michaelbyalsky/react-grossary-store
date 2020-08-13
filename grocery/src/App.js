import React from 'react';
import './App.css';
import ShowProducts from './productsList';

function App() {
  return (
    <>
    <header className="header"><h1>My Grocery Store</h1></header>
    <div >
      <ShowProducts className="productsList"/>
    </div>
    </>
  );
}

export default App;
