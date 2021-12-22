import { Container, SearchContainer } from './style'

export const Header = () => {
    return (
        <Container>
            <a href="#">
                <h1>Produtos CRUD</h1>
            </a>

            <SearchContainer> 
                <input type="text" placeholder="Search" />
                <button><i className="fas fa-search"></i></button>
            </SearchContainer>
            
        </Container>
    )
}

