// Plaza de los Héroes — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'plaza-heroes', city: 'budapest', zone: 'andrassy', name: 'Plaza de los Héroes', category: 'Plaza histórica', reviewed: '2026-09',
  image: 'assets/budapest-heroes.jpg',
  lat: 47.5148, lon: 19.0779,
  lead: 'La gran plaza al final de la avenida Andrássy, con el Monumento del Milenio dedicado a los siete jefes magiares fundadores de Hungría.',
  duration: '30–45 min',
  stats: [
    {value: '896', label: 'milenario de la conquista magiara que conmemora el monumento', icon: 'scroll'},
    {value: '36 m', label: 'altura de la columna central, coronada por el arcángel Gabriel', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'La construcción de la plaza comenzó en 1896 para conmemorar el milenario de la conquista magiara del año 896; recibió oficialmente el nombre de «Plaza de los Héroes» en 1932.'},
    {type: 'p', text: 'La columna central, de 36 metros, está coronada por un arcángel Gabriel de bronce de 4,8 metros —obra de György Zala, premiada en la Exposición Universal de París de 1900— que sostiene la Santa Corona y la cruz apostólica doble. En la base aparecen el gran príncipe Árpád y los otros seis jefes magiares fundadores.'},
    {type: 'p', text: 'La plaza está flanqueada por el Museo de Bellas Artes y el Kunsthalle (Sala de Arte), y da paso al parque de la ciudad, Városliget.'}
  ],
  price: 'Acceso libre',
  official: 'https://www.budapestinfo.hu/',
  tips: [
    'Desde aquí es fácil seguir hasta los baños Széchenyi, ya dentro del parque Városliget.'
  ]
});
