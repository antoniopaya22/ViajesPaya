// Iglesia de Matías — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'iglesia-matias', city: 'budapest', zone: 'castillo-de-buda', name: 'Iglesia de Matías', category: 'Templo', reviewed: '2026-09',
  image: 'assets/budapest-matias.jpg',
  lat: 47.5021, lon: 19.0347,
  lead: 'La iglesia del barrio del castillo, con un tejado de tejas de cerámica Zsolnay de vivos colores y un pasado como mezquita otomana.',
  duration: '30–45 min',
  stats: [
    {value: '1255', label: 'año desde el que hay una parroquia en este solar', icon: 'scroll'},
    {value: '250.000', label: 'tejas de cerámica Zsolnay en su tejado romboidal', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'Hay una parroquia en este mismo lugar desde 1255. El nombre actual honra al rey Matías Corvino, que se casó aquí dos veces. Durante la ocupación otomana de Buda, la iglesia funcionó como mezquita.'},
    {type: 'p', text: 'Cuenta la tradición que, durante el asedio de liberación de 1686, el derrumbe de un muro dejó a la vista una estatua oculta de la Virgen, visible para los soldados otomanos que oraban en ese momento.'},
    {type: 'heading', text: 'La restauración de Frigyes Schulek', icon: 'pagoda'},
    {type: 'p', text: 'Entre 1874 y 1896, el arquitecto Frigyes Schulek restauró el edificio y añadió su característico tejado de rombos de cerámica Zsolnay, con 250.000 piezas. La iglesia ha acogido varias coronaciones reales, entre ellas la de Francisco José I en 1867 y la de Carlos IV en 1916, la última coronación húngara.'}
  ],
  hours: 'Aproximadamente de 9:00 a 17:00, con variaciones según el calendario litúrgico.',
  official: 'https://www.matyas-templom.hu/en/',
  tickets: 'Entradas y horarios en la web oficial.',
  tips: [
    'Combínala con la vecina Bastión de los Pescadores: están a pocos pasos.'
  ]
});
