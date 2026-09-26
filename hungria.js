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
  },
  food: {
    title: 'Comida típica <em>de Hungría.</em>',
    intro: 'Más allá del gulyás, el lángos o el kürtőskalács de Budapest, estos son los grandes ingredientes y bebidas que definen la cocina húngara.',
    blocks: [
      {type: 'heading', text: 'Paprika, el ingrediente que define la cocina húngara', icon: 'flame'},
      {type: 'p', text: 'La paprika llegó a Hungría a través del Imperio Otomano y se cultivó por primera vez en 1569, al principio como planta ornamental y medicinal, no alimentaria. Hoy existen cinco grados comerciales oficiales, del más suave (édesnemes, el clásico dulce) al más picante (erős); la variedad dulce moderna es en realidad un desarrollo del siglo XX, cuando un fitomejorador de Szeged encontró en los años veinte un ejemplar dulce por mutación natural y lo propagó por injerto.'},
      {type: 'p', text: 'Kalocsa, con paprika documentada desde 1729 y su propio Museo del Pimentón, y Szeged, sede de grandes productoras del sector, se disputan el título no oficial de capital húngara de la paprika. En la Universidad de Szeged, el científico Albert Szent-Györgyi usó paprika húngara para aislar la vitamina C en 1930, un trabajo que le valió el Premio Nobel de Medicina de 1937.'},
      {type: 'heading', text: 'Pörkölt y paprikás, primos del gulyás', icon: 'flame'},
      {type: 'p', text: 'El gulyás es una sopa; el pörkölt es un guiso: se prepara con carne deshuesada, sin patata y sin espesar con harina, friendo primero la cebolla y añadiendo la paprika fuera del fuego para que no se queme. El «goulash» que se sirve fuera de Hungría se parece en realidad mucho más a un pörkölt que al gulyás original. El paprikás —de donde viene el conocido csirkepaprikás o «chicken paprikash»— es un pörkölt acabado con nata agria (tejföl), de salsa más clara y cremosa, que se sirve tradicionalmente con nokedli, unos pequeños dumplings de huevo.'},
      {type: 'heading', text: 'Halászlé, la sopa de pescado del Danubio', icon: 'droplet'},
      {type: 'p', text: 'Esta sopa roja y picante, cargada de paprika, es originaria de la llanura panónica que riegan el Danubio y el Tisza, y está considerada una de las sopas más picantes de Europa. Se prepara con un caldo de recortes de pescado cocido durante horas, cebolla caramelizada y paprika, al que luego se añaden trozos de carpa, siluro, perca o lucio; existen estilos regionales propios en Szeged, Paks y Baja, cada uno con su propia proporción de pescado y de fideos.'},
      {type: 'heading', text: 'Tokaji, vino de reyes', icon: 'teacup'},
      {type: 'p', text: 'El Tokaji Aszú, elaborado con uvas afectadas por la podredumbre noble y recogidas y prensadas a mano, está considerado el vino botritizado documentado más antiguo del mundo. Se suele describir como la primera denominación de origen delimitada legalmente del mundo, aunque esa fecha se cita de forma distinta según la fuente (1737 u otra posterior) y la propia Chianti italiana recibió su delimitación legal ya en 1716, así que conviene tomar el título con cautela. La célebre frase «vino de reyes, rey de los vinos», atribuida a Luis XIV de Francia, no tiene una fuente primaria documentada: es una tradición muy repetida, no una cita verificada.'},
      {type: 'heading', text: 'Pálinka', icon: 'droplet'},
      {type: 'p', text: 'La referencia verificable más antigua de la pálinka data de 1332, cuando se ofreció en la corte de Carlos Roberto de Hungría a la reina Isabel como remedio contra la artritis, bajo el nombre «Aqua vitae reginae Hungariae» («agua de vida de la reina de Hungría»). Hoy es una Indicación Geográfica protegida por la Unión Europea: solo puede llamarse pálinka el aguardiente de fruta producido, destilado, madurado y embotellado en Hungría (y, para el de albaricoque, en cuatro provincias austriacas concretas). Se elabora con doble destilación en alambiques de cobre, alcanza entre un 40 y un 70% de graduación, y se sirve ligeramente templado, en copas tipo tulipán.'},
      {type: 'callout', label: '¿SABÍAS QUE...?', items: [
        'La tarta Dobos, creada por el confitero de Budapest József C. Dobos y presentada en la Exposición General de 1885 —donde la probaron el emperador Francisco José I y la emperatriz Sissi—, se diseñó para durar y viajar mejor que los pasteles de su época: su capa superior de caramelo duro y brillante sellaba la humedad, lo que permitió que se hiciera popular por toda Europa en una época con poca refrigeración disponible.'
      ]}
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
