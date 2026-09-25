// Catedral de Wawel — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'catedral-wawel', city: 'cracovia', zone: 'wawel', name: 'Catedral de Wawel', category: 'Templo', reviewed: '2026-09',
  image: 'assets/cracovia-wawel-catedral.jpg',
  lat: 50.0539, lon: 19.9354,
  lead: 'El lugar de coronación de los reyes de Polonia durante más de cuatro siglos, y su panteón nacional.',
  duration: '45–60 min',
  stats: [
    {value: '1320–1764', label: 'periodo en que se coronó aquí a los monarcas polacos', icon: 'trophy'},
    {value: '~13 t', label: 'peso de la campana de Segismundo, que necesita 12 campaneros', icon: 'bell'}
  ],
  blocks: [
    {type: 'lead', text: 'Desde la coronación de Ladislao el Breve en 1320 hasta la de Augusto III en 1764, la catedral de Wawel fue el escenario donde se coronaba a los monarcas de Polonia.'},
    {type: 'heading', text: 'Panteón de reyes y poetas', icon: 'scroll'},
    {type: 'p', text: 'Sus criptas reales guardan los restos de monarcas desde Ladislao el Breve hasta Augusto II el Fuerte, además de Tadeusz Kościuszko, Józef Piłsudski, Władysław Sikorski y los poetas Adam Mickiewicz (1890) y Juliusz Słowacki (1927). En 1946, un joven Karol Wojtyła —el futuro Juan Pablo II— celebró aquí su primera misa como sacerdote, en la cripta de San Leonardo.'},
    {type: 'p', text: 'La campana de Segismundo, fundida en 1520, pesa cerca de 13 toneladas y necesita 12 campaneros para tocar; solo suena en ocasiones de importancia nacional o religiosa.'}
  ],
  official: 'https://wawel.krakow.pl/en/',
  tips: [
    'La entrada a la catedral suele ser independiente de la del castillo: comprueba qué recorridos incluye cada entrada.'
  ]
});
