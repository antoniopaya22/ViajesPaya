// Santuario de Itsukushima — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'itsukushima', city: 'miyajima', name: 'Santuario de Itsukushima', category: 'Santuario', reviewed: '2026-09',
  image: 'assets/miyajima.jpg',
  lat: 34.2960, lon: 132.3197,
  lead: 'Pasarelas rojas sobre el mar y un gran torii que cambia de aspecto con la marea, en un santuario que lleva más de ocho siglos flotando sobre la bahía.',
  duration: '45 min – 1,5 horas',
  price: '300 ¥ adulto',
  stats: [
    {value:'1168', label:'año en que se erigió el primer gran torii sobre la bahía', icon:'gate'},
    {value:'16 m', label:'altura del torii actual, reconstruido en 1875', icon:'ruler'},
    {value:'60 t', label:'peso aproximado del torii, apoyado en el fondo marino sin anclaje', icon:'rock'},
    {value:'1996', label:'declarado Patrimonio de la Humanidad por la UNESCO', icon:'trophy'}
  ],
  blocks: [
    {type:'lead', text:'El santuario se extendió sobre la bahía durante el periodo Heian, a finales del siglo XII, y desde entonces mantiene una relación única con el mar: sus edificios están unidos por pasarelas de madera pensadas para parecer flotar sobre el mar interior de Seto. En su interior se venera a tres deidades hijas de Susanoo, protectoras de la navegación y del mar.'},
    {type:'p', text:'El conjunto combina el santuario principal, salones de plegaria y el gran torii que marca simbólicamente el acceso desde la bahía. Con marea alta, los pasillos y el torii parecen flotar sobre el agua; con marea baja se puede caminar por la arena hasta la base del torii y ver de cerca su estructura, o incluso quedarse a ver el atardecer desde ahí.'},
    {type:'heading', text:'El gran torii, entre agua y arena', icon:'gate'},
    {type:'stop', title:'Un peso propio en vez de cimientos', text:[
      'El torii actual, el octavo desde el original de 1168, se terminó en 1875 y está hecho de madera de alcanforero, elegida por su resistencia a la putrefacción y a los insectos en un entorno marino. Sus pilares principales no están anclados al fondo: se mantienen en pie gracias al enorme peso de la propia estructura, unas 60 toneladas repartidas entre seis pilares.',
      'Con marea baja —conviene consultar la tabla de mareas del día antes de ir— se puede caminar por la arena hasta tocar su base y comprobar de cerca el tamaño de los troncos; con marea alta, en cambio, el torii y el santuario completo dan la sensación de flotar sobre el mar interior de Seto, la imagen más repetida de la isla.'
    ]},
    {type:'heading', text:'El recorrido por el santuario', icon:'footprints'},
    {type:'stop', title:'Escenario noh y salones de música', text:[
      'El recorrido por el santuario va más allá del torii fotografiado por todo el mundo: hay un escenario tradicional de noh y danza sobre el propio mar, salones de música y numerosos rincones con detalles arquitectónicos que premian caminar despacio en vez de solo buscar la foto icónica desde el pasillo principal.'
    ]},
    {type:'stop', title:'La libreta de sellos goshuinchō', text:[
      'Junto al santuario se puede comprar la libreta de sellos y caligrafías goshuinchō, o pedir que se estampe el sello propio de Itsukushima en una que ya se lleve: una costumbre habitual en templos y santuarios de todo Japón y un buen recuerdo de la visita.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El torii se sostiene únicamente por su propio peso: no está anclado al fondo marino con ningún tipo de cimentación.',
      'Con marea baja se puede caminar por la arena hasta la base del torii; con marea alta parece flotar sobre el mar.',
      'Los ciervos de Miyajima pasean libremente por los alrededores del santuario: son animales salvajes, no se les debe tocar ni alimentar.'
    ]}
  ],
  hours: 'El horario de cierre varía a lo largo del año; conviene consultar la tabla oficial antes de tomar el ferri.',
  hoursSource: 'https://itsukushimajinja.jp/en/admission.html',
  tickets: 'La entrada se compra en el acceso al santuario; el trayecto en ferri se paga aparte y desde octubre de 2023 incluye una pequeña tasa turística de 100 ¥.',
  official: 'https://itsukushimajinja.jp/en/',
  tips: [
    'Consulta la tabla de mareas del día antes de ir: marea alta y marea baja ofrecen dos experiencias muy distintas del torii.',
    'Desde el ferri ya se ven el torii y el santuario: si buscas fotos con teleobjetivo, aprovecha también ese tramo.',
    'No alimentes ni toques a los ciervos de la isla; son dóciles pero siguen siendo animales salvajes.'
  ],
  access: 'Ferri desde el embarcadero de Miyajimaguchi (unos 10 minutos de trayecto); desde el muelle de Miyajima el santuario está a pocos minutos a pie bordeando la playa.'
});
