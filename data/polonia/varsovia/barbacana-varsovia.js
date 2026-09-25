// Barbacana de Varsovia — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'barbacana-varsovia', city: 'varsovia', zone: 'casco-antiguo', name: 'Barbacana de Varsovia', category: 'Fortificación', reviewed: '2026-09',
  image: 'assets/varsovia-barbacana.jpg',
  lat: 52.2508, lon: 21.0117,
  lead: 'La puerta semicircular de 1540 que separa el casco antiguo de la ciudad nueva, reconstruida tras la guerra con ladrillo y grabados históricos.',
  duration: '15–20 min',
  stats: [
    {value: '1540', label: 'año de construcción, por el arquitecto italiano Jan Baptist el Veneciano', icon: 'gate'}
  ],
  blocks: [
    {type: 'lead', text: 'Construida en 1540 por el arquitecto italiano Jan Baptist el Veneciano como puerta defensiva semicircular, la Barbacana solo entró en combate una vez, durante la invasión sueca de 1656 (el Diluvio).'},
    {type: 'p', text: 'Destruida en la Segunda Guerra Mundial, se restauró entre 1952 y 1954 a partir de grabados del siglo XVII y ladrillo recuperado, y hoy conecta el casco antiguo con la ciudad nueva.'}
  ],
  price: 'Acceso libre',
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Es el punto de paso natural entre el casco antiguo y la ciudad nueva: no hace falta desviarse para verla.'
  ]
});
