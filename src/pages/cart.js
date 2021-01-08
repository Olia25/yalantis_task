import React, {useContext} from 'react';
import ProductContext from "../context";
import {TableWidth, Table, Subtotal, EmptyCart, DeleteIcon} from '../styled-components';
import Delete from '../deleteIcon.png';


const Orders = () =>{
    const {selectedProducts, setSelectedProducts} = useContext(ProductContext)
    console.log('selectedProduct', selectedProducts)

    const subTotal = selectedProducts.reduce((sum, elem)=> sum + elem.price * elem.quantity, 0)

    const deleteProduct = (id) => {
        setSelectedProducts(
            selectedProducts.filter(elem=> elem.id !== id)
        )
    }

    return (
        <>
            {selectedProducts && selectedProducts.length > 0 ? (
                <TableWidth>
                    <Table>
                        <tr>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Row Total</th>
                            <th></th>
                        </tr>
                        {selectedProducts.map(({name, price, quantity, id}) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{price} ₴</td>
                                <td> {quantity} </td>
                                <td>{price*quantity} ₴</td>
                                <td><DeleteIcon src={Delete} alt='delete' onClick={()=> deleteProduct(id)}/></td>
                            </tr>
                        ))}
                    </Table>
                    <h3> <Subtotal>Subtotal:</Subtotal> {subTotal} ₴</h3>
                </TableWidth>

            ) :
                <EmptyCart>Your shopping cart is empty</EmptyCart>
            }

        </>
    )
}

export default Orders;