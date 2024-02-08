const { Router } = require("express");


//--------- Importar todos los routers ---------
const pokemonRouter=require("./pokemons")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon",pokemonRouter)

module.exports = router;