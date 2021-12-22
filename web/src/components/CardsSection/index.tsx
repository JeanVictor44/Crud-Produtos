import { Container } from './style'
import { Card } from '../Card'
import { Product } from '../../App'
import { Dispatch, SetStateAction } from 'react'

interface PropsCardsSection {
    products: Product[];
    setProducts:Dispatch<SetStateAction<Product[]>>;
}

export const CardsSection = ({products, setProducts}:PropsCardsSection ) => {
    return (
        <Container>
            {
                products.map(product => <Card setProducts={setProducts} {...product}/>)
            }
        </Container>
        
    )
}