// Plac Nowy — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'plac-nowy', city: 'cracovia', zone: 'kazimierz', name: 'Plac Nowy', category: 'Plaza y gastronomía', reviewed: '2026-09',
  image: 'assets/cracovia-plac-nowy.jpg',
  lat: 50.0511, lon: 19.9440,
  lead: 'El corazón gastronómico de Kazimierz, famoso por sus puestos de zapiekanka alrededor de una antigua lonja circular.',
  duration: '30–45 min',
  stats: [
    {value: '20+', label: 'variedades de zapiekanka en los puestos de la plaza', icon: 'flame'}
  ],
  blocks: [
    {type: 'lead', text: 'Plac Nowy es la plaza pequeña de Kazimierz, organizada alrededor de un antiguo mercado circular (el «okrąglak»), y se ha ganado fama por sus puestos de zapiekanka: la mitad de una baguette con champiñones salteados y queso fundido, tostada al horno.'},
    {type: 'p', text: 'La zapiekanka nació en la Polonia de los años setenta, cuando el gobierno de Edward Gierek compró la licencia para producir baguettes a Francia y, a la vez, permitió una modesta iniciativa privada de restauración («mała gastronomia»). Con el tiempo se le añadieron variantes con bacon, jamón, pepinillo o incluso piña, ganándose el sobrenombre de «pizza polaca».'}
  ],
  official: 'https://krakow.travel/en',
  tips: [
    'Compara varios puestos antes de decidirte: cada uno tiene su propia receta y sus fieles.',
    'La plaza también acoge un mercado de segunda mano los fines de semana.'
  ]
});
