// Archicatedral de San Juan — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'catedral-san-juan', city: 'varsovia', zone: 'casco-antiguo', name: 'Archicatedral de San Juan', category: 'Templo', reviewed: '2026-09',
  image: 'assets/varsovia-catedral.jpg',
  lat: 52.2474, lon: 21.0136,
  lead: 'La catedral gótica de Varsovia, fundada en 1390, donde se juró la Constitución del 3 de mayo y que quedó reducida a escombros en 1944.',
  duration: '30–45 min',
  stats: [
    {value: '1390', label: 'año de fundación de la iglesia original', icon: 'scroll'},
    {value: '90%', label: 'de sus muros destruidos por un comando alemán en noviembre de 1944', icon: 'flame'}
  ],
  blocks: [
    {type: 'lead', text: 'Fundada en 1390 en estilo gótico mazoviano, la catedral fue el escenario en 1791 donde el rey Estanislao Augusto Poniatowski repitió el juramento de la Constitución del 3 de mayo.'},
    {type: 'p', text: 'Un bombardeo previo ya había destruido su retablo barroco; en noviembre de 1944, un comando alemán de demolición («Vernichtungskommando») voló el edificio, destruyendo un 90% de sus muros. El exterior actual se reconstruyó después de la guerra según su presunta forma gótica del siglo XIV, a partir de grabados e ilustraciones históricas.'}
  ],
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Está a un paso de la plaza del Mercado: se puede combinar fácilmente con esa visita.'
  ]
});
