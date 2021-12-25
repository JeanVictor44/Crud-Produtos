import styled from 'styled-components'

interface PropsContainerDropzone {
    height:number;
}
export const ContainerDropzone = styled.div<PropsContainerDropzone>`
    margin-bottom:40px;
    background-color: rgba(0,0,0,0.1);
    text-align:center;
    display:flex;
    justify-content: center;
    align-items:center;
    max-width:100%;
    height:${({height}) => height ? `${height}px` : '100px'};
    border:2px dashed;

    img{
        
        height:100%;
        object-fit:cover;
    }
    p {
        font-size:14px;
    }
`