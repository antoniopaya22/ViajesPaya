// Casa del Terror — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'casa-terror', city: 'budapest', zone: 'andrassy', name: 'Casa del Terror', category: 'Museo', reviewed: '2026-09',
  image: 'assets/budapest-terror.jpg',
  lat: 47.5058, lon: 19.0625,
  lead: 'El museo instalado en el edificio que fue sede de la policía política, primero de la Cruz Flechada fascista y después del régimen comunista.',
  duration: '90–120 min',
  stats: [
    {value: '2002', label: 'año de apertura del museo, el 24 de febrero', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'El número 60 de la avenida Andrássy fue, durante la Segunda Guerra Mundial, la sede del partido fascista húngaro Cruz Flechada, y después, bajo el régimen comunista, cuartel general de la policía política (ÁVH), donde se detenía, interrogaba y torturaba a los detenidos.'},
    {type: 'p', text: 'El museo abrió el 24 de febrero de 2002 y conserva en el sótano las antiguas celdas de la ÁVH.'}
  ],
  official: 'https://www.terrorhaza.hu/en',
  tips: [
    'Es una visita intensa: dedica tiempo suficiente y ve descansado.'
  ]
});
