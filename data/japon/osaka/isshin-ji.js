// Isshin-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'isshin-ji', city: 'osaka', zone: 'tennoji', name: 'Isshin-ji', category: 'Templo',
  image: 'assets/japon-isshin-ji.jpg',
  lat: 34.6595, lon: 135.5136,
  lead: 'Un templo de puerta ultramoderna famoso por sus estatuas de Buda hechas con los restos de cientos de miles de fieles fallecidos.',
  duration: '30–45 min',
  price: 'Entrada gratuita',
  stats: [
    {value:'1185', label:'año tradicional de fundación, por el monje Hōnen', icon:'scroll'},
    {value:'1854', label:'año en que empezó la tradición de los okotsu butsu', icon:'flame'},
    {value:'13', label:'estatuas de Buda «de hueso» conservadas hoy', icon:'trophy'},
    {value:'150.000+', label:'personas cuyas cenizas se mezclan en cada nueva estatua', icon:'heart'}
  ],
  blocks: [
    {type:'lead', text:'Fundado hacia 1185 por Hōnen, fundador de la escuela budista de la Tierra Pura (Jōdo), en un terreno donado por Nene, esposa de Toyotomi Hideyoshi, Isshin-ji combina una llamativa puerta de cristal, acero y hormigón con una tradición única en Japón: sus estatuas de Buda elaboradas con las cenizas de cientos de miles de fieles fallecidos.'},
    {type:'p', text:'El propio Tokugawa Ieyasu se alojó en este templo durante el Asedio de Osaka de 1614, antes de que el conflicto acabara por completo con el primer castillo de la ciudad.'},
    {type:'heading', text:'Los okotsu butsu, «budas de hueso»', icon:'flame'},
    {type:'stop', title:'Un actor de kabuki que dio origen a la tradición', text:[
      'La tradición comenzó en 1854, cuando el actor de kabuki Ichikawa Danjūrō VIII pidió ser enterrado en el templo; a partir de entonces, cada vez más familias depositaron aquí las urnas de sus difuntos, hasta el punto de que en apenas treinta años ya había más de 50.000 urnas acumuladas.'
    ]},
    {type:'stop', title:'De la falta de espacio a una nueva forma de Buda', text:[
      'Ante la falta de espacio, en 1887 el sacerdote principal del templo encargó construir una estatua de Buda Amida mezclando resina con las cenizas de los fallecidos, dando origen a los llamados okotsu butsu o «budas de hueso». El origen remoto de esta práctica se remonta a una estatua de Jizō del siglo XVIII hecha con huesos molidos y arcilla en el templo Daienji de Kanazawa.'
    ]},
    {type:'stop', title:'Destruidas en la guerra, reconstruidas cada diez años', text:[
      'Hasta la Segunda Guerra Mundial el templo llegó a tener seis de estas estatuas, todas destruidas en los bombardeos. En 1948 se construyó una séptima con los fragmentos recuperados y los restos de unas 220.000 personas, y desde 1957 se levanta una nueva estatua cada diez años, cada una con las cenizas de entre 150.000 y 160.000 fieles. Hoy el templo conserva trece de estas estatuas, con una ceremonia oficial cada 21 de abril.'
    ]},
    {type:'heading', text:'Una puerta que rompe con la tradición', icon:'gate'},
    {type:'stop', title:'Cristal, acero y hormigón en vez de madera', text:[
      'La moderna puerta principal —con dos guardianes Niō de bronce de diseño contemporáneo— fue obra en 1997 del entonces sacerdote principal del templo, arquitecto de formación, junto con el cercano salón de la fe Hisōden, de aspecto casi eclesiástico. Contrasta deliberadamente con el resto del recinto, que incluye el salón Nokotsudō (reconstruido en 1957), el salón principal Hondō (1966), la sala de invitados Nissōden (1977) y el salón Nenbutsudō (1992).'
    ]},
    {type:'stop', title:'Un cementerio con historia', text:[
      'El cementerio del templo alberga las tumbas de varias figuras históricas, entre ellas Tadatomo Honda, Kizan Konishi y el propio Ichikawa Danjūrō VIII, el actor que dio origen a la tradición de los budas de hueso.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Cada estatua de Buda «de hueso» se elabora con las cenizas de entre 150.000 y 160.000 personas fallecidas, mezcladas con resina.',
      'La tradición nació en 1854 por el deseo de un actor de kabuki de ser enterrado en el templo; en treinta años ya había más de 50.000 urnas acumuladas.',
      'La actual puerta principal, de cristal, acero y hormigón, fue diseñada en 1997 por un sacerdote del templo que era arquitecto de formación.'
    ]}
  ],
  hours: '5:00–18:00, entrada gratuita.',
  hoursSource: 'https://isshinji-osaka.or.jp/',
  tickets: 'No se necesita entrada.',
  official: 'https://isshinji-osaka.or.jp/',
  tips: [
    'La puerta principal, muy distinta al resto del templo, merece una foto aparte: es de las más modernas de cualquier templo budista de Japón.',
    'Respeta el carácter de cementerio y lugar de duelo de buena parte del recinto.',
    'Combínalo con la visita a Shitennō-ji, a pocos minutos a pie.'
  ],
  access: 'A pie desde la estación de Shitennoji-mae Yuhigaoka o Tennoji, muy cerca de Shitennō-ji y del barrio de Shinsekai.'
});
