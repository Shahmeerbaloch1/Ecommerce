import {createContext, useState } from "react";
import { products1} from "../index";







let product = createContext()



let ContextProvider = ({ children })=>{
    let [isloading , setloading] = useState(false);
    let [getProducts , setProducts] = useState([...products1])
    let value = {
        isloading,
        getProducts,
        setloading,
        setProducts,
    };
    return <product.Provider value={value}>{children}</product.Provider>
};

export {product,ContextProvider}