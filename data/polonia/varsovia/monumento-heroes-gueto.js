// Monumento a los Héroes del Gueto — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'monumento-heroes-gueto', city: 'varsovia', zone: 'muranow', name: 'Monumento a los Héroes del Gueto', category: 'Memorial', reviewed: '2026-09',
  image: 'assets/varsovia-monumento-gueto.jpg',
  lat: 52.2492, lon: 20.9930,
  lead: 'El memorial de bronce dedicado al Levantamiento del Gueto de Varsovia de 1943, escenario en 1970 del célebre gesto de arrodillamiento del canciller Willy Brandt.',
  duration: '15–20 min',
  stats: [
    {value: '1948', label: 'año de inauguración, el 19 de abril, quinto aniversario del Levantamiento', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Inaugurado el 19 de abril de 1948, en el quinto aniversario del inicio del Levantamiento del Gueto de Varsovia, el monumento es obra del escultor Nathan Rapoport y mide 11 metros de bronce.'},
    {type: 'p', text: 'En 1970, el canciller de Alemania Occidental Willy Brandt se arrodilló espontáneamente ante el monumento durante una visita oficial, un gesto de contrición conocido como el «Warschauer Kniefall» que se convirtió en una de las imágenes más recordadas de la reconciliación europea de posguerra.'}
  ],
  price: 'Acceso libre',
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Está justo frente al Museo POLIN: se visitan juntos con naturalidad.'
  ]
});
