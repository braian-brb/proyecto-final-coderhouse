import { productModel } from '../services/product.models.js'

export const productsCtrl = {}

productsCtrl.getProducts = async (req, res) => {
  try {
    let products
    const { id } = req.params
    console.log(id)
    if (!id) {
      products = await productModel.getAll()
    } else {
      products = await productModel.getById(id)
    }
    res
      .status(200)
      .json({ products })
  } catch (error) {
    res
      .status(400)
      .json({ mssg: error })
    throw new Error(error)
  }
}

productsCtrl.addProduct = (req, res) => {
  try {
    const {
      name,
      price,
      code,
      stock,
      thumbnail,
      description
    } = req.body
    const productValidate = name && code
    if (!productValidate) {
      res
        .status(400)
        .json({ mssg: 'The product need Name and Code' })
      throw new Error('The product need Name and Code')
    }
    const product = productModel.saveProduct(name, price, code, stock, thumbnail, description)
    if (!product) {
      res
        .status(400)
        .json({ mssg: 'ERROR ADDING PRODUCT' })
    } else {
      res
        .status(200)
        .json({ mssg: 'Product added succesfully' })
    }
  } catch (error) {
    console.log(error.message)
  }
}

productsCtrl.updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    const newData = {
      name: req.body.name,
      price: req.body.price,
      code: req.body.code,
      stock: req.body.stock,
      thumbnail: req.body.thumbnail,
      description: req.body.description
    }

    await productModel.updateProduct(id, newData)
    res
      .status(200)
      .json({ mssg: 'updated successfully' })
  } catch (error) {

  }
}

productsCtrl.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) res.status(400).json({ mssg: 'error' })
    await productModel.deleteProduct(id)
    res
      .status(200)
      .json({ mssg: 'Deleted successfully' })
  } catch (error) {

  }
}
