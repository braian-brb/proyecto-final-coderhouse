import { cartModel } from '../services/cart.model.js'

export const cartCtrl = {}

// TODO: no todo va a salir bien papito ponele un trycatch
cartCtrl.createCart = async (req, res) => {
  const result = await cartModel.createCart()
  res
    .status(200)
    .json({
      mssg: 'created Successfully',
      cartID: result.id
    })
}

cartCtrl.deleteCart = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    await cartModel.deleteCart(id)
    res
      .status(200)
      .json({ mssg: 'Deleted successfully' })
  } catch (error) {
    console.log(error)
  }
}

cartCtrl.addProductToCart = async (req, res) => {
  try {
    const { id, idProduct } = req.params
    if (!id && !idProduct) res.status(400).json({ mssg: 'error' })
    await cartModel.addProductToCart(id, idProduct)
    res
      .status(200)
      .json({ mssg: `added product ${idProduct} to cart ${id} successfully` })
  } catch (error) {
    console.log(error)
  }
}

cartCtrl.getProductsInCart = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    const products = await cartModel.getProductsInCart(id)
    res
      .status(200)
      .json({
        cartID: id,
        products
      })
  } catch (error) {
    console.log(error)
  }
}

cartCtrl.deleteProductInCart = async (req, res) => {
  try {
    const { id, idProduct } = req.params
    if (!id && !idProduct) res.status(400).json({ mssg: 'error' })
    const cartFind = await cartModel.deleteProductInCart(id, idProduct)
    res
      .status(200)
      .json({ cartFind })
  } catch (error) {
    console.log(error)
  }
}

// EXTRAS
cartCtrl.getAll = async (req, res) => {
  try {
    const carts = await cartModel.getAll()
    res
      .status(200)
      .json({ carts })
  } catch (error) {
    console.log(error)
  }
}
