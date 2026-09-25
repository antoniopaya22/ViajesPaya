// Fábrica de Schindler — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'fabrica-schindler', city: 'cracovia', zone: 'podgorze', name: 'Fábrica de Schindler', category: 'Museo', reviewed: '2026-09',
  image: 'assets/cracovia-schindler.jpg',
  lat: 50.0490, lon: 19.9534,
  lead: 'La antigua fábrica de esmaltados de Oskar Schindler, hoy un museo sobre la ocupación nazi de Cracovia entre 1939 y 1945.',
  duration: '90–120 min',
  price: '60 PLN adulto, 45 PLN reducida, 120 PLN familiar (4 personas)',
  stats: [
    {value: '1.100', label: 'trabajadores judíos empleados en 1944, frente a los 150 de 1940', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'Fundada en marzo de 1937 por tres empresarios judíos —Michał Gutman, Izrael Kahn y Wolf Luzer Glajtman— con el nombre de «Rekord», la fábrica quebró en junio de 1939 y pasó a manos de Oskar Schindler —afiliado al partido nazi— en noviembre de ese mismo año, que la rebautizó como Deutsche Emailwarenfabrik (DEF) en enero de 1940.'},
    {type: 'p', text: 'Schindler empleó a trabajadores judíos del gueto de Cracovia y más tarde gestionó aquí un subcampo de Płaszów; su plantilla creció de unos 150 empleados en 1940 a cerca de 1.100 en 1944. Ofreció mejores raciones a sus trabajadores y usó sobornos y argumentos de eficiencia para protegerlos de la deportación, llegando a conseguir un barracón propio con alambrada y torres de vigilancia dentro del recinto para evitar que sus obreros hicieran a diario más de 10 km a pie desde el campo principal.'},
    {type: 'heading', text: '«Cracovia bajo ocupación 1939-1945»', icon: 'scroll'},
    {type: 'p', text: 'Desde 2007, el edificio es una filial del Museo de Cracovia con la exposición «Cracovia — Ocupación 1939-1945», que reconstruye apartamentos del gueto, un sótano usado como escondite y objetos del rodaje de La lista de Schindler.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Entre el final de la guerra y la apertura del museo, el edificio tuvo una segunda vida industrial: de 1948 a 2002 lo ocupó el fabricante de telecomunicaciones Telpod, y no fue hasta 2005 cuando el ayuntamiento recuperó el solar para construir el museo actual.'
    ]}
  ],
  hours: 'Lunes 10:00–15:00, martes a domingo 9:00–20:00; cerrado el primer martes de cada mes. Última entrada 90 minutos antes del cierre.',
  official: 'https://muzeumkrakowa.pl/en/branches/oskar-schindlers-enamel-factory',
  tips: [
    'Reserva con antelación: las entradas online se pueden comprar hasta 90 días antes y se cierran 6 horas antes de cada turno.'
  ]
});
