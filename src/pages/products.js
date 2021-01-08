import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios';
import {API_URL} from "../constants";
import ProductContext from "../context";
import {SearchLine, Input, Container, CoverOfProducts, Button, StyledLink} from '../styled-components';
import {subTotal} from "../utils";

const Home = () => {
    const [data, setData] = useState([])
    const [text, setText] = useState('')
    const {selectedProducts, setSelectedProducts} = useContext(ProductContext)
    console.log('selectedProduct', selectedProducts)

    const fetchData = async () => {
        try{
            const response = await axios.get(`${API_URL}/products`)
            setData(response.data.items)
        }
        catch (e) {
            console.log('error', e.message)
        }
    }

    useEffect( () => {
        fetchData()
    }, [])


    const addProduct = (product) => {
      const check =  selectedProducts.find(elem => elem.id === product.id)

        setSelectedProducts( check ? (
            selectedProducts.map(elem=> {
                if (elem.id === product.id ) {
                    return {...elem, quantity: elem.quantity+1}
                }
                return elem
                })
            ) :
            [...selectedProducts, {...product, quantity:1 }] )
        subTotal(selectedProducts)
    }

    const filteredProduct = data.filter(elem=> elem.name.toUpperCase().includes(text.toLocaleUpperCase()))

    return (
        <>
            <SearchLine>
                <Input
                    className='input'
                    placeholder='product search'
                    value={text}
                    onChange={ ({ target: { value } })=> setText(value) }
                />
            </SearchLine>
            <Container>
                {filteredProduct && filteredProduct.map(elem=> (
                    <CoverOfProducts key={elem.id}>
                        <StyledLink to={`/products/${elem.id}`}>
                            <div>
                                <h4 >{elem.name}</h4>
                                <h2>{elem.price} ₴</h2>
                            </div>
                        </StyledLink>
                        <Button onClick={()=>addProduct(elem)}>Add to cart</Button>
                    </CoverOfProducts>
                    )
                )}
            </Container>
        </>
    )
}

export default Home;