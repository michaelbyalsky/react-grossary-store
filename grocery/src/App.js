import React from 'react';
import './App.css';
import ShowProducts from './productsList';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import CopyrightIcon from '@material-ui/icons/Copyright';

function App() {
  return (
    <>
    <header className="header"><h1>My Grocery Store&nbsp;<ShoppingCartSharpIcon fontSize="large"/></h1></header>
    <div>
      <ShowProducts id="productsList"/>
    </div>
    <footer className="footer">
    <h3 className="copy"><CopyrightIcon/>Michael Byalsky</h3>
    </footer>
    </>
  );
}

export default App;
