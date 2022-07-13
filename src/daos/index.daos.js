// import ContainerProductFS from './containers/fs/productsFS.js'
import ContainerProductMongo from './containers/mongo/ProductMongo.js'
import ContainerCartMongo from './containers/mongo/CartMongo.js'

const productDao = new ContainerProductMongo()
const cartDao = new ContainerCartMongo()

export { productDao, cartDao }
