// Parque Yoyogi — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'parque-yoyogi', city: 'tokio', zone: 'harajuku-shibuya', name: 'Parque Yoyogi', category: 'Parque',
  image: 'assets/japon-parque-yoyogi.jpg',
  lat: 35.6716, lon: 139.6949,
  lead: 'El cuarto parque urbano más grande de Tokio, junto al santuario Meiji y a un paso del bullicio de Harajuku.',
  duration: '45–90 min',
  price: 'Acceso gratuito',
  stats: [
    {value:'4º', label:'parque urbano más grande de Tokio', icon:'tree'},
    {value:'1964', label:'año de los Juegos Olímpicos que acogió', icon:'trophy'},
    {value:'1964', label:'inauguración del Gimnasio Nacional de Yoyogi', icon:'peak'}
  ],
  blocks: [
    {type:'lead', text:'El terreno de Yoyogi alojó primero a personal militar durante la ocupación aliada de posguerra y después la villa olímpica de los Juegos de Tokio 1964. Convertido en parque público, hoy es uno de los grandes pulmones verdes de la ciudad, con amplias praderas, estanques y un ambiente muy distinto al bullicio de Harajuku y Shibuya que lo rodean.'},
    {type:'p', text:'El parque está dividido en secciones con fuentes, explanadas y zonas ajardinadas, y es especialmente popular durante el hanami de cerezos en primavera, cuando miles de tokiotas montan picnics bajo los árboles. Los domingos reúne músicos callejeros, grupos de baile y las últimas tendencias urbanas de la ciudad.'},
    {type:'heading', text:'Legado olímpico de 1964', icon:'trophy'},
    {type:'stop', title:'Gimnasio Nacional de Yoyogi', text:[
      'Obra de Kenzō Tange, albergó las pruebas de natación y salto de los Juegos de Tokio 1964 y hoy acoge voleibol, patinaje sobre hielo y conciertos. Su cubierta suspendida, con un perfil que recuerda al de una ola, es una de las piezas más admiradas de la arquitectura japonesa de posguerra.'
    ]}
  ],
  hours: 'Parque de acceso libre; horario general aproximado de 5:00 a 20:00 según la estación.',
  tickets: 'No se necesita entrada.',
  tips: [
    'Combina la visita con el santuario Meiji, que linda con el parque por el norte.',
    'Los domingos por la tarde son el mejor momento para ver actuaciones callejeras espontáneas.'
  ],
  access: 'Estación de Harajuku (JR Yamanote) o Yoyogi-kōen y Meiji-jingūmae (metro), a pocos minutos a pie de cualquiera de las entradas.',
  official: 'https://www.tokyo-park.or.jp/park/yoyogi/'
});
