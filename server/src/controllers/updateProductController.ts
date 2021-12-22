import { Request, Response } from 'express'
import { doc, collection, query, where, getDocs, updateDoc, setDoc} from 'firebase/firestore' 
import { db } from '../config/firestore.config'


export default async( req:Request, res:Response) => {
    const urlImage = req.file ? req.file.path : null
    const productUpdate = {
        ...req.body,
        urlImage
    }
    const { name: productName } = req.params
    
    const productRef = collection(db, "produtos")

    const q = query(productRef, where("name", "==", productName))
    const querySnapshot = await getDocs(q)


    querySnapshot.forEach(async(document) => {
        const docRef = doc(db, "produtos",document.id)
        await setDoc(docRef,productUpdate)
        return res.json(productUpdate)
    })
}