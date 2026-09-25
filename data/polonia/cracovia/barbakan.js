// Barbakan — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'barbakan', city: 'cracovia', zone: 'rynek', name: 'Barbakan', category: 'Fortificación', reviewed: '2026-09',
  image: 'assets/cracovia-barbakan.jpg',
  lat: 50.0653, lon: 19.9394,
  lead: 'Una fortaleza circular gótica de finales del siglo XV, una de las tres únicas de su tipo que sobreviven en Europa.',
  duration: '20–30 min',
  stats: [
    {value: 'c. 1498', label: 'año de construcción, tras las derrotas polacas frente a los otomanos', icon: 'gate'},
    {value: '3 m', label: 'grosor de sus muros, con 130 troneras y 7 torretas', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'Construido hacia 1498 tras varias derrotas de Polonia frente a fuerzas otomanas, el Barbakan es una fortaleza circular de 24,4 metros de diámetro interior, con muros de 3 metros de grosor, 130 troneras y 7 torretas: una de las tres únicas fortificaciones de este tipo que se conservan en Europa.'},
    {type: 'p', text: 'Conectado antiguamente a la Puerta de Floriana por un pasadizo cubierto, resistió asedios en 1587, 1655, 1657 y 1792. A comienzos del siglo XIX estuvo a punto de ser demolido, pero se salvó en 1817 gracias a la intervención de dos senadores.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'El Barbakan y el resto del casco antiguo de Cracovia forman parte del Centro Histórico declarado Patrimonio de la Humanidad por la UNESCO en 1978.'
    ]}
  ],
  official: 'https://muzeumkrakowa.pl/en/',
  tips: [
    'Combina la visita con la Puerta de Floriana, a pocos metros: antes estaban unidas por un pasadizo.'
  ]
});
