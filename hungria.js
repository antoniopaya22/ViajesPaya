// Guías organizadas por lugar a partir de investigación documentada con fuentes verificables.
// Los datos de visita enlazan a fuentes oficiales porque pueden cambiar.
const hungaryCountry = {
  slug: 'hungria', name: 'Hungría', kicker: 'Termas, orillas del Danubio y grandeza imperial', flag: 'HU',
  intro: 'Budapest nació en 1873 de la unión de tres ciudades a orillas del Danubio: Buda, Óbuda y Pest. El resultado es una capital que combina baños termales otomanos, arquitectura imperial y un río que todavía marca el ritmo de la ciudad.',
  image: 'assets/budapest.jpg', cities: ['budapest'],
  guide: {
    title: 'Guía práctica <em>de Hungría.</em>',
    intro: 'Moneda y presupuesto: lo esencial para organizar el viaje antes de pisar Budapest.',
    blocks: [
      {type: 'heading', text: 'La moneda es el forint, no el euro', icon: 'bag'},
      {type: 'p', text: 'Hungría es miembro de la Unión Europea pero no ha adoptado el euro: su moneda es el forint húngaro (Ft o HUF). Se paga con tarjeta en la mayoría de comercios, pero conviene llevar algo de efectivo para mercados y baños termales.'}
    ]
  }
};

const hungaryCities = [
  {
    slug: 'budapest', country: 'hungria', name: 'Budapest', region: 'Hungría central',
    image: 'assets/budapest.jpg', eyebrow: 'Una ciudad partida en dos por el Danubio',
    intro: 'Budapest nació en 1873 de la fusión de Buda, Óbuda y Pest, a ambas orillas del Danubio. Del lado de Buda, la colina del castillo y la colina Gellért ofrecen las mejores vistas; del lado de Pest, el Parlamento, la Gran Sinagoga y la avenida Andrássy concentran buena parte de la vida de la ciudad.',
    days: '3–4 días', best: 'Primavera y otoño', move: 'Metro + tranvía + a pie',
    lat: 47.4979, lon: 19.0402,
    tips: [
      ['Cruza el río a menudo', 'Buda y Pest se sienten como dos ciudades distintas; merece la pena cruzar varias veces.'],
      ['Lleva bañador', 'Los baños termales son una parada habitual, no solo para quien busca relajarse.'],
      ['Sube a pie o en funicular', 'El Castillo de Buda se puede subir andando o en el funicular Budavári Sikló.']
    ],
    zones: [
      { slug: 'castillo-de-buda', name: 'Castillo de Buda' },
      { slug: 'gellert', name: 'Colina Gellért' },
      { slug: 'centro-pest', name: 'Centro de Pest' },
      { slug: 'andrassy', name: 'Andrássy y barrio judío' }
    ],
    transport: {
      title: 'Cómo moverse <em>por Budapest.</em>',
      intro: 'Metro, tranvía y autobús forman una de las redes de transporte público más densas de Europa, gestionada por BKK.',
      blocks: [
        {type: 'heading', text: 'Metro, tranvía y autobús (BKK)', icon: 'footprints'},
        {type: 'p', text: 'La línea M1, inaugurada en 1896, fue el segundo metro eléctrico del mundo y el primero del continente europeo; hoy la red suma 4 líneas. Los tranvías circulan en Budapest desde 1866 (a tracción animal) y se electrificaron en 1887: la red actual, una de las más extensas del mundo, se gestiona junto al metro y los autobuses bajo el operador BKK.'},
        {type: 'table', title: 'Billetes (tarifas oficiales de BKK)', columns: ['Billete', 'Precio'], rows: [
          ['Sencillo (comprado antes)', '500 Ft'],
          ['Sencillo (comprado a bordo)', '700 Ft'],
          ['30 minutos', '600 Ft'],
          ['90 minutos (con transbordo)', '850 Ft'],
          ['Abono 24 horas', '2.750 Ft'],
          ['Abono 72 horas', '5.750 Ft']
        ]},
        {type: 'callout', label: '¿SABÍAS QUE...?', items: [
          'BKK también vende una Budapest Card, un pase turístico con descuentos en museos y atracciones que no incluye el transporte público: son productos distintos, conviene no confundirlos.'
        ]},
        {type: 'heading', text: 'Desde el aeropuerto', icon: 'gate'},
        {type: 'p', text: 'El aeropuerto de Budapest-Ferenc Liszt está a unos 16 km al sureste del centro. El autobús exprés 100E conecta la Terminal 2 con Deák Ferenc tér en unos 30-40 minutos, con un billete específico algo más caro que el estándar; también se puede combinar el autobús 200E hasta la estación de metro Kőbánya-Kispest y continuar en la línea M3.'}
      ]
    },
    food: {
      title: 'Qué comer <em>en Budapest.</em>',
      intro: 'El gulyás es sopa, no el estofado que se conoce fuera de Hungría, y el lángos es la gran tentación de cualquier mercado.',
      blocks: [
        {type: 'heading', text: 'Gulyás: una sopa, no un guiso', icon: 'flame'},
        {type: 'p', text: 'El gulyás (gulyásleves, «sopa de vaquero») nació como comida de pastores húngaros, que llevaban la carne deshidratada en bolsas de estómago de oveja para rehidratarla con agua por el camino. La cocina húngara distingue con claridad entre un guiso (pörkölt) y el gulyás, que es una sopa: la versión espesa de estofado conocida fuera de Hungría como «goulash» es una adaptación extranjera. El pimentón, hoy tan asociado al plato, no llegó a Europa hasta el siglo XVI, así que las recetas más antiguas ni siquiera lo llevaban.'},
        {type: 'heading', text: 'Lángos', icon: 'flame'},
        {type: 'p', text: 'Una masa de pan frita, tradicionalmente el día de hornear el pan del resto de la semana, con nata agria, queso y ajo como cobertura clásica. Se encuentra en puestos de mercado por toda la ciudad, sobre todo en el <a href="#/pais/hungria/ciudad/budapest/lugar/mercado-central">Gran Mercado Central</a>.'},
        {type: 'callout', label: '¿SABÍAS QUE...?', items: [
          'El kürtőskalács o «pastel chimenea», enrollado en un espetón cónico y tostado al carbón, es originario de Transilvania, no de Budapest, pero se vende como dulce callejero en toda la ciudad.'
        ]}
      ]
    }
  }
];

const hungaryPlaces = [];

const hungaryCityImage = Object.fromEntries(hungaryCities.map(city => [city.slug, city.image]));

function addHungaryPlace(place) {
  hungaryPlaces.push(Object.assign({
    duration: '45–90 min',
    hours: 'Consulta los horarios de cada recinto en la web oficial.',
    price: 'Consulta la tarifa actual',
    tickets: 'Consulta la venta y las reservas en la web oficial.',
    image: hungaryCityImage[place.city]
  }, place, {
    hoursSource: place.hoursSource || place.official
  }));
}
