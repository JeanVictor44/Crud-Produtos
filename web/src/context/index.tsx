// Conter todos os contextos e exportar um contexto global GlobalContext
import { ReactNode } from "react";
import { ProductsContextProvider } from "./Products";
import { ModalContextProvider } from "./Modal";

interface PropsGlobalContext {
    children: ReactNode
}

export const GlobalContext = ({children}: PropsGlobalContext) => {
    return (
        <ProductsContextProvider>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </ProductsContextProvider>
    )
}