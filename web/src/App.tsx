import GlobalStyle from './styles/global'
import { useEffect, useState } from 'react' 
import { api } from './api/index'
import { Header } from './components/Header'
import { CardsSection } from './components/CardsSection'

export type Product = {
  name:string,
  price:number,
  numberOfStars:number,
  urlImage:string
} 


const App = () => {
  const [ products, setProducts ] = useState<Product[]>([])
  useEffect(() => {
    const getProducts = async() => {
      const result = (await api.get('/list')).data
      setProducts(result)
    }
    getProducts()
  }, [])
  
  
  if(!products.length){
    return <h1>Carregando...</h1>
  }
  return (
    <>
      <GlobalStyle />
      <Header />
      <CardsSection products={products} setProducts={setProducts}/>
      
    </>
  )
}

export default App;
