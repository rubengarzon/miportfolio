---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'POST 16'
date: 23 febrero 2023
readingTime: 3 minutos de lectura
image:
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
  alt: "The Astro logo with the word One."
tablaContenido:
  - title: "Eliminar todo el estilo"
    url: "#eliminar-todo-el-estilo"
  - title: "Todos los valores de la propiedad all"
    url: "#todos-los-valores-de-la-propiedad-all"
  - title: "Advertencias"
    url: "#advertencias"
  - title: "Compatibilidad con navegadores"
    url: "#compatibilidad-con-navegadores"
  - title: "Resumen"
    url: "#resumen"
---

En su papel como desarrollador de frontend, es común tener que crear componentes con estilos personalizados para cumplir con diseños creativos. Los estilos predeterminados de los elementos HTML como `<button />` o `<a />` a menudo no son los adecuados para nuestros propósitos.

Para abordar este problema, una solución común es anular los estilos predeterminados. Por ejemplo:

```css
.reset {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    // ...
}
```

¡Solía hacerlo yo mismo hasta que descubrí una solución mucho más rápida y conveniente!

## Eliminar todo el estilo

los `all: unset` La propiedad CSS restablece todas las propiedades CSS a sus valores iniciales o heredados. Esto significa que todas las propiedades volverán a los valores establecidos en la hoja de estilo del agente de usuario o los valores que se transmitieron desde el elemento principal.

Al usar `all: unset`, puede restablecer rápida y fácilmente todos los estilos para un elemento en particular, lo que puede ser útil en muchas situaciones. Por ejemplo, puede usarlo para crear una clase de "restablecimiento" que puede aplicar a un elemento cuando desea eliminar todos los estilos y comenzar de nuevo.

1. Creación de una clase "reset":

```css
.reset {
    all: unset;
}
```

2. Aplicar la clase "reset" a un elemento:

```html
<button class="reset">Click me!</button>
```

```css
.section {
    all: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
    padding: 20px;
}
```

En este ejemplo, estás usando all: unset para eliminar todos los estilos para una sección de una página y luego aplicar un nuevo conjunto de estilos para crear un diseño personalizado.

## Todos los valores de la propiedad all

La propiedad `all` admite varios valores, cada uno con un propósito diferente:

- `all: initial` establece todas las propiedades en sus valores iniciales.
- `all: inherit` establece todas las propiedades en sus valores heredados.
- `all: unset` establece todas las propiedades en sus valores iniciales o heredados.

```html
<body>
  <div>
    <button class="initial">initial</button>
    <button class="revert">revert</button>
    <button class="inherit">inherit</button>
    <button class="unset">unset</button>
  </div>
  <div>
    <button>unstyled</button>
  </div>
</body>
```

```css
body {
  background-color: gray;
  padding: 20px;
}

div {
  display: flex;
  justify-content: center;
  color: white;
  gap: 10px;
}

button {
  width: 200px;
  height: 75px;
  margin: 10px;
  font-size: 18px;
  border: 2px solid black;
}

.initial {
  all: initial;
  background-color: lightgray;
}

.revert {
  all: revert;
  background-color: lightblue;
}

.inherit {
  all: inherit;
  background-color: lightgreen;
}

.unset {
  all: unset;
  background-color: lightpink;
}
```

![Imagen de ejemplo de la propiedad all](https://i.ibb.co/Kjp1SMV/post1.png)

En resumen, puede utilizar la propiedad all para restablecer todas las propiedades CSS de un elemento a sus valores `iniciales` o heredados, o para heredar todas las propiedades CSS de su elemento padre. La elección del valor a utilizar depende del caso de uso específico y del comportamiento deseado.

## Advertencias
Sin embargo, el uso de `all: unset` tiene algunas advertencias. En primer lugar, no todas las propiedades se restablecen completamente con `all: unset`. Algunas propiedades, como `display`, `visibility` y `float`, se restablecen a sus valores iniciales, mientras que otras, como `padding` y `margin`, no se restablecen en absoluto. Además, algunas propiedades que se restablecen con `all: unset` pueden tener consecuencias no deseadas, como restablecer el tamaño de la fuente o el color de fondo.

## Compatibilidad con navegadores
El uso de la propiedad `all` está ampliamente soportado por los navegadores modernos y no supone un problema para la mayoría de las aplicaciones actuales. La única excepción notable es Internet Explorer y Opera Mini, que no admiten esta característica. No obstante, siempre es aconsejable probar a fondo el código en los navegadores y dispositivos a los que vaya a dirigirse, para asegurarse de que todo funciona como se espera.

## Resumen
En resumen, `all: unset` puede ser una herramienta útil para restablecer estilos, pero es importante comprender sus limitaciones y utilizarla con precaución.