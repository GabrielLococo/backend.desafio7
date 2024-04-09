const express = require('express')
const app = express()
const PORT = 8080
require('./database.js')
const productsRouter = require('./routes/products.router.js')

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/products', productsRouter)



app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})