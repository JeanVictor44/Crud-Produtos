import { Router } from "express"
import readProductController from './controllers/readProductController'
import createProductController from './controllers/createProductController'
import deleteProductController from './controllers/deleteProductController'
import listProductsController from './controllers/listProductsController'
import updateProductController from './controllers/updateProductController'

import multer from 'multer'
import { uploadImage } from "./services/firebase"

const Multer = multer({
    storage:multer.memoryStorage(),
    limits:{
        fieldNameSize:1024*1024
    }
})

const routes = Router()

routes.get('/product/:name', readProductController)
routes.get('/list', listProductsController)
routes.post('/product', Multer.single('image'), uploadImage, createProductController)
routes.put('/update/:name', Multer.single('image'), uploadImage, updateProductController)
routes.delete('/product/:name', deleteProductController)

export default routes 