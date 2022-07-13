import { productDao } from '../daos/index.daos.js'

export const productModel = {}

productModel.getById = (id) => {
  return productDao.getById(id)
}

productModel.getAll = () => {
  return productDao.getAll()
}

// TODO: Arreglar que el codigo sea unico   no tire error si hay repetido
productModel.saveProduct = (name, price, code, stock, thumbnail, description) => {
  const newProduct = {
    name,
    price,
    code,
    stock,
    thumbnail,
    description
  }
  return productDao.create(newProduct)
}

productModel.updateProduct = (id, newData) => {
  return productDao.update(id, newData)
}
productModel.deleteProduct = (id) => {
  return productDao.deleteById(id)
}
