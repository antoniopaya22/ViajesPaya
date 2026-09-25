// Palacio de Wilanów — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'palacio-wilanow', city: 'varsovia', zone: 'ruta-real', name: 'Palacio de Wilanów', category: 'Castillo y museo', reviewed: '2026-09',
  image: 'assets/varsovia-wilanow.jpg',
  lat: 52.1651, lon: 21.0917,
  lead: 'El palacio real que se libró de la demolición alemana en 1944 y es museo público desde 1805, uno de los primeros de Polonia.',
  duration: '90–120 min',
  stats: [
    {value: '1677–1696', label: 'periodo de construcción, para el rey Juan III Sobieski', icon: 'scroll'},
    {value: '3 M', label: 'visitantes al año, aproximadamente', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'Construido entre 1677 y 1696 para el rey Juan III Sobieski por el arquitecto Augustyn Wincenty Locci, el palacio de Wilanów mezcla la mansión polaca tradicional con la villa italiana y el palacio francés.'},
    {type: 'p', text: 'Es uno de los pocos grandes palacios de Varsovia que se libró de la demolición sistemática alemana tras el Levantamiento de 1944. Funciona como museo público desde 1805 —uno de los primeros de Polonia— y reabrió tras la guerra en 1962.'}
  ],
  hours: 'Jueves a martes 10:00–16:00 (miércoles 10:00–18:00).',
  price: '70/35 PLN en temporada alta (abril-octubre), 60/30 PLN en temporada baja; solo jardines 15/5 PLN.',
  official: 'https://www.wilanow-palac.pl/en',
  tips: [
    'Está a las afueras del centro: calcula tiempo de desplazamiento adicional.'
  ]
});
