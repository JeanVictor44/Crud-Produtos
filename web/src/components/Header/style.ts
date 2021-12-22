import styled from 'styled-components'

export const Container = styled.header`
    max-width:100%;
    background-color:#FFF;
    padding:0px 30px;
    height:85px;
    margin-bottom:50px;
    display:flex;
    align-items:center;
    a {
        text-decoration:none;
        color:#161D26;
        h1 {
            font-size:20px;
            
        }
    }
    
`

export const SearchContainer = styled.div `
    display:flex;
    width:100%;
    max-width:400px;
    margin: 0 auto;
    input {
        width:100%;
        height:35px;
        padding-left:15px;
        
        background-color:#FF9901;
        border:none;
        border-radius:15px;
        color:#161D26;
        ::placeholder {
            color:#161D26;
        }
        outline:none;
    }
    button {
        background:none;
        border:none;
        cursor:pointer;
        position:relative;
        right:25px;
        i {
            color:#161D26;
            z-index:100;
        }
    }
`