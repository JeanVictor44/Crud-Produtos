import styled from 'styled-components'

interface PropsContainerModal {
    showModal:boolean
}

export const ContainerModal = styled.div<PropsContainerModal>`
    width:100%;
    height:100%;
    position:fixed;
    background-color:rgba(0,0,0,0.6);
    z-index:100;
    display:${(props) => props.showModal ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;  
`
export const CardModal = styled.div`
    display:flex;
    flex-direction:column;
    height:80%;
    width:30%;
    background-color:#FFF;
    padding:20px;
    border-radius:20px;
    label {
        font-size:14px;
    }
    img {
        max-width:60%;

    }
    button {
        margin-top:10px;
        height:30px;
        background-color:#FF9901;
        border:none;
        border-radius:5px;
        cursor:pointer;
        
    }
`

export const InputLabel = styled.label `
    margin-bottom:30px;
    input {
        border:none;
        outline:none;
        width:80%;
        height:30px;
        background-color:#FF9901;
        margin:5px 10px;
        padding-left:10px;
        border-radius:5px;
    }
`
export const ContainerStarRating = styled.div `
    i {
        font-size:25px;
    }
`

export const CloseModal = styled.span `
    font-size:45px;
    color:#fff;
    cursor:pointer;
    align-self:flex-start;
    margin:40px 0px 0px 40px;
`