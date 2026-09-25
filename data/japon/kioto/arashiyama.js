// Arashiyama y el bosque de bambú — ficha con estructura de bloques.
addJapanPlace({
  slug: 'arashiyama', city: 'kioto', name: 'Arashiyama y el bosque de bambú', category: 'Naturaleza',
  image: 'assets/arashiyama.jpg',
  lat: 35.017, lon: 135.6713,
  lead: 'El bosque de bambú, un puente sobre el río Katsura y macacos en semilibertad, al oeste de Kioto.',
  duration: '3–5 horas para una visita completa de la zona',
  price: 'Paseo por el bosque de bambú gratuito; templos con entrada propia',
  stats: [
    {value:'32', label:'patrones de tela en el Kimono Forest', icon:'👘'},
    {value:'1339', label:'año de fundación del templo Tenryū-ji', icon:'🏯'},
    {value:'8.000', label:'estatuas de piedra en el Adashino Nenbutsu-ji', icon:'🪨'}
  ],
  blocks: [
    {type:'lead', text:'Arashiyama es un distrito al oeste de Kioto conocido sobre todo por su bosque de bambú de Sagano, pero que ofrece mucho más: templos zen de primer nivel, un puente clásico sobre el río Katsura, un parque de macacos y calles de casas tradicionales reconvertidas en tiendas y museos.'},
    {type:'stop', title:'Kimono Forest y el bosque de bambú', text:[
      'Quien llega en el tranvía Randen se encuentra primero el Kimono Forest, una instalación de 2013 con 32 pilares cilíndricos de tela teñida al estilo tradicional kyō-yūzen que se iluminan al anochecer. El bosque de bambú en sí se recorre en pocos minutos a pie, pero conviene ir muy temprano (hacia las 6:00-8:00) para evitar la afluencia habitual de visitantes; cerca se encuentra el pequeño santuario Nonomiya, vinculado al Gran Santuario de Ise.'
    ]},
    {type:'stop', title:'Templo Tenryū-ji y el puente Togetsukyō', text:[
      'El templo Tenryū-ji, uno de los cinco grandes templos zen de Kioto, se construyó en 1339 dedicado al emperador Go-Daigo; sus edificios son reconstrucciones de la era Meiji, pero el jardín, obra del paisajista Musō Soseki, ha sobrevivido intacto durante siglos. Desde el puente Togetsukyō, reconstrucción de los años 1930 de un puente Heian, se cruza hacia el parque de los macacos de Iwatayama, con vistas sobre la ciudad y ejemplares en semilibertad.'
    ]},
    {type:'stop', title:'Saga Toriimoto, el distrito histórico del norte', text:[
      'Conserva casas machiya reconvertidas en tiendas y restaurantes, y da acceso a templos con miles de estatuas de piedra como el Adashino Nenbutsu-ji (unas 8.000) y el Otagi Nenbutsu-ji (unas 1.200), además del camino que sube hasta el santuario Atago, en la cima del monte homónimo.'
    ]}
  ],
  hours: 'El bosque de bambú y las calles son de acceso libre a cualquier hora; los templos abren generalmente de 8:30 a 17:00.',
  hoursSource: 'https://kyoto.travel/en/areas/saga-arashiyama/',
  tickets: 'No hace falta reservar para pasear por el bosque; los templos venden su entrada en el acceso.',
  official: 'https://kyoto.travel/en/areas/saga-arashiyama/',
  tips: [
    'Ve al bosque de bambú a primera hora (antes de las 8:00) para evitar la mayor afluencia de visitantes.',
    'Combina el bosque con Tenryū-ji y el puente Togetsukyō: están todos a poca distancia a pie.',
    'Si te gustan los templos menos conocidos, sube hasta Saga Toriimoto para ver el Otagi Nenbutsu-ji y sus estatuas de piedra.'
  ],
  access: 'En el tranvía Randen (Keifuku) hasta la estación de Arashiyama, o en tren JR/Hankyū hasta Saga-Arashiyama o Arashiyama; también en autobús desde el centro de Kioto.'
});
