// Rynek Główny — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'rynek-glowny', city: 'cracovia', zone: 'rynek', name: 'Rynek Główny', category: 'Plaza histórica', reviewed: '2026-09',
  image: 'assets/cracovia-rynek-glowny.jpg',
  lat: 50.0617, lon: 19.9373,
  lead: 'La gran plaza medieval que ha sido el corazón de Cracovia desde el siglo XIII, y una de las plazas de mercado más grandes de Europa.',
  duration: '30–60 min',
  stats: [
    {value: '1257', label: 'año del trazado de la plaza, al conceder Cracovia el derecho de Magdeburgo', icon: 'scroll'},
    {value: '200 m', label: 'de lado, uno de los mercados medievales más grandes de Europa', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'El Rynek Główny se trazó en 1257, el mismo año en que Cracovia recibió el derecho de Magdeburgo, y cada uno de sus cuatro lados mide algo más de 200 metros: una de las plazas de mercado medievales más grandes de Europa.'},
    {type: 'p', text: 'Durante siglos fue el lugar donde los reyes recibían el homenaje de sus súbditos y donde también se llevaban a cabo ejecuciones públicas. Hoy sigue siendo el punto de encuentro de la ciudad, rodeado de la Sukiennice, la Torre del Ayuntamiento y la Basílica de Santa María.'},
    {type: 'heading', text: 'La torre del hejnał', icon: 'bell'},
    {type: 'p', text: 'Cada hora, desde la torre más alta de la Basílica de Santa María, un trompetista toca el hejnał mariacki, una llamada que se corta de golpe a mitad de frase. La versión de mediodía se retransmite en directo por la radio pública polaca a todo el país.'},
    {type: 'p', text: 'La tradición del hejnał no se ha mantenido ininterrumpida a lo largo de los siglos: se suspendió más de una vez y se restableció definitivamente en 1810. Hoy la tocan bomberos en activo, que además usan la torre como puesto de vigilancia, turnándose en al menos cuatro trompetistas.'},
    {type: 'heading', text: 'Bajo la plaza', icon: 'rock'},
    {type: 'p', text: 'Bajo el Rynek se conservan antiguas bóvedas comerciales medievales: una sala de unos 100 metros bajo la propia Sukiennice y otra, la Kramy Bogate, de unos 1.200 m² cerca de la calle Sienna. Existen porque el nivel del suelo de la plaza ha subido más de 5 metros en algunos puntos a lo largo de los siglos.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'La leyenda popular liga el corte abrupto del hejnał a un trompetista del siglo XIII herido en la garganta mientras avisaba de un ataque mongol; su primera versión escrita conocida aparece en una novela estadounidense de 1928, «El trompetista de Cracovia», lo que sugiere que la forma en que se cuenta hoy es una popularización literaria del siglo XX más que un relato medieval.',
      'El 11 de junio de 2000, casi 2.000 trompetistas de todo el mundo, de entre 8 y 79 años, tocaron el hejnał a la vez, un récord Guinness.',
      'Durante la ocupación nazi, la plaza se rebautizó como «Adolf Hitler-Platz» y se derribó el monumento a Adam Mickiewicz.'
    ]}
  ],
  official: 'https://krakow.travel/en/55-krakow-main-market-square',
  tips: [
    'Sube a la torre de la Basílica de Santa María a la hora en punto para escuchar el hejnał de cerca.',
    'La plaza se disfruta mejor a primera hora de la mañana o ya de noche, con mucha menos gente.'
  ]
});
