// Sinagoga de la calle Dohány — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'sinagoga-dohany', city: 'budapest', zone: 'andrassy', name: 'Sinagoga de la calle Dohány', category: 'Templo', reviewed: '2026-09',
  image: 'assets/budapest-sinagoga.jpg',
  lat: 47.4952, lon: 19.0598,
  lead: 'La mayor sinagoga de Europa, de estilo morisco, con un jardín memorial dedicado a las víctimas del Holocausto de Budapest.',
  duration: '45–60 min',
  stats: [
    {value: '2.964', label: 'asientos, la mayor sinagoga en uso de Europa', icon: 'trophy'},
    {value: '1854–1859', label: 'periodo de construcción', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Construida entre 1854 y 1859 en estilo morisco por el arquitecto Ludwig Förster, con Frigyes Feszl a cargo del interior, la Gran Sinagoga se consagró el 6 de septiembre de 1859. Con capacidad para 2.964 personas, es la mayor sinagoga en funcionamiento de Europa y una de las más grandes del mundo.'},
    {type: 'p', text: 'En el solar contiguo se levantaba la casa familiar de Theodor Herzl, fundador del sionismo moderno; hoy ocupa ese espacio el Museo Judío de Hungría.'},
    {type: 'heading', text: 'El Árbol de la Vida', icon: 'tree'},
    {type: 'p', text: 'El patio guarda una fosa común con más de 2.000 víctimas del gueto de Budapest de 1944-45, junto al Parque Memorial Raoul Wallenberg, con el «Árbol de la Vida» de Imre Varga: un sauce llorón de acero cuyas hojas llevan grabados los nombres de las víctimas. La restauración de 1991-1998 contó, entre otros donantes, con Estée Lauder y Tony Curtis.'}
  ],
  official: 'https://www.budapestinfo.hu/',
  tips: [
    'La entrada incluye normalmente el museo judío y el jardín memorial: reserva tiempo para los tres.'
  ]
});
