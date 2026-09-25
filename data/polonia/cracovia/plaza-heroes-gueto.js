// Plaza de los Héroes del Gueto — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'plaza-heroes-gueto', city: 'cracovia', zone: 'podgorze', name: 'Plaza de los Héroes del Gueto', category: 'Memorial', reviewed: '2026-09',
  image: 'assets/cracovia-plac-bohaterow.jpg',
  lat: 50.0468, lon: 19.9552,
  lead: 'La antigua plaza Zgody, punto de reunión del gueto de Cracovia durante las deportaciones, hoy un memorial de sillas vacías de acero.',
  duration: '20–30 min',
  stats: [
    {value: '1941–43', label: 'años de existencia del gueto de Cracovia en Podgórze', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Conocida antes de la guerra como plaza Zgody, esta plaza de Podgórze sirvió como punto de reunión del gueto de Cracovia durante las deportaciones, antes de las marchas hacia la estación de Prokocim.'},
    {type: 'heading', text: 'Las sillas vacías', icon: 'rock'},
    {type: 'p', text: 'El memorial actual, formado por grandes sillas de acero vacías, representa a las decenas de miles de personas deportadas y asesinadas: cada silla simboliza a mil víctimas.'},
    {type: 'p', text: 'En un extremo de la plaza, la antigua Farmacia del Águila (Apteka pod Orłem), en el número 18, conserva el local del farmacéutico Tadeusz Pankiewicz, que ayudó a los habitantes del gueto desde su negocio; hoy es también una filial del Museo de Cracovia.'}
  ],
  hours: 'Farmacia del Águila: miércoles a domingo 9:00–17:00; entrada gratuita los miércoles.',
  price: '22 PLN adulto, 16 PLN reducida (Farmacia del Águila); la plaza es de acceso libre',
  official: 'https://muzeumkrakowa.pl/en/branches/eagle-pharmacy',
  tips: [
    'La plaza en sí es de acceso libre y se puede visitar a cualquier hora.'
  ]
});
