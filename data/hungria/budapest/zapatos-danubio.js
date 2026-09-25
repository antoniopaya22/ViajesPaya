// Zapatos a orillas del Danubio — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'zapatos-danubio', city: 'budapest', zone: 'centro-pest', name: 'Zapatos a orillas del Danubio', category: 'Memorial', reviewed: '2026-09',
  image: 'assets/budapest-zapatos.jpg',
  lat: 47.5061, lon: 19.0463,
  lead: 'Sesenta pares de zapatos de hierro fundido en el paseo del Danubio, memorial de las víctimas judías fusiladas al borde del río en 1944-45.',
  duration: '15–20 min',
  stats: [
    {value: '2005', label: 'año de inauguración, el 16 de abril', icon: 'scroll'},
    {value: '60', label: 'pares de zapatos de hierro fundido', icon: 'rock'}
  ],
  blocks: [
    {type: 'lead', text: 'Inaugurado el 16 de abril de 2005, este memorial —concebido por el cineasta Can Togay y esculpido por Gyula Pauer— recuerda a los judíos de Budapest asesinados a tiros junto al Danubio por milicianos de la Cruz Flechada durante el invierno de 1944-45.'},
    {type: 'p', text: 'A las víctimas se las obligaba a quitarse los zapatos antes de ser fusiladas, ya que el calzado era un bien valioso y reutilizable: por eso el memorial representa los zapatos, no a las personas. Sesenta pares de zapatos de época, en hierro fundido, se alinean en el paseo, a unos 300 metros al sur del Parlamento.'}
  ],
  price: 'Acceso libre',
  official: 'https://www.budapestinfo.hu/',
  tips: [
    'Está integrado en el paseo público del Danubio: se puede visitar a cualquier hora.'
  ]
});
