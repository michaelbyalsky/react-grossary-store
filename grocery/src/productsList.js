import React from 'react';

let products = [
    {id:1, name:'Strawberry'},
    {id:2, name:'Blueberry'},
    {id:3, name:'Orange'},
    {id:4, name:'Banana'},
    {id:5, name:'Apple'},

    {id:6, name:'Carrot'},
    {id:7, name:'Celery'},
    {id:8, name:'Mushroom'},
    {id:9, name:'Green Pepper'},

    {id:10, name:'Eggs'},
    {id:11, name:'Cheese'},
    {id:12, name:'Butter'},

    {id:13, name:'Chicken'},
    {id:14, name:'Beef'},
    {id:15, name:'Pork'},
    {id:16, name:'Fish'},

    {id:17, name:'Rice'},
    {id:18, name:'Pasta'},
    {id:19, name:'Bread'}
];

function showProducts() {
    return (
        <div>
        <h1>products</h1>
        <ul>
            {
                products.map((product, i) => {
                    return <li key={i}><button>V</button>{product.name}</li>
                })
            }
        </ul>
        </div>
    )
}

export default showProducts;