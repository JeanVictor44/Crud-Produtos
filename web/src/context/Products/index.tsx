import React,{ createContext, useState, Dispatch, SetStateAction, ReactNode, useEffect} from "react";
import { api } from "../../api"

export type Product = {
    name:string,
    price:number,
    numberOfStars:number,
    urlImage:string
} 

type PropsProductsContext = {
    products: Product[],
    modified:boolean,

    setModified:Dispatch<SetStateAction<boolean>>
    setProducts: Dispatch<SetStateAction<Product[]>>;
}


interface PropsProductsContextProvider {
    children:ReactNode
}

const defaultValue = {
    products: [
        
    ],
    modified:false,
    
    setModified:() => {},
    setProducts:() => {}
}

export const ProductsContext = createContext<PropsProductsContext>(defaultValue)

export const ProductsContextProvider = ({children}: PropsProductsContextProvider) => {
    const [ products, setProducts ] = useState<Product[]>(defaultValue.products)
    const [ modified, setModified ] = useState(defaultValue.modified)

    useEffect(() => {
        const getProducts = async() => {
          const result = (await api.get('/list')).data
          setProducts(result)
        }
        getProducts()
      }, [modified])

    return (
        <ProductsContext.Provider value={
            {
                products,
                setProducts, 
                modified,
                setModified
            }
        }>
            {children}
        </ProductsContext.Provider>
    )
}
