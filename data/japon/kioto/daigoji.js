// Daigo-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'daigoji', city: 'kioto', zone: 'fushimi', name: 'Daigo-ji', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-kioto-daigoji.jpg',
  lat: 34.9488, lon: 135.8276,
  lead: 'El templo del siglo IX con la construcción de madera más antigua de la prefectura de Kioto, escenario de la última gran fiesta de Toyotomi Hideyoshi.',
  duration: '90–120 min (recinto bajo); jornada completa si se sube al Kami-Daigo',
  stats: [
    {value: '874', label: 'año de fundación, por el monje Shōbō', icon: 'scroll'},
    {value: '951', label: 'año de construcción de su pagoda de cinco pisos', icon: 'pagoda'}
  ],
  blocks: [
    {type: 'lead', text: 'Daigo-ji lo fundó en el año 874 el monje Shōbō, discípulo de Kūkai, con una ermita en lo alto del monte Daigo. Forma parte, junto a Nishi Hongan-ji y otros catorce monumentos, de los Monumentos Históricos de la Antigua Kioto declarados Patrimonio de la Humanidad en 1994.'},
    {type: 'heading', text: 'La pagoda más antigua de Kioto', icon: 'pagoda'},
    {type: 'p', text: 'La pagoda de cinco pisos, terminada en el año 951, es la construcción de madera más antigua que se conserva en toda la prefectura de Kioto; sobrevivió a los incendios de la guerra Ōnin (1467-1477) que arrasaron el resto del recinto bajo, el Shimo-Daigo.'},
    {type: 'heading', text: 'La última gran fiesta de Hideyoshi', icon: 'blossom'},
    {type: 'p', text: 'En la primavera de 1598, meses antes de morir, Toyotomi Hideyoshi organizó en el jardín de Sanbō-in una fastuosa fiesta de contemplación de los cerezos («Daigo no Hanami»), para la que se dice que se plantaron cerca de 700 cerezos y a la que asistieron alrededor de 1.300 invitados, entre ellos su hijo Hideyori y sus esposas y concubinas. Cada segundo domingo de abril se recrea el evento con un desfile conmemorativo.'},
    {type: 'p', text: 'El propio Hideyoshi participó en el diseño del jardín de Sanbō-in ese mismo año 1598, con un estanque central, islas, puentes y una cascada escalonada; el edificio de Sanbō-in en sí es anterior, de 1115.'},
    {type: 'heading', text: 'Shimo-Daigo y Kami-Daigo', icon: 'peak'},
    {type: 'p', text: 'El recinto bajo, Shimo-Daigo, de fácil acceso, reúne el conjunto principal, Sanbō-in, la pagoda y el museo Reihōkan. El recinto alto, Kami-Daigo, en la cima del monte Daigo (unos 450 m de altitud), es el emplazamiento original de la ermita de Shōbō: se llega tras una caminata exigente de un par de kilómetros y entre 60 y 90 minutos, hasta salones como el Godai-dō o el Yakushi-dō.'}
  ],
  hours: 'De comienzos de marzo al primer domingo de diciembre, 9:00–17:00; el resto del año, 9:00–16:30.',
  price: 'Entrada combinada (Sanbō-in, Reihōkan y Garan): 800 ¥ en temporada normal; 1.500 ¥ en temporada alta de primavera (20 de marzo–15 de mayo) y otoño (15 de octubre–10 de diciembre).',
  official: 'https://www.daigoji.or.jp/e/',
  tips: [
    'Si quieres subir al Kami-Daigo, resérvale medio día y calzado cómodo: es una caminata de montaña, no un paseo.'
  ]
});
