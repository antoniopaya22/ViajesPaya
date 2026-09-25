// Castillo de Wawel — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'castillo-wawel', city: 'cracovia', zone: 'wawel', name: 'Castillo de Wawel', category: 'Castillo y museo', reviewed: '2026-09',
  image: 'assets/cracovia-wawel-castillo.jpg',
  lat: 50.0544, lon: 19.9354,
  lead: 'La residencia real de Polonia durante siglos, hoy un museo de arte con tapices, armaduras y las joyas de la corona.',
  duration: '90–120 min',
  stats: [
    {value: '1596', label: 'año en que la capital y la corte se trasladaron a Varsovia', icon: 'scroll'},
    {value: '3,47 M', label: 'visitantes al año, entre los museos más visitados de Polonia', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'Residencia real desde la dinastía Piast hasta los Jagellón, el castillo de Wawel fue sede del gobierno de Polonia hasta que la capital se trasladó a Varsovia en 1596. Varios incendios —en 1305-06, 1499 y 1595— fueron seguidos de reconstrucciones que definieron su aspecto actual.'},
    {type: 'heading', text: 'La Capilla de Segismundo', icon: 'pagoda'},
    {type: 'p', text: 'Tras el incendio de 1499, Segismundo I emprendió entre 1507 y 1536 una reforma renacentista del recinto. La Capilla de Segismundo (1517-1533), mausoleo de los últimos gobernantes Jagellón, está considerada uno de los mejores ejemplos de arte renacentista toscano al norte de los Alpes.'},
    {type: 'p', text: 'Hoy el castillo funciona como museo de arte, con más de 3,4 millones de visitantes al año, y conserva tapices reales, armaduras y las joyas de la corona polaca.'}
  ],
  official: 'https://wawel.krakow.pl/en/',
  tickets: 'Entradas y reservas en el portal oficial de venta.',
  hoursSource: 'https://bilety.wawel.krakow.pl/en',
  tips: [
    'El recinto se divide en varias exposiciones con entrada independiente: decide de antemano cuáles te interesan.',
    'Reserva con antelación en temporada alta; el aforo diario es limitado.'
  ]
});
