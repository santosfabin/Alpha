const express = require('express')
const router = express.Router()

const productRoutes = require('./product')
const orderRoutes = require('./order')
const customerRoutes = require('./customer')

router.use('/product', productRoutes)
router.use('/order', orderRoutes)
router.use('/customer', customerRoutes)
// Pode usar outras rotas aqui

module.exports = router