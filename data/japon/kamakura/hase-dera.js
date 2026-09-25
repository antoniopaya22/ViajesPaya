// Templo Hase-dera — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'hase-dera', city: 'kamakura', name: 'Templo Hase-dera', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-hase-dera.jpg',
  lat: 35.3122, lon: 139.5361,
  lead: 'Miles de pequeñas estatuas Jizō, un gran Kannon de madera dorada y vistas a la bahía de Kamakura.',
  duration: '45–75 min',
  price: '300 ¥ adulto; 100 ¥ niños',
  stats: [
    {value:'50.000+', label:'estatuas Jizō acogidas desde la Segunda Guerra Mundial', icon:'heart'},
    {value:'9,18 m', label:'altura aproximada de la estatua de Kannon', icon:'ruler'},
    {value:'4ª', label:'parada de la peregrinación Bandō Sanjūsankasho', icon:'scroll'},
    {value:'jun-jul', label:'temporada de floración de las hortensias', icon:'blossom'}
  ],
  blocks: [
    {type:'lead', text:'El templo Hase-dera es una de las visitas obligadas en Kamakura y la cuarta parada de las 33 que forman la peregrinación Bandō Sanjūsankasho, dedicada a la diosa Benzaiten. Destaca por su vegetación cuidada, especialmente vistosa en junio y julio con la floración de las hortensias que llenan sus jardines en terrazas.'},
    {type:'p', text:'El recinto se organiza en dos niveles conectados por un tramo de escaleras: abajo, los jardines, los estanques y el rincón de los Jizō; arriba, el complejo principal con el gran Kannon de madera, la campana del templo y las vistas sobre la bahía.'},
    {type:'heading', text:'El jardín de los mil Jizō', icon:'heart'},
    {type:'stop', title:'Un rincón silencioso y muy emotivo', text:[
      'Nada más entrar llama la atención la gran cantidad de estatuillas Jizō colocadas por padres que lloran la pérdida de hijos no nacidos o recién fallecidos. Cada Jizō se mantiene en el templo alrededor de un año, por lo que se calcula que Hase-dera ha acogido más de 50.000 estatuas desde el fin de la Segunda Guerra Mundial: un rincón rodeado de ofrendas de temática infantil, gorros y molinillos de colores.'
    ]},
    {type:'heading', text:'El gran Kannon de once caras', icon:'pagoda'},
    {type:'stop', title:'Una de las tallas en madera más grandes de Japón', text:[
      'Tras los jardines y la zona de los Jizō se llega al complejo principal, donde se conserva una de las estatuas de madera de Kannon más grandes de Japón: una figura dorada de once caras, cada una mirando en una dirección distinta para poder auxiliar a los fieles vengan de donde vengan. El paseo por esta parte del templo combina jardines, tallas, la campana del recinto y un pequeño santuario sintoísta.'
    ]},
    {type:'stop', title:'Vistas sobre la bahía de Kamakura', text:[
      'Desde la plataforma superior, junto al salón del Kannon, se abren vistas amplias sobre la bahía de Kamakura y la costa de Shōnan, uno de los miradores más fáciles de alcanzar de toda la ciudad sin necesidad de subir a ningún monte.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Se calcula que el templo ha recibido más de 50.000 estatuas Jizō desde el fin de la Segunda Guerra Mundial.',
      'La estatua de Kannon del salón principal es una de las tallas en madera más grandes de todo Japón y tiene once caras distintas.'
    ]}
  ],
  hours: 'Todos los días de 8:00 a 17:00 (hasta las 16:30 de octubre a febrero).',
  hoursSource: 'https://www.hasedera.jp/en/',
  tickets: 'La entrada se compra en el acceso al templo.',
  official: 'https://www.hasedera.jp/en/',
  tips: [
    'Visita en junio o julio si te interesan las hortensias: es la época de mayor floración en los jardines.',
    'Sube hasta la zona alta del complejo para las vistas de la bahía, no solo por el salón del Kannon.'
  ],
  access: 'A 5 minutos a pie de la estación de Hase (línea Enoden) y muy cerca del Gran Buda de Kamakura, con el que se combina fácilmente en la misma visita.'
});
