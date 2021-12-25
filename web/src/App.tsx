import GlobalStyle from './styles/global'
import { useEffect, useState } from 'react' 
import { api } from './api/index'
import { Header } from './components/Header'
import { CardsSection } from './components/CardsSection'
import Modal from './components/Modal'

export type Product = {
  name:string,
  price:number,
  numberOfStars:number,
  urlImage:string
} 


const App = () => {
  const [ products, setProducts ] = useState<Product[]>([])
  const [ modalIsOpen, setModalState] = useState(false)
  const [ productModal, setProductModal] = useState({
    name:'',
    price:0,
    numberOfStars:0,
    urlImage:''
  })

  useEffect(() => {
    const getProducts = async() => {
      const result = (await api.get('/list')).data
      setProducts(result)
    }
    getProducts()
  }, [])
  
  return (
    <>
      <Modal isOpen={modalIsOpen} closeModal={() => { setModalState(false) } } setProducts={setProducts} product={productModal}/>
      <GlobalStyle />
      <Header />
      <CardsSection products={products} setProducts={setProducts} openModal={() => {setModalState(true)}} setProductModal={setProductModal} /> 
      
      
    </>
  )
}

export default App;
