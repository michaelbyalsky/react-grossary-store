import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



function MyList({ products, onProductSelect }) {

    return (
        <List >
            {
                products.map((product, i) => {
                    return (
                        <ListItem className="listItem" button={true} key={i}>
                          <IconButton color="primary" aria-label="add to shopping cart" onClick={() => onProductSelect(product)}> 
                          <AddShoppingCartIcon color="action"/></IconButton>
                            {product.name}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default MyList;