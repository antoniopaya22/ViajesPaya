// Engaku-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'engaku-ji', city: 'kamakura', name: 'Engaku-ji', category: 'Templo zen', reviewed: '2026-09',
  image: 'assets/japon-engaku-ji.jpg',
  lat: 35.3378, lon: 139.5494,
  lead: 'Un templo levantado para honrar a los caídos de las invasiones mongolas, con una escalinata de cedros que anuncia su recinto.',
  duration: '1–1,5 horas',
  price: '500 ¥ adulto',
  stats: [
    {value: '1282', label: 'año de fundación por el regente Hōjō Tokimune', icon: 'gate'},
    {value: '2º', label: 'segundo de los cinco grandes templos zen de Kamakura', icon: 'trophy'},
    {value: '1301', label: 'año de fundición de la gran campana Ōgane', icon: 'bell'},
    {value: 'Tesoro Nacional', label: 'categoría del Shariden y de la campana Ōgane', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Engaku-ji ocupa el segundo puesto de los cinco grandes templos zen de Kamakura y nació en 1282 por encargo del regente Hōjō Tokimune, como monasterio conmemorativo para honrar a los soldados caídos —tanto japoneses como mongoles— durante las dos invasiones mongolas de 1274 y 1281. Tokimune, que había dirigido la defensa del país, invitó como fundador y primer abad al monje chino Mugaku Sogen (Wuxue Zuyuan).'},
    {type: 'p', text: 'El recinto se extiende en varias terrazas escalonadas por la ladera del monte, pegado a la vía del tren que lleva a la estación de Kita-Kamakura: de hecho, las vías cruzan literalmente parte del antiguo terreno del templo, una curiosidad que sorprende a quien llega por primera vez en el mismo tren.'},
    {type: 'heading', text: 'Una escalinata de cedros hasta la entrada', icon: 'wood'},
    {type: 'stop', title: 'El primer tramo del recinto', text: [
      'Nada más cruzar la Sōmon, la primera puerta, una escalinata de piedra flanqueada por altos cedros sube hasta la Sanmon, la gran puerta de dos plantas que marca la verdadera entrada al templo. Es uno de los accesos más fotografiados de los cinco grandes templos zen, especialmente en otoño, cuando los arces de alrededor tiñen el camino de rojo.'
    ]},
    {type: 'heading', text: 'El Shariden, relicario de un diente de Buda', icon: 'pagoda'},
    {type: 'stop', title: 'Un tesoro nacional que solo se ve por fuera', text: [
      'En lo más alto del recinto se encuentra el Shariden, la sala que conserva —según la tradición del templo— un diente del propio Buda histórico, traído de China. El edificio actual, reconstruido tras el gran terremoto de 1923, está considerado Tesoro Nacional por su arquitectura de estilo Song, aunque el interior no se abre al público salvo en fechas señaladas.'
    ]},
    {type: 'heading', text: 'La gran campana Ōgane', icon: 'bell'},
    {type: 'stop', title: 'La campana más grande de Kamakura', text: [
      'En lo alto de una escalinata aparte, cerca de la entrada, cuelga la Ōgane, fundida en 1301 y considerada la mayor campana de Kamakura y otro de los Tesoros Nacionales del templo. Se toca en ocasiones especiales, entre ellas la ceremonia de Nochevieja, cuando decenas de visitantes hacen cola para golpearla ellos mismos.'
    ]},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Engaku-ji se fundó para honrar a los caídos de ambos bandos —japonés y mongol— de las invasiones de 1274 y 1281.',
      'Parte de las vías del tren de la línea JR Yokosuka atraviesa terreno que perteneció originalmente al templo.',
      'La campana Ōgane, fundida en 1301, es la más grande de Kamakura y está clasificada como Tesoro Nacional.'
    ]}
  ],
  hours: 'Todos los días de 8:00 a 16:30 (hasta las 16:00 de diciembre a febrero).',
  hoursSource: 'https://www.engakuji.or.jp/en/',
  tickets: 'La entrada se compra en la taquilla del propio recinto.',
  official: 'https://www.engakuji.or.jp/en/',
  tips: [
    'Llega en tren hasta Kita-Kamakura: la salida de la estación da casi directamente a la entrada del templo.',
    'Combina la visita con Kenchō-ji, a poca distancia caminando por la misma zona de templos zen.'
  ],
  access: 'A 1 minuto a pie de la estación de Kita-Kamakura (línea JR Yokosuka), la más cercana de todo el recinto zen de Kamakura.'
});
