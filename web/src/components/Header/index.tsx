import { Container, SearchContainer } from './style'
import { ProductSearchContext } from '../../context/ProductSearch'
import { ChangeEventHandler, useContext } from 'react'

export const Header = () => {
    const { search, setSearch } = useContext(ProductSearchContext)

     
    const handleSearchChange:ChangeEventHandler<HTMLInputElement> = (ev) => {
        const search = ev.target.value
        setSearch(search)
    }

    return (
        <Container>
            <a href="#">
                <h1>Produtos CRUD</h1>
            </a>

            <SearchContainer> 
                <input type="text" placeholder="Search" onChange={handleSearchChange} />
                <button><i className="fas fa-search"></i></button>
            </SearchContainer>
            
        </Container>
    )
}

