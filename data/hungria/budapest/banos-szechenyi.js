// Baños Széchenyi — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'banos-szechenyi', city: 'budapest', zone: 'andrassy', name: 'Baños Széchenyi', category: 'Balneario', reviewed: '2026-09',
  image: 'assets/budapest-szechenyi.jpg',
  lat: 47.5185, lon: 19.0817,
  lead: 'El mayor complejo termal de Europa, en el parque Városliget, famoso por sus piscinas exteriores donde se juega al ajedrez con el agua humeando.',
  duration: '2–3 horas',
  stats: [
    {value: '1909–1913', label: 'periodo de construcción, en estilo neobarroco', icon: 'scroll'},
    {value: '6 M litros', label: 'de agua termal al día, entre sus dos pozos', icon: 'droplet'}
  ],
  blocks: [
    {type: 'lead', text: 'Construidos entre 1909 y 1913 por el arquitecto Győző Czigler en estilo neobarroco, los baños Széchenyi se consideran el complejo termal médico más grande de Europa.'},
    {type: 'p', text: 'Se abastecen de dos pozos: el original, perforado por Vilmos Zsigmondi entre 1865 y 1875 hasta los 975 metros, y un segundo hallado en 1938 a 1.256 metros; entre ambos suman unos 6 millones de litros diarios de agua caliente, entre 74 y 77 °C en origen. El complejo reúne 3 piscinas exteriores y 15 interiores, y es célebre por las partidas de ajedrez que se juegan en sus piscinas al aire libre.'}
  ],
  hours: 'Aproximadamente lunes a jueves 7:00–20:00, viernes 7:00–22:00, fines de semana 8:00–20:00 (comprueba el horario estacional).',
  official: 'https://www.szechenyifurdo.hu/en/',
  tips: [
    'Lleva bañador, chanclas y una toalla, o alquílalos allí mismo.'
  ]
});
