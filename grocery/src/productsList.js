import React, { useState } from 'react';
import MyList from './listItem';
import BasketList from './basketList';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EcoIcon from '@material-ui/icons/Eco';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';



let products = [
    {id:1, name:'Strawberry', isDone: false, howMany: 1},
    {id:2, name:'Blueberry', isDone: false, howMany: 1},
    {id:3, name:'Orange', isDone: false, howMany: 1},
    {id:4, name:'Banana', isDone: false, howMany: 1},
    {id:5, name:'Apple', isDone: false, howMany: 1},
    {id:6, name:'Carrot', isDone: false, howMany: 1},
    {id:7, name:'Celery', isDone: false, howMany: 1},
    {id:8, name:'Mushroom', isDone: false, howMany: 1},
    {id:9, name:'Green Pepper', isDone: false, howMany: 1},
    {id:11, name:'Eggs', isDone: false, howMany: 1},
    {id:11, name:'Cheese', isDone: false, howMany: 1},
    {id:12, name:'Butter', isDone: false, howMany: 1},
    {id:13, name:'Chicken', isDone: false, howMany: 1},
    {id:14, name:'Beef', isDone: false, howMany: 1},
    {id:15, name:'Pork', isDone: false, howMany: 1},
    {id:16, name:'Fish', isDone: false, howMany: 1},
    {id:17, name:'Rice', isDone: false, howMany: 1},
    {id:18, name:'Pasta', isDone: false, howMany: 1},
    {id:19, name:'Bread', isDone: false, howMany: 1}
];

function ShowProducts() {
    const [productsList, setProductsList] = useState(products);
    const [chosenProduct, setChosenProduct] = useState([]);
 
    function handleChange(event) {
        let newArr = [];
        if (event.target.value) {
        let searched = event.target.value;
        let term = searched.toLowerCase();
        console.log(term, 4);
        for (let i = 0; i < productsList.length; i++) {
            let title = productsList[i].name;
            if (title.toLowerCase().includes(term)) {
                newArr.push(productsList[i])
            } 
        }
        if (newArr !== []) {
            setProductsList(newArr)
        } else {
            setProductsList(products)
        }
        } else {
            setProductsList(products)
        }
    }
    

      
    return (
        <>
        <header className="header">
        <TextField  alignItems="center" justify="center" onChange={handleChange} id="outlined-basic" label="Search" variant="outlined"
        />
        </header>
        <div className="main">
        {/* <h1>products</h1> */}
        {/* {JSON.stringify(chosenProduct)} */}
        <div className="Groceries">
            <h2>  <EcoIcon />Groceries</h2>
        <MyList className="MyList" products={productsList} onProductSelect={(product) => {
            if (chosenProduct.includes(product)) {
                product.howMany += 1
                setChosenProduct([...chosenProduct]);
            } else {
                setChosenProduct([...chosenProduct, product]);
                console.log([...chosenProduct])
            }
        }}/>
        </div>
        <div className="basket">
            <h2><ShoppingBasketIcon />Basket</h2>
       <BasketList className="BasketList"
       products={chosenProduct} 
       onProductBought={(product) => {
           product.isDone = !product.isDone
           setChosenProduct([...chosenProduct]);}}
           onProductDelete={(product) => {
            products.forEach((item, i) => {
                if(product.id === item.id) {
                    let newArr = [];
                    item.isDone = false
                    item.howMany = 1
                    for (let i = 0; i < chosenProduct.length; i++) {
                        if (product.id !== chosenProduct[i].id) {
                            newArr.push(chosenProduct[i])
                        }
                    }
                    // chosenProduct = splice(products.indexOf(products[i]), 1);  
                    setChosenProduct(newArr)
                } 
            })
            }}/>
        </div>
        </div>
        </>
    )
}

export default ShowProducts;