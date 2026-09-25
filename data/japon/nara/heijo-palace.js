// Palacio Heijō — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'heijo-palace', city: 'nara', name: 'Palacio Heijō', category: 'Yacimiento histórico',
  image: 'assets/japon-heijo-palace.jpg',
  lat: 34.6911, lon: 135.7956,
  lead: 'Las ruinas del antiguo centro del poder imperial japonés, con un gran salón de audiencias reconstruido sobre los cimientos originales.',
  duration: '1–1,5 horas',
  price: 'Acceso gratuito al yacimiento y al Daigokuden',
  stats: [
    {value:'710', label:'año en que Nara (Heijō-kyō) se convirtió en capital', icon:'gate'},
    {value:'784', label:'año en que la capital se trasladó y el palacio quedó abandonado', icon:'clock'},
    {value:'2010', label:'año de reconstrucción del Daigokuden, para el 1.300 aniversario', icon:'pagoda'},
    {value:'2', label:'puertas históricas reconstruidas (Suzaku y Daigoku)', icon:'tower'}
  ],
  blocks: [
    {type:'lead', text:'Nara fue la primera gran capital permanente de Japón durante buena parte del periodo Nara (710-794), cuando la ciudad se llamaba Heijō-kyō. El Palacio Heijō fue entonces el centro del poder imperial y de la administración del país.'},
    {type:'p', text:'Al trasladarse la capital en 784, el palacio quedó abandonado y prácticamente olvidado entre campos de arroz y zonas rurales durante siglos. Solo en las últimas décadas, gracias a grandes excavaciones arqueológicas, se ha podido recuperar y explicar la importancia histórica del lugar.'},
    {type:'heading', text:'Lo que se ha reconstruido', icon:'pagoda'},
    {type:'stop', title:'Daigokuden, el antiguo salón de audiencias', text:[
      'El Primer Daigokuden, el gran salón donde se celebraban las ceremonias más importantes del estado, se reconstruyó para el 1.300 aniversario de la fundación de la capital en 2010. Es hoy el edificio más imponente del yacimiento y permite hacerse una idea del papel de Nara en la historia política de Japón.'
    ]},
    {type:'stop', title:'Puertas Suzaku y Daigoku', text:[
      'Además del salón principal, se han reconstruido dos de las puertas históricas del recinto, que ayudan a entender la escala original del complejo palaciego.'
    ]},
    {type:'stop', title:'Jardín del palacio del este, Tōin Teien', text:[
      'Este jardín reconstruido reproduce arroyos, un estanque y puentes tradicionales, y ofrece una idea de cómo se combinaba la arquitectura administrativa del palacio con espacios de recreo de la corte.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Tras el traslado de la capital en 784, el palacio quedó tan olvidado que durante siglos la zona se usó como campos de arroz.',
      'El Daigokuden actual es una reconstrucción de 2010, levantada para conmemorar el 1.300 aniversario de la fundación de Heijō-kyō.',
      'El yacimiento cuenta con varios museos y exposiciones sobre las excavaciones arqueológicas y los objetos encontrados en el lugar.'
    ]}
  ],
  hours: 'El yacimiento exterior es de acceso libre; el Daigokuden y los museos tienen su propio horario, generalmente de 9:00 a 16:30.',
  hoursSource: 'https://www.heijo-park.go.jp/',
  tickets: 'No se necesita entrada para el yacimiento ni para el Daigokuden.',
  official: 'https://www.heijo-park.go.jp/',
  tips: [
    'Es un yacimiento muy extenso y abierto, con poca sombra: ve con calzado cómodo y protección solar.',
    'Combínalo con el Museo de Palacio Heijō, que explica bien el contexto de las excavaciones y los hallazgos.',
    'Queda algo alejado del parque de Nara: calcula tiempo de desplazamiento si lo combinas con Tōdai-ji o Kasuga Taisha en el mismo día.'
  ],
  access: 'A pie desde la estación de Shin-Ōmiya (línea Kintetsu) o en autobús desde la estación de Nara.'
});
