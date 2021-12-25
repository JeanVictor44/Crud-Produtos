import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { CardsSection } from './components/CardsSection'
import Modal from './components/Modal'
import { GlobalContext } from './context'

const App = () => {  
  return (
    <>
      <GlobalStyle />
    
      <GlobalContext>
        <Modal />
        <Header />
        <CardsSection  /> 
      </GlobalContext>
    </>
  )
}

export default App;
