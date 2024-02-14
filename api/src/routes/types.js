const axios = require("axios");
const { Router } = require("express");
const router = Router();

//------- Pedir Generos a la BD --------
// ------------------Get types------------------
router.get("/list", async (req, res) => {
  try {
    let answer;
    const data = await axios.get(`https://pokeapi.co/api/v2/type`);

    const types = await data.data.results;
    answer = {
      name: types.map((t) => t.name),
    };
    res.status(200).json(answer);
  } catch {
    res.status(404).send(`No types`);
  }
});

// ------------------Get pokemons by specific type------------------
router.get("/:type", async (req, res) => {
  const { type } = req.params;
  try {
    let answer;
    const data = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

    const types = await data.data.pokemon;
    answer = {
      name: types.map((p) => p.pokemon.name),
    };
    res.status(200).json(answer);
  } catch {
    res.status(404).send(`Not found ${type} pokemons `);
  }
});

module.exports = router;
