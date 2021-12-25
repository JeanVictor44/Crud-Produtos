import { useState, useContext} from 'react'
import { Container, CardAdd, ContainerStarRating, InputLabel} from './style'
import 'react-notifications-component/dist/theme.css'
import { Card } from '../Card'
import { api } from '../../api'
import { Dropzone } from '../Dropzone'
import { store } from 'react-notifications-component';
import StarRatingComponent from 'react-star-rating-component'
import ReactNotification from 'react-notifications-component'
import { ProductsContext } from '../../context/Products'


type BackProduct = {
    name: string,
    price:number,
    numberOfStars:number,
    image:File
} 

export const CardsSection = ( ) => {
    const { products, setModified } = useContext(ProductsContext)

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

    const handleAddProduct = async () => { 
        const isSomeFieldEmpty = !selectedFile || !name
        if(isSomeFieldEmpty){
            handleErrorNotification()
            return
        }
        handleCreateProduct({name, image:selectedFile, price, numberOfStars:rating})
        handleSuccessNotification()
        
        // Reset 
        setName('')
        setPrice(0)
        setRating(0)
    }

    const handleCreateProduct = async(data:BackProduct)=> {
        const formData = new FormData();
        formData.append("image", data.image)
        formData.append("name", data.name)
        formData.append("price", String(data.price))
        formData.append("numberOfStars", String(data.numberOfStars))

        await api.post(`/product`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'            
            }
        })
        setModified((oldState) => !oldState)
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

                <button onClick={handleAddProduct}> Adicionar </button> 
            </CardAdd>
            {
                products.length > 0  ? 
                products.map(product => <Card {...product} />) : null  
                
            }
        </Container>
        
    )
}