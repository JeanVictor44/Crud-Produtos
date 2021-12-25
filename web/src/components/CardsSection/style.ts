import styled from 'styled-components'


export const Container = styled.section `
    padding:0px 30px;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    button {
        background-color:#FF9901;
        color:#FFFAFA ;
        border:none;
        width:100%;
        margin-top:20px;
        height:25px;
        border-radius:5px;
        cursor:pointer;
    }
        
`
export const CardAdd = styled.div `
    max-width:300px;
    height: 350px;
    padding:20px 30px;
    background-color:#161D26;
    color:#FFFAFa ;
    input[type='file'] {
        display:none;
    }
    img {
        max-width:40%;
        margin:10px auto;
        cursor:pointer;
    }
`
export const InputLabel = styled.label `
    font-size:14px;
    display:block;
    margin-bottom:20px;
    input {
        margin-left:10px;
        outline:none;
        border:none;
        background-color:#FF9901;
        width:100%;
        max-width:80%;
        height:25px;
        border-radius:5px;
        padding-left:5px;
        color:#FFFAFA;
    }
`

export const ContainerStarRating = styled.div `
    i {
        font-size:20px;
    }
`