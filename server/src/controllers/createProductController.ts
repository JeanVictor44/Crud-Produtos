import {  Request, Response  } from 'express' 
import { collection, addDoc} from 'firebase/firestore' 
import { db } from '../config/firestore.config'

export default async(req:Request, res:Response) => {
    const urlImage = req.file ? req.file.path : null
    const product = {
        ...req.body,
         urlImage
    }
    
    const productRef = collection(db, "produtos")
    try {
        await addDoc(productRef, product)
        return res.json(product)
    }catch(err){
        console.log(err)
    } 
}