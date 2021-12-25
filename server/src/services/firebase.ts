import admin, { ServiceAccount } from 'firebase-admin'
import firebaseAccountCredentials from '../config/firebase-key.json'
import { NextFunction, Request, Response } from 'express'

const serviceAccount = firebaseAccountCredentials as ServiceAccount
const BUCKET = 'produtos-crud-b30e1.appspot.com'
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket:BUCKET
})

const bucket = admin.storage().bucket()

export const uploadImage = (req: Request, res:Response, next: NextFunction) => {
  if(!req.file)return next()
  
  const image = req.file
  console.log(image)
  const fileName = `${Date.now()}.${image.originalname.split('.').pop()}`
  const file = bucket.file(fileName)
  const stream = file.createWriteStream({
    metadata: {
      contentType:image.mimetype
    }
  })

  stream.on('error',(err) => {
    console.log(err)
  })
  
  stream.on('finish', async() => {
    await file.makePublic()

    if(req.file){
      req.file.path = `https://storage.googleapis.com/${BUCKET}/${fileName}`
    }

    next()
  })

  stream.end(image.buffer)
}
