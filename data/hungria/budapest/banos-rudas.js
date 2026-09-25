// Baños Rudas — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'banos-rudas', city: 'budapest', zone: 'gellert', name: 'Baños Rudas', category: 'Balneario', reviewed: '2026-09',
  image: 'assets/budapest-rudas.jpg',
  lat: 47.4917, lon: 19.0453,
  lead: 'Un baño turco del siglo XVI que conserva su cúpula otomana original, hoy combinado con una piscina panorámica en la azotea.',
  duration: '2–3 horas',
  stats: [
    {value: '1571–72', label: 'año de fundación, bajo el gobernador otomano Sokollu Mustafa Pasha', icon: 'scroll'},
    {value: '14', label: 'edad mínima para entrar', icon: 'clock'}
  ],
  blocks: [
    {type: 'lead', text: 'Los baños Rudas se fundaron en 1571-72 bajo el gobernador otomano de Buda Sokollu Mustafa Pasha, inspirados en los hammams de Estambul. Conservan su cúpula octogonal original y la piscina central de la época otomana.'},
    {type: 'p', text: 'Tras una restauración integral reabierta en 2006, combinan las salas históricas —con jornadas separadas por sexos, como los martes solo para mujeres y los miércoles solo para hombres— con una piscina panorámica moderna en la azotea y sesiones de baño nocturno. El agua es ligeramente radiactiva y rica en sulfato, calcio y magnesio.'}
  ],
  official: 'https://www.rudasfurdo.hu/en/',
  tips: [
    'Comprueba qué días son mixtos: algunas jornadas están reservadas a un solo sexo.',
    'La entrada al baño nocturno se compra solo online con antelación.'
  ]
});
