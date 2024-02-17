const axios = require("axios");
const { Router } = require("express");
const router = Router();

// ------------------Get Initial List------------------
router.get("/initial_list", async (req, res) => {
  try {
    const answer=[];
    let names;
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`
    );

    const initial_list = await data.data.results;
    names = initial_list.map((p) => p.name);
    
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
    res.status(404).send(`No pude obtener lista inicial`);
  }
});

// ------------------Get all about specific pokemon------------------
router.get("/:pokemon", async (req, res) => {
  // se pide por  params
  const { pokemon } = req.params;
  try {
    let answer;
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const apiGame = await data.data;

    answer = {
      id: apiGame.id,
      name: apiGame.name,
      height: apiGame.height,
      weight: apiGame.weight,
      imagen: apiGame.sprites.other.home.front_default,
      types: apiGame.types.map((t) => t.type.name),
    };
    console.log(answer);
    res.status(200).json(answer);
  } catch {
    res.status(404).send(`Pokemon no encontrado con el nombre: ${pokemon}`);
  }
});

module.exports = router;
