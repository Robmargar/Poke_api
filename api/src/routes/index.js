const { Router } = require("express");


//--------- Importar todos los routers ---------
const pokemonRouter=require("./pokemons")
const typesRouter=require("./types")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemon",pokemonRouter)
router.use("/types",typesRouter)

module.exports = router;