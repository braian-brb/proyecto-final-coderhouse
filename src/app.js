import express, { urlencoded, json } from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import { router as indexRoutes } from './routes/indexRoutes.routes.js'
import './databases/mongo/connectDB.js'

// INITIALIZATIONS
export const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// MIDDLEWARES
app.use(urlencoded({ extended: true }))
app.use(json())
app.use(morgan('dev'))

// ROUTES
app.use(indexRoutes)

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))
