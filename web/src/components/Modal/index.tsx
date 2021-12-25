import { ContainerModal, CloseModal, CardModal, ContainerStarRating, InputLabel} from './style'
import { useEffect, useState , Dispatch, SetStateAction} from 'react'
import { api } from '../../api'
import StarRatingComponent from 'react-star-rating-component'
import { Product } from '../../App'
import { Dropzone } from '../Dropzone'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';


interface PropsModal {
    isOpen: boolean;
    closeModal:() => void;
    product:Product;
    setProducts:Dispatch<SetStateAction<Product[]>>;
}

// Formato do produto no backend
type BackProduct = {
    name: string,
    price:number,
    numberOfStars:number,
    image:File
} 


const Modal = ({isOpen, closeModal, product:{urlImage, name, price, numberOfStars}, setProducts}:PropsModal) => {
    //Np momento da renderização do modal o product está vazio, pois o botão de atualizar não foi cliclado para desparar o setProductModal  
    const [ rating, setRating ] = useState(0)
    const [ newPrice, setNewPrice ]= useState(0)
    const [ newName, setNewName ] = useState('')
    const [ selectedFile, setSelectedFile ] = useState<File>('' as unknown as File)
    const [ image, setImage ] = useState('')

    useEffect(() => {
        setNewName(name)
        setRating(numberOfStars)
        setNewPrice(price)
        setImage(urlImage)
    }, [name])

    function handleUpdate(data:BackProduct) {
        const formData = new FormData();
        if(data.image){
            console.log(data.image)
            formData.append("image", data.image)
        }else {
            console.log(image)
            formData.append("urlImage", image)
        }
        
        formData.append("name", data.name)
        formData.append("price", String(data.price))
        formData.append("numberOfStars", String(data.numberOfStars))

        api.put(`/update/${name}`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'            
            }
        })
    }


   
    return (
    <ContainerModal showModal={isOpen}>
        <ReactNotification />
        <CardModal>
            {image && <Dropzone onFileUploaded={setSelectedFile} imageDefault={image} height={300}/>}
            <InputLabel>
                Nome
                <input type='text' value={newName} onChange={(ev) => setNewName(ev.target.value)} required/>
            </InputLabel>
            <InputLabel>
                Preço
                <input type='number' value={newPrice} onChange={(ev) => setNewPrice(ev.target.valueAsNumber)} required/>
            </InputLabel>
            <ContainerStarRating>
                <StarRatingComponent 
                    name='starRating'
                    value={rating}
                    onStarClick={(nextValue) => setRating(nextValue)}
                    

                />
            </ContainerStarRating>

           <button                 
                onClick={() => {
                    
                    store.addNotification({
                        title:'Edição concluída',
                        message:'Produto editado com sucesso',
                        type:'success',
                        container:'top-right',
                        dismiss: {
                            duration:2000,
                            onScreen:true
                        }
                    })
                    console.log(selectedFile)
                    handleUpdate({name: newName, image:selectedFile, price:newPrice, numberOfStars:rating})                   
                }}>
                Editar
            </button> 
        
        </CardModal> 

        <CloseModal  
            onClick={() => { 
                closeModal()
            }}> &times;</CloseModal>
    </ContainerModal>

)}

export default Modal