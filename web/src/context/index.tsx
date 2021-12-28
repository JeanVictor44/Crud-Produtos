// Conter todos os contextos e exportar um contexto global GlobalContext
import { ReactNode } from "react";
import { ProductsContextProvider } from "./Products";
import { ModalContextProvider } from "./Modal";
import { ProductSearchContextProvider} from './ProductSearch'

interface PropsGlobalContext {
    children: ReactNode
}

export const GlobalContext = ({children}: PropsGlobalContext) => {
    return (
        <ProductsContextProvider>
            <ModalContextProvider>
                <ProductSearchContextProvider>
                    {children}
                </ProductSearchContextProvider>
            </ModalContextProvider>
        </ProductsContextProvider>
    )
}