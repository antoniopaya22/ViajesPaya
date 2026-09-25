// Bastión de los Pescadores — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'bastion-pescadores', city: 'budapest', zone: 'castillo-de-buda', name: 'Bastión de los Pescadores', category: 'Mirador', reviewed: '2026-09',
  image: 'assets/budapest-bastion.jpg',
  lat: 47.5023, lon: 19.0344,
  lead: 'Las terrazas neorrománicas con las mejores vistas del Parlamento y el Danubio, construidas para celebrar el milenio de Hungría.',
  duration: '30–45 min',
  stats: [
    {value: '1895–1902', label: 'periodo de construcción, por Frigyes Schulek', icon: 'scroll'},
    {value: '7', label: 'torres, una por cada uno de los siete jefes magiares fundadores', icon: 'tower'}
  ],
  blocks: [
    {type: 'lead', text: 'Estas terrazas neorrománicas se construyeron entre 1895 y 1902, diseñadas por Frigyes Schulek para conmemorar el milenio de la llegada de los magiares en el año 895-896.'},
    {type: 'p', text: 'Sus siete torres representan a los siete jefes magiares que fundaron Hungría. El nombre recuerda al gremio de pescadores que, según la tradición, defendía antiguamente este tramo de la muralla, no una función pesquera del propio lugar.'}
  ],
  price: 'Terrazas bajas de acceso libre; las plataformas superiores tienen entrada de pago en temporada alta.',
  official: 'https://fishermansbastion.com/',
  tips: [
    'Ve al atardecer: las vistas sobre el Parlamento iluminado, al otro lado del río, son de las mejores de la ciudad.'
  ]
});
