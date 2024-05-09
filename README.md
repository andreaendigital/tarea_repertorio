# Repertorio

## Descripción del Proyecto

Proyecto donde se validan conocimientos sobre levantar un servidor con conexión a PostgreSQL, insertar, consultar, actualizar y eliminar registros. CRUD.

### :scroll: Contexto :scroll:
La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en vivo. Para conocer y gestionar las canciones que cantarán sus estudiantes, la escuela solicitó la creación de una aplicación tipo CRUD.
En este desafío se debe desarrollar un servidor con Express que utilice el paquete pg para conectarse con PostgreSQL y utilice funciones asíncronas para hacer las consultas a la base de datos.


## Sobre el proyecto 🚀


### ✨ Requerimientos ✨

👌 1. Crear una ruta POST /cancion que reciba los datos correspondientes a una canción y realice a través de una función asíncrona la inserción en la tabla canciones.

👌 2. Crear una ruta GET /canciones que devuelva un JSON con los registros de la tabla canciones.

👌 3. Crear una ruta PUT /cancion que reciba los datos de una canción que se desea editar, ejecuta una función asíncrona para hacer la consulta SQL correspondiente y actualice ese registro de la tabla canciones.

👌 4. Crear una ruta DELETE /cancion que reciba por queryString el id de una canción y realiza una consulta SQL a través de una función asíncrona para eliminarla de la base de datos.

👉 Nota: Se agrega manejo de errores con bloques try/catch, y usar variedad de errores y respuestas del servidor según sean necesarias.


### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

 "dependencies": 
 - express
 - pg
 - morgan


### Instalación 🔧

 Instalo en terminal:
- npm init --yes
- npm i 


## Visuales :mage_woman:

- #### Front Entregado del proyecto :
  

![repertoriofront](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/3943a7a5-0087-4372-acfd-c473326f0773)


- #### Alertas para validación de campos vacíos en agregar canción y en editar canción:
- 
  
 ![validacionCamposAgregar](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/27486dd6-2312-468a-ae39-bcae7df9e308)
 

![validacionCamposEdicion](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/71d8f384-f39e-4e54-b11c-01444f4a742a)


- #### Avisos de procesos exitosos:


![cancionAgregada](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/44f9e586-93cf-4512-b16d-59883f61862f)


![avisoedicionexitosa](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/40523426-1ca9-46e5-94a5-0e7a8c1817ae)


![aviso al eliminar](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/cefc7298-ab48-4e02-b275-10f2364d2bb0)


- #### Alerta para errores de consola:
- 

![alertparaerroresdeconsola](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/e3a46710-f525-4d26-96a6-96a0808a2793)


- #### Errores en consola:
  

![error3consola](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/ba7499e6-1c5f-4329-af64-fd8dabc24f7a)


![error1consola](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/7d910e55-a5b9-41e1-a973-ca4243787865)


![error2consola](https://github.com/andreaendigital/tarea_repertorio/assets/154395788/b04c420e-5310-4fc9-badd-03133d244889)



## Construido Con 🛠️

Explica qué tecnologías usaste para construir este proyecto. Aquí algunos ejemplos:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - El lenguaje utilizado
- [PG](https://www.npmjs.com/package/pg)- Node paquete PG
- [Express](https://expressjs.com/en/5x/api.html)- Node paquete Express
- [Nodemon](https://www.npmjs.com/package/nodemon)- Node paquete Nodemon
  

## Autores ⚡ 

- **Andrea Rosero** ⚡  - [Andrea Rosero](https://github.com/andreaendigital)

