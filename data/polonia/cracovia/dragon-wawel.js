// Dragón de Wawel y su guarida — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'dragon-wawel', city: 'cracovia', zone: 'wawel', name: 'Dragón de Wawel', category: 'Leyenda y paisaje', reviewed: '2026-09',
  image: 'assets/cracovia-dragon.jpg',
  lat: 50.0536, lon: 19.9345,
  lead: 'La estatua de bronce que escupe fuego de verdad, a los pies de la colina de Wawel, y la leyenda medieval del dragón que aterrorizaba la ciudad.',
  duration: '20–30 min',
  stats: [
    {value: 's. XIII', label: 'siglo del primer relato conocido de la leyenda', icon: 'scroll'},
    {value: '1972', label: 'año de instalación de la estatua de Bronisław Chromy', icon: 'flame'}
  ],
  blocks: [
    {type: 'lead', text: 'El relato más antiguo conocido de la leyenda del dragón de Wawel se remonta al siglo XIII: un dragón devorador de ganado aterroriza Cracovia bajo el reinado del legendario rey Krak, exigiendo tributo semanal.'},
    {type: 'p', text: 'En la versión más popular, un aprendiz de zapatero llamado Skuba rellena una oveja con azufre; el dragón se la come y, para calmar el ardor, bebe agua del Vístula hasta que revienta.'},
    {type: 'heading', text: 'La estatua que respira fuego', icon: 'flame'},
    {type: 'p', text: 'Junto a la Guarida del Dragón (Smocza Jama), en la base de la colina, el escultor Bronisław Chromy diseñó en 1969 una estatua de bronce con siete cabezas, instalada en 1972: un surtidor de gas hace que respire fuego de verdad cada pocos minutos.'}
  ],
  official: 'https://krakow.travel/en/64-krakow-dragons-den',
  tips: [
    'La Guarida del Dragón baja desde la colina de Wawel hasta la orilla del Vístula: es una visita corta y muy popular con niños.'
  ]
});
