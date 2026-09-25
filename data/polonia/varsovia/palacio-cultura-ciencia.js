// Palacio de la Cultura y la Ciencia — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'palacio-cultura-ciencia', city: 'varsovia', zone: 'ruta-real', name: 'Palacio de la Cultura y la Ciencia', category: 'Mirador', reviewed: '2026-09',
  image: 'assets/varsovia-palacio-cultura.jpg',
  lat: 52.2319, lon: 21.0067,
  lead: 'El rascacielos de 237 metros que la URSS «regaló» a Varsovia, hoy el edificio más discutido —y más fotografiado— de la ciudad.',
  duration: '30–60 min',
  stats: [
    {value: '237 m', label: 'altura del edificio', icon: 'peak'},
    {value: '1952–1955', label: 'periodo de construcción', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Construido entre 1952 y 1955 a raíz de un acuerdo polaco-soviético firmado el 5 de abril de 1952, el Palacio de la Cultura y la Ciencia se dedicó a Stalin al completarse. Su arquitecto, Lev Rudnev, lo diseñó siguiendo el estilo de los rascacielos estalinistas moscovitas conocidos como las «Siete Hermanas».'},
    {type: 'p', text: 'Con 237 metros de altura, se percibe ampliamente como un símbolo de la dominación soviética, y ha recibido apodos como «Pekín», «la jeringuilla» o «el cohete de Stalin».'},
    {type: 'heading', text: 'La terraza panorámica', icon: 'eye'},
    {type: 'p', text: 'La planta 30, a 114 metros, alberga una terraza panorámica abierta todos los días de 10:00 a 20:00.'}
  ],
  price: '30 PLN adulto, 25 PLN reducida',
  official: 'https://pkin.pl/en/viewing-terrace',
  tips: [
    'Sube al atardecer: la vista sobre toda Varsovia mejora mucho con la luz baja.'
  ]
});
