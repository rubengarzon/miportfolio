---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Fundamentos esenciales para comenzar un proyecto en TypeScript"
date: 11 marzo 2023
readingTime: 3 minutos de lectura
urlPage: "https://rubengarzon.vercel.app/posts/fundamentos-esenciales-para-comenzar-un-proyecto-en-typescript"
image:
  url: "https://cdn.worldvectorlogo.com/logos/typescript-2.svg"
  alt: "Logo typescript"
tablaContenido:
  - title: "¿Es TypeScript un lenguaje de programación?"
    url: "#es-typescript-un-lenguaje-de-programación"
  - title: "Paso a paso para comenzar un proyecto"
    url: "#paso-a-paso-para-comenzar-un-proyecto"
  - title: "¿Qué es el tipado estático?"
    url: "#qué-es-el-tipado-estático"
  - title: "Tipos de datos: primitivos y no primitivos"
    url: "#tipos-de-datos-primitivos-y-no-primitivos"
  - title: "Type vs Interface"
    url: "#type-vs-interface"

tags: ["typescript"]
---

## ¿Es TypeScript un lenguaje de programación?

TypeScript puede ser considerado como un lenguaje de programación debido a que cuenta con características y herramientas propias que lo distinguen de JavaScript. Sin embargo, también es importante tener en cuenta que está construido sobre la base de JavaScript y se utiliza para mejorar la seguridad y la escalabilidad de los proyectos de JavaScript existentes.

## Paso a paso para comenzar un proyecto

- Asegúrese de tener Node.js instalados en su máquina.

- Abra un terminal y navegue hasta el directorio donde desea crear su proyecto.

- Ejecute el siguiente comando para crear un nuevo proyecto con npm:

```bash
npm init
```

- Instale TypeScript como dependencia de desarrollo:

```bash
npm install -g typescript
```

- Crea un archivo de configuración de TypeScript llamado tsconfig.json. Este archivo contiene las opciones de configuración de TypeScript para su proyecto. Puede crear este archivo manualmente o ejecutar el siguiente comando para crear un archivo predeterminado:

```bash
npx tsc --init
```

Ahora puede empezar a escribir código TypeScript en archivos con la extensión `.ts`

## ¿Qué es el tipado estático?

El tipado estático es una característica de TypeScript que permite **establecer el tipo de datos de una variable durante su declaración**. Esto ayuda a identificar errores de tipo en tiempo de compilación, antes de que se ejecute el código, evitando así errores de programación que pueden causar bugs y afectar al funcionamiento del software.

En JavaScript, podemos definir una variable con la palabra clave "const" sin especificar su tipo.

```js
const edad = 25;
```

Ya en TypeScript, podemos establecer el tipo de la variable "edad" como "número", de la siguiente manera:

```ts
const edad: number = 25;
```

Esto significa que la variable "edad" sólo puede almacenar valores de tipo "número". Si intentamos asignar un valor de un tipo diferente a esa variable, como una cadena, TypeScript detectará un error de compilación y marcará una advertencia.

Sin embargo, es importante tener en cuenta que aunque el código no muestre errores de compilación, **pueden producirse comportamientos inesperados durante la ejecución.** Debemos recordar que todo el código TypeScript se elimina en el proceso de compilación y el servidor en producción ejecutará el código JavaScript resultante.
Por lo tanto, declarar un tipo en TypeScript no implica que un valor de un tipo diferente aparecerá en la variable durante la ejecución del programa.

## Tipos de datos: primitivos y no primitivos

Los tipos de datos primitivos son valores básicos y sencillos que representan datos directamente. Entre estos tipos se incluyen `number`, `string`, `boolean`, `null`, `undefined`, `symbol` y `bigint`.

Por outro lado, os tipos de dados não primitivos são complexos e não representam diretamente valores, mas sim referências a objetos que contêm valores. Esses tipos incluem object, array, function, e class.

Por otro lado, los tipos de datos no primitivos son complejos y no representan directamente valores, sino referencias a objetos que contienen valores. Entre estos tipos se encuentran `object`, `array`, `function` y `class`.

## Type vs Interface

Se trata de un gran debate en la comunidad, por lo que he decidido ejemplificar en qué consisten y dejar que tú decidas cómo utilizarlos.

Básicamente, un tipo es una forma de definir una estructura de datos, que puede utilizarse para definir el tipo de una variable, función, parámetro o cualquier otra cosa que tenga un tipo.

```ts
export type Metrics = "px" | "em" | "rem" | "vh" | "vw" | "%";
```

Una interfaz es una forma de definir una estructura de datos que describe la forma que debe tener un objeto. Define un conjunto de propiedades que debe tener un objeto, así como los tipos de esas propiedades.

Las interfaces pueden utilizarse para describir objetos, clases, funciones y otros tipos de estructuras de datos.

```ts
export interface Genre {
  id: number;
  name: string;
}
```

### Las principales diferencias entre ambos son

- Flexibilidad: Type es más flexible y permite la definición de tipos complejos, como uniones (demostrado en el ejemplo anterior), tipos de diferencia e inferencia de tipos.
  Las interfaces, por su parte, son más restringidas y tienen como principal objetivo definir la estructura de los objetos.

- Herencia: Tanto las interfaces como los tipos son capaces de ofrecer herencia, pero las interfaces tienen una sintaxis más amigable y admiten la unión de varias interfaces en una sola, mientras que los tipos utilizan el operador Unión para crear un nuevo tipo a partir de la unión de otros tipos existentes.

```ts
type Animal = {
  name: string;
  eat: (food: string) => void;
};

type Dog = Animal & {
  breed: string;
  bark: () => void;
};
```

```ts
interface Animal {
  name: string;
  eat(food: string): void;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}
```

- Nomenclatura: En general, las interfaces se utilizan para representar objetos, mientras que el tipo se utiliza para representar cualquier tipo de datos, incluidos los objetos.

## Cómo escribir objetos y funciones

Para tipar objetos, podemos utilizar interfaces. Las interfaces son una forma de definir un conjunto de propiedades y tipos que debe tener un objeto. Por ejemplo, para definir un objeto que represente a una persona con un nombre y una edad, podemos hacer:

```ts
interface Persona {
  name: string;
  edad: number;
}
```

En este ejemplo, hemos definido la interfaz Persona con dos propiedades: nombre, que es una cadena, y edad, que es un número. Ahora podemos utilizar esta interfaz para escribir un objeto que represente a una persona:

```ts
const persona: Persona = {
  name: "Justin",
  edad: 30,
};
```

Así, nos aseguramos de que el objeto persona tiene las propiedades y tipos definidos en la interfaz Persona.

Para tipar una función, es necesario especificar los tipos de sus parámetros y también el tipo de su retorno. Por ejemplo, para definir una función que reciba dos parámetros numéricos y devuelva la suma de estos valores, podemos hacer:

```ts
function suma(a: number, b: number): number {
  return a + b;
}
```

En este ejemplo, utilizamos la sintaxis : number para especificar que la función devuelve un valor numérico.
