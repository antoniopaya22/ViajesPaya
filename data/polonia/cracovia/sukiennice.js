// Sukiennice (Lonja de los Paños) — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'sukiennice', city: 'cracovia', zone: 'rynek', name: 'Sukiennice', category: 'Monumento y museo', reviewed: '2026-09',
  image: 'assets/cracovia-sukiennice.jpg',
  lat: 50.0616, lon: 19.9369,
  lead: 'La antigua lonja de los paños, reconstruida en estilo renacentista tras un incendio, hoy alberga la mayor colección permanente de pintura polaca del siglo XIX.',
  duration: '45–75 min',
  stats: [
    {value: '1879', label: 'año de apertura de la Galería de Arte Polaco del siglo XIX', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'La Sukiennice ocupa el centro del Rynek Główny desde la Edad Media, cuando era el mercado cubierto donde se compraba y vendía paño de lana. El edificio actual, de estilo renacentista, se reconstruyó tras un incendio del siglo XVI, financiado en parte con las ganancias del comercio de sal de la cercana <a href="#/pais/polonia/ciudad/wieliczka/lugar/mina-de-sal">Wieliczka</a>.'},
    {type: 'heading', text: 'La Galería de Arte Polaco del siglo XIX', icon: 'eye'},
    {type: 'p', text: 'La planta superior alberga, desde el 7 de octubre de 1879, la mayor colección permanente de pintura y escultura polaca del siglo XIX, con obras como «El homenaje prusiano» de Jan Matejko, «Las antorchas de Nerón» de Henryk Siemiradzki y el cuadro «Frenesí de exaltaciones» de Władysław Podkowiński (1894).'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Contra la leyenda de que «Frenesí de exaltaciones» escandalizó a la sociedad de la época, las críticas de prensa de su exposición en Varsovia en 1894 fueron mayoritariamente positivas y atrajo a unos 12.000 visitantes en 36 días; lo que sí está bien documentado es que el propio Podkowiński acuchilló el lienzo 16 veces poco después, destruyéndolo.',
      'La restauración del edificio en la década de 1870 contó con la colaboración del pintor Jan Matejko en la decoración de las arcadas.'
    ]}
  ],
  hours: 'Martes a domingo 10:00–18:00; cerrado los lunes.',
  official: 'https://krakow.travel/en/615-krakow-galeria-sztuki-polskiej-xix-wieku-w-sukiennicach',
  tips: [
    'La planta baja sigue siendo un mercado de artesanía y recuerdos; la galería de arte está en el piso de arriba.'
  ]
});
