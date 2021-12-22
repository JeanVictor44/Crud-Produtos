import { Request, Response } from 'express'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firestore.config'

type Product = {
    name:string,
    numberOfStars:number,
    price:number
    urlImage:string
}

export default async(req: Request, res:Response) => {
    const productRef = collection(db, 'produtos')
    const querySnapshot = await getDocs(productRef)
    const products:Product[] = []
    querySnapshot.forEach( doc => products.push(doc.data() as Product))
    return res.json(products)
}