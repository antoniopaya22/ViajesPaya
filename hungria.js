// Guías organizadas por lugar a partir de investigación documentada con fuentes verificables.
// Los datos de visita enlazan a fuentes oficiales porque pueden cambiar.
const hungaryCountry = {
  slug: 'hungria', name: 'Hungría', kicker: 'Termas, orillas del Danubio y grandeza imperial', flag: 'HU',
  intro: 'Budapest nació en 1873 de la unión de tres ciudades a orillas del Danubio: Buda, Óbuda y Pest. El resultado es una capital que combina baños termales otomanos, arquitectura imperial y un río que todavía marca el ritmo de la ciudad.',
  image: 'assets/budapest.jpg', cities: ['budapest'],
  guide: {
    title: 'Guía práctica <em>de Hungría.</em>',
    intro: 'Transporte, moneda y presupuesto: lo esencial para organizar el viaje antes de pisar Budapest.',
    blocks: []
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
    ]
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
