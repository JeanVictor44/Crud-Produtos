import { Dispatch, SetStateAction, useState} from 'react'
import { Container, CardAdd, ContainerStarRating, InputLabel} from './style'
import 'react-notifications-component/dist/theme.css'
import { Card } from '../Card'
import { Product } from '../../App'
import { api } from '../../api'
import { Dropzone } from '../Dropzone'
import { store } from 'react-notifications-component';
import StarRatingComponent from 'react-star-rating-component'
import ReactNotification from 'react-notifications-component'
import { AxiosResponse } from 'axios'

interface PropsCardsSection {
    products: Product[];
    setProducts:Dispatch<SetStateAction<Product[]>>;
    setProductModal:Dispatch<SetStateAction<Product>>;
    openModal:() => void;
}

type BackProduct = {
    name: string,
    price:number,
    numberOfStars:number,
    image:File
} 

export const CardsSection = ({products, setProducts, setProductModal, openModal}:PropsCardsSection ) => {
    const [ rating, setRating ] = useState(0)
    const [ price, setPrice ]= useState(0)
    const [ name, setName ] = useState('')
    const [ selectedFile, setSelectedFile ] = useState<File>('' as unknown as File)

    
    const handleErrorNotification = () => {
        store.addNotification({
            title:'Erro no cadastro',
            message:'Preencha todos os campos',
            type:'danger',
            container:'top-right',
            dismiss: {
                duration:5000,
                onScreen:true
            },
            
        })
    }
    
    const handleSuccessNotification = () => {
        store.addNotification({
            title:'Cadastro concluído',
            message:'Produto cadastrado com sucesso',
            type:'success',
            container:'top-right',
            dismiss: {
                duration:5000,
                onScreen:true
            }
        })
    }

    const handleCreateProduct = async(data:BackProduct):Promise<Product> => {
        const formData = new FormData();
        formData.append("image", data.image)
        formData.append("name", data.name)
        formData.append("price", String(data.price))
        formData.append("numberOfStars", String(data.numberOfStars))

        const response = await api.post(`/product`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'            
            }
        })
        
        //return the product data
        return response.data
    }

    return (
        <Container>
            <ReactNotification />
            <CardAdd>
                <Dropzone onFileUploaded={setSelectedFile} />


                <InputLabel>
                    Nome
                    <input type='text' value={name} onChange={(ev) => setName(ev.target.value)} required/>
                </InputLabel>

                <InputLabel>
                    Preço
                    <input type='number'  value={price} onChange={(ev) => setPrice(ev.target.valueAsNumber)} required/>
                </InputLabel>

                <ContainerStarRating>
                    <StarRatingComponent 
                    name='starRating'
                    value={rating}
                    onStarClick={(nextValue) => setRating(nextValue)}                  
                    />
            </ContainerStarRating>

                <button onClick={async() => { 
                    const isSomeFieldEmpty = !selectedFile || !name
                    if(isSomeFieldEmpty){
                        handleErrorNotification()
                        return
                    }

                    const newProduct = await handleCreateProduct({name, image:selectedFile, price, numberOfStars:rating})
                    console.log(newProduct)
                    setProducts((products) => [...products, newProduct]) 
                    handleSuccessNotification()
                    
                    // Reset 
                    setName('')
                    setPrice(0)
                    setRating(0)
                }}>Adicionar</button> 
            </CardAdd>
            {
                products.length > 0 ? 
                products.map(product => <Card setProducts={setProducts} {...product} openModal={openModal} setProductModal={setProductModal}/>) : null  
                
            }
        </Container>
        
    )
}