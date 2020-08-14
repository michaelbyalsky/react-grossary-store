import React, { useState } from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';


function BasketList({ products, onProductBought, onProductDelete }) {
    return (
        <List>
            {
                products.map((product, i) => {
                    return (
                        <ListItem style={ product.isDone ? {
                            textDecoration : 'line-through'
                        } : 
                        {}
                    }  
                    key={i}>
                             <Button onClick={() => onProductDelete(product)}><DeleteIcon /></Button> 
                             <Button onClick={() => onProductBought(product)}><CheckIcon /></Button> 
                             <span>{product.name}</span>{product.howMany > 0 ? <span>&nbsp;{product.howMany}</span> : <span></span>}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default BasketList;