import { useContext} from 'react'
import { Container, Title, Price, ContainerInfos, ContainerButtons, ContainerStarRating} from './style'
import { api } from '../../api'
import { Product } from '../../context/Products';
import { store } from 'react-notifications-component';
import StarRatingComponent from 'react-star-rating-component';
import { ModalContext } from '../../context/Modal'
import { ProductsContext } from '../../context/Products'

interface PropsCard{
    name:string;
    price:number;
    numberOfStars:number;
    urlImage:string;
}

// setAlter virar um context
export const Card = ({ name, price, numberOfStars, urlImage}: PropsCard) => {
    const { setModalState, setProductModal} = useContext(ModalContext)
    const { setProducts } = useContext(ProductsContext)


    const handleDelete = () => {
        api.delete(`/product/${name}`)
        setProducts((oldState: Product[]) => oldState.filter(product => product.name != name))
    }

    const handleDeleteNotification = () => {
        store.addNotification({
            title:'Deletado com sucesso',
            message:'Produto deletado com sucesso',
            type:'success',
            container:'top-right',
            dismiss: {
                duration:5000,
                onScreen:true
            },
            
        })
    }
    return (
        <Container>
            <ContainerInfos>
                
                <Title >{name}</Title>
                <img src={urlImage} alt={name}/>
                <Price>${price}</Price>
                
                <ContainerStarRating>
                    <StarRatingComponent name='starComponent' value={numberOfStars} editing={false}/>
                </ContainerStarRating>
                
            </ContainerInfos>

            <ContainerButtons>
                <i className="far fa-edit" onClick={() =>{
                    setProductModal({
                        name,
                        price,
                        numberOfStars,
                        urlImage
                    })
                    setModalState(true) 
                }} ></i>
                <i className="fas fa-minus-circle" 
                   onClick={() => {
                    handleDeleteNotification()
                    handleDelete()
                }} ></i>
            </ContainerButtons>
            
        </Container>
    )
}