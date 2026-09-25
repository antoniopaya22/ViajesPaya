// Hōryū-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'horyu-ji', city: 'nara', name: 'Hōryū-ji', category: 'Templo',
  image: 'assets/japon-horyu-ji.jpg',
  lat: 34.6144, lon: 135.7342,
  lead: 'El templo de madera más antiguo del mundo, con esculturas budistas de los siglos VI y VII que muestran la fuerte conexión de Japón con China y Corea.',
  duration: '1,5–2 horas',
  price: '1.500 ¥ adulto (incluye Hōryū-ji, Daihōzōin y Chūgū-ji)',
  stats: [
    {value:'607', label:'año tradicional de fundación del templo', icon:'pagoda'},
    {value:'33 m', label:'altura de la pagoda de cinco pisos', icon:'ruler'},
    {value:'1993', label:'primer sitio de Japón declarado Patrimonio de la Humanidad', icon:'trophy'},
    {value:'S. VI–VII', label:'antigüedad de sus esculturas budistas más importantes', icon:'scroll'}
  ],
  blocks: [
    {type:'lead', text:'Al sur de la ciudad de Nara, más allá de Yamato-Kōriyama, Hōryū-ji es el templo de madera más antiguo del mundo y fue, junto con otros monumentos budistas de la zona, el primer lugar de Japón declarado Patrimonio de la Humanidad por la UNESCO, en 1993.'},
    {type:'p', text:'Fundado por el príncipe Shōtoku a comienzos del siglo VII, el complejo se divide en dos grandes áreas: el recinto occidental (Sai-in), con el Salón Dorado y la pagoda, y el recinto oriental (Tō-in), construido más tarde sobre el terreno del antiguo palacio del príncipe.'},
    {type:'heading', text:'El recinto occidental (Sai-in)', icon:'pagoda'},
    {type:'stop', title:'Salón Dorado (Kondō)', text:[
      'Uno de los edificios de madera más antiguos del mundo, el Kondō guarda una de las obras cumbre del arte budista japonés: la Tríada Shaka, atribuida al escultor Tori Busshi, además de otras imágenes budistas de gran valor histórico y artístico de los siglos VI y VII.'
    ]},
    {type:'stop', title:'Pagoda de cinco pisos', text:[
      'De casi 33 metros de altura, es una de las pagodas de madera más antiguas conservadas en Japón. Su estructura, con un pilar central que atraviesa las cinco plantas, muestra claras influencias de la arquitectura china y coreana de la época, en un momento de gran intercambio cultural con el continente.'
    ]},
    {type:'stop', title:'Daihōzōin, el tesoro del templo', text:[
      'La sala del tesoro reúne piezas religiosas de gran valor de toda la historia del templo, entre ellas la Kudara Kannon, otra de las grandes esculturas atribuidas a Tori Busshi y considerada una de las obras maestras del arte budista antiguo de Japón.'
    ]},
    {type:'heading', text:'El recinto oriental (Tō-in)', icon:'gate'},
    {type:'stop', title:'Salón Yumedono, «el salón de los sueños»', text:[
      'Construido en el siglo VIII sobre el terreno del antiguo palacio Ikaruga del príncipe Shōtoku, este salón octogonal guarda la estatua Kuse Kannon, que permanece oculta al público la mayor parte del año y solo se muestra en periodos concretos de primavera y otoño.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El Kondō y la pagoda de cinco pisos de Hōryū-ji están entre los edificios de madera más antiguos que se conservan en el mundo.',
      'Fue en 1993 cuando Hōryū-ji, junto con otros monumentos budistas de la zona, se convirtió en el primer lugar de Japón inscrito en la lista de Patrimonio de la Humanidad de la UNESCO.',
      'La estatua Kuse Kannon del Yumedono estuvo envuelta en tela durante siglos y solo se mostró al público por primera vez a finales del siglo XIX.'
    ]}
  ],
  hours: 'Todos los días de 8:00 a 17:00 (hasta las 16:30 de noviembre a febrero).',
  hoursSource: 'https://www.horyuji.or.jp/',
  tickets: 'La entrada combinada incluye el recinto de Hōryū-ji, la sala del tesoro Daihōzōin y el cercano templo Chūgū-ji.',
  official: 'https://www.horyuji.or.jp/',
  tips: [
    'Está más alejado que el resto de templos de Nara: llega en tren (línea JR Yamatoji hasta la estación Hōryūji) más un paseo, o en autobús desde el centro.',
    'Resérvale al menos 1,5-2 horas: el recinto es grande y merece la pena ver tanto el Sai-in como el Tō-in.',
    'La estatua Kuse Kannon del Yumedono solo se muestra en ventanas concretas de primavera y otoño: consulta el calendario si es tu motivo principal de visita.'
  ],
  access: 'En tren, línea JR Yamatoji hasta la estación Hōryūji y unos 20 minutos a pie, o en autobús directo desde la estación de Nara.'
});
