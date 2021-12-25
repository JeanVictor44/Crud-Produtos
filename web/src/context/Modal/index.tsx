import { createContext, useState, Dispatch, SetStateAction, ReactNode} from 'react'
import { Product } from '../Products'

type PropsModalContext = {
    modalState: boolean,
    productModal:Product,

    setProductModal:Dispatch<SetStateAction<Product>>,
    setModalState:Dispatch<SetStateAction<boolean>>
}
interface PropsModalContextProvider {
    children: ReactNode
}

const closed = false 
const defaultValue = {
    modalState:closed,
    productModal:{
        name:'',
        price:0,
        numberOfStars:0,
        urlImage:''
    },

    setProductModal:() => {},
    setModalState:() => {}
}

export const ModalContext = createContext<PropsModalContext>(defaultValue)

export const ModalContextProvider = ({children}: PropsModalContextProvider) => {
    const [ modalState, setModalState ] = useState(defaultValue.modalState)
    const [ productModal, setProductModal] = useState(defaultValue.productModal)

    return (
        <ModalContext.Provider value={{
            modalState,
            setModalState,
            productModal,
            setProductModal

        }}>
            {children}
        </ModalContext.Provider>
    )
}