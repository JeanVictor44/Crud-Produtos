import styled from 'styled-components'

export const Container = styled.div `
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    max-width:300px;
    
    color:#FFF;
    height: 350px;
    background-color:#161D26;
    text-align:center;
    img {
        width: 50%;
        height:50%;
        object-fit: cover;
        margin:10px auto; 
        border-radius:50%;
    }
    border-radius:15px;
    margin-bottom:20px;
    span {
        display:block;
    }


    .fa-edit {
        color:#FF9901;
    }
    .fa-minus-circle {
        color:#FFF;
    }
`
export const ContainerInfos = styled.div `
    margin-left:20px;
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
export const ContainerStarRating = styled.div `
    margin-top:10px;
    i {
        font-size:20px;
    }
`

export const Title = styled.span `
    font-size:20px;
`

export const Price = styled.span `
    color:#FF9901;
`

export const ContainerButtons = styled.div `
    margin:0px 30px;
    display:flex;
    justify-content: space-between;
    flex:0.2;
    i {
        font-size:25px;
        
        cursor:pointer;
        margin:0 auto;
    }
`