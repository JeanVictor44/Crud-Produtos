import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { ContainerDropzone} from './style'

interface PropsDropzone {
    onFileUploaded: (file:File) => void;
    imageDefault?:string;
    height?:number;
}

export const Dropzone =  ({onFileUploaded, imageDefault, height}: PropsDropzone) => {
    const [selectedFileUrl, setSelectedFileUrl] = useState("");

    const onDrop = useCallback((acceptedFiles) => {
        console.log(acceptedFiles)
        const file = acceptedFiles[0];
        const fileurl = URL.createObjectURL(file);
        setSelectedFileUrl(fileurl);
        onFileUploaded(file)
    }, [onFileUploaded])
    
    const { getRootProps,getInputProps} = useDropzone({onDrop, accept:'image/*'}) 

    return (
        <ContainerDropzone {...getRootProps()} height={height} >
            <input {...getInputProps()}  accept='image/*' required/>
            {
                selectedFileUrl || imageDefault ? (
                    <img src={selectedFileUrl || imageDefault} /> 
                ) :
                <p>Arraste uma imagem aqui</p>
            }

        </ContainerDropzone>
    )
}