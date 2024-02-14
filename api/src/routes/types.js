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
    const answer=[];
    const data = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

    const types = await data.data.pokemon;
    names = types.map((p) => p.pokemon.name);
     
    for (const n of names) {
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${n}`);
      const apiGame = await data.data;
  
      let pokemon = {
        id: apiGame.id,
        name: apiGame.name,
        imagen: apiGame.sprites.other.home.front_default,
      };
      answer.push(pokemon);
    };
    res.status(200).json(answer);
  } catch {
    res.status(404).send(`Not found ${type} pokemons `);
  }
});

module.exports = router;
