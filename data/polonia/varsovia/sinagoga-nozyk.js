// Sinagoga Nożyk — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'sinagoga-nozyk', city: 'varsovia', zone: 'muranow', name: 'Sinagoga Nożyk', category: 'Templo', reviewed: '2026-09',
  image: 'assets/varsovia-nozyk.jpg',
  lat: 52.2361, lon: 21.0031,
  lead: 'La única sinagoga de antes de la guerra que sobrevivió en pie en Varsovia, de las más de 400 que llegó a haber, y hoy sigue activa.',
  duration: '20–30 min',
  stats: [
    {value: '1898–1902', label: 'periodo de construcción, financiada por Zalman Nożyk', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Construida entre 1898 y 1902 con la financiación de Zalman Nożyk, es la única sinagoga de las más de 400 que existían en Varsovia antes de la guerra que sobrevivió en pie.'},
    {type: 'p', text: 'Reconstruida entre 1977 y 1983, reabrió el 18 de abril de 1983 y sigue funcionando hoy como sinagoga ortodoxa activa.'}
  ],
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Al ser un templo activo, respeta los horarios de oración al planear la visita.'
  ]
});
