// Senjokaku y pagoda de cinco pisos — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'senjokaku', city: 'miyajima', name: 'Senjokaku y pagoda de cinco pisos', category: 'Templo y arquitectura',
  image: 'assets/japon-senjokaku.jpg',
  lat: 34.2985, lon: 132.3213,
  lead: 'Un enorme salón de madera sin paredes y una pagoda bermellón, una de las estampas más reconocibles de la isla.',
  duration: '20–30 min',
  price: 'Entrada simbólica al Senjokaku (unos 100 ¥)',
  stats: [
    {value:'1587', label:'año en que Toyotomi Hideyoshi ordenó construir el Senjokaku', icon:'wood'},
    {value:'1407', label:'año de construcción de la pagoda Goju-no-tō', icon:'pagoda'},
    {value:'28 m', label:'altura de la pagoda de cinco pisos', icon:'ruler'},
    {value:'857', label:'esterillas de tatami que cabrían, según su nombre, en el salón', icon:'wood'}
  ],
  blocks: [
    {type:'lead', text:'En una pequeña colina junto al santuario de Itsukushima se levantan dos de las construcciones más fotografiadas de Miyajima: el gran salón de madera Senjokaku y, a su lado, la pagoda de cinco pisos Goju-no-tō.'},
    {type:'heading', text:'Un salón que nunca se terminó', icon:'wood'},
    {type:'stop', title:'Senjokaku, el «pabellón de las mil esterillas»', text:[
      'El Senjokaku se construyó por orden de Toyotomi Hideyoshi en 1587 como salón para recitar sutras budistas en memoria de los caídos en combate; su nombre significa literalmente «pabellón de las mil esterillas de tatami», una forma de describir su enorme tamaño, ya que es la mayor estructura de la isla.',
      'El edificio quedó inacabado tras la muerte de Hideyoshi en 1598, apenas once años después de iniciarse las obras, y todavía hoy conserva ese aspecto: una estructura enorme y abierta, sin parte del techo interior ni de sus tablones del suelo, sostenida por gruesas columnas de madera. Hoy forma parte del santuario Hōkoku, dedicado a Hideyoshi y a su leal general Katō Kiyomasa.'
    ]},
    {type:'heading', text:'La pagoda bermellón', icon:'pagoda'},
    {type:'stop', title:'Goju-no-tō, la pagoda de cinco pisos', text:[
      'Junto al Senjokaku se alza la pagoda de cinco pisos Goju-no-tō, construida en 1407 y restaurada en 1533, con 28 metros de altura. Combina elementos de la arquitectura budista japonesa y china, y su silueta bermellón asomando entre los árboles, vista desde el pueblo o desde el mar, es una de las imágenes más repetidas de Miyajima.'
    ]},
    {type:'stop', title:'Las mejores vistas elevadas del santuario', text:[
      'Desde la explanada frente a ambos edificios se obtienen algunas de las mejores vistas elevadas del santuario de Itsukushima y su torii, especialmente atractivas al atardecer.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El Senjokaku nunca llegó a terminarse: la falta de parte del techo y de tablones en el suelo es original, no producto del deterioro.',
      'Su nombre significa literalmente «pabellón de las mil esterillas de tatami», una forma de describir su enorme tamaño.',
      'La pagoda Goju-no-tō, de 1407, es 180 años más antigua que el propio Senjokaku que tiene al lado.'
    ]}
  ],
  hours: 'Recinto exterior de libre acceso; el interior del Senjokaku tiene un pequeño horario de visita diurno.',
  hoursSource: 'https://www.miyajima.or.jp/english/sightseeing/',
  tickets: 'La entrada se paga directamente en el acceso al salón.',
  official: 'https://www.miyajima.or.jp/english/sightseeing/',
  tips: [
    'Sube aquí después de visitar el santuario: la colina ofrece una de las mejores vistas conjuntas del torii y del pueblo.',
    'No hace falta reserva ni demasiado tiempo: es una parada corta pero muy fotogénica.'
  ],
  access: 'A pie, subiendo la pequeña colina justo al lado del santuario de Itsukushima, junto al callejón Yamabe.'
});
