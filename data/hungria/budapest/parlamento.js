// Parlamento de Hungría — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'parlamento', city: 'budapest', zone: 'centro-pest', name: 'Parlamento de Hungría', category: 'Monumento', reviewed: '2026-09',
  image: 'assets/budapest-parlamento.jpg',
  lat: 47.5070, lon: 19.0458,
  lead: 'El edificio más largo de Hungría cuando se construyó, a orillas del Danubio, y hoy el hogar de la Santa Corona húngara.',
  duration: '60–90 min',
  stats: [
    {value: '268 m', label: 'longitud del edificio, con 691 estancias', icon: 'ruler'},
    {value: '96 m', label: 'altura de la cúpula, la misma que la Basílica de San Esteban', icon: 'peak'}
  ],
  blocks: [
    {type: 'lead', text: 'Construido entre 1885 y 1904 (inaugurado en 1896 para el milenario de Hungría) por el arquitecto Imre Steindl, el Parlamento medía 268 metros de largo y 96 de alto: el edificio más grande de Hungría en su momento, con 691 estancias y 242 estatuas. La altura de la cúpula iguala deliberadamente a la de la Basílica de San Esteban, como un equilibrio simbólico entre el poder civil y el religioso.'},
    {type: 'heading', text: 'La Santa Corona de Hungría', icon: 'trophy'},
    {type: 'p', text: 'Desde el 1 de enero de 2000, la Santa Corona húngara se expone en la sala central de la cúpula, trasladada desde el Museo Nacional. Sus esmaltes se datan hacia la década de 1070, posible regalo del emperador bizantino Miguel VII a Géza I. Recuperada por tropas estadounidenses el 4 de mayo de 1945, se custodió en Fort Knox durante buena parte de la Guerra Fría y fue devuelta a Hungría el 6 de enero de 1978 por el secretario de Estado estadounidense Cyrus Vance.'}
  ],
  official: 'https://latogatokozpont.parlament.hu/en',
  tickets: 'La visita, que incluye la sala de la corona, requiere reserva previa en el portal oficial.',
  tips: [
    'Reserva con antelación: las visitas guiadas suelen agotarse en temporada alta.',
    'Las mejores vistas exteriores son desde la otra orilla del Danubio, en Buda, sobre todo al atardecer.'
  ]
});
