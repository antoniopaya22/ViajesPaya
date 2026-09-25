// Monte Misen — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'monte-misen', city: 'miyajima', name: 'Monte Misen', category: 'Naturaleza y senderismo',
  image: 'assets/japon-monte-misen.jpg',
  lat: 34.2872, lon: 132.3266,
  lead: 'La montaña sagrada de Miyajima, con un fuego que arde desde hace más de mil doscientos años y vistas al mar interior de Seto desde su cima.',
  duration: '2–4 horas (funicular + paseo a la cima y templo Daishō-in)',
  price: 'Funicular: alrededor de 2.000 ¥ adulto ida y vuelta (tarifa orientativa)',
  stats: [
    {value:'535 m', label:'altura del monte Misen, el punto más alto de la isla', icon:'peak'},
    {value:'806', label:'año en que, según la leyenda, el monje Kūkai encendió el fuego eterno', icon:'flame'},
    {value:'1,6 km', label:'longitud del funicular Miyajima Ropeway, en dos tramos', icon:'ruler'},
    {value:'7', label:'«maravillas» tradicionales que se buscan por la montaña', icon:'eye'}
  ],
  blocks: [
    {type:'lead', text:'El monte Misen, de 535 metros, es la montaña sagrada de la isla —considerada así desde al menos el siglo IX— y el mirador natural desde el que se entiende por qué Miyajima e Itsukushima son sinónimo de paisaje protegido desde hace siglos.'},
    {type:'p', text:'Desde el parque Momijidani, el funicular Miyajima Ropeway sube en dos tramos, con transbordo en la estación intermedia Kayatani, hasta la estación Shishiiwa, cerca de la cima; el trayecto completo, de aproximadamente 1,6 kilómetros, dura unos 15 minutos. Desde la estación superior queda un último tramo a pie entre bosque y roca hasta el mirador principal.'},
    {type:'heading', text:'El fuego eterno y las siete maravillas', icon:'flame'},
    {type:'stop', title:'El fuego eterno de Reika-dō', text:[
      'La montaña conserva varios enclaves ligados a la tradición budista, agrupados bajo el nombre de «las siete maravillas del monte Misen». La más conocida es el fuego eterno (kiezu-no-hi) que arde en el pequeño salón Reika-dō, cerca de la cima: según la leyenda, el monje Kūkai (Kōbō-Daishi) lo encendió en el año 806 durante un retiro de cien días, y desde entonces no se ha dejado apagar.',
      'Se dice que la llama de la paz de Hiroshima, encendida en 1964 en el Parque Memorial de la Paz, se prendió precisamente con este fuego, un vínculo simbólico entre la montaña sagrada y la ciudad reconstruida tras la Segunda Guerra Mundial.'
    ]},
    {type:'stop', title:'El mirador y el resto de maravillas', text:[
      'Desde el mirador principal, ya cerca de la cima, las vistas alcanzan el mar interior de Seto y las islas cercanas en días despejados. Buscar el resto de las «siete maravillas» —rocas, manantiales y pequeños templos con leyendas propias repartidos por la ladera— da un aliciente extra a la subida más allá de la simple foto del mirador.'
    ]},
    {type:'heading', text:'Bajada por el templo Daishō-in', icon:'pagoda'},
    {type:'stop', title:'Templo Daishō-in, a los pies de la montaña', text:[
      'De bajada, merece la pena desviarse al templo Daishō-in: un templo budista con escaleras flanqueadas por estatuillas, ruedas de sutras giratorias que se hacen girar al pasar —se cree que equivale a leer el sutra completo— y varios salones que suelen quedar fuera de las rutas más rápidas por la isla.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El fuego eterno de Misen se conserva, según la tradición, sin apagarse desde que el monje Kūkai lo encendió hace más de 1.200 años.',
      'Se dice que la llama de la paz de Hiroshima se encendió con este mismo fuego.',
      'Buscar las «siete maravillas» del monte Misen (rocas, manantiales y templos con leyendas propias) da un aliciente extra a la subida más allá del mirador.'
    ]}
  ],
  hours: 'El funicular suele operar aproximadamente de 9:00 a 17:00, con variaciones estacionales.',
  hoursSource: 'https://www.miyajima-ropeway.info/en/',
  tickets: 'El billete del funicular se compra en la estación de Momijidani; consulta la tarifa vigente en la web oficial.',
  official: 'https://www.miyajima-ropeway.info/en/',
  tips: [
    'Si tienes buena forma física, subir a pie desde Momijidani es una alternativa gratuita al funicular, aunque exige varias horas.',
    'Lleva agua: en la cima y en el camino hay pocos puntos de venta.',
    'Baja por el templo Daishō-in para no perderte uno de los templos con más encanto de la isla.'
  ],
  access: 'Funicular Miyajima Ropeway desde la estación de Momijidani (dos tramos con transbordo); también existe una ruta de senderismo a pie desde el mismo parque.'
});
