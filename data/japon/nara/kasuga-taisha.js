// Kasuga Taisha — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'kasuga-taisha', city: 'nara', name: 'Kasuga Taisha', category: 'Santuario',
  image: 'assets/japon-kasuga-taisha.jpg',
  lat: 34.6814, lon: 135.8481,
  lead: 'Fundado en el año 768 como santuario tutelar del poderoso clan Fujiwara, Kasuga Taisha es famoso por sus miles de farolillos de piedra y bronce (tōrō) donados a lo largo de los siglos, repartidos por sus caminos y edificios.',
  duration: '45–75 min',
  price: 'Acceso al recinto exterior gratuito; el santuario interior y el jardín de glicinias cobran entrada',
  stats: [
    {value:'768', label:'año de fundación del santuario', icon:'scroll'},
    {value:'3.000', label:'farolillos de piedra y bronce donados', icon:'lantern'},
    {value:'20 años', label:'periodicidad tradicional de reconstrucción del santuario', icon:'clock'},
    {value:'1998', label:'declarado Patrimonio de la Humanidad', icon:'trophy'}
  ],
  blocks: [
    {type:'lead', text:'El clan Fujiwara, la familia más poderosa de la corte durante los periodos Nara y Heian, fundó Kasuga Taisha en el año 768 para venerar a las cuatro deidades protectoras de su linaje. El santuario forma parte, junto con el bosque primario que lo rodea (Kasugayama), de los lugares declarados Patrimonio de la Humanidad como «Monumentos Históricos de la Antigua Nara» desde 1998.'},
    {type:'p', text:'Tradicionalmente el edificio principal se reconstruía cada veinte años, siguiendo la misma lógica de renovación periódica que otros grandes santuarios sintoístas del país, como el de Ise; hoy la práctica se mantiene en menor medida, centrada sobre todo en la restauración de sus tesoros y pinturas.'},
    {type:'heading', text:'El camino de los mil farolillos', icon:'lantern'},
    {type:'stop', title:'Farolillos de piedra entre el bosque sagrado', text:[
      'El camino de acceso, flanqueado por cientos de farolillos de piedra cubiertos de musgo, es en sí mismo parte de la experiencia; dentro del recinto, los farolillos de bronce colgados de los aleros de los edificios añaden otra capa a la misma tradición de donaciones, acumulada durante más de un milenio por fieles, samuráis y comerciantes.'
    ]},
    {type:'stop', title:'Dos noches al año, todos encendidos a la vez', text:[
      'Dos veces al año, durante los festivales de Setsubun Mantoro (comienzos de febrero) y Obon Mantoro (mediados de agosto), se encienden a la vez los miles de farolillos del santuario, creando un ambiente muy distinto al de una visita diurna cualquiera.'
    ]},
    {type:'heading', text:'El ciervo, mensajero de la deidad', icon:'footprints'},
    {type:'stop', title:'Por qué los ciervos de Nara son sagrados', text:[
      'Según la tradición, la primera de las cuatro deidades del santuario, Takemikazuchi, llegó a Nara desde Ibaraki montada sobre un ciervo blanco para proteger la nueva capital; desde entonces el ciervo se considera mensajero sagrado de Kasuga Taisha, lo que explica en parte por qué son tan venerados en toda la ciudad de Nara y por qué durante siglos matar a uno estuvo penado con la muerte.'
    ]},
    {type:'heading', text:'El bosque sagrado de Kasugayama', icon:'tree'},
    {type:'stop', title:'Casi 1.200 años sin talar un solo árbol', text:[
      'Detrás del santuario se extiende el bosque primario de Kasugayama, unas 298 hectáreas de vegetación protegida desde el año 841 por su carácter sagrado: desde entonces no se ha talado ni cazado en su interior, lo que lo ha convertido en un raro ejemplo de bosque cercano a una gran ciudad que ha crecido sin apenas intervención humana durante más de un milenio. El bosque forma parte, junto con el propio santuario, de la declaración de la UNESCO de 1998 como Patrimonio de la Humanidad.'
    ]},
    {type:'heading', text:'El jardín de las mil plantas del Man’yōshū', icon:'blossom'},
    {type:'stop', title:'Un jardín botánico dedicado a la poesía antigua', text:[
      'Dentro del propio recinto, el Jardín Botánico Man’yō, abierto en 1932, reúne más de 300 especies de plantas mencionadas en el Man’yōshū, la antología de poesía japonesa más antigua que se conserva. Su rincón más fotogénico es el jardín de glicinias, con unas 200 plantas de 20 variedades distintas; entre ellas, el ejemplar conocido como Sunazuri-no-Fuji tiene más de 700 años y florece, como el resto del jardín, entre mediados de abril y comienzos de mayo.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Se calcula que en el recinto y su camino de acceso hay más de 3.000 farolillos de piedra y bronce donados a lo largo de los siglos.',
      'El ciervo es considerado mensajero de la deidad del santuario, lo que explica en parte por qué son tan venerados en toda la ciudad de Nara.',
      'Durante los festivales Mantoro de febrero y agosto se encienden a la vez los miles de farolillos del recinto, una experiencia muy distinta a la visita diurna.',
      'El bosque de Kasugayama, detrás del santuario, no se ha talado desde el año 841: casi 1.200 años de protección casi ininterrumpida.'
    ]}
  ],
  hours: 'El santuario exterior suele abrir de amanecer a atardecer; el santuario interior y el museo tienen horario propio.',
  hoursSource: 'https://www.kasugataisha.or.jp/en/',
  tickets: 'Consulta las tarifas de acceso al santuario interior y al museo en la web oficial.',
  official: 'https://www.kasugataisha.or.jp/en/',
  tips: [
    'Camina despacio por la avenida de farolillos de piedra: es de las postales más singulares del parque de Nara.',
    'Si puedes coincidir con uno de los festivales de farolillos (febrero o agosto), la experiencia cambia por completo.'
  ],
  access: 'A pie desde el templo Tōdai-ji, siguiendo los senderos del parque de Nara hacia el este (unos 20 minutos).'
});
