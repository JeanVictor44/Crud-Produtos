import { Container, Title, Price, ContainerInfos, ContainerButtons } from './style'
import StarRatingComponent from 'react-star-rating-component';
import { api } from '../../api'
import { Product } from '../../App';
import { Dispatch, SetStateAction } from 'react'

interface PropsCard{
    name:string;
    price:number;
    numberOfStars:number;
    urlImage:string;
    setProducts:Dispatch<SetStateAction<Product[]>>;
}

// setAlter virar um context
export const Card = ({ name,price, numberOfStars, urlImage, setProducts}: PropsCard) => {
    return (
        <Container>
            <img src={urlImage} alt={name}/>
            <ContainerInfos>
                
                <Title >{name}</Title>
                <Price>${price}</Price>

                <StarRatingComponent name='starComponent' value={numberOfStars} editing={false}/>

            </ContainerInfos>

            <ContainerButtons>
                <i className="far fa-edit"></i>
                <i className="fas fa-minus-circle" 
                   onClick={() => {
                    api.delete(`/product/${name}`)
                    setProducts((oldState: Product[]) => oldState.filter(product => product.name != name))
                }} ></i>
            </ContainerButtons>
            
        </Container>
    )
}