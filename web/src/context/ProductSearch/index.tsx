import { createContext, Dispatch, ReactNode, SetStateAction, useMemo, useState, useContext} from "react";
import { Product, ProductsContext } from '../Products'

type PropsProductSearchContext = {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
    productFilter:Product[]
}

const defaultValue = {
    search:' ',
    setSearch:() => {},
    productFilter:[

    ]
}

export const ProductSearchContext = createContext<PropsProductSearchContext>(defaultValue)

interface PropsProductSearchContextProvider {
    children: ReactNode
}

export const ProductSearchContextProvider = ({children}: PropsProductSearchContextProvider ) => {
    const [ search, setSearch] = useState(defaultValue.search)    
    const { products } = useContext(ProductsContext)

    const productFilter = useMemo(() => {
        const lowerSearch = search.toLocaleLowerCase()
        return products.filter((product) => product.name.toLocaleLowerCase().includes(lowerSearch))    
    }, [search]) 

        

    

    return ( 
        <ProductSearchContext.Provider value={
            {
                search,
                setSearch,
                productFilter 
            }
        }>
            {children}
        </ProductSearchContext.Provider>
    )
}