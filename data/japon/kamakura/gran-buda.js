// Gran Buda de Kamakura (Kōtoku-in) — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'gran-buda', city: 'kamakura', name: 'Gran Buda de Kamakura', category: 'Templo', reviewed: '2026-09',
  image: 'assets/kamakura.jpg',
  lat: 35.3167, lon: 139.5357,
  lead: 'Una estatua de bronce de 13,35 metros que lleva siglos meditando al aire libre, frente al cielo de Kamakura.',
  duration: '30–60 min',
  price: '300 ¥ adulto (+20 ¥ para entrar al interior)',
  stats: [
    {value:'13,35 m', label:'altura de la estatua sentada', icon:'ruler'},
    {value:'~93 t', label:'peso aproximado de bronce', icon:'rock'},
    {value:'1252', label:'año en que se dató su fundición', icon:'flame'},
    {value:'2º', label:'Buda sentado más grande de Japón, tras el de Nara', icon:'trophy'}
  ],
  blocks: [
    {type:'lead', text:'El Gran Buda de Kamakura (daibutsu) es una estatua de bronce del Buda Amida de 13,35 metros de alto y unas 93 toneladas de peso, situada en el templo budista Kōtoku-in. Es el segundo Buda sentado más grande de Japón, solo por detrás del de Tōdai-ji en Nara, pero el primero de ese tamaño que puede verse al aire libre en todo el país.'},
    {type:'p', text:'Todo indica que la estatua se construyó hacia 1252, en pleno periodo Kamakura, aunque los registros de la época no son del todo claros sobre el proceso exacto de fundición. Lo que sí se sabe con certeza es que originalmente estaba cobijada dentro de un gran templo de madera, arrasado por un tsunami a finales del siglo XV: desde entonces el Buda ha permanecido expuesto al cielo, tal y como se ve hoy.'},
    {type:'heading', text:'Una postura de calma deliberada', icon:'peak'},
    {type:'stop', title:'Loto, mudra y bronce hueco', text:[
      'La figura está sentada en posición de loto, con las manos formando el gesto de meditación (mudra), en una postura que transmite una calma deliberada. Su estructura de bronce es hueca, y por una pequeña donación de unos 20 yenes se puede acceder al interior para ver cómo se fundió y ensambló la estatua por piezas, uniendo varias secciones de metal coladas por separado.'
    ]},
    {type:'heading', text:'Del templo desaparecido al Buda al aire libre', icon:'flame'},
    {type:'stop', title:'El tsunami que dejó al Buda a la intemperie', text:[
      'A diferencia del Daibutsu de Tōdai-ji, protegido por el edificio de madera más grande del mundo, el de Kamakura no tiene techo desde hace más de cinco siglos. El templo de madera que lo albergaba fue destruido por un tsunami a finales del siglo XV y nunca se reconstruyó, así que la estatua quedó expuesta a la intemperie tal y como se puede ver en la actualidad, resistiendo terremotos, tifones y siglos de clima costero.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Al ser hueco, el interior del Buda está abierto a los visitantes por un pequeño suplemento sobre la entrada general, unos 20 yenes.',
      'Es el mayor Buda de bronce de Japón que se conserva al aire libre, sin ningún edificio que lo cubra.',
      'El templo de madera original que lo protegía fue arrasado por un tsunami a finales del siglo XV y nunca se reconstruyó.'
    ]}
  ],
  hours: 'De 6:00 a 17:30 (hasta las 17:00 en invierno); el acceso se corta 15 minutos antes del cierre.',
  hoursSource: 'https://www.kotoku-in.jp/en/',
  tickets: 'La entrada se compra en la propia taquilla del templo Kōtoku-in.',
  official: 'https://www.kotoku-in.jp/en/',
  tips: [
    'Combina la visita con el cercano templo Hase-dera para aprovechar el mismo desplazamiento.',
    'El interior hueco de la estatua se visita aparte y solo cuesta unos yenes más: merece la pena si hay poca cola.'
  ],
  access: 'Desde la estación de Kamakura, unos 10 minutos en el tren Enoden hasta la estación de Hase y después un paseo corto a pie; también se puede ir caminando desde el centro en unos 20-25 minutos.'
});
