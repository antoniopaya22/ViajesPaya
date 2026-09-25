// Tō-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'toji', city: 'kioto', name: 'Tō-ji', category: 'Templo',
  image: 'assets/japon-toji.jpg',
  lat: 34.9808, lon: 135.7477,
  lead: 'La pagoda de madera más alta de Japón y el templo que Kōbō Daishi convirtió en cuna del budismo Shingon.',
  duration: '1–1,5 horas',
  price: '800 ¥ (recinto principal); 1.200 ¥ en aperturas especiales del interior de la pagoda',
  stats: [
    {value:'796', label:'año de fundación, dos años después de la capital', icon:'🏯'},
    {value:'54,8 m', label:'altura de la pagoda, la más alta de Japón', icon:'🗼'},
    {value:'1994', label:'declarado Patrimonio de la Humanidad', icon:'🏆'}
  ],
  blocks: [
    {type:'lead', text:'Tō-ji se fundó en 796, solo dos años después de que la capital se trasladara a Heian-kyō, como uno de los únicos tres templos budistas autorizados dentro de la ciudad en aquel momento; hoy es el único que sobrevive de los tres. En 823 el emperador Saga puso el templo en manos de Kūkai (Kōbō Daishi), fundador de la escuela Shingon, y desde entonces Tō-ji se convirtió en el centro de ese budismo esotérico en Japón.'},
    {type:'stop', title:'La gran pagoda de cinco pisos', text:[
      'Con 54,8 metros, es la torre de madera más alta de Japón y el símbolo tanto del templo como de buena parte del perfil de Kioto. La original, de 826, se ha destruido y reconstruido cuatro veces por incendios y rayos; la actual data de 1644, encargada por el shōgun Tokugawa Iemitsu, y fue declarada Tesoro Nacional en 1952. Solo se abre al público el interior en fechas señaladas, cuando se pueden ver cuatro pequeñas estatuas de Buda alrededor del pilar central.'
    ]},
    {type:'stop', title:'Salón Kondō', text:[
      'El salón principal guarda una estatua del Buda Yakushi de 1603, flanqueada por dos bodhisattvas, y es uno de los edificios más antiguos del recinto tras las sucesivas reconstrucciones.'
    ]},
    {type:'stop', title:'Salón Kōdō, la sala de conferencias', text:[
      'Reúne una espectacular colección de 21 estatuas budistas —19 de ellas originales del siglo IX— dispuestas para formar un mandala tridimensional pensado por el propio Kūkai: una de las representaciones más completas del cosmos esotérico Shingon que se conservan en Japón.'
    ]},
    {type:'stop', title:'El mercado Kōbō-san', text:[
      'El día 21 de cada mes, aniversario de la muerte de Kōbō Daishi en 835, los terrenos del templo se llenan con uno de los mercadillos más animados de Kioto: antigüedades, artesanía, ropa vintage, plantas y comida callejera atraen a vendedores de todo el país.'
    ]}
  ],
  hours: 'Recinto principal (Kondō y Kōdō) de 8:00 a 17:00, con entrada hasta las 16:30, todos los días del año.',
  hoursSource: 'https://toji.or.jp/en/',
  tickets: 'La entrada se compra en el acceso; el interior de la pagoda solo abre en fechas especiales con un suplemento.',
  official: 'https://toji.or.jp/en/',
  tips: [
    'Si coincide tu visita con el día 21, resérvate más tiempo: el mercado Kōbō-san puede ocupar buena parte del recinto.',
    'La entrada exterior a los jardines y el estanque Hyōtan, con la pagoda de fondo, es gratuita y muy fotogénica incluso sin pagar la entrada al recinto principal.'
  ],
  access: 'A 15 minutos a pie al suroeste de la estación de Kioto, o dos minutos en tren desde la estación de Tōji (línea Kintetsu Kyoto) más un breve paseo.'
});
