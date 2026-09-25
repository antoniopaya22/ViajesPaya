// Jardín Sajón — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'jardin-sajon', city: 'varsovia', zone: 'ruta-real', name: 'Jardín Sajón', category: 'Parque', reviewed: '2026-09',
  image: 'assets/varsovia-jardin-sajon.jpg',
  lat: 52.2427, lon: 21.0117,
  lead: 'Uno de los primeros parques públicos del mundo, abierto en 1727, hoy Monumento Nacional de Polonia.',
  duration: '20–30 min',
  stats: [
    {value: '1727', label: 'año de apertura al público, uno de los primeros parques del mundo', icon: 'scroll'},
    {value: '15,5 ha', label: 'superficie del parque', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'El Jardín Sajón abrió al público en 1727, lo que lo convierte en uno de los primeros parques urbanos del mundo, y acogió en 1765 el estreno del primer teatro profesional polaco.'},
    {type: 'p', text: 'El Palacio Sajón que le daba nombre fue volado por los alemanes en 1944, y el propio jardín quedó muy dañado y solo se reconstruyó parcialmente. Hoy es un parque gratuito de 15,5 hectáreas, declarado Monumento Nacional de Polonia en 1994.'}
  ],
  price: 'Acceso libre',
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Combínalo con la vecina Tumba del Soldado Desconocido: están a un paso.'
  ]
});
