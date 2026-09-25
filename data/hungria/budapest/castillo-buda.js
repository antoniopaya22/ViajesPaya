// Castillo de Buda — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'castillo-buda', city: 'budapest', zone: 'castillo-de-buda', name: 'Castillo de Buda', category: 'Castillo y museo', reviewed: '2026-09',
  image: 'assets/budapest-castillo.jpg',
  lat: 47.4964, lon: 19.0398,
  lead: 'La fortaleza real sobre el Danubio, fundada en el siglo XIII y reconstruida varias veces tras guerras y bombardeos.',
  duration: '90–150 min',
  stats: [
    {value: '1265', label: 'año de fundación de la fortaleza, bajo el rey Béla IV', icon: 'scroll'},
    {value: '1987', label: 'declarado Patrimonio de la Humanidad por la UNESCO', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'La colina del castillo se fortificó por primera vez en 1265, bajo el rey Béla IV. El palacio barroco que se ve hoy se construyó entre 1749 y 1769, quedó gravemente dañado durante el asedio de Budapest de 1945 y se reconstruyó después en una versión simplificada bajo el régimen comunista.'},
    {type: 'p', text: 'Junto con el resto del Barrio del Castillo y la avenida Andrássy, forma parte del conjunto declarado Patrimonio de la Humanidad por la UNESCO en 1987.'},
    {type: 'heading', text: 'Qué hay dentro', icon: 'eye'},
    {type: 'p', text: 'El recinto alberga hoy la Galería Nacional Húngara, el Museo de Historia de Budapest y la Biblioteca Nacional Széchényi.'}
  ],
  hours: 'Galería Nacional Húngara: martes a domingo 10:00–18:00.',
  official: 'https://en.mng.hu/',
  tips: [
    'Sube en el funicular Budavári Sikló desde la plaza Clark Ádám, o camina por las cuestas del barrio del castillo.'
  ]
});
