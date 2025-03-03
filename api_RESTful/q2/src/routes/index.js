const express = require('express')
const router = express.Router()

const productRoutes = require('./product')
const orderRoutes = require('./order')

router.use('/product', productRoutes)
router.use('/order', orderRoutes)
// Pode usar outras rotas aqui

module.exports = router