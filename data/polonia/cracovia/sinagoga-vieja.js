// Sinagoga Vieja — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'sinagoga-vieja', city: 'cracovia', zone: 'kazimierz', name: 'Sinagoga Vieja', category: 'Museo', reviewed: '2026-09',
  image: 'assets/cracovia-sinagoga-vieja.jpg',
  lat: 50.0507, lon: 19.9448,
  lead: 'La sinagoga en pie más antigua de Polonia, hoy un museo sobre la historia judía de Cracovia.',
  duration: '30–45 min',
  stats: [
    {value: 's. XV', label: 'siglo de construcción del edificio original', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'La Sinagoga Vieja es el edificio de sinagoga más antiguo que se conserva en Polonia; las fuentes sitúan su construcción a mediados del siglo XV. Tras un incendio en 1557, el arquitecto italiano Matteo Gucci la reconstruyó en un estilo renacentista con aire de fortificación.'},
    {type: 'p', text: 'Durante la Segunda Guerra Mundial, los ocupantes nazis la usaron como almacén, saquearon sus objetos rituales y, en 1943, ejecutaron junto a sus muros a 30 rehenes polacos. Restaurada entre 1956 y 1959, es hoy una filial del Museo de Cracovia dedicada al nacimiento, la oración, la alimentación y la muerte en la tradición judía de la ciudad.'}
  ],
  official: 'https://muzeumkrakowa.pl/en/branches/old-synagogue',
  tips: [
    'Combina la visita con un paseo por el resto de sinagogas de Kazimierz: están todas a poca distancia entre sí.'
  ]
});
