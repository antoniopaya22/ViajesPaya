// Podziemia Rynku (Museo Subterráneo) — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'rynek-podziemia', city: 'cracovia', zone: 'rynek', name: 'Museo Subterráneo del Rynek', category: 'Museo', reviewed: '2026-09',
  image: 'assets/cracovia-podziemia.jpg',
  lat: 50.0617, lon: 19.9370,
  lead: 'Un museo bajo la propia plaza del mercado, construido alrededor de los restos arqueológicos de la Cracovia medieval.',
  duration: '60–90 min',
  price: '45 PLN adulto, 35 PLN reducida, 90 PLN familiar (4 personas); gratis los martes en taquilla',
  stats: [
    {value: '2010', label: 'año de apertura, tras una excavación de 4.000 m²', icon: 'scroll'},
    {value: '693 kg', label: 'peso de un "pan" de plomo medieval expuesto en el museo', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'El Museo Subterráneo del Rynek, filial del Museo de Cracovia, ocupa cerca de 4.000 m² excavados bajo la plaza, inaugurados el 24 de septiembre de 2010 tras una obra de 38 millones de zlotys.'},
    {type: 'heading', text: 'Un paseo por la Cracovia del siglo XIII', icon: 'lantern'},
    {type: 'p', text: 'La exposición principal, «Tras las huellas de la identidad europea de Cracovia», usa hologramas y niebla para recrear la ciudad medieval, con suelos de cristal sobre un taller excavado del siglo XII y restos de un asentamiento incendiado del siglo XI. Entre las piezas destaca un «pan» de plomo medieval de 693 kg.'}
  ],
  hours: 'Lunes 10:00–19:00, martes 10:00–15:00, miércoles a jueves 10:00–19:00, viernes a domingo 10:00–20:00; cerrado el segundo lunes de cada mes. Última entrada 75 minutos antes del cierre.',
  official: 'https://muzeumkrakowa.pl/en/branches/rynek-underground',
  tips: [
    'Reserva con antelación en temporada alta: el aforo se limita por turnos de entrada.',
    'La entrada es gratuita los martes, pero solo en taquilla y sin reserva anticipada ese día.'
  ]
});
