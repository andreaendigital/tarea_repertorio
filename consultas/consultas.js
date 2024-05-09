const { Pool } = require('pg'); //importamos pg y extraemos pool

const pool = new Pool({ //construimos objeto de conexión e instanciamos
    user: 'postgres',
    host: 'localhost',
    database: 'repertorio',
    password: '3434',
    port: 5432
});

// Funcion para agregar canciones a la lista
async function insertar (datos) {
    //insertar recibe el array datos 
    console.log("Valores recibidos: " , datos);
    const [titulo, artista, tono] = datos; // Extraer datos del array datos

    //contruyo el pool query y lo asigno a variable. 
    // - se invoca la variable pool y metodo query, dentro del query paso dos cosas
    //las puedo pasar como objeto entonces abro {}
    const result = await pool.query({ 
        //construimos la instrucción y asignamos valores
        text: 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *',
        values: [titulo, artista, tono]
    })
    //para saber lo que me responde la instrucción: 
    console.log("valor de result :", result);
    //La función necesita devolver algo para entregarle a la ruta, necesita un return.
    //Valor del result o del registro agregado:
    console.log("Registro agregado row cero: " , result.rows[0]); 
    //Respuesta de la función:
    return result.rows[0];
    //resultado del camino feliz
    //nos toca programar los caminos infelices, manejo de errores: parametros incompletos, parametros distinto tipo de dato, etc.
    // return "Registro agregado con éxito"   //respuesta de prueba
};

async function consultar () {
    const result = await pool.query("SELECT * FROM canciones");
    return result.rows;
}

//funcion para eliminar una canción según su id recibido como un query.string
async function eliminar (id) {
    const result = await pool.query("DELETE FROM cancioness WHERE id = $1 RETURNING *", [id]);
    return result.rows[0]; //devuelve el registro eliminado
}

module.exports = {insertar, consultar, eliminar}; //exporto la función
