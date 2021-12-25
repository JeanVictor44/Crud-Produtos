import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        font-family:"Roboto", "Arial";
    }   
    img {
        display:block;
        height:auto;
        width:auto;        
        object-fit: cover;
    }
`