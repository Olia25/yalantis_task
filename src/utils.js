import React from 'react';


export const subTotal = (selectedProducts) => {
    return  selectedProducts.reduce((sum, elem) => sum + elem.price * elem.quantity, 0)
}
