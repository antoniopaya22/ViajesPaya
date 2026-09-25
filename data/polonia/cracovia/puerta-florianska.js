// Puerta de Floriana — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'puerta-florianska', city: 'cracovia', zone: 'rynek', name: 'Puerta de Floriana', category: 'Fortificación', reviewed: '2026-09',
  image: 'assets/cracovia-florianska.jpg',
  lat: 50.0645, lon: 19.9389,
  lead: 'La única de las ocho puertas medievales de Cracovia que sobrevivió al desmantelamiento de las murallas en el siglo XIX.',
  duration: '15–20 min',
  stats: [
    {value: '1307', label: 'primera mención documental de la puerta', icon: 'scroll'},
    {value: '33,5 m', label: 'altura de la torre (34,5 m con la corona barroca)', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'Mencionada por primera vez en 1307 y fortificada en piedra a partir de 1285 por orden del príncipe Leszek II el Negro, tras el ataque tártaro de 1241, la Puerta de Floriana es la única de las ocho puertas medievales originales de Cracovia que no fue derribada por las autoridades austríacas en el siglo XIX.'},
    {type: 'p', text: 'Da comienzo a la calle Floriańska, que baja directamente hasta el Rynek Główny y concentraba, junto con el propio Barbakan, la defensa norte de la ciudad.'}
  ],
  official: 'https://krakow.travel/en',
  tips: [
    'Es el punto de partida natural para bajar hacia el Rynek por la calle Floriańska, llena de fachadas históricas.'
  ]
});
