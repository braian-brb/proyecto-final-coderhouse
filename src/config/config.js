import dotenv from 'dotenv'

dotenv.config()

const config = {

  server: {
    PORT: process.env.PORT || 8080,
    HOST: process.env.HOST || 'localhost'
  },

  mongo: {
    URI: process.env.MONGO_DB_URI,
    DB_HOST: process.env.MONGO_DB_HOST || 'mongodb://localhost:27017',
    DB_FINALPROJECT_DATABASE: process.env.DB_FINALPROJECT_DATABASE || 'FinalProject'
  }

}

export default config
