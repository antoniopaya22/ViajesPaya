// Parque Łazienki Reales — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'parque-lazienki', city: 'varsovia', zone: 'ruta-real', name: 'Parque Łazienki Reales', category: 'Parque y palacio', reviewed: '2026-09',
  image: 'assets/varsovia-lazienki.jpg',
  lat: 52.2151, lon: 21.0353,
  lead: 'El mayor parque de Varsovia, con el Palacio sobre el Agua y un monumento a Chopin que sigue sonando cada verano.',
  duration: '90–150 min',
  stats: [
    {value: '76 ha', label: 'superficie del parque', icon: 'ruler'},
    {value: '1772–1793', label: 'periodo de transformación del antiguo balneario en palacio real', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Los orígenes del parque se remontan a una finca de la reina Bona Sforza; entre 1772 y 1793, el rey Estanislao Augusto Poniatowski transformó un antiguo balneario en el Palacio sobre el Agua (Palacio en la Isla). El parque ocupa hoy 76 hectáreas.'},
    {type: 'heading', text: 'El monumento a Chopin', icon: 'teacup'},
    {type: 'p', text: 'La escultura de Wacław Szymanowski, inaugurada el 14 de noviembre de 1926, fue el primer monumento de Varsovia destruido por los ocupantes alemanes, el 31 de mayo de 1940; se reconstruyó y volvió a inaugurarse el 11 de mayo de 1958.'},
    {type: 'p', text: 'Cada verano, el parque acoge conciertos gratuitos de piano junto al monumento: la temporada de 2026 es la 67.ª edición, con conciertos todos los domingos entre el 5 de julio y el 27 de septiembre, a las 12:00 y a las 16:00.'}
  ],
  hours: 'Parque: diario 6:00–22:00, entrada libre. Palacio: martes-miércoles 10:00–17:00, jueves-viernes 10:00–18:00, sábado 12:00–20:00, domingo 10:00–16:00; cerrado los lunes.',
  price: 'Parque gratuito. Palacio: 70/35 PLN en temporada alta; gratis los viernes.',
  official: 'https://www.lazienki-krolewskie.pl/en/',
  tips: [
    'Si viajas en verano, planea la visita para coincidir con un concierto de Chopin de los domingos.'
  ]
});
