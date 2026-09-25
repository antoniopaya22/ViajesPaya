// Namba — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'namba', city: 'osaka', zone: 'namba', name: 'Namba', category: 'Barrio', reviewed: '2026-09',
  image: 'assets/japon-namba.jpg',
  lat: 34.6656, lon: 135.5008,
  lead: 'El corazón comercial del sur de Osaka: galerías techadas, tiendas de artículos de cocina y un centro comercial con jardines en la azotea.',
  duration: '1,5–2,5 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'600 m', label:'longitud de la galería techada Shinsaibashi-suji', icon:'footprints'},
    {value:'4+', label:'líneas de tren y metro que confluyen en la estación de Namba', icon:'gate'}
  ],
  blocks: [
    {type:'lead', text:'Namba concentra algunas de las calles comerciales más animadas de Osaka alrededor de su gran estación de conexión, con galerías techadas que no dejan de suceder unas a otras, un centro comercial con jardines escalonados en la azotea y, a pocos minutos, uno de los santuarios más singulares de la ciudad.'},
    {type:'heading', text:'Galerías techadas: de Shinsaibashi a los utensilios de cocina', icon:'bag'},
    {type:'stop', title:'Shinsaibashi-suji, 600 metros de tiendas', text:[
      'Al norte de Dōtonbori, esta popular shotengai o calle comercial techada recorre 600 metros de tiendas de todo tipo hasta el puente Ebisu: desde tiendas de cien yenes y droguerías hasta salones de karaoke, pachinko y salas recreativas. También hay locales especializados en té japonés, vajilla tradicional, kimonos y antigüedades a precios razonables.'
    ]},
    {type:'stop', title:'Sennichimae Doguyasuji, la Kappabashi de Osaka', text:[
      'Al cruzar hacia el sur, Shinsaibashi-suji da paso a Sennichimae, otra galería con restaurantes y puestos de takoyaki que un poco más adelante se transforma en Sennichimae Doguyasuji: una calle comercial especializada en artículos de cocina, sobre todo para restaurantes e izakaya, donde se puede comprar de todo, desde moldes para taiyaki y máquinas de takoyaki hasta cazos de ramen, cuencos y réplicas de comida de plástico. Es la versión osakense de la calle Kappabashi de Asakusa, en Tokio.'
    ]},
    {type:'heading', text:'Namba Parks, un jardín sobre el asfalto', icon:'tree'},
    {type:'stop', title:'Terrazas, cascadas y jardines en la azotea', text:[
      'Namba Parks es un centro comercial de formas sinuosas cuya azotea, que ocupa varias manzanas, se convierte en un paseo de pequeñas cascadas, riachuelos y jardines escalonados: un buen contrapunto tranquilo y verde al bullicio del resto del barrio, ideal para sentarse a descansar o tomar algo con calma.'
    ]},
    {type:'heading', text:'Un santuario escondido muy cerca', icon:'eye'},
    {type:'stop', title:'El santuario Namba Yasaka, a un paso', text:[
      'A pocos minutos de Namba Parks y de Dōtonbori, el santuario Namba Yasaka guarda uno de los rincones más insólitos de Osaka: un escenario en forma de cabeza de león de doce metros de alto. Está lo bastante escondido como para pasarlo de largo sin saberlo, así que merece una parada aparte en cualquier paseo por la zona.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Sennichimae Doguyasuji es el equivalente osakense de la calle Kappabashi de Asakusa (Tokio), ambas dedicadas a los artículos de cocina para hostelería.',
      'La azotea de Namba Parks ocupa varias manzanas y recrea un paseo de jardines y cascadas sobre un centro comercial en pleno centro de la ciudad.'
    ]}
  ],
  hours: 'Las galerías comerciales y Namba Parks tienen horario comercial habitual; la mayoría de tiendas abre entre las 10:00 y las 20:00–21:00.',
  hoursSource: 'https://osaka-info.jp/en/area/namba/',
  tickets: 'No se necesita entrada; cada tienda o restaurante cobra por sus propios productos.',
  official: 'https://osaka-info.jp/en/area/namba/',
  tips: [
    'Combina el paseo con Dōtonbori: las galerías de Namba enlazan directamente con el canal y sus neones.',
    'Sube a la azotea de Namba Parks si buscas un rato de calma y algo de verde entre tanta compra y neón.',
    'Busca el santuario Namba Yasaka con calma: al estar algo escondido, es fácil pasarlo de largo pese a estar muy cerca.'
  ],
  access: 'A pie desde la estación de Namba (líneas Nankai, Midosuji, Sennichimae, Yotsubashi, Kintetsu), la gran estación de conexión del sur de Osaka.'
});
