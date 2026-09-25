// Santuario Tsurugaoka Hachimangū — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'tsurugaoka-hachimangu', city: 'kamakura', name: 'Santuario Tsurugaoka Hachimangū', category: 'Santuario', reviewed: '2026-09',
  image: 'assets/japon-tsurugaoka-hachimangu.jpg',
  lat: 35.3258, lon: 139.5564,
  lead: 'El santuario sintoísta más importante de Kamakura, dedicado al dios patrón de los samurái.',
  duration: '45–60 min',
  price: 'Acceso al santuario gratuito',
  stats: [
    {value: '1063', label: 'año de fundación original en la costa de Yuigahama', icon: 'gate'},
    {value: '1180', label: 'año del traslado al emplazamiento actual, por Minamoto no Yoritomo', icon: 'scroll'},
    {value: '1192', label: 'año en que Kamakura se convierte en sede del shogunato', icon: 'flame'},
    {value: '~800 m', label: 'longitud del camino sagrado Wakamiya-ōji hasta el santuario', icon: 'footprints'}
  ],
  blocks: [
    {type: 'lead', text: 'Tsurugaoka Hachimangū está dedicado a Hachiman, el dios patrón del clan Minamoto y protector de los samurái, y ha sido durante siglos el centro religioso y simbólico de Kamakura, la ciudad que Minamoto no Yoritomo convirtió en sede de gobierno militar en 1192, tras un siglo como capital política y militar de Japón.'},
    {type: 'p', text: 'El santuario actual no es el original: Minamoto no Yoriyoshi lo fundó en 1063 junto a la playa de Yuigahama, y fue Yoritomo quien en 1180 ordenó trasladarlo al pie del monte Ōkura, en su emplazamiento definitivo, para convertirlo en el santuario tutelar del nuevo régimen militar.'},
    {type: 'heading', text: 'El camino sagrado Wakamiya-ōji', icon: 'footprints'},
    {type: 'stop', title: 'Dankazura, la calzada elevada entre cerezos', text: [
      'Desde el santuario nace el camino sagrado de Wakamiya-ōji, que lo conecta con el centro de la ciudad y con la propia estación de Kamakura. Su tramo central, llamado Dankazura, es una calzada ligeramente elevada sobre el resto de la calle, flanqueada por cerezos y azaleas que en primavera forman un túnel de flores muy fotografiado, y que puede recorrerse tanto para llegar al santuario como para volver de él.'
    ]},
    {type: 'heading', text: 'Terrazas, escalinatas y siglos de patrocinio samurái', icon: 'tower'},
    {type: 'stop', title: 'Un recinto en varios niveles', text: [
      'El recinto se organiza en distintas terrazas y escalinatas que suben desde la entrada hasta el santuario superior, con estanques, puentes y pabellones que reflejan siglos de patrocinio samurái y de celebraciones vinculadas a la historia militar de la ciudad, desde torneos de tiro con arco a caballo hasta festivales estacionales que se siguen celebrando hoy.'
    ]},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'El tramo Dankazura del camino Wakamiyaōji se construyó ligeramente elevado sobre el resto de la calzada, una disposición poco habitual en los accesos a santuarios japoneses.',
      'El santuario original de 1063 estaba junto al mar, en Yuigahama; el que se visita hoy es el que Yoritomo mandó levantar en 1180 en su ubicación definitiva.'
    ]}
  ],
  hours: 'El recinto exterior es de acceso libre; los edificios y oficinas tienen horario propio, habitualmente de 6:00 a 21:00.',
  hoursSource: 'https://www.hachimangu.or.jp/en/',
  tickets: 'No se necesita entrada para el recinto principal.',
  official: 'https://www.hachimangu.or.jp/en/',
  tips: [
    'Recorre a pie el camino Wakamiyaōji y su tramo Dankazura, especialmente en la floración de los cerezos.',
    'Aprovecha la visita para bajar después por la calle comercial Komachi, que conecta el santuario con la estación.'
  ],
  access: 'A unos 10 minutos a pie desde la estación de Kamakura, siguiendo la calle Wakamiyaōji hacia el norte.'
});
