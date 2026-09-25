// Tumba del Soldado Desconocido — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'tumba-soldado-desconocido', city: 'varsovia', zone: 'ruta-real', name: 'Tumba del Soldado Desconocido', category: 'Memorial', reviewed: '2026-09',
  image: 'assets/varsovia-tumba-soldado.jpg',
  lat: 52.2436, lon: 21.0141,
  lead: 'El único fragmento superviviente del antiguo Palacio Sajón, hoy un monumento con guardia de honor permanente los 365 días del año.',
  duration: '15–20 min',
  stats: [
    {value: '1925', label: 'año de inhumación de los restos, el 2 de noviembre', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'La tumba guarda los restos de un soldado no identificado caído en la defensa de Leópolis (Lwów) de 1918-1920, inhumados el 2 de noviembre de 1925 bajo lo que hoy es el único fragmento superviviente del antiguo Palacio Sajón.'},
    {type: 'p', text: 'El cambio de guardia se celebra cada hora en punto, los 365 días del año.'}
  ],
  price: 'Acceso libre',
  official: 'https://go2warsaw.pl/en/',
  tips: [
    'Si te coincide con la hora en punto, espera unos minutos para ver el cambio de guardia.'
  ]
});
