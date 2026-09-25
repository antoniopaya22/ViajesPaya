// Castillo Real de Varsovia — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'castillo-real', city: 'varsovia', zone: 'casco-antiguo', name: 'Castillo Real', category: 'Castillo y museo', reviewed: '2026-09',
  image: 'assets/varsovia-castillo.jpg',
  lat: 52.2478, lon: 21.0144,
  lead: 'La residencia de los reyes de Polonia, demolida por orden expresa de Hitler en 1939 y reconstruida entre 1971 y 1984.',
  duration: '90–120 min',
  stats: [
    {value: '1619', label: 'año de conclusión de la Torre de Segismundo, de 60 metros', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'La Torre de Segismundo, de 60 metros, se terminó en 1619, y el ala este barroca, obra de Gaetano Chiaveri, en 1747.'},
    {type: 'heading', text: 'Demolido por orden de Hitler', icon: 'flame'},
    {type: 'p', text: 'El 4 de octubre de 1939, Hitler ordenó personalmente su demolición. Desde ese mismo mes, unidades alemanas retiraron suelos, mármoles y esculturas, y en 1944 volaron los muros que quedaban en pie.'},
    {type: 'p', text: 'La reconstrucción, autorizada definitivamente el 20 de enero de 1971, se completó entre 1971 y 1984. Hoy el castillo conserva las salas reales, el salón del trono y obras de Rembrandt y del propio Bellotto.'}
  ],
  hours: 'Martes a domingo 10:00–18:00; cerrado los lunes. Entrada gratuita los miércoles.',
  price: 'Ruta Real: 60/45 PLN. Ruta del Castillo: 95/75 PLN. Ruta Dorada: 110/90 PLN.',
  official: 'https://www.zamek-krolewski.pl/en',
  tips: [
    'Decide de antemano qué ruta te interesa: hay varios recorridos con precios distintos.'
  ]
});
