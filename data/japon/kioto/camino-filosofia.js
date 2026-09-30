// Camino de la Filosofía — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'camino-filosofia', city: 'kioto', zone: 'higashiyama-norte', name: 'Camino de la Filosofía', category: 'Paseo', reviewed: '2026-09',
  image: 'assets/japon-kioto-camino-filosofia.jpg',
  lat: 35.0267, lon: 135.7983,
  lead: 'Un paseo de dos kilómetros junto a un canal, bautizado por el filósofo que lo recorría cada día mientras meditaba.',
  duration: '45–60 min a pie',
  stats: [
    {value: '~2 km', label: 'de longitud, entre Ginkaku-ji y la zona de Nanzen-ji', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'El Camino de la Filosofía (Tetsugaku no Michi) discurre junto a un ramal del Canal del Lago Biwa, construido originalmente como camino de mantenimiento del propio canal. Debe su nombre a Nishida Kitarō (1870-1945), fundador de la conocida como Escuela de Kioto de filosofía y profesor en la Universidad de Kioto, que según la tradición recorría este camino a diario meditando, a veces junto a otros académicos. El nombre se adoptó de forma oficial a comienzos de los años setenta, aunque las fuentes no coinciden en si fue en 1969 o en 1972.'},
    {type: 'p', text: 'El empedrado peatonal que se camina hoy se instaló en 1987, y el conjunto está reconocido como una de las «100 mejores carreteras de Japón». Conecta Ginkaku-ji, al norte, con la zona de Eikan-dō, Nanzen-ji y el santuario Kumano Nyakuōji, al sur.'},
    {type: 'heading', text: 'Los cerezos de Kansetsu', icon: 'blossom'},
    {type: 'p', text: 'Los cerezos que flanquean el camino —sobre todo Somei Yoshino, con algo de Ōshima-zakura— se plantaron a partir de 1922, cuando el pintor Hashimoto Kansetsu y su esposa sembraron los primeros junto a su residencia, la actual casa-museo Hakusasonsō, justo al lado del camino; por eso se los conoce como «cerezos de Kansetsu».'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Junto al camino se encuentran el templo Hōnen-in y el santuario Ōtoyo, este último conocido por sus inusuales estatuas guardianas en forma de ratón.'
    ]}
  ],
  price: 'Acceso libre',
  official: 'https://kyoto.travel/en/destinations/philosophers-path-tetsugakunomichi/',
  tips: [
    'Camínalo de norte a sur, de Ginkaku-ji hacia Nanzen-ji, para enlazar con naturalidad varias visitas de Higashiyama norte.'
  ]
});
