// Mercado Kuromon Ichiba — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'kuromon-ichiba', city: 'osaka', zone: 'tennoji', name: 'Mercado Kuromon Ichiba', category: 'Mercado', reviewed: '2026-09',
  image: 'assets/japon-osaka-kuromon.jpg',
  lat: 34.6654, lon: 135.5062,
  lead: 'La «cocina de Osaka»: un mercado cubierto de pescado, marisco y wagyu que se come de pie, puesto a puesto.',
  duration: '60–90 min',
  stats: [
    {value: '~600 m', label: 'de mercado cubierto, con entre 150 y 170 puestos', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'El mercado toma su nombre de una gran puerta negra («kuromon») del cercano templo Enmeiji, que se perdió en un incendio en 1912; el nombre del mercado sobrevivió al del propio templo. Sus orígenes se remontan a comienzos del siglo XIX, cuando un vendedor de pescado empezó a comerciar cerca de Nipponbashi; hacia 1835 ya funcionaba como un mercado organizado, aunque las fuentes turísticas oficiales sitúan su consolidación definitiva a finales del periodo Meiji (1868-1912).'},
    {type: 'heading', text: 'La cocina de Osaka', icon: 'flame'},
    {type: 'p', text: 'Conocido popularmente como «la cocina de Osaka» por su papel histórico abasteciendo de pescado, carne y verdura fresca a restaurantes y hogares de la ciudad, el mercado reúne hoy entre 150 y 170 puestos a lo largo de unos 600 metros cubiertos. Es célebre por su marisco fresco, su wagyu y su fugu (pez globo), preparado solo por vendedores con licencia especial; buena parte de la experiencia consiste en ir comiendo de pie de puesto en puesto, en raciones pequeñas tipo pincho.'}
  ],
  hours: 'Aproximadamente todos los días de 8:00 a 18:00, aunque muchos puestos cierran antes por la tarde; horario no confirmado en la web oficial.',
  official: 'https://kuromon.com/',
  tips: [
    'Ve con hambre y dinero en efectivo: lo habitual es ir probando raciones pequeñas de varios puestos.',
    'Está a un paso de Nipponbashi (Den Den Town): se pueden combinar en el mismo paseo.'
  ]
});
