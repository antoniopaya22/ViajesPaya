// Nishi Hongan-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'nishi-honganji', city: 'kioto', zone: 'estacion', name: 'Nishi Hongan-ji', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-kioto-nishi-honganji.jpg',
  lat: 34.9920, lon: 135.7516,
  lead: 'El templo occidental nacido de la división de la escuela Jōdo Shinshū, con la puerta que hacía perder la noción del tiempo y el escenario de nō más antiguo declarado Tesoro Nacional.',
  duration: '45–75 min',
  stats: [
    {value: '1994', label: 'declarado Patrimonio de la Humanidad, junto al resto de Monumentos Históricos de la Antigua Kioto', icon: 'trophy'},
    {value: '1581', label: 'año de construcción de su escenario de nō, el más antiguo declarado Tesoro Nacional', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Nishi Hongan-ji nació en 1602 cuando el shōgun Tokugawa Ieyasu dividió en dos la escuela budista Jōdo Shinshū para debilitar su influencia: el templo occidental, este, y el oriental, <a href="#/pais/japon/ciudad/kioto/lugar/higashi-honganji">Higashi Hongan-ji</a>. La institución Hongan-ji en sí se remonta a 1321, en el mausoleo de Ōtani; el templo se trasladó a su emplazamiento actual en 1591.'},
    {type: 'heading', text: 'La puerta Karamon, o «puerta del atardecer»', icon: 'gate'},
    {type: 'p', text: 'Construida hacia 1598 para el castillo Fushimi de Toyotomi Hideyoshi, la puerta Karamon se trasladó aquí en 1632 con motivo de una visita shogunal. Se la conoce popularmente como Higurashi no Mon, la «puerta del atardecer», porque se decía que los visitantes se entretenían tanto contemplando sus tallas que perdían la noción del tiempo hasta que caía la noche.'},
    {type: 'p', text: 'El recinto conserva también el Goeidō (Salón del Fundador, reconstruido en 1636) y el Amidadō (reconstruido en 1760), ambos Tesoro Nacional, y el pabellón Hiunkaku, agrupado junto a Kinkaku-ji y Ginkaku-ji como uno de los «tres grandes pabellones» de Kioto, aunque de acceso muy restringido al público.'},
    {type: 'heading', text: 'El escenario de nō más antiguo', icon: 'bell'},
    {type: 'p', text: 'El escenario de nō del lado norte del recinto, datado en 1581 gracias a fragmentos de papel hallados en su estructura, está considerado el escenario de nō más antiguo declarado Tesoro Nacional de Japón.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'En el recinto crece un gingko de más de 400 años, declarado monumento natural de Kioto y conocido como «gingko invertido» (sakasa-ichō) o «gingko que escupe agua» (mizufuki-ichō); la tradición local cuenta que sus ramas, cargadas de agua, ayudaron a salvar el templo de un incendio, aunque no hay un incendio concreto documentado al que se pueda atribuir la leyenda.'
    ]}
  ],
  hours: 'Aproximadamente de 5:30 a 17:30 según la época del año; horario no confirmado directamente en la web oficial.',
  price: 'Entrada gratuita al recinto',
  official: 'https://www.hongwanji.or.jp/',
  tips: [
    'Está a poca distancia de la estación de Kioto: fácil de combinar con la llegada o salida en tren.'
  ]
});
