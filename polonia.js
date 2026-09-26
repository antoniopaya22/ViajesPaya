// Guías organizadas por lugar a partir de investigación documentada con fuentes verificables.
// Los datos de visita enlazan a fuentes oficiales porque pueden cambiar.
const polandCountry = {
  slug: 'polonia', name: 'Polonia', kicker: 'Ciudades reconstruidas y calles con memoria', flag: 'PL',
  intro: 'Entre plazas medievales, barrios judíos y una historia del siglo XX que todavía se respira en cada calle. Cracovia y Varsovia cuentan Polonia desde ángulos muy distintos: una que sobrevivió casi intacta, otra que se reconstruyó piedra a piedra.',
  image: 'assets/cracovia.jpg', cities: ['cracovia', 'wieliczka', 'varsovia'],
  guide: {
    title: 'Guía práctica <em>de Polonia.</em>',
    intro: 'Moneda, tarjetas y presupuesto: lo esencial para organizar el viaje antes de pisar Polonia.',
    blocks: [
      {type: 'heading', text: 'La moneda es el zloty, no el euro', icon: 'bag'},
      {type: 'p', text: 'Polonia es miembro de la Unión Europea pero no ha adoptado el euro: su moneda es el złoty polaco (PLN). Se paga con tarjeta en la gran mayoría de comercios, pero conviene llevar algo de efectivo para puestos callejeros y mercados.'},
      {type: 'heading', text: 'Entre Cracovia y Varsovia', icon: 'ruler'},
      {type: 'p', text: 'Las dos ciudades están conectadas por trenes intercity frecuentes que las convierten en la forma más práctica de combinar ambos destinos en un mismo viaje; consulta horarios y precios actuales en la web de PKP Intercity.'}
    ]
  },
  food: {
    title: 'Comida típica <em>de Polonia.</em>',
    intro: 'Más allá del obwarzanek de Cracovia o los bares de leche de Varsovia, estos son los grandes platos y bebidas de la cocina polaca en todo el país.',
    blocks: [
      {type: 'heading', text: 'Pierogi, con relleno para cada ocasión', icon: 'flame'},
      {type: 'p', text: 'Los rellenos clásicos van del pierogi ruskie (requesón, patata y cebolla) al de carne, pasando por el de col y setas —típico de la cena de Nochebuena polaca, la Wigilia— o el de fruta; los pierogi leniwe («perezosos»), en cambio, no llevan relleno: son más bien unos ñoquis de requesón, huevo y harina. En la región de Biłgoraj existe además una variante propia, con trigo sarraceno, patata y queso, horneada en vez de hervida.'},
      {type: 'heading', text: 'Bigos, el guiso que mejora con los días', icon: 'flame'},
      {type: 'p', text: 'Documentado desde el siglo XVII, el bigos original ni siquiera llevaba col: era una mezcla de ingredientes troceados con mantequilla y condimentos agridulces, con posibles raíces en el «compositum» medieval latino. La versión con chucrut que se conoce hoy, el «bigos hultajski», se popularizó en el siglo XVIII, bajo el reinado de Augusto III. Se considera un plato que mejora al recalentarlo o incluso congelarlo, lo que lo convirtió en comida práctica para cazadores y viajeros; Adam Mickiewicz lo inmortalizó en su poema nacional Pan Tadeusz (1834), elogiando «su maravilloso sabor, color y aroma».'},
      {type: 'heading', text: 'Żurek', icon: 'droplet'},
      {type: 'p', text: 'Esta sopa agria se elabora fermentando harina de centeno (el zakwas, una especie de masa madre), a veces con avena o pan agrio. La versión de Semana Santa lleva salchicha blanca (biała kiełbasa) y huevo cocido, y existen variantes regionales: en Silesia se sirve sobre puré de patata, en Podlasie con el huevo partido por la mitad, y en la región de Subcarpacia se prepara con avena fermentada (żur owsiany).'},
      {type: 'heading', text: 'Kiełbasa con sello europeo', icon: 'bag'},
      {type: 'p', text: 'La kiełbasa krakowska sucha staropolska tiene el sello europeo de Especialidad Tradicional Garantizada desde 2018. La kiełbasa lisiecka, con Indicación Geográfica Protegida, procede de las localidades de Liszki y Czernichów, cerca de Cracovia —un manuscrito de 1894 ya documenta que 34 de los 87 carniceros de la comarca trabajaban en estos dos municipios—; se elabora con un 85% de jamón, se cura entre 2 y 4 días y se ahúma con madera de aliso, haya o árboles frutales.'},
      {type: 'heading', text: 'Vodka: un origen disputado', icon: 'droplet'},
      {type: 'p', text: 'La primera mención escrita conocida de la «wódka» aparece en documentos judiciales de Sandomierz, en 1405; en Rusia, la primera referencia en cirílico no llega hasta 1533, y describe una bebida medicinal traída «desde Polonia». Esto solo prueba la fecha de los registros, no quién la inventó realmente: el origen exacto sigue siendo objeto de disputa histórica entre ambos países. Desde 2008, «Polska Wódka» es una Indicación Geográfica protegida por la Unión Europea: solo puede llevar ese nombre el vodka elaborado enteramente en Polonia a partir de cereales tradicionales o patata cultivados en el país. Entre las variedades más conocidas está la żubrówka, aromatizada con una brizna de hierba de bisonte recogida a mano en el bosque de Białowieża, producida comercialmente desde 1928.'},
      {type: 'callout', label: '¿SABÍAS QUE...?', items: [
        'Los pączki que se comen por millones el Jueves Graso (Tłusty Czwartek) se conocen en Polonia desde la Edad Media, pero su masa ligera y esponjosa actual se refinó con la influencia de cocineros franceses; los rellenos más clásicos son la mermelada de ciruela (powidła) y, más antigua todavía, la de pétalos de rosa.'
      ]}
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
    slug: 'wieliczka', country: 'polonia', name: 'Wieliczka', region: 'Voivodato de Pequeña Polonia',
    image: 'assets/wieliczka.jpg', eyebrow: 'Una catedral entera excavada en sal',
    intro: 'A las afueras de Cracovia, la Mina de Sal de Wieliczka lleva más de siglos y medio de historia minera bajo tierra y una capilla íntegramente tallada en sal, a más de 100 metros de profundidad.',
    days: 'Medio día', best: 'Todo el año (visita interior, sin depender del clima)', move: 'Tren o autobús desde Cracovia',
    lat: 49.9857, lon: 20.0533,
    tips: [
      ['Reserva con antelación', 'Es una de las visitas más demandadas de la región y el aforo por turno es limitado.'],
      ['Lleva algo de abrigo', 'La temperatura bajo tierra ronda los 14-16 °C todo el año.'],
      ['Cuenta con varias horas', 'La ruta turística estándar recorre unos 3-3,5 km y dura entre 2 y 3 horas.']
    ]
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
    ],
    transport: {
      title: 'Cómo moverse <em>por Varsovia.</em>',
      intro: 'Metro, tranvía y autobús forman una red integrada, gestionada por ZTM bajo la marca Warszawski Transport Publiczny.',
      blocks: [
        {type: 'heading', text: 'Metro y tranvía', icon: 'footprints'},
        {type: 'p', text: 'Varsovia tiene 2 líneas de metro: la M1, abierta en 1995, y la M2, de 2015, con unas 39 estaciones en total. La M1 no para directamente en la estación central de tren, Warszawa Centralna.'},
        {type: 'table', title: 'Billetes (tarifa oficial de ZTM)', columns: ['Billete', 'Precio normal', 'Precio reducido'], rows: [
          ['20 minutos', '3,40 PLN', '1,70 PLN'],
          ['75 minutos', '4,40 PLN', '2,20 PLN'],
          ['90 minutos (zonas 1+2)', '7,00 PLN', '3,50 PLN'],
          ['24 horas (zona 1)', '15,00 PLN', '7,50 PLN'],
          ['72 horas (zona 1)', '36,00 PLN', '18,00 PLN']
        ]},
        {type: 'callout', label: '¿SABÍAS QUE...?', items: [
          'El Warsaw Pass, promovido por el portal turístico oficial go2warsaw.pl, es un pase de descuentos en museos y atracciones: no incluye el transporte público, así que no sustituye al billete de ZTM.'
        ]},
        {type: 'heading', text: 'Desde los aeropuertos', icon: 'gate'},
        {type: 'p', text: 'El aeropuerto Chopin no tiene metro directo, pero sí una estación de tren propia con las líneas SKM S2/S3 y la línea RL de Koleje Mazowieckie hasta el centro, además de varias líneas de autobús. El aeropuerto de Modlin, más alejado, todavía no tiene estación de tren propia (prevista para 2027): se llega en autobús lanzadera hasta la estación de Modlin y de ahí en tren, o directamente en autocar hasta el centro de Varsovia.'}
      ]
    },
    food: {
      title: 'Qué comer <em>en Varsovia.</em>',
      intro: 'Pierogi, żurek y bigos son platos de toda Polonia, pero los «bares de leche» sí nacieron aquí.',
      blocks: [
        {type: 'heading', text: 'Bares de leche (bary mleczne)', icon: 'teacup'},
        {type: 'p', text: 'El primer bar de leche —una cantina sencilla y barata, heredera de la época comunista— abrió en Varsovia en 1896, en la calle Nowy Świat. Bajo el régimen comunista se multiplicaron gracias a la cooperativa Społem: solo Varsovia llegó a tener 41 en 1972. Hoy siguen subvencionados por el Estado, con el margen de beneficio limitado por ley desde 2015.'},
        {type: 'heading', text: 'Żurek, bigos y pierogi', icon: 'flame'},
        {type: 'p', text: 'El żurek es una sopa agria de centeno fermentado, tradicional en Semana Santa. El bigos, un guiso de chucrut y varias carnes que mejora al recalentarlo, aparece ya en el poema nacional Pan Tadeusz de Adam Mickiewicz (1834). Los pierogi, con relleno dulce o salado, son el plato polaco más conocido fuera del país.'},
        {type: 'callout', label: '¿SABÍAS QUE...?', items: [
          'El obwarzanek, el pan en forma de anillo, es una especialidad protegida de Cracovia, no de Varsovia: no es una tradición propiamente varsoviana, aunque se venda también aquí.'
        ]}
      ]
    }
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
