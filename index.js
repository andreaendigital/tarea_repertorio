const morgan = require("morgan");

// npm init --yes
// npm i express
// npm i morgan
// npm i pg
// npm i nodemon
// abrir psql y crear database y table

const express = require("express"); //importamos express
const app = express(); //instanciamos express
const port = 3000; //definimos puerto

app.listen(port, () => console.log("Servidor escuchado en puerto 3000"));

//Importando funcion desde el módulo consultas.js:
const { insertar, consultar } = require("./consultas/consultas.js");

//middleware para recibir desde el front (los objetos) como json:
app.use(express.json());

//ruta raíz donde levantamos el index.html:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //cuando visite la raíz, devuelve el archivo con sendFile. __dirname le da la ruta
  //se prueba levantando el servidor y con thunderclient para confirmar que devuelva el html
  //o abrir navegador con localhost:3000
});

//Ruta para agregar una nuevaCanción a la lista:
app.post("/cancion", async (req, res) => {
  try {
    const datos = Object.values(req.body); //object.values extrae los valoes de todas las propiedades enumerables del objeto body y almacena esos valores en un array llamado datos
    const respuesta = await insertar(datos); // el resultado de la función insertar con argumento array datos, se almacena en respuesta
    console.log(
      "Valor devuelto por la funcion insertar de base de datos: ",
      respuesta
    );
    res.status(201).send(respuesta);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Ruta para enlistar los registros de la tabla canciones
app.get("/canciones", async (req, res) => {
  try {
    const registros = await consultar();
    console.log("Respuesta de la funcion consultar en el index: ", registros);
    // res.json(registros);
    // res.status(200).send(registros);
    res.status(200).json(registros);
  } catch (error) {
    res.status(500).send(error);
  }
});
