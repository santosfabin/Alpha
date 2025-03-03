const express = require('express')
const router = express.Router()

const productRoutes = require('./product')

router.use('/product', productRoutes)
// Pode usar outras rotas aqui

module.exports = router