

// npm init --yes
// npm i express
// npm i morgan
// npm i pg
// npm i nodemon
// abrir psql y crear database y table

const express = require("express"); //importamos express
const app = express(); //instanciamos express
const morgan = require("morgan");
const port = 3000; //definimos puerto

app.listen(port, () => console.log("Servidor escuchado en puerto 3000"));

//Importando funcion desde el módulo consultas.js:
const { insertar, consultar, eliminar, editar } = require("./consultas/consultas.js");

//middleware para recibir desde el front (los objetos) como json:
app.use(express.json());

//ruta raíz donde levantamos el index.html:
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  //cuando visite la raíz, devuelve el archivo con sendFile. __dirname le da la ruta
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

//Ruta para eliminar un registros de la tabla canciones por id
app.delete("/cancion", async (req, res) => {
  try {
    const { id } = req.query;
    const resultado = await eliminar(id);
    console.log("Respuesta de la funcion eliminar en el index: ", resultado);
    res.json(resultado);
    // res.status(200).send(registros);
    //   res.status(200).json(registros);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Ruta para editar una canción
app.put("/cancion/:id", async (req, res) => {
  try {
    const { id } = req.params; // Obtener el ID de la canción de los parámetros de la ruta
    const datos = Object.values(req.body);
    const respuesta = await editar(id, datos); // llamo a la función editar con argumento id y datos, su respuesta se almacena en variable respuesta
    console.log(
      "Valor devuelto por la funcion editar de base de datos: ",
      respuesta
    );
    res.status(200).send(respuesta);
  } catch (error) {
    res.status(500).send(error);
  }
});
