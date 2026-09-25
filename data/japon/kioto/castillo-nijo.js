// Castillo Nijō — ficha con estructura de bloques.
addJapanPlace({
  slug: 'castillo-nijo', city: 'kioto', name: 'Castillo Nijō', category: 'Castillo',
  image: 'assets/japon-castillo-nijo.jpg',
  lat: 35.0142, lon: 135.7481,
  lead: 'La residencia de los shōgun Tokugawa en Kioto, con suelos que «cantan» al caminar sobre ellos.',
  duration: '1,5–2 horas',
  price: 'Consulta la tarifa vigente en la web oficial',
  stats: [
    {value:'1603', label:'año de construcción, para Tokugawa Ieyasu'},
    {value:'1867', label:'aquí se anunció el fin del shogunato'},
    {value:'400+', label:'cerezos en los jardines del castillo'}
  ],
  blocks: [
    {type:'lead', text:'El castillo Nijō se construyó en 1603 como residencia de Tokugawa Ieyasu, el primer shōgun del periodo Edo, y fue usado por su familia hasta 1867, cuando aquí mismo se anunció la devolución del poder político al emperador y el fin del shogunato. Es uno de los 17 Monumentos Históricos de la Antigua Kioto, Patrimonio de la Humanidad desde 1994.'},
    {type:'stop', title:'Palacio Ninomaru y los suelos de ruiseñor', text:[
      'Tras cruzar la puerta Karamon se accede al palacio Ninomaru, con salas de tatami y puertas correderas decoradas donde se alojaban la residencia y oficinas del shōgun en sus visitas a Kioto. Su rasgo más célebre son los «suelos de ruiseñor»: no fueron diseñados para chirriar, pero el aflojamiento de los clavos con los años creó ese sonido característico, que la leyenda convirtió en un sistema de alarma contra intrusos.'
    ]},
    {type:'stop', title:'Jardín Ninomaru y el palacio Honmaru', text:[
      'El jardín Ninomaru rodea la zona donde antes estaba el palacio Honmaru, destruido por un incendio en el siglo XVIII; el edificio actual, trasladado desde el Palacio Imperial de Katsura, reabrió tras dieciocho años de restauración el 1 de septiembre de 2024. Con más de 400 cerezos, una zona de ciruelos y arces, los jardines del castillo ofrecen distintos colores según la estación.'
    ]}
  ],
  hours: 'De 8:45 a 17:00 (última entrada a las 16:00); cierra del 29 al 31 de diciembre.',
  hoursSource: 'https://nijo-jocastle.city.kyoto.lg.jp/?lang=en',
  tickets: 'Hay audioguía disponible en inglés; no se permiten fotos dentro del palacio Ninomaru.',
  official: 'https://nijo-jocastle.city.kyoto.lg.jp/?lang=en',
  tips: [
    'Camina despacio por el pasillo del Ninomaru para notar el sonido de los suelos de ruiseñor.',
    'Consulta la temporada antes de ir: cerezos en primavera, ciruelos a finales de febrero y arces en otoño cambian mucho el jardín.'
  ],
  access: 'A pie desde la estación de metro Nijōjō-mae (línea Tōzai), justo en la puerta del castillo.'
});
