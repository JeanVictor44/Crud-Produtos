import { Request, Response } from 'express'
import { doc, collection, query, where, getDocs, setDoc} from 'firebase/firestore' 
import { db } from '../config/firestore.config'


export default async( req:Request, res:Response) => {
    if(req.file){
        console.log(req.file.path)
    }
    const productUpdate = req.file ? { ...req.body, urlImage: req.file.path} : {...req.body}
    
    const { name: productName } = req.params
    
    const productRef = collection(db, "produtos")

    const q = query(productRef, where("name", "==", productName))
    const querySnapshot = await getDocs(q)


    querySnapshot.forEach(async(document) => {
        const docRef = doc(db, "produtos", document.id)
        await setDoc(docRef,productUpdate)
        return res.json(productUpdate)
    })
}