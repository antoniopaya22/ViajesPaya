// Umschlagplatz — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'umschlagplatz', city: 'varsovia', zone: 'muranow', name: 'Umschlagplatz', category: 'Memorial', reviewed: '2026-09',
  image: 'assets/varsovia-umschlagplatz.jpg',
  lat: 52.2523, lon: 20.9959,
  lead: 'El punto desde el que se deportó a más de un cuarto de millón de judíos de Varsovia al campo de exterminio de Treblinka en el verano de 1942.',
  duration: '15–20 min',
  stats: [
    {value: '254.000–265.000', label: 'personas deportadas desde aquí solo entre julio y septiembre de 1942', icon: 'scroll'},
    {value: '400', label: 'nombres grabados en el monumento, cada uno representando a 1.000 víctimas', icon: 'rock'}
  ],
  blocks: [
    {type: 'lead', text: 'El Umschlagplatz fue el punto de deportación hacia el campo de exterminio de Treblinka. Solo durante la «Gran Acción» del 22 de julio al 21 de septiembre de 1942, entre 254.000 y 265.000 judíos de Varsovia pasaron por aquí.'},
    {type: 'p', text: 'El monumento actual, inaugurado el 18 de abril de 1988, tiene forma de vagón de ganado abierto y lleva grabados 400 nombres de pila polaco-judíos, cada uno representando a mil víctimas.'},
    {type: 'heading', text: 'Janusz Korczak y sus niños', icon: 'heart'},
    {type: 'p', text: 'Los días 5 y 6 de agosto de 1942, el pedagogo Janusz Korczak encabezó desde aquí la deportación de cerca de 192 a 196 niños de su orfanato, rechazando la posibilidad de salvarse él mismo para acompañarlos hasta el final.'}
  ],
  price: 'Acceso libre',
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Está a poca distancia a pie del Museo POLIN y del Monumento a los Héroes del Gueto.'
  ]
});
