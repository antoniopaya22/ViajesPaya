// Baños Gellért — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'banos-gellert', city: 'budapest', zone: 'gellert', name: 'Baños Gellért', category: 'Balneario', reviewed: '2026-09',
  image: 'assets/budapest-gellert-banos.jpg',
  lat: 47.4808, lon: 19.0514,
  lead: 'El balneario Art Nouveau del hotel Gellért, con una piscina de olas y una sala termal de cúpula de cristal.',
  duration: '2–3 horas',
  stats: [
    {value: '1912–1918', label: 'periodo de construcción, en estilo Art Nouveau', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Los baños Gellért se construyeron entre 1912 y 1918 en estilo Art Nouveau, integrados en el hotel del mismo nombre, sobre un emplazamiento con uso documentado de sus aguas termales desde la Edad Media y un baño de barro otomano (Sárosfürdő) durante la ocupación turca.'},
    {type: 'p', text: 'La piscina de olas exterior se añadió en 1927 y la sala termal de cúpula de cristal en 1934.'},
    {type: 'callout', label: 'IMPORTANTE', items: [
      'Los baños Gellért cerraron el 1 de octubre de 2025 para una gran reforma, con reapertura prevista no antes de 2028: comprueba su estado antes de planear la visita.'
    ]}
  ],
  official: 'https://www.gellertfurdo.hu/en/',
  tips: [
    'Consulta el estado de la reforma en la web oficial antes de contar con esta visita.'
  ]
});
