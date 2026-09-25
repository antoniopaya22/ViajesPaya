// Ueno y Ameyoko — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'ueno-ameyoko', city: 'tokio', zone: 'este', name: 'Ueno y Ameyoko', category: 'Parque y mercado',
  image: 'assets/japon-ueno-ameyoko.jpg',
  lat: 35.7156, lon: 139.7745,
  lead: 'Museos, cerezos y pandas en el parque de Ueno, un mercado callejero de posguerra justo al lado.',
  duration: '2–3 horas',
  price: 'Parque y calle gratuitos',
  stats: [
    {value:'1873', label:'año de apertura del parque como espacio público', icon:'tree'},
    {value:'1639', label:'año de la pagoda de cinco pisos que sobrevivió', icon:'pagoda'},
    {value:'180+', label:'puestos y tiendas en la calle Ameyoko', icon:'bag'},
    {value:'1972', label:'llegada de los primeros pandas gigantes', icon:'heart'}
  ],
  blocks: [
    {type:'lead', text:'El parque de Ueno ocupa los antiguos terrenos del templo Kan.ei-ji, uno de los más importantes de Edo, destruido en la guerra Boshin de 1868 cuando los shogitai leales al shogunato se enfrentaron al nuevo ejército imperial. Tras la batalla, el espacio se convirtió en 1873 en uno de los primeros parques de estilo occidental del país; en 1924 la familia imperial lo donó formalmente a la ciudad de Tokio.'},
    {type:'p', text:'Cerca de la entrada junto a la estación de Keisei, dos lápidas y una estatua de Saigō Takamori —el samurái de Satsuma que inspiró el personaje de Ken Watanabe en El último samurái— recuerdan a los caídos en la batalla de Ueno.'},
    {type:'heading', text:'Lo que queda del antiguo templo Kan.ei-ji', icon:'pagoda'},
    {type:'stop', title:'Pagoda de cinco pisos y santuario Ueno Tōshōgū', text:[
      'Del antiguo Kan.ei-ji sobreviven la pagoda de cinco pisos de 1639 y el santuario Ueno Tōshōgū, recubierto de pan de oro por orden del tercer shōgun Tokugawa Iemitsu en 1651, con sus muros Sukibei y su puerta china Karamon originales de ese mismo año. El jardín de peonías Botan-en, que abre en dos ventanas breves de enero-febrero y abril-mayo, se fundó en 1980 como gesto de amistad entre Japón y China, país de origen de esta flor.'
    ]},
    {type:'stop', title:'Templo Kiyomizu Kannon-dō', text:[
      'Uno de los pocos edificios del periodo Edo que no se destruyeron en la batalla de Ueno, construido en 1631 e inspirado en el templo Kiyomizu-dera de Kioto, cuyo balcón de madera imita. Está dedicado a Kosodate Kannon, deidad de la concepción, y su balcón ofrece una de las mejores vistas del millar de cerezos del parque durante el hanami de abril.'
    ]},
    {type:'stop', title:'Estanque Shinobazu', text:[
      'Natural pese a sus sucesivas remodelaciones, se divide en la zona de los lotos, la de los botes y la de los cormoranes; en su isla central, el salón octogonal Benten-dō está dedicado a la diosa de la fortuna, la música y el conocimiento, y abre de 7:00 a 17:00 con entrada gratuita.'
    ]},
    {type:'stop', title:'Gran Buda de Ueno', text:[
      'Un pequeño altar conserva el rostro de bronce del antiguo Gran Buda de Ueno, de 1631: perdió la cabeza en el terremoto de Kantō de 1923 y el resto de la estatua se fundió durante la Segunda Guerra Mundial para el esfuerzo bélico. En el lugar donde estaba el cuerpo se levantó una pequeña pagoda que marca su antigua ubicación.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El zoo de Ueno, el más antiguo de Japón (1882), recibió sus primeros pandas gigantes en 1972 como símbolo de la normalización de relaciones con China; su antiguo monorraíl, el primero del país, cerró en 2019.',
      'El Museo Nacional de Arte Occidental de Ueno, obra de Le Corbusier, es Patrimonio de la Humanidad por la UNESCO.'
    ]},
    {type:'heading', text:'La calle Ameyoko', icon:'bag'},
    {type:'p', text:'Al salir del parque hacia la estación de Okachimachi empieza Ameyoko, una calle paralela a la línea Yamanote nacida como mercado de posguerra: unos dicen que su nombre viene de las antiguas tiendas de golosinas (ame-ya), otros de los artículos americanos de contrabando que se vendían tras 1945. Con más de 180 puestos, hoy conviven pescaderías, tiendas de ropa de segunda mano, especias y comida callejera, y es habitual poder regatear, algo poco frecuente en Japón.'},
    {type:'cards', title:'Para picar de puesto en puesto', items:[
      {icon:'teacup', title:'Salado', text:'Takoyaki en Minatoya, menchi-katsu en Niku no Oyama o xiaolongbao en Heisei Fuku Jun.'},
      {icon:'flame', title:'Coreano', text:'Hotteok y tteokbokki en Uncle Joe, entre los puestos de comida coreana de la calle.'},
      {icon:'blossom', title:'Dulce', text:'Taiyaki en Kandaruma, matcha en Chano-Kiminoen o daifuku mochi en Shimura.'}
    ]}
  ],
  hours: 'Parque de acceso libre; santuario Tōshōgū con jardín de pago en temporada; Ameyoko abre aproximadamente de 10:00 a 19:00-20:00 (muchos negocios cierran los miércoles).',
  price: 'Parque y calle gratuitos', tickets: 'El jardín de peonías del Tōshōgū cuesta 700 ¥; museos y zoo tienen entrada aparte.',
  tips: [
    'Ve con hambre: Ameyoko es ideal para picar de puesto en puesto en vez de sentarte a comer.',
    'En temporada de cerezos, el paseo central del parque y el balcón del templo Kiyomizu Kannon-dō son de los mejores miradores gratuitos de la ciudad.',
    'Comprueba el día de descanso del puesto que te interese: en Ameyoko varía mucho de un negocio a otro.'
  ],
  access: 'Estación de Ueno (líneas JR Yamanote y Keihin-Tōhoku, y metro Ginza/Hibiya); Ameyoko sale directamente de la salida sur, hacia Okachimachi.',
  official: 'https://www.gotokyo.org/en/destinations/northern-tokyo/ueno/index.html'
});
