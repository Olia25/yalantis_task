import React, {useEffect, useState, useContext} from 'react'
 import {useParams} from 'react-router-dom';
import axios from "axios";
import {API_URL} from "../constants";
import ProductContext from "../context";
import {ProductDescription, NameOfProduct, Button} from '../styled-components'

const SelectedProduct = () =>{
    const {productId} = useParams();

    const [product, setProduct] = useState(null)
    console.log('product', product)

    const {selectedProducts, setSelectedProducts} = useContext(ProductContext)
    console.log('selectProduct', selectedProducts)

    const fetchProduct = async (id) => {
        try{
            const response = await axios.get(`${API_URL}/products/${id}`)
            setProduct(response.data)
        }
        catch (e) {
            console.log('error', e.message)
        }
    }

    useEffect( () => {
        fetchProduct(productId)
    }, [productId])

    const addProduct = () => {
        const check =  selectedProducts.find(elem => elem.id === product.id)
        setSelectedProducts(check ? (
           selectedProducts.map(elem => {
               if(elem.id===product.id){
                   return {...elem, quantity: elem.quantity+1}
               }
               return elem
           })
        ) : [...selectedProducts, {...product, quantity:1}] )
    }

    return (
            <>
                {product &&  (
                    <ProductDescription>
                        <NameOfProduct>{product.name}</NameOfProduct>
                        <h2>Price: {product.price} ₴</h2>
                        <p>{product.origin}</p>
                        <Button
                            onClick={() => addProduct()}>
                                Add to cart
                        </Button>
                    </ProductDescription>
                    )
                }
            </>

    )
}

export default SelectedProduct;