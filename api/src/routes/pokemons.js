const axios = require("axios");
const { Router } = require("express");
const router = Router();
const { Videogame, Genre } = require("../db.js");

// const dataJson=require("../videogames.json");

//------- Pedir todos los Videojuegos a la BD--------
// router.get("/", async (req, res) => {
//   try {
//     // res.status(200).send("hellow bf");
//     //------- Pido los Games a la BD -------
//     let infobd = await Videogame.findAll({ include: Genre });

//     infobd = JSON.stringify(infobd);
//     infobd = JSON.parse(infobd);
//     // infobd.generos = infobd.genres.map((gen) => gen.name);
//     infobd.forEach((element) => {
//       element.generos = element.genres.map((g) => g.name);
//       element.genres = null;
//     });
//     // console.log(infobd);

//     //------------- https://api.rawg.io/api/games?search={game}----------------
//     // se piden por query
//     if (req.query.name) {
//       try {
//         const respuesta = await axios.get(
//           ` https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`
//         );
//         if ((respuesta.data.count = 0)) {
//           const juegosbd = infobd.filter((e) =>
//             e.name.toLowerCase().includes(req.query.name.toLowerCase())
//           );
//           const juegos = [...juegosbd].slice(0, 15);
//           if (juegos.length > 0) {
//             res.status(200).json(juegos);
//           } else {
//             res
//               .status(200)
//               .json(`No existen videojugos con el nombre: "${req.query.name}"`);
//           }
//         } else {
//           const juegosapi = respuesta.data.results.map((e) => {
//             //{ --------> DESCOMENTAR SI FUNCIONA LA API
//             // const juegosapi = dataJson.results.map((e) => {    //----------> COMENTAR SI FUNCIONA LA API
//             return {
//               id: e.id,
//               imagen: e.background_image,
//               name: e.name,
//               raiting: e.rating,
//               // la info viene en array por eso mapeo el arreglo
//               generos: e.genres.map((gen) => gen.name),
//             };
//           });
//           const juegosbd = infobd.filter((e) =>
//             e.name.toLowerCase().includes(req.query.name.toLowerCase())
//           );
//           const juegos = [...juegosbd, ...juegosapi].slice(0, 15);
//           if (juegos.length > 0) {
//             res.status(200).json(juegos);
//           } else {
//             res
//               .status(200)
//               .json(`No existen videojugos con el nombre: "${req.query.name}"`);
//           }
//         }
//       } catch (err) {
//         return console.log(err);
//       }
//     } else {
//       //--------------------------- Pido todos los Games a la API -------

//       // console.log(dataJson);

//       //-------------------------- ESTO LO COMENTO POR QUE NO JALA LA API-----------------------------------
//       const pokeData = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/ditto`
//       );
//       let data = await pokeData.data.results;
//       let next = await pokeData.data.next;
//       let page = 0;

//       while (page < 4) {
//         let apiData2 = await axios.get(next);
//         let data2 = await apiData2.data.results;
//         next = await apiData2.data.next;
//         data = [...data, ...data2];
//         page++;
//       }

//       //------- Separo unicamente la infomacion necesaria -------
//       let infoapi = data.map((e) => {
//         //////----> descomentar
//         // let infoapi = dataJson.results.map((e) => {
//         return {
//           id: e.id,
//           imagen: e.background_image,
//           name: e.name,
//           raiting: e.rating,
//           // la info viene en array por eso mapeo el arreglo
//           generos: e.genres.map((gen) => gen.name),
//         };
//       });

//       //------- Junto los datos de la API(infoapi) y de la BD(infobd) -------

//       const respuesta = [...infobd, ...infoapi]; //<----------------******
//       console.log("numero de videojuegos traidos");
//       console.log(respuesta.length);
//       res.status(200).json(respuesta);
//     }
//   } catch (err) {
//     console.log(err);
//     res.sendStatus(500);
//   }
// });

// ------------------https://pokeapi.co/api/v2/pokemon/${pokemon}------------------
router.get("/:pokemon", async (req, res) => {
  // se pide por  params
  const { pokemon } = req.params;
  try {
    let respuesta;
    const data = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const juegoapi = await data.data;

    respuesta = {
      id: juegoapi.id,
      name: juegoapi.name,
      height: juegoapi.height,
      weight: juegoapi.weight,
      imagen: juegoapi.sprites.other.home.front_default,
      types: juegoapi.types.map((t) => t.type.name),
    };
    console.log(juegoapi);
    res.status(200).json(respuesta);
  } catch {
    res.status(404).send(`Pokemon no encontrado con el nombre: ${pokemon}`);
  }
});

module.exports = router;
