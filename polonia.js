// Guías organizadas por lugar a partir de investigación documentada con fuentes verificables.
// Los datos de visita enlazan a fuentes oficiales porque pueden cambiar.
const polandCountry = {
  slug: 'polonia', name: 'Polonia', kicker: 'Ciudades reconstruidas y calles con memoria', flag: 'PL',
  intro: 'Entre plazas medievales, barrios judíos y una historia del siglo XX que todavía se respira en cada calle. Cracovia y Varsovia cuentan Polonia desde ángulos muy distintos: una que sobrevivió casi intacta, otra que se reconstruyó piedra a piedra.',
  image: 'assets/cracovia.jpg', cities: ['cracovia', 'varsovia'],
  guide: {
    title: 'Guía práctica <em>de Polonia.</em>',
    intro: 'Moneda, tarjetas y presupuesto: lo esencial para organizar el viaje antes de pisar Polonia.',
    blocks: [
      {type: 'heading', text: 'La moneda es el zloty, no el euro', icon: 'bag'},
      {type: 'p', text: 'Polonia es miembro de la Unión Europea pero no ha adoptado el euro: su moneda es el złoty polaco (PLN). Se paga con tarjeta en la gran mayoría de comercios, pero conviene llevar algo de efectivo para puestos callejeros y mercados.'},
      {type: 'heading', text: 'Entre Cracovia y Varsovia', icon: 'ruler'},
      {type: 'p', text: 'Las dos ciudades están conectadas por trenes intercity frecuentes que las convierten en la forma más práctica de combinar ambos destinos en un mismo viaje; consulta horarios y precios actuales en la web de PKP Intercity.'}
    ]
  }
};

