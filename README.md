# ViajesPaya

Guía de viajes estática en español, organizada por **país → ciudad → lugar**. Cada lugar tiene historia, curiosidades, datos de visita, enlace oficial y mapa. Los lugares se pueden guardar en el navegador.

## Ver la web

La web publicada estará en [antoniopaya22.github.io/ViajesPaya](https://antoniopaya22.github.io/ViajesPaya/). Para verla en local:

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000/`. No hace falta instalar dependencias.

## Contenido

- `script.js`: países, ciudades y lugares de España, Italia y Francia, además de la navegación y las funciones de la web.
- `japan.js` y `japan-expanded.js`: guías de Japón organizadas por ciudades y lugares. Las notas personales de viaje se usaron como referencia temática; la web no publica el itinerario ni sus fechas.
- `styles.css`: diseño adaptable a móvil y escritorio.
- `assets/`: fotografías locales y metadatos de atribución.
- `credits.js`: créditos mostrados en la página de imágenes.

Para añadir un lugar, incorpora un objeto a `places` en `script.js` o a `japanPlaces` en `japan.js`. Debe indicar `city`, `slug`, nombre, imagen, historia, curiosidad, horario, precio, forma de obtener entradas, web oficial y coordenadas. La URL se genera automáticamente.

Horarios y tarifas pueden cambiar. Cada ficha enlaza a la fuente oficial y muestra la fecha de revisión de los datos de visita. Conviene revisarlos antes de cada temporada.

## Publicación

El workflow [pages.yml](.github/workflows/pages.yml) publica el contenido de la rama `main` en GitHub Pages al hacer push. GitHub Pages debe estar configurado con **GitHub Actions** como origen; este repositorio ya lo está.
