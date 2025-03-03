const express = require('express')
const router = express.Router()
const userRoutes = require('./users')

router.use('/users', userRoutes)
// Pode usar outras rotas aqui

module.exports = router