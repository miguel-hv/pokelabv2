# Pokelab v2

Estoy replicando en React [mi aplicación hecha en Angular](https://pokelab-by-miguelhv.netlify.app/access)

Se trata de una pequeña aplicación en formato mobile presentando un minijuego donde en función del tipo de pokémon que se haya escogido deja acceder a secciones de la aplicación para conseguir distintos secretos. Una vez se recojan los 3 secretos el minijuego se acaba y se resetea.

El objetivo es probar herramientas y nuevos enfoques pensando en la escalabilidad y mantenibilidad de un proyecto (así que hay cosas innecesarias para una escala tan pequeña pero que están pensadas para un proyecto de escala grande). 

La idea de la aplicación vino a raíz de estudiar los artículos citados a continuación en busca de mejorar la calidad de código de lo que me encuentro en el día a día.

## Testing

Uso vitest/jest para tests de integración. Estoy probando el flujo completo del minijuego de forma que pueda experimentar sin romper la funcionalidad.

## Gestión del estado

Hay una rama donde uso context y otra donde uso redux. En la principal está redux.

## Estilos y arquitectura ITCSS

Los estilos están tomados de la [aplicación de Angular](https://github.com/miguel-hv/poke-lab), donde uso ITCSS como arquitectura de estilos. En esta aplicación uso Material UI.
En vez de implementar modo oscuro, juego con tres estilos según el tipo de pokémon.

## Imágenes
Las imágenes usadas en esta aplicación fueron obtenidas de las siguientes fuentes:
- iconos de [flaticon](https://www.flaticon.com/)
- las imágenes de los secretos están sacadas del usuario [CitronLegacy en civitai.com](https://civitai.com/collections/23688)
- el mapa fue cogido de [esta página](https://wallpapercave.com/w/wp10201004)
- la imagen de Oak para el modal de [aquí](https://www.wikidex.net/wiki/Profesor_Oak_%28anime%29)
- las imágenes de los pokémon en pequeño son [sprites oficiales](https://pokemondb.net/sprites)