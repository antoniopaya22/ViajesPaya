// Plaza del Mercado del Casco Antiguo — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'plaza-mayor-varsovia', city: 'varsovia', zone: 'casco-antiguo', name: 'Plaza del Mercado del Casco Antiguo', category: 'Plaza histórica', reviewed: '2026-09',
  image: 'assets/varsovia-sirena.jpg',
  lat: 52.2496, lon: 21.0122,
  lead: 'El corazón medieval de Varsovia, volado casi por completo en 1944 y reconstruido después piedra a piedra a partir de cuadros y fotografías antiguas.',
  duration: '30–60 min',
  stats: [
    {value: '85%', label: 'de Varsovia quedó destruida hacia enero de 1945', icon: 'scroll'},
    {value: '1980', label: 'año de declaración como Patrimonio de la Humanidad', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'Esta plaza existe desde la fundación medieval de la ciudad, a finales del siglo XIII. Los edificios que la rodean hoy son en su mayor parte una reconstrucción de 1948-1953 de su aspecto de los siglos XVI-XVIII: los ocupantes alemanes la volaron sistemáticamente tras aplastar el Levantamiento de Varsovia de 1944.'},
    {type: 'heading', text: 'Una ciudad reconstruida a propósito', icon: 'scroll'},
    {type: 'p', text: 'Hacia enero de 1945, entre un 85% y un 90% de los edificios de Varsovia habían sido destruidos, en distintas fases: cerca de un 10% durante la campaña de 1939, un 15% durante el Levantamiento del Gueto, un 25% durante el propio Levantamiento de Varsovia de 1944, y hasta un 40% por la demolición deliberada alemana posterior al Levantamiento.'},
    {type: 'p', text: 'La reconstrucción del casco antiguo, entre 1945 y 1953, se apoyó en los cuadros del pintor veneciano Bernardo Bellotto del siglo XVIII, en dibujos de estudiantes de arquitectura de antes de la guerra y en inventarios de conservación previos a 1939. La UNESCO declaró el conjunto Patrimonio de la Humanidad en 1980 precisamente por esa historia de reconstrucción.'},
    {type: 'heading', text: 'La sirena de Varsovia', icon: 'trophy'},
    {type: 'p', text: 'La estatua de la sirena que preside la plaza, obra de Konstanty Hegel, se instaló en 1855 (la que se ve hoy es una réplica del año 2000; el original se conserva en el Museo de Varsovia). Según la leyenda, unos pescadores liberaron a una sirena capturada, que desde entonces protege la ciudad con espada y escudo; su figura aparece en el escudo oficial de Varsovia desde un sello del siglo XVII.'}
  ],
  official: 'https://www.zamek-krolewski.pl/en',
  tips: [
    'Visítala a primera hora de la mañana o al atardecer, cuando hay mucha menos gente.'
  ]
});
