import {  Request, Response  } from 'express' 
import { collection, where, query, getDocs } from 'firebase/firestore' 
import { db } from '../config/firestore.config'

export default async(req:Request, res:Response) => {
    const { name: productName } = req.params
    
    const productRef = collection(db, "produtos")
    const q = query(productRef, where("name", "==", productName))
    
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        return res.json(doc.data())
    });
}