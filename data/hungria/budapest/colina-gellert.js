// Colina Gellért y la Ciudadela — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'colina-gellert', city: 'budapest', zone: 'gellert', name: 'Colina Gellért y la Ciudadela', category: 'Mirador', reviewed: '2026-09',
  image: 'assets/budapest-gellert-colina.jpg',
  lat: 47.4858, lon: 19.0466,
  lead: 'La colina de 235 metros que domina el Danubio, coronada por una fortaleza construida para vigilar a la propia ciudad y por la Estatua de la Libertad.',
  duration: '60–90 min',
  stats: [
    {value: '235 m', label: 'altura de la colina sobre el Danubio', icon: 'peak'},
    {value: '1947', label: 'año de erección de la Estatua de la Libertad', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'La colina Gellért se eleva 235 metros sobre el Danubio. La fortaleza de la Ciudadela, en su cima, la construyeron los Habsburgo tras el levantamiento húngaro de 1848-49 con un propósito muy concreto: poder bombardear tanto Buda como Pest en caso de una nueva revuelta.'},
    {type: 'p', text: 'Bajo la colina se descubrió en enero de 2007 una cueva de cristales de 60 por 18 metros, formada entre 300.000 y 500.000 años atrás por un manantial termal hoy desaparecido.'},
    {type: 'heading', text: 'La Estatua de la Libertad', icon: 'trophy'},
    {type: 'p', text: 'Erigida en 1947 por el escultor Zsigmond Kisfaludi Strobl, se dedicó originalmente al Ejército Rojo soviético, con una inscripción bilingüe en húngaro y ruso. Tras 1989 se retiró el texto en ruso y se cambió la dedicatoria a «todos los que sacrificaron su vida por la independencia, la libertad y la prosperidad de Hungría». La figura de bronce mide 14 metros sobre un pedestal de 26.'}
  ],
  official: 'https://www.budapestinfo.hu/',
  tips: [
    'Sube a pie desde el puente de la Libertad o desde los baños Gellért: el paseo lleva entre 30 y 45 minutos.'
  ]
});
