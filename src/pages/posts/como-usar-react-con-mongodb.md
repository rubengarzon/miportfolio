---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Cómo usar React con MongoDB"
date: 28 febrero 2023
readingTime: 4 minutos de lectura
image:
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
  alt: "Logo de React"
tablaContenido:
  - title: "Requisitos previos"
    url: "#requisitos-previos"
  - title: "Paso 1: Crear un proyecto React"
    url: "#paso-1-crear-un-proyecto-react"
  - title: "Paso 2: Configura el controlador MongoDB"
    url: "#paso-2-configura-el-controlador-mongodb"
  - title: "Paso 3: Configura una base de datos MongoDB"
    url: "#paso-3-configura-una-base-de-datos-mongodb"
  - title: "Paso 4: Crea un componente React"
    url: "#paso-4-crea-un-componente-react"
  - title: "Paso 5: Compila el componente"
    url: "#paso-5-compila-el-componente"
  - title: "Paso 6: Ejecuta la aplicación"
    url: "#paso-6-ejecuta-la-aplicación"
  - title: "Conclusión"
    url: "#conclusión"
tags: ["react"]
---

React y MongoDB son dos tecnologías potentes que se pueden usar en conjunto para crear aplicaciones web escalables y eficientes. React es una biblioteca JavaScript conocida para crear interfaces de usuario, mientras que MongoDB es una base de datos NoSQL orientada a documentos capaz de manejar grandes cantidades de datos. En este artículo, veremos cómo usar React con MongoDB.

## Requisitos previos

Antes de comenzar, asegúrese de tener Node.js y MongoDB instalados en su sistema.

## Paso 1: Crear un proyecto React

Necesitamos crear un nuevo proyecto React para usar con MongoDB. Ejecute el siguiente comando en su terminal:

```bash
npx create-react-app my-app
cd my-app
npm start
```

Esto generará un nuevo proyecto React llamado `my-app` e iniciar el servidor de desarrollo utilizando `npm start`.

## Paso 2: Configura el controlador MongoDB

Para conectarnos a MongoDB, primero debemos instalar el controlador MongoDB Node.js. Para instalar el controlador, escriba el siguiente comando:

```bash
npm install mongodb
```

## Paso 3: Configura una base de datos MongoDB

Ahora debemos crear una nueva base de datos MongoDB. Para iniciar el servidor MongoDB, abra una nueva ventana de terminal y escriba el siguiente comando:

```bash
mongod
```

Esto iniciará su sistema `MongoDB server`.

Para conectarse al shell MongoDB, abra otra ventana de terminal y ejecute el siguiente comando:

```bash
mongo
```

Ejecute el siguiente comando en el shell MongoDB para crear una nueva base de datos llamada `my-database`:

```bash
use my-database
```

## Paso 4: Crea un componente React

Construyamos un nuevo componente React que mostrará datos de la base de datos MongoDB. Crear un nuevo archivo llamado `Data.js` en tu proyecto React `src` carpeta. Incluya el siguiente código en el archivo:

```jsx
import React, { useState, useEffect } from "react";
import { MongoClient } from "mongodb";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const client = await MongoClient.connect("mongodb://localhost:27017");
      const db = client.db("my-database");
      const collection = db.collection("my-collection");
      const result = await collection.find().toArray();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
```

Este componente obtiene datos de la `my-collection` colección en el `my-database` base de datos y lo muestra en una lista.

## Paso 5: Compila el componente

Usemos nuestra aplicación React para representar el `Data` componente. Agregar el siguiente código a la `App.js` archivo en el `src` carpeta:

```jsx
import React from "react";
import Data from "./Data";

function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
```

## Paso 6: Ejecuta la aplicación

Finalmente, iniciemos la aplicación React y veamos los datos de MongoDB en nuestro navegador. Ejecute el siguiente comando en su terminal:

```bash
npm start
```

Esto iniciará la aplicación React en su navegador predeterminado. Los datos de la base de datos MongoDB deben mostrarse en una lista en la pantalla.

## Conclusión

Combinar React y MongoDB es una forma efectiva de crear aplicaciones web escalables y eficientes. Puede conectarse fácilmente a MongoDB y buscar datos para mostrar en su aplicación React siguiendo los pasos de este artículo. Recuerde mantener su código limpio y organizado en todo momento para facilitar el mantenimiento y la escalabilidad. Diviértete codificando!
