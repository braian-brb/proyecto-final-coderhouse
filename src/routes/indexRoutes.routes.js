import { Router } from 'express'
import { router as productRouter } from './product.routes.js'
import { router as cartRouter } from './cart.routes.js'

export const router = Router()

router.use('/api/products', productRouter)
router.use('/api/carts', cartRouter)