const polandCities = [
  {
    slug: 'cracovia', country: 'polonia', name: 'Cracovia', region: 'Voivodato de Pequeña Polonia',
    image: 'assets/cracovia.jpg', eyebrow: 'La antigua capital que la guerra no destruyó',
    intro: 'Capital de Polonia hasta 1596, Cracovia es de las pocas grandes ciudades polacas que conservó su casco antiguo casi intacto tras la Segunda Guerra Mundial. Entre la plaza del mercado, la colina de Wawel y el barrio judío de Kazimierz hay mucho que descubrir sin necesidad de seguir una ruta cerrada.',
    days: '2–3 días', best: 'Primavera y otoño', move: 'A pie + tranvía',
    lat: 50.0647, lon: 19.9450,
    tips: [
      ['Camina entre zonas', 'El casco antiguo, Wawel, Kazimierz y Podgórze están conectados a pie o en un tranvía corto.'],
      ['Cruza el Vístula', 'Un paseo corto conecta Kazimierz con Podgórze cruzando el río.'],
      ['Reserva con antelación', 'La Mina de Sal de Wieliczka y algunos museos concentran mucha demanda en temporada alta.']
    ],
    zones: [
      { slug: 'rynek', name: 'Rynek Główny' },
      { slug: 'wawel', name: 'Wawel' },
      { slug: 'kazimierz', name: 'Kazimierz' },
      { slug: 'podgorze', name: 'Podgórze' }
    ],
    transport: {
      title: 'Cómo moverse <em>por Cracovia.</em>',
      intro: 'El casco antiguo, Wawel y Kazimierz se recorren perfectamente a pie; los tranvías de MPK Kraków cubren el resto de la ciudad.',
      blocks: [
        {type: 'heading', text: 'La red de tranvías de MPK Kraków', icon: 'footprints'},
        {type: 'p', text: 'Cracovia tiene tranvía desde 1882, primero de tracción animal y electrificado entre 1901 y 1902. Hoy la red de MPK Kraków suma 27 líneas y un breve túnel subterráneo en el centro, abierto en 2008.'},
        {type: 'p', text: 'Los billetes se compran antes de subir (en máquinas, apps o quioscos) y deben validarse a bordo; los precios y la vigencia exactos conviene comprobarlos en la web oficial de ZTP Kraków, que en los últimos años ha revisado varias veces la tarifa.'},
        {type: 'heading', text: 'Desde el aeropuerto', icon: 'gate'},
        {type: 'p', text: 'El aeropuerto Juan Pablo II Cracovia-Balice está a unos 11 km del centro. La línea de tren SKA1 conecta el aeropuerto con la estación central de Cracovia; también hay autobuses urbanos (líneas 209 y 300, más la línea nocturna 902) gestionados por MPK.'}
      ]
    },
    food: {
      title: 'Qué comer <em>en Cracovia.</em>',
      intro: 'Dos bocados callejeros definen la ciudad: el obwarzanek de los puestos del casco antiguo y la zapiekanka de Kazimierz.',
      blocks: [
        {type: 'heading', text: 'Obwarzanek krakowski', icon: 'flame'},
        {type: 'p', text: 'El pan en forma de anillo que se vende en cientos de puestos por toda la ciudad tiene protección europea (IGP) desde 2010, pero su historia es mucho más larga: se documenta ya en 1394, en las cuentas de la corte de la reina Jadwiga y el rey Ladislao II Jagellón, y el gremio de panaderos de Cracovia obtuvo el monopolio de su venta en 1496. Hoy se calcula que se venden unos 150.000 al día, entre 170 y 180 puestos, con coberturas de sal gruesa, semillas de amapola, sésamo o hierbas.'},
        {type: 'heading', text: 'Zapiekanka, en Plac Nowy', icon: 'flame'},
        {type: 'p', text: 'La <a href="#/pais/polonia/ciudad/cracovia/lugar/plac-nowy">plaza Plac Nowy</a>, en Kazimierz, concentra los puestos de zapiekanka más conocidos de la ciudad: media baguette con champiñones y queso fundido, tostada al horno.'},
        {type: 'callout', label: '¿SABÍAS QUE...?', items: [
          'El pierogi es un plato de toda Polonia, no solo de Cracovia, pero la ciudad celebra cada año un festival del pierogi por el día de San Jacinto, su patrón no oficial.'
        ]}
      ]
    }
  },
  {
    slug: 'varsovia', country: 'polonia', name: 'Varsovia', region: 'Voivodato de Masovia',
    image: 'assets/varsovia.jpg', eyebrow: 'Una capital reconstruida piedra a piedra',
    intro: 'Capital de Polonia desde 1596, Varsovia quedó arrasada casi por completo durante la Segunda Guerra Mundial. Su casco antiguo, reconstruido minuciosamente a partir de pinturas y fotografías de antes de la guerra, es Patrimonio de la Humanidad precisamente por esa historia de reconstrucción.',
    days: '2–3 días', best: 'Primavera y otoño', move: 'Metro + tranvía + a pie',
    lat: 52.2297, lon: 21.0122,
    tips: [
      ['Empieza por el casco antiguo', 'La plaza del mercado y sus alrededores son el mejor punto de partida.'],
      ['Cruza al otro lado del Vístula', 'El barrio de Praga conserva un ambiente muy distinto al centro.'],
      ['Reserva tiempo para los museos', 'El Museo del Levantamiento de Varsovia y el POLIN merecen varias horas cada uno.']
    ],
    zones: [
      { slug: 'casco-antiguo', name: 'Casco antiguo' },
      { slug: 'ruta-real', name: 'Ruta Real' },
      { slug: 'muranow', name: 'Muranów' },
      { slug: 'praga', name: 'Praga' }
    ]
  }
];

const polandPlaces = [];

const polandCityImage = Object.fromEntries(polandCities.map(city => [city.slug, city.image]));

function addPolandPlace(place) {
  polandPlaces.push(Object.assign({
    duration: '45–90 min',
    hours: 'Consulta los horarios de cada recinto en la web oficial.',
    price: 'Consulta la tarifa actual',
    tickets: 'Consulta la venta y las reservas en la web oficial.',
    image: polandCityImage[place.city]
  }, place, {
    hoursSource: place.hoursSource || place.official
  }));
}
