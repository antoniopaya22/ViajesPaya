// Museo Nacional de Nara — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'museo-nacional-nara', city: 'nara', name: 'Museo Nacional de Nara', category: 'Museo', reviewed: '2026-09',
  image: 'assets/japon-nara-museo.jpg',
  lat: 34.683096, lon: 135.838311,
  lead: 'El gran museo del arte budista de Japón, con una sala de escultura sagrada abierta todo el año y una exposición de otoño que reúne, durante solo unas semanas, los tesoros del siglo VIII del Shōsō-in de Tōdai-ji.',
  duration: '1–2 horas (más en la exposición de otoño, por las colas)',
  price: '700 ¥ adulto',
  stats: [
    {value:'1889', label:'fundación como Museo Imperial de Nara', icon:'scroll'},
    {value:'100', label:'esculturas budistas expuestas todo el año', icon:'trophy'},
    {value:'8.981', label:'tesoros catalogados en el repositorio Shōsō-in (marzo de 2025)', icon:'rock'},
    {value:'oct–nov', label:'exposición anual de tesoros del Shōsō-in, cada otoño', icon:'book'}
  ],
  blocks: [
    {type:'lead', text:'Fundado en 1889 como Museo Imperial de Nara y abierto al público en 1895, es el segundo museo nacional más antiguo de Japón y está especializado en arte budista: esculturas, pinturas, objetos rituales y piezas arqueológicas vinculadas sobre todo a los grandes templos de la ciudad.'},
    {type:'p', text:'El conjunto se reparte entre el edificio original de estilo occidental del siglo XIX y unas alas modernas de exposición conectadas por un pasillo subterráneo, que incluyen la Sala de Escultura Budista y la Galería de Bronces Rituales.'},
    {type:'heading', text:'Cien joyas budistas todo el año', icon:'trophy'},
    {type:'stop', title:'La Sala de Escultura Budista', text:[
      'Con carácter permanente, la Sala de Escultura Budista reúne cerca de un centenar de piezas maestras —muchas clasificadas como Tesoro Nacional o Bien Cultural Importante— procedentes de templos de toda la región de Nara, una de las mejores introducciones posibles al arte budista japonés en un solo espacio.'
    ]},
    {type:'heading', text:'El tesoro escondido de Tōdai-ji', icon:'book'},
    {type:'stop', title:'La exposición del Shōsō-in, cada otoño', text:[
      'Cada año, durante unas dos semanas entre octubre y noviembre, el museo acoge la exposición Shōsō-in-ten: una selección rotatoria de los objetos del siglo VIII guardados en el Shōsō-in, el almacén imperial del vecino templo Tōdai-ji, originalmente los efectos personales del emperador Shōmu donados por la emperatriz Kōmyō tras su muerte.',
      'El repositorio conserva en total unos 8.981 tesoros catalogados (dato de marzo de 2025): instrumentos musicales, textiles, objetos de laca, vidrio y metal llegados en su día por la Ruta de la Seda. Al mostrarse solo brevemente cada año para su conservación, la exposición es una de las citas culturales más concurridas del calendario de Nara.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Es el segundo museo nacional más antiguo de Japón, fundado en 1889 y abierto al público en 1895.',
      'El Shōsō-in, cuyos tesoros expone el museo cada otoño, conserva objetos llegados a Japón por la Ruta de la Seda hace más de 1.200 años.',
      'La exposición anual del Shōsō-in dura solo unas dos semanas: conviene comprobar las fechas exactas de cada año si es el motivo principal de la visita.'
    ]}
  ],
  hours: 'De 9:30 a 17:00 (última entrada 16:30). Cierra los lunes (el martes si el lunes es festivo) y del 28 de diciembre al 1 de enero.',
  hoursSource: 'https://www.narahaku.go.jp/en/',
  tickets: '700 ¥ adulto, 350 ¥ estudiante universitario, gratis para estudiantes de instituto o menores. La exposición del Shōsō-in suele tener una tarifa y horario ligeramente distintos.',
  official: 'https://www.narahaku.go.jp/en/',
  tips: [
    'Si tu visita coincide con la exposición del Shōsō-in (octubre-noviembre), llega a primera hora: son las semanas con más colas de todo el año.',
    'La Sala de Escultura Budista, de temporada permanente, merece la pena aunque no coincidas con la exposición de otoño.',
    'Combina la visita con Tōdai-ji, justo al lado: el museo ayuda a poner en contexto buena parte de lo que se ve allí.'
  ],
  access: 'A pie desde la estación de Kintetsu Nara (unos 15 minutos) o desde el templo Tōdai-ji (unos 5 minutos).'
});
