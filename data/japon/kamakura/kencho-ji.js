// Kenchō-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'kencho-ji', city: 'kamakura', name: 'Kenchō-ji', category: 'Templo zen',
  image: 'assets/japon-kencho-ji.jpg',
  lat: 35.3319, lon: 139.5503,
  lead: 'El primero y más antiguo de los cinco grandes templos zen de Kamakura, con una subida final que regala las mejores vistas de la ciudad.',
  duration: '1–1,5 horas',
  price: '500 ¥ adulto',
  stats: [
    {value: '1253', label: 'año de fundación por el regente Hōjō Tokiyori', icon: 'gate'},
    {value: '1º', label: 'primero de los cinco grandes templos zen de Kamakura', icon: 'trophy'},
    {value: '750+', label: 'años de los enebros junto al Butsuden, traídos de China', icon: 'tree'},
    {value: '~15 min', label: 'subida hasta el mirador de Hansōbō', icon: 'peak'}
  ],
  blocks: [
    {type: 'lead', text: 'Kenchō-ji es el primero y el de mayor rango de los cinco grandes templos zen de Kamakura (Kamakura Gozan), un sistema de jerarquía monástica importado de China que colocaba a este templo por encima de los demás. Fundado en 1253 por el regente Hōjō Tokiyori, fue también el primer monasterio zen puro de todo Japón, dedicado en exclusiva a la práctica y enseñanza de esta escuela budista.'},
    {type: 'p', text: 'Su primer abad fue el monje chino Rankei Dōryū (Lanxi Daolong), invitado expresamente desde el continente para dirigir el templo según los usos monásticos de la dinastía Song. El recinto se extiende en línea recta desde la entrada hasta el pie de la montaña, con las principales salas alineadas una tras otra, y termina en un sendero que sube hasta un pequeño santuario con vistas sobre toda la ciudad.'},
    {type: 'heading', text: 'Un maestro chino y los enebros centenarios', icon: 'tree'},
    {type: 'stop', title: 'Semillas traídas desde el continente', text: [
      'Junto al Butsuden (salón del Buda) crecen varios enebros byakushin de gran tamaño que, según la tradición del templo, nacieron de semillas que el propio Rankei Dōryū trajo consigo desde China al fundar el monasterio. Con más de 750 años, son algunos de los árboles más venerables de todo Kamakura y un recordatorio vivo del origen chino de la comunidad zen de la ciudad.'
    ]},
    {type: 'heading', text: 'El Hōjō y su techo de nubes y dragón', icon: 'pagoda'},
    {type: 'stop', title: 'La sala de conferencias y su dragón pintado', text: [
      'El Hōjō, la antigua residencia del abad, se usa hoy como sala de conferencias y ceremonias, y en su techo luce una gran pintura de un dragón entre nubes, obra relativamente reciente encargada para conmemorar el 750 aniversario del templo. Detrás del edificio se extiende un jardín de estilo shinden con un estanque en forma del carácter kanji de «corazón» (心), atribuido al mismo período de fundación.'
    ]},
    {type: 'heading', text: 'La subida a Hansōbō y las vistas sobre Kamakura', icon: 'peak'},
    {type: 'stop', title: 'Tengu, escalones y un mirador que compensa el esfuerzo', text: [
      'Detrás del recinto principal, un sendero de escalones sube en unos 15 minutos hasta el santuario de Hansōbō, guardián protector del templo, flanqueado por estatuas de tengu de nariz alargada. Desde el mirador contiguo, en días despejados, se domina buena parte de Kamakura y de la bahía de Sagami, y con suerte incluso se distingue el monte Fuji al fondo: la recompensa por ser el templo con la subida más exigente de los cinco grandes zen de la ciudad.'
    ]},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Kenchō-ji fue el primer monasterio dedicado en exclusiva a la práctica zen que se fundó en Japón, en 1253.',
      'Los enebros junto al Butsuden se consideran descendientes de semillas traídas de China hace más de siete siglos por el fundador del templo.',
      'Ocupa el primer puesto del sistema Kamakura Gozan, la jerarquía de los cinco grandes templos zen de la ciudad.'
    ]}
  ],
  hours: 'Todos los días de 8:30 a 16:30.',
  hoursSource: 'https://www.kenchoji.com/en/',
  tickets: 'La entrada se compra en la taquilla del propio recinto.',
  official: 'https://www.kenchoji.com/en/',
  tips: [
    'Deja tiempo para subir hasta Hansōbō: es la parte con mejores vistas y muchos visitantes no llegan hasta allí.',
    'Combina la visita con Engaku-ji, muy cerca en la misma línea de templos zen al norte de la ciudad.'
  ],
  access: 'Unos 20 minutos a pie desde la estación de Kamakura, o unos 15 minutos en autobús desde la misma estación (parada Kenchō-ji).'
});
