// Mina de Sal de Wieliczka — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'mina-de-sal', city: 'wieliczka', name: 'Mina de Sal de Wieliczka', category: 'Patrimonio de la Humanidad', reviewed: '2026-09',
  image: 'assets/wieliczka.jpg',
  lat: 49.9836, lon: 20.0530,
  lead: 'Más de 700 años de minería bajo tierra, con una capilla entera —suelo, paredes y lámparas— tallada en sal.',
  duration: '2–3 horas',
  stats: [
    {value: '327 m', label: 'profundidad máxima accesible en la ruta turística, en 9 niveles', icon: 'peak'},
    {value: '1978', label: 'año de declaración como Patrimonio de la Humanidad, en la primera lista de la UNESCO', icon: 'trophy'},
    {value: '2%', label: 'del total de la mina que puede visitarse', icon: 'eye'}
  ],
  blocks: [
    {type: 'lead', text: 'La extracción de sal en Wieliczka se remonta a manantiales de salmuera de hace miles de años, y la minería de sal sólida en pozos comenzó a finales del siglo XII o principios del XIII. La explotación comercial no se detuvo hasta 1996, por la caída de los precios y las filtraciones de agua persistentes.'},
    {type: 'p', text: 'A lo largo de más de 700 años se abrieron 26 pozos y se excavaron más de 250 km de galerías en 9 niveles, hasta 327 metros de profundidad; hoy solo puede visitarse alrededor de un 2% del total. La mina, junto con el Centro Histórico de Cracovia, formó parte de la primerísima lista de Patrimonio de la Humanidad de la UNESCO, en 1978; en 2013 la declaración se amplió para incluir el castillo Żupny, y desde 2010 su nombre oficial es «Minas Reales de Sal de Wieliczka y Bochnia».'},
    {type: 'heading', text: 'La Capilla de Santa Kinga', icon: 'pagoda'},
    {type: 'p', text: 'A 101 metros bajo tierra, esta capilla de unos 54 por 18 metros y 12 de altura está tallada por completo en la roca de sal: el suelo es un único bloque cortado, las lámparas están hechas de cristales de sal ensartados y los relieves de las paredes recrean escenas del Nuevo Testamento, incluida una Natividad.'},
    {type: 'cards', title: 'Los artistas mineros', items: [
      {icon: 'rock', title: 'Józef Markowski', text: 'Talló el altar mayor, con Santa Kinga flanqueada por San José y San Clemente.'},
      {icon: 'rock', title: 'Antoni Wyrodek', text: 'Esculpió un bajorrelieve de La Última Cena inspirado en Leonardo da Vinci.'},
      {icon: 'rock', title: 'Stanisław Anioł', text: 'Talló en 1999 una estatua de sal de Juan Pablo II.'}
    ]},
    {type: 'heading', text: 'La leyenda del anillo de Santa Kinga', icon: 'heart'},
    {type: 'p', text: 'Según la leyenda, la princesa húngara Kinga (1224-1292), antes de partir hacia Polonia para casarse con el duque Boleslao V el Púdico, arrojó su anillo de compromiso a una mina de sal de Hungría. El anillo «viajó» con los propios depósitos de sal hasta Wieliczka, donde los mineros lo encontraron dentro de un bloque de sal; en ese mismo lugar —hoy la Capilla de Santa Kinga— levantaron una estatua suya tallada en sal, y desde entonces se la venera como patrona de los mineros de la región de Cracovia.'},
    {type: 'heading', text: 'Otras cámaras de la ruta turística', icon: 'lantern'},
    {type: 'list', title: 'Salas que no te puedes perder', items: [
      'Cámara Michałowice: de 35 metros de altura, se tardó casi un siglo en excavarla.',
      'Cámara Varsovia: hoy se usa para conciertos y banquetes, con 54 por 17 metros y 9 de altura.',
      'Cámara Weimar: con una estatua de Goethe, que visitó la mina.',
      'Cámara Stanisław Staszic: la más alta de la ruta, con 50 metros; los nazis planearon convertirla en una fábrica subterránea de aviones antes de abandonar la idea.',
      'Cámara Józef Piłsudski: con un lago salino subterráneo que antiguamente se cruzaba en balsa.'
    ]},
    {type: 'p', text: 'La ruta conserva también maquinaria minera histórica: un torno de sangre («kierat») de tracción animal del siglo XVIII, una bomba de cadena de cuero del siglo XVI reconstruida y una locomotora eléctrica Siemens de 1950 con su vagón de pasajeros.'},
    {type: 'heading', text: 'Guerra, salud y visitantes ilustres', icon: 'scroll'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'La mina estuvo en la Lista del Patrimonio Mundial en Peligro entre 1989 y 1998, por el riesgo de que la humedad de la ventilación artificial dañara las esculturas de sal.',
      'Entre agosto y octubre de 1944, cerca de 1.700 prisioneros judíos de campos de concentración fueron obligados a trabajar aquí como mano de obra forzada.',
      'Desde 1997 funciona a 135 metros de profundidad un centro de rehabilitación médica que aprovecha el aire subterráneo, rico en cloruro de sodio, calcio y magnesio, para tratar afecciones respiratorias.',
      'En la década de 1870 fue la mina de sal más productiva del mundo, con unas 500.000 toneladas anuales.',
      'El escritor Bolesław Prus la visitó en 1878, y sus galerías laberínticas inspiraron escenas subterráneas de su novela «Faraón» (1895).',
      'Entre los visitantes históricos documentados están Copérnico (probablemente), Goethe, Chopin, el químico Mendeléiev, Juan Pablo II y Bill Clinton.'
    ]}
  ],
  hours: 'Ruta turística de 2-3 horas; reserva de entrada online obligatoria con antelación.',
  official: 'https://www.wieliczka-saltmine.com',
  tickets: 'La compra de entradas online con antelación es obligatoria, especialmente para visitas guiadas en idiomas distintos del polaco o el inglés.',
  access: 'En tren desde la estación de Kraków Główny hasta «Wieliczka Rynek-Kopalnia», a pocos minutos a pie de la mina; o en el autobús 304 desde Dworzec Główny Zachód (con billete de la zona I+II del área metropolitana).',
  tips: [
    'Reserva la entrada online con antelación: es obligatoria y las visitas se agotan en temporada alta.',
    'Cuenta con más de 800 escalones en la ruta turística: usa calzado cómodo.',
    'La temperatura bajo tierra ronda los 17-18 °C todo el año: lleva algo de abrigo.'
  ]
});
