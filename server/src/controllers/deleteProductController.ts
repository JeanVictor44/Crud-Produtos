import {  Request, Response  } from 'express' 
import { doc, collection, deleteDoc, query, where, getDocs} from 'firebase/firestore' 
import { db } from '../config/firestore.config'
// apagar imagem do firecloud
export default async(req:Request, res:Response) => {
    const { name: productName } = req.params
    const productRef = collection(db, "produtos")

    const q = query(productRef, where("name", "==", productName))
    const querySnapshot = await getDocs(q)

    querySnapshot.forEach(async(document) => {
        const docRef = doc(db, "produtos",document.id)
        try {
            await deleteDoc(docRef)
            return res.json({
                ...document.data(),
                successfull:true   
            })
        }catch(err) {
            return res.json({
                successfull:false   
            })}
    });
}