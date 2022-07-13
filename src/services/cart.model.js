import { cartDao, productDao } from '../daos/index.daos.js'

export const cartModel = {}

cartModel.createCart = () => {
  return cartDao.create()
}

cartModel.deleteCart = (id) => {
  return cartDao.deleteById(id)
}

// TODO: CORREGIR QUE EL CART EXISTA y si no existe retornar error
// TODO: PREGUNTAR SI NO SE PERMITEN ID REPETIDOS EN EL CART
// TODO: PREGUNTAR SI HABRIA QUE HACER ASOCIASION EN VEZ DE HACER UN ARRAY

cartModel.addProductToCart = async (id, idProduct) => {
  const cartToUpdate = await cartDao.getById(id)
  const product = await productDao.getById(idProduct)
  cartToUpdate.products.push(product)
  return await cartDao.update(id, cartToUpdate)
}

cartModel.getProductsInCart = async (id) => {
  const cartFind = await cartDao.getById(id)
  return cartFind.products
}

cartModel.deleteProductInCart = async (id, idProduct) => {
  const cartFind = await cartDao.getById(id)
  const productFind = await cartDao.getProductInCart(cartFind, idProduct)
  const deletedItemIndex = cartFind.products.indexOf(productFind)
  console.log(deletedItemIndex)
  cartFind.products.splice(deletedItemIndex, 1)
  await cartDao.update(id, cartFind)

  return cartFind
}

// EXTRA
cartModel.getAll = () => {
  return cartDao.getAll()
}
