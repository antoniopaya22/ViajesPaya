// Pabellón Ukimido — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'ukimido', city: 'nara', name: 'Pabellón Ukimido', category: 'Paisaje y arquitectura', reviewed: '2026-09',
  image: 'assets/japon-ukimido.jpg',
  lat: 34.6788, lon: 135.8425,
  lead: 'Un pequeño pabellón hexagonal de madera que parece flotar sobre el estanque Sagi, uno de los rincones más fotografiados del parque de Nara fuera de los grandes templos.',
  duration: '15–20 min',
  price: 'Gratuito',
  stats: [
    {value:'1916', label:'año de construcción del pabellón original', icon:'clock'},
    {value:'1991–94', label:'años de su restauración más reciente', icon:'wood'},
    {value:'6', label:'lados de su planta hexagonal', icon:'pagoda'},
    {value:'agosto', label:'mes del festival de linternas Nara Tōkae junto al estanque', icon:'lantern'}
  ],
  blocks: [
    {type:'lead', text:'Construido en 1916 sobre el estanque Sagi-ike, en pleno corazón del parque de Nara, el pabellón Ukimido es una pequeña estructura hexagonal de madera y corteza de ciprés unida a la orilla por un puente corto. Su nombre significa literalmente «pabellón flotante», por la sensación que transmite su emplazamiento sobre el agua.'},
    {type:'p', text:'El pabellón que se ve hoy es en realidad el resultado de una reconstrucción integral llevada a cabo entre 1991 y 1994, después de que el edificio original se deteriorara con el paso de las décadas. El enclave —un pequeño salón de madera junto al agua, rodeado de árboles— sigue una tradición paisajística mucho más antigua en los jardines japoneses, pensada como punto de descanso y contemplación dentro de un recorrido más amplio.'},
    {type:'heading', text:'El mejor momento para la foto', icon:'eye'},
    {type:'stop', title:'Un reflejo que cambia con la luz y las estaciones', text:[
      'El reflejo del pabellón en la superficie en calma del estanque Sagi varía mucho según la hora del día: al amanecer y al atardecer, cuando el agua está más quieta y la luz es más rasante, la imagen especular del Ukimido se vuelve casi perfecta.',
      'En primavera lo enmarcan los cerezos en flor, en verano los crespones (lagerstroemia) que bordean el agua, y en otoño el momiji de los árboles cercanos añade otra capa de color a la escena, convirtiendo este rincón discreto en uno de los más fotografiados del parque.'
    ]},
    {type:'heading', text:'Iluminado en agosto', icon:'lantern'},
    {type:'stop', title:'El festival de linternas Nara Tōkae', text:[
      'Durante unas noches de agosto, el estanque Sagi y el propio pabellón se iluminan con miles de pequeñas velas repartidas por sus orillas como parte del festival Nara Tōkae, uno de los eventos nocturnos más populares de la ciudad en pleno verano, muy distinto a la visita tranquila de cualquier otro día del año.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Su nombre, Ukimido, significa literalmente «pabellón flotante», por la sensación que transmite su emplazamiento junto al agua.',
      'El edificio actual, aunque con más de un siglo de historia desde su primera construcción en 1916, es fruto de una restauración completa realizada entre 1991 y 1994.',
      'Es un lugar mucho más tranquilo que los grandes templos cercanos, ideal para hacer una pausa en el paseo por el parque.'
    ]}
  ],
  hours: 'Acceso libre en todo momento, como el resto del parque.',
  hoursSource: 'https://nara-park.com/',
  tickets: 'No se necesita entrada.',
  official: 'https://nara-park.com/',
  tips: [
    'Combínalo con el paseo hacia Kasuga Taisha o el estanque Sarusawa: está de camino entre varios puntos del parque.',
    'Ve a primera hora de la mañana o al atardecer para ver el pabellón reflejado en el agua en calma.',
    'Si coincides con el festival Nara Tōkae, en agosto, acércate por la noche: el estanque se ilumina con velas.'
  ],
  access: 'A pie dentro del parque de Nara, entre el templo Tōdai-ji y el santuario Kasuga Taisha.'
});
