// Shinsaibashi — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'shinsaibashi', city: 'osaka', zone: 'namba', name: 'Shinsaibashi', category: 'Barrio comercial', reviewed: '2026-09',
  image: 'assets/japon-osaka-shinsaibashi.jpg',
  lat: 34.6702, lon: 135.5000,
  lead: 'La gran galería comercial cubierta de Osaka, con casi 400 años de historia como zona de tiendas.',
  duration: '60–90 min',
  stats: [
    {value: '1622', label: 'año de construcción del puente que da nombre al barrio', icon: 'gate'},
    {value: '~600 m', label: 'de galería cubierta, con unas 170 tiendas', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'El nombre de Shinsaibashi viene de un puente construido en 1622 por el comerciante Okada Shinsai sobre el canal Nagahori (relleno y desaparecido en 1964). La zona ya funcionaba como calle comercial en el periodo Edo, uniendo el barrio de placer de Shinmachi con el distrito teatral de Dōtonbori; hay comercios documentados en la calle desde 1679.'},
    {type: 'p', text: 'Hoy es una galería peatonal cubierta de unos 600 metros y ocho manzanas, con cerca de 170 tiendas de moda, cosmética y grandes almacenes, que recibe una media de 60.000 visitantes entre semana y 120.000 los fines de semana.'},
    {type: 'heading', text: 'Daimaru, casi 300 años en la misma calle', icon: 'scroll'},
    {type: 'p', text: 'El Daimaru de Shinsaibashi se remonta a 1726, cuando abrió como tienda de tejidos y quimonos; tras un incendio en 1920, se reconstruyó entre 1922 y 1933 en estilo art déco por el arquitecto William Merrell Vories. En 1926 fue pionero al permitir entrar con zapatos puestos, una novedad que según la propia tienda duplicó las visitas y triplicó las ventas.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'A comienzos del siglo XX, Shinsaibashi rivalizaba en lujo con el Ginza de Tokio, lo que dio lugar al dicho «Ginza en el este, Shinsaibashi en el oeste».'
    ]}
  ],
  official: 'https://osaka-info.jp/en/spot/shinsaibashi-suji-shopping-street',
  tips: [
    'Al sur, el puente Ebisu-bashi conecta directamente con el canal de Dōtonbori; al oeste queda America Mura.'
  ]
});
