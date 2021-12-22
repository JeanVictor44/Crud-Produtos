import styled from 'styled-components'

export const Container = styled.div `
    max-width:300px;
    height: 250px;
    background-color:#FFF;
    img {
        max-width:40%;
        margin:10px auto;
        width: auto;
        height: auto;
    }
    border-radius:15px;
    margin-bottom:20px;
    span {
        display:block;
    }

    i {
        font-size:25px;
        cursor:pointer;
    }
    .fa-edit {
        color:#FF9901;
    }
    .fa-minus-circle {
        color:#161D26;
    }
`
export const ContainerInfos = styled.div `
    margin-left:20px;

`
export const Title = styled.span `
    
`

export const Price = styled.span `
    color:#FF9901;
`

export const ContainerButtons = styled.div `
    margin:0px 30px;
    display:flex;
    justify-content: space-between;

`