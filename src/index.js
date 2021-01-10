import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsContext from "./context";
import {BrowserRouter} from "react-router-dom";

function Main() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    return (
        <React.StrictMode>
            <ProductsContext.Provider
                value={{selectedProducts, setSelectedProducts}}
            >
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
                ,
            </ProductsContext.Provider>
        </React.StrictMode>
    );
}

ReactDOM.render(<Main/>, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
