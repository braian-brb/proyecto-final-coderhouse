import { Router } from 'express'
import { productsCtrl } from '../controllers/product.controllers.js'

const {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct
} = productsCtrl

export const router = Router()

// - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)
router.get('/:id?', getProducts)
// Para incorporar productos al listado (disponible para administradores)
router.post('/', addProduct)
// Actualiza un producto por su id (disponible para administradores)
router.put('/:id', updateProduct)
// Borra un producto por su id (disponible para administradores)
router.delete('/:id', deleteProduct)
