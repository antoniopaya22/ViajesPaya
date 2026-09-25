// Castillo de Osaka — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'castillo-de-osaka', city: 'osaka', zone: 'castillo', name: 'Castillo de Osaka', category: 'Castillo y museo', reviewed: '2026-09',
  image: 'assets/castillo-osaka.jpg',
  lat: 34.6873, lon: 135.5262,
  lead: 'La gran torre dorada y blanca que Toyotomi Hideyoshi levantó para unificar Japón, hoy centro de un parque de dos kilómetros cuadrados.',
  duration: '1,5–2 horas',
  price: '1.200 ¥ adulto para el museo (referencia 2026)',
  stats: [
    {value:'1583', label:'año de inicio de la construcción, por Toyotomi Hideyoshi', icon:'scroll'},
    {value:'8', label:'plantas de la torre (5 exteriores + 3 subterráneas)', icon:'tower'},
    {value:'600+', label:'cerezos Somei-Yoshino en los jardines Nishinomaru', icon:'blossom'},
    {value:'2 km²', label:'superficie total del parque del castillo', icon:'tree'}
  ],
  blocks: [
    {type:'lead', text:'Toyotomi Hideyoshi impulsó el castillo en 1583 con la intención de superar en grandeza al castillo Azuchi de Oda Nobunaga y convertirlo en el centro del Japón unificado: una torre principal muy alta sobre una base de piedra elevada, con cinco pisos exteriores y tres subterráneos, recubierta de pan de oro para impresionar y mostrar el poder de su señor de la guerra.'},
    {type:'p', text:'La torre que se visita hoy es en realidad la tercera versión del edificio, una reconstrucción de hormigón de finales del siglo XX que reproduce el aspecto original por fuera pero esconde un interior completamente moderno, con ascensor, museo y sala de convenciones. Alrededor se extiende un gran parque con murallas, fosos, puertas históricas y jardines que cambian por completo según la estación.'},
    {type:'timeline', title:'Del oro original a la reconstrucción actual', items:[
      {label:'Hideyoshi levanta la primera torre, recubierta de pan de oro', year:1583, yearLabel:'1583'},
      {label:'Tokugawa Ieyasu destruye el castillo tras el Asedio de Osaka', year:1615, yearLabel:'1615'},
      {label:'El shogun Tokugawa Hidetada lo reconstruye por completo', year:1620, yearLabel:'1620'},
      {label:'Un rayo incendia y destruye la torre principal', year:1665, yearLabel:'1665'},
      {label:'Casi dos siglos abandonado; comienzan las primeras reparaciones', year:1843, yearLabel:'1843'},
      {label:'Se reconstruye la torre principal actual, en hormigón', year:1931, yearLabel:'1928–1931'},
      {label:'Última gran remodelación del interior y accesos', year:1997, yearLabel:'Años 90'}
    ]},
    {type:'heading', text:'Ocho plantas de historia dentro de la torre', icon:'tower'},
    {type:'stop', title:'Plantas 1 y 2: tienda, cine y diseño del castillo', text:[
      'La primera planta reúne la tienda del castillo y una sala de proyección con cinco programas distintos sobre Toyotomi Hideyoshi y la historia del edificio. La segunda está dedicada al diseño de la torre, con réplicas a tamaño real de los shachihoko dorados de la cubierta, y es también donde se puede posar con un casco o un traje de samurái para la foto de recuerdo.'
    ]},
    {type:'stop', title:'Plantas 3 a 5: objetos de Hideyoshi y el Asedio de Osaka', text:[
      'Las plantas tercera y cuarta exhiben objetos personales de Hideyoshi, entre ellos una armadura original, un baúl lacado, maquetas del castillo y la reconstrucción de una sala de té dorada. La quinta planta se centra en el Asedio de Osaka de 1615, con pinturas y miniaturas que recrean la batalla que acabó con la primera torre.'
    ]},
    {type:'stop', title:'Plantas 7 y 8: información histórica y mirador', text:[
      'La séptima planta reúne paneles con la historia completa del castillo y de la vida de Hideyoshi, mientras que la octava alberga otra pequeña tienda y el mirador principal, con vistas de todo el parque y del perfil de la ciudad de Osaka.'
    ]},
    {type:'heading', text:'La plaza central, antes y ahora', icon:'gate'},
    {type:'stop', title:'La antigua sede de la Armada imperial', text:[
      'Frente a la torre, la plaza central conserva un edificio de estilo occidental de 1931, en ladrillo rojo con vidrieras y un interior art-decó: fue sede de la cuarta división de la Armada imperial japonesa y, tras la guerra, lo usaron tanto las fuerzas aliadas de ocupación como la policía de Osaka.'
    ]},
    {type:'stop', title:'El desaparecido Palacio Kishu Goten', text:[
      'Muy cerca se levantaba el Palacio Kishu Goten, destruido por un incendio en 1947; hoy solo se conservan los jardines que lo rodeaban, un rincón más tranquilo dentro del bullicio del parque.'
    ]},
    {type:'heading', text:'Puertas y accesos históricos', icon:'gate'},
    {type:'stop', title:'Aoyamon, Otemon y Sakuramon', text:[
      'Desde el norte, la puerta Aoyamon (reconstrucción de 1969) y el puente Gokurakubashi (reconstrucción de 1965) dan acceso al parque desde la estación de Osakajo Koen. Desde el oeste, la puerta Otemon lleva directamente al Honmaru, el recinto central; desde el sureste, la puerta Sakuramon completa los tres grandes accesos históricos al castillo.'
    ]},
    {type:'heading', text:'Jardines que cambian con las estaciones', icon:'blossom'},
    {type:'stop', title:'Jardines Nishinomaru y sus cerezos', text:[
      'Los jardines Nishinomaru forman una gran explanada con vistas privilegiadas de la torre, una casa de té tradicional (Hōshō-an) donde a veces se celebran ceremonias al aire libre, y más de 600 cerezos Somei-Yoshino que florecen a finales de marzo: una de las mejores iluminaciones nocturnas de cerezos de todo Japón.'
    ]},
    {type:'stop', title:'Ciruelos y melocotoneros', text:[
      'La arboleda de ciruelos reúne casi 1.300 árboles de cien variedades distintas, en flor a finales de febrero, mientras que la zona norte del parque guarda una arboleda de melocotoneros que florece a comienzos de marzo, coincidiendo con el Hina Matsuri, el festival de las niñas.'
    ]},
    {type:'cards', title:'Más allá de la torre', items:[
      {icon:'trophy', title:'Deporte al aire libre', text:'El parque incluye zonas de béisbol, kendo y arquería, además de un estadio propio, el Estadio de Osaka.'},
      {icon:'lantern', title:'Templo a Hideyoshi', text:'Un pequeño templo dentro del recinto está dedicado a la memoria de Toyotomi Hideyoshi, el fundador del castillo.'},
      {icon:'bag', title:'Jo-Terrace Osaka', text:'Junto a la salida de Osakajo Koen, este complejo comercial reúne restaurantes, cafeterías y una tienda de conveniencia: buena parada antes o después de la visita.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La primera torre de Hideyoshi estaba recubierta de pan de oro para exhibir su poder; hoy se conservan detalles dorados en la fachada como recuerdo de aquel diseño.',
      'Entre la destrucción de 1665 y las primeras reparaciones de 1843, el castillo pasó casi dos siglos prácticamente abandonado.',
      'La torre actual, pese a su aspecto tradicional, tiene ascensor: se instaló en la reconstrucción de 1931 y se ha mantenido en las remodelaciones posteriores.'
    ]}
  ],
  hours: 'Interior de la torre: 9:00–17:00 (última entrada a las 16:30).',
  hoursSource: 'https://www.osakacastle.net/guide/',
  tickets: 'Consulta las opciones de entrada en la web oficial del museo.',
  official: 'https://www.osakacastle.net/',
  tips: [
    'Entra por la salida de la estación Osakajo Koen para pasar por el complejo comercial Jo-Terrace, buena opción para comer antes o después.',
    'Si vas en época de cerezos o ciruelos en flor, dedica tiempo extra a pasear por los jardines Nishinomaru y la arboleda de ciruelos.',
    'Sube hasta la octava planta aunque solo sea por el mirador: las vistas del parque desde arriba merecen la pena.'
  ],
  access: 'A pie desde las estaciones de Osakajo Koen (JR), Tanimachi 4-chome o Temmabashi (metro), todas a poca distancia del parque.'
});
