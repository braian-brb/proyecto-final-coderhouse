import { app } from './app.js'
import config from './config/config.js'

const { server } = config

app.listen(server.PORT, () => {
  console.log(`Server runing on http://${server.HOST}:${server.PORT}`)
})
