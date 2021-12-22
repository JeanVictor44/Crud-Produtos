import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        background-color:#161D26;
        font-family:"Roboto", "Arial";
    }   
    img {
        display:block;
        width:100%;
        height:100%;
    }
`