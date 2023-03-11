
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
const numbers = require('./Numbers')
const login = require('./Login')

// Ejemplo: router.use('/auth', authRouter);

router.use('/numbers', numbers)
router.use('/login', login)

module.exports = router;
