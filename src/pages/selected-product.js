import React, {useEffect, useState, useContext} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_URL} from "../constants";
import ProductContext from "../context";
import {
    ProductDescription,
    NameOfProduct,
    Button,
} from "../styled-components";
import {addProduct} from "../utils";

const SelectedProduct = () => {
    const {productId} = useParams();

    const [product, setProduct] = useState(null);
    const {selectedProducts, setSelectedProducts} = useContext(ProductContext);

    const fetchProduct = async (id) => {
        try {
            const response = await axios.get(`${API_URL}/products/${id}`);
            setProduct(response.data);
        } catch (e) {
            console.log("error", e.message);
        }
    };

    useEffect(() => {
        fetchProduct(productId);
    }, [productId]);

    return (
        <>
            {product && (
                <ProductDescription>
                    <NameOfProduct>{product.name}</NameOfProduct>
                    <h2>Price: {product.price} ₴</h2>
                    <p>{product.origin}</p>
                    <Button
                        onClick={() =>
                            addProduct(
                                selectedProducts,
                                setSelectedProducts,
                                product.id,
                                product
                            )
                        }
                    >
                        Add to cart
                    </Button>
                </ProductDescription>
            )}
        </>
    );
};

export default SelectedProduct;
