// Shinjuku — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'shinjuku', city: 'tokio', zone: 'shinjuku', name: 'Shinjuku', category: 'Barrio', reviewed: '2026-09',
  image: 'assets/japon-shinjuku.jpg',
  lat: 35.6938, lon: 139.7034,
  lead: 'Rascacielos, jardines, callejones de posguerra y el barrio rojo de Tokio, alrededor de la estación más transitada del mundo.',
  duration: '2–3 horas',
  price: 'Paseo y mirador del Tochō gratuitos',
  stats: [
    {value:'3,64 M', label:'pasajeros diarios de media en la estación', icon:'footprints'},
    {value:'202 m', label:'altura del mirador gratuito del Tochō', icon:'tower'},
    {value:'~70', label:'locales de yakitori en Omoide Yokocho', icon:'flame'},
    {value:'~200', label:'bares diminutos repartidos por Golden Gai', icon:'lantern'}
  ],
  blocks: [
    {type:'lead', text:'Shinjuku es uno de los grandes centros administrativos y de ocio de Tokio, con la estación más transitada del mundo según el Guinness (unos 3,64 millones de pasajeros diarios). La salida oeste concentra rascacielos y administración; la salida este, ocio nocturno intenso y algunos de los callejones más fotografiados de la ciudad.'},
    {type:'heading', text:'Nishi-Shinjuku, el distrito de los rascacielos', icon:'tower'},
    {type:'stop', title:'Edificio del Gobierno Metropolitano (Tochō)', text:[
      'Obra de Kenzō Tange, tiene dos torres de 243 metros con miradores gratuitos a 202 metros de altura, entre los mejores de la ciudad; en días despejados se llega a ver el monte Fuji. Frente a él se alza el hotel Park Hyatt Tokyo, protagonista silencioso de la película Lost in Translation, con el New York Bar abierto al público para disfrutar de las vistas sin ser huésped.'
    ]},
    {type:'stop', title:'Rascacielos y la escultura LOVE', text:[
      'La salida oeste reúne hoteles como el Keiō Plaza, el Hyatt Regency o el Hilton, con la torre Mode Gakuen Cocoon, de siluetas curvas, como una de las más fotografiadas. Cerca del edificio Shinjuku I-Land se puede ver una de las esculturas LOVE del artista estadounidense Robert Indiana, con su característico rojo entre tanto rascacielos gris.'
    ]},
    {type:'heading', text:'Jardines y callejones de posguerra', icon:'lantern'},
    {type:'stop', title:'Jardín nacional Shinjuku Gyoen', text:[
      'Al oeste de la estación, ocupa la antigua residencia de la familia Naitō y ofrece un gran oasis verde, especialmente popular durante el hanami; reconstruido tras los bombardeos, abrió como parque público en 1949.'
    ]},
    {type:'stop', title:'Omoide Yokocho', text:[
      '«El callejón de los recuerdos» reúne unos 70 diminutos locales de yakitori con el aire de un Tokio de los años cincuenta, muy parecido al ambiente de la serie Midnight Diner. Junto a un extremo del callejón se trasladó la conocida casa de cambio de Akihabara, ahora con oficina propia en Shinjuku.'
    ]},
    {type:'stop', title:'Shinjuku Southern Terrace', text:[
      'Tras la estación de autobuses, esta terraza de trenes es un buen lugar para sentarse a ver entrar y salir los convoyes de la línea privada Odakyu, incluido el Romancecar que conecta Tokio con Hakone; en Navidad se ilumina por completo.'
    ]},
    {type:'heading', text:'Kabukicho y el este de la estación', icon:'flame'},
    {type:'stop', title:'Kabukicho, el barrio rojo', text:[
      'Concentra neones, clubes de host y hostess, y locales de entretenimiento adulto; conviene visitarlo con sentido común, sobre todo respecto a hacer fotografías. En uno de sus extremos, el laberinto de callejones de Golden Gai reúne unos 200 bares minúsculos repartidos en seis callejuelas, con ambiente que solo cobra vida al anochecer. La torre Tokyu Kabukicho, de 2023 y 225 metros, está dedicada por completo al ocio, con hoteles, teatro, sala de conciertos y el callejón temático Kabukicho Yokocho.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Cerca de Kabukicho, el Hotel Gracery Shinjuku exhibe una cabeza de Godzilla a tamaño real asomando desde su fachada.',
      'El acceso al mirador del Tochō es completamente gratuito, algo poco habitual entre los grandes miradores de Tokio.'
    ]},
    {type:'heading', text:'Otros barrios cerca de la estación', icon:'gate'},
    {type:'cards', title:'Shin-Okubo y Shinjuku Ni-chōme', items:[
      {icon:'flame', title:'Shin-Okubo', text:'El «barrio coreano» de Tokio, considerado el mayor fuera de Corea: mercados, cosmética, librerías y restaurantes de kimchi y yakiniku.'},
      {icon:'heart', title:'Shinjuku Ni-chōme', text:'El barrio LGBT de la ciudad, pequeño pero con una intensa vida nocturna de bares, discotecas y saunas.'}
    ]}
  ],
  hours: 'Calles de acceso libre; mirador del Tochō abierto hasta media tarde-noche según la torre; Shinjuku Gyoen cierra los lunes.',
  price: 'Paseo y mirador del Tochō gratuitos', tickets: 'Shinjuku Gyoen tiene entrada de pago (unos 500 ¥); el resto del barrio no requiere entrada.',
  tips: [
    'Sube al mirador gratuito del Tochō al atardecer para ver la ciudad de día y de noche sin pagar nada.',
    'Cena en Omoide Yokocho pronto: los locales son diminutos y se llenan enseguida.',
    'En Kabukicho evita hacer fotos a las personas y a los locales sin permiso, y mantente alerta con las invitaciones a bares poco claros.'
  ],
  access: 'Estación de Shinjuku (JR Yamanote/Chūō/Sōbu y múltiples líneas de metro y privadas); salida oeste para el Tochō, salida este para Kabukicho y Golden Gai.',
  official: 'https://www.gotokyo.org/en/destinations/western-tokyo/shinjuku/index.html'
});
