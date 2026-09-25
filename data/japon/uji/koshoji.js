// Kōshō-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'koshoji', city: 'uji', name: 'Kōshō-ji', category: 'Templo zen',
  image: 'assets/japon-koshoji.jpg',
  lat: 34.8895, lon: 135.8134,
  lead: 'El primer templo zen sōtō de Japón, con una subida entre arces junto a un arroyo que suena como un koto.',
  duration: '45–60 min',
  price: 'Recinto y jardín gratuitos; 500 ¥ de donativo para entrar al salón principal',
  stats: [
    {value:'1233', label:'año de fundación original por el maestro Dōgen', icon:'gate'},
    {value:'1648', label:'año del traslado y reconstrucción en Uji', icon:'wood'},
    {value:'200 m', label:'longitud aproximada de la subida Kotosaka', icon:'footprints'},
    {value:'1', label:'primer templo zen sōtō fundado en Japón', icon:'trophy'}
  ],
  blocks: [
    {type:'lead', text:'Bastante menos conocido que los grandes templos de Kioto, Kōshō-ji fue el primer templo de la escuela zen sōtō fundado en Japón, en 1233, por el maestro Dōgen, poco después de su regreso de estudiar budismo chan en China. Hoy sigue siendo un monasterio en activo, con un ambiente de recogimiento poco habitual en los puntos más turísticos de Uji.'},
    {type:'p', text:'El templo original se levantó en Fukakusa, al sur de Kioto, y allí Dōgen llegó a redactar buena parte de su obra principal, el Shōbōgenzō, antes de trasladarse a la provincia de Echizen en 1243. Destruido durante los conflictos del periodo Muromachi, fue el señor de Yodo, Nagai Naomasa, quien ordenó reconstruirlo en su ubicación actual de Uji en 1648, encargando la revitalización al maestro Bannan Eiju.'},
    {type:'heading', text:'La subida Kotosaka', icon:'footprints'},
    {type:'stop', title:'Un camino que suena a instrumento de cuerda', text:[
      'La entrada al templo se hace por la Kotosaka, una suave cuesta de piedra de unos 200 metros bordeada de arces, declarada lugar pintoresco de la prefectura de Kioto. Le da nombre el sonido del arroyo que corre junto al camino, que la tradición compara con las notas del koto, el instrumento de cuerda tradicional japonés. En otoño, la subida se llena de hojas rojas y amarillas; en verano, de un verde intenso.'
    ]},
    {type:'stop', title:'La puerta Sanmon, de estilo palaciego', text:[
      'Al final de la cuesta espera la puerta Sanmon, construida en el estilo ryūgū-zukuri («estilo palacio del dragón marino»), poco frecuente en la arquitectura de templos japoneses y que recuerda más bien a un pabellón ceremonial que a una puerta convencional.'
    ]},
    {type:'stop', title:'El salón principal y la práctica del zazen', text:[
      'Dentro, el templo sigue la disposición clásica de «siete salones» (shichidō garan) de un monasterio zen, organizada en torno a la práctica de zazen —la meditación sentada— que Dōgen enseñaba como la esencia misma de la naturaleza búdica. El recinto sigue activo como centro de formación monástica, por lo que conviene visitarlo con el mismo respeto silencioso que pediría cualquier monasterio en funcionamiento.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Kōshō-ji fue el primer templo zen de la escuela sōtō fundado en Japón, cuatro siglos antes de trasladarse a su ubicación actual en Uji.',
      'El nombre de su camino de acceso, Kotosaka, viene del sonido del arroyo que lo acompaña, comparado con las notas de un koto.',
      'Su puerta Sanmon, en estilo ryūgū-zukuri, es una de las más singulares de los templos zen de la región de Kioto.'
    ]}
  ],
  hours: 'Recinto abierto aproximadamente de 9:00 a 17:00.',
  hoursSource: 'https://www.uji-koushouji.jp/en/about/',
  tickets: 'El jardín y la subida Kotosaka son gratuitos; entrar al salón principal pide un donativo de 500 ¥.',
  official: 'https://www.uji-koushouji.jp/en/about/',
  tips: [
    'Es una parada mucho más tranquila que Byōdō-in: agradece visitarla a media mañana entre semana.',
    'La Kotosaka es especialmente bonita en la temporada de arces, a mediados o finales de noviembre.'
  ],
  access: 'Unos 15 minutos a pie desde la estación de Uji (línea Keihan Uji) o 25 minutos desde la estación JR Uji, cruzando el río hacia el sur.'
});
