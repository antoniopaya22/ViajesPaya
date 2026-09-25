// Chion-in y parque Maruyama — ficha con estructura de bloques.
addJapanPlace({
  slug: 'chion-in-maruyama', city: 'kioto', name: 'Chion-in y parque Maruyama', category: 'Templo y parque',
  image: 'assets/japon-chion-in-maruyama.jpg',
  lat: 35.0056, lon: 135.7831,
  lead: 'La mayor puerta de madera de Japón y el parque de los cerezos más popular de Kioto, uno junto al otro.',
  duration: '1–2 horas',
  price: 'Recinto de Chion-in gratuito; jardines Hōjō y Yūzen 500 ¥',
  stats: [
    {value:'24 m', label:'altura de la puerta Sanmon, la mayor de Japón', icon:'🚪'},
    {value:'106', label:'edificios repartidos por la ladera', icon:'🏛️'},
    {value:'7 t', label:'peso de la gran campana Daishōrō', icon:'🔔'},
    {value:'680+', label:'cerezos en el parque Maruyama', icon:'🌸'}
  ],
  blocks: [
    {type:'lead', text:'Chion-in es el templo principal de la escuela budista Jōdo, fundada por el monje Hōnen en el siglo XII, y se encuentra en Higashiyama entre el santuario Yasaka y el parque Maruyama. El complejo actual, de más de 106 edificios repartidos por la ladera del monte Kachōzan, data en su mayoría de reconstrucciones posteriores a un incendio del siglo XVII.'},
    {type:'heading', text:'El templo Chion-in', icon:'🏛️'},
    {type:'stop', title:'Puerta Sanmon', text:[
      'De 1619, es la mayor puerta de madera de todo Japón: 24 metros de alto y tres accesos que simbolizan los tres caminos hacia la liberación budista.'
    ]},
    {type:'stop', title:'Salón Mieidō y el pasillo del ruiseñor', text:[
      'Tras subir la escalinata Otokozaka se llega al salón principal Mieidō, de 1639, con el pasillo del ruiseñor cantarín (Uguisubari-no-rōka) que cruje al caminar, y a la gran campana Daishōrō, de siete toneladas, una de las tres más grandes de Japón, que solo suena en ocasiones especiales.'
    ]},
    {type:'heading', text:'El parque Maruyama', icon:'🌸'},
    {type:'stop', title:'El cerezo llorón y el hanami', text:[
      'Convertido en parque público en 1871 y rediseñado en 1913 por el paisajista Jihei Ogawa, alberga el shidarezakura o cerezo llorón más fotografiado de Kioto, de unos 80 años, descendiente de un ejemplar anterior que vivió 300. Con más de 680 cerezos, es uno de los lugares más populares de la ciudad para el hanami en primavera.'
    ]}
  ],
  hours: 'El recinto exterior de Chion-in es de acceso libre; los edificios abren de 9:00 a 16:30. El parque Maruyama es de acceso público permanente.',
  hoursSource: 'https://www.chion-in.or.jp/en/',
  tickets: 'La entrada a los jardines se compra en su propio acceso dentro del templo.',
  official: 'https://www.chion-in.or.jp/en/',
  tips: [
    'Sube por la escalinata Otokozaka hasta el salón Mieidō y escucha el pasillo del ruiseñor cantarín.',
    'Visita el parque Maruyama en temporada de cerezos para ver el shidarezakura, uno de los más fotografiados de Kioto.'
  ],
  access: 'A pie desde el santuario Yasaka o desde la parada de autobús Chion-in-mae, en el límite entre Gion y Higashiyama.'
});
