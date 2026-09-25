// Zoo de Varsovia — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'zoo-varsovia', city: 'varsovia', zone: 'praga', name: 'Zoo de Varsovia', category: 'Parque y naturaleza', reviewed: '2026-09',
  image: 'assets/varsovia-zoo.jpg',
  lat: 52.2564, lon: 21.0364,
  lead: 'El zoo de Praga cuyo director y su esposa escondieron y salvaron a más de 300 personas judías durante la ocupación nazi.',
  duration: '2–3 horas',
  stats: [
    {value: '1928', label: 'año de apertura, el 11 de marzo', icon: 'scroll'},
    {value: '300+', label: 'personas judías escondidas y salvadas por sus directores durante la ocupación', icon: 'heart'}
  ],
  blocks: [
    {type: 'lead', text: 'El zoo de Varsovia abrió el 11 de marzo de 1928 en el barrio de Praga.'},
    {type: 'heading', text: 'Los guardianes del zoo', icon: 'heart'},
    {type: 'p', text: 'Durante la ocupación nazi, su director Jan Żabiński y su esposa Antonina escondieron y salvaron a más de 300 personas judías, usando jaulas y túneles del propio recinto como refugio: la historia en la que se basa el libro y la película «La zoóloga y los niños del Holocausto» («The Zookeeper\'s Wife»). El zoo pasó a llamarse oficialmente en su honor el 1 de enero de 2023.'}
  ],
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Combina la visita con un paseo por el resto del barrio de Praga, al otro lado del río.'
  ]
});
