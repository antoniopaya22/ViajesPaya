// Ópera Estatal de Hungría — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'opera-hungara', city: 'budapest', zone: 'andrassy', name: 'Ópera Estatal de Hungría', category: 'Teatro', reviewed: '2026-09',
  image: 'assets/budapest-opera.jpg',
  lat: 47.5028, lon: 19.0587,
  lead: 'El teatro de ópera de la avenida Andrássy, con una acústica considerada de las mejores de Europa.',
  duration: '45–75 min (visita guiada)',
  stats: [
    {value: '1884', label: 'año de inauguración, el 27 de septiembre', icon: 'scroll'},
    {value: '3.º', label: 'puesto en mediciones acústicas de los años setenta, tras La Scala y el Palais Garnier', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'Construida entre 1875 y 1884 por Miklós Ybl, con financiación conjunta del ayuntamiento y el emperador Francisco José I, la Ópera Estatal de Hungría abrió el 27 de septiembre de 1884. Gustav Mahler fue su director entre 1888 y 1891.'},
    {type: 'p', text: 'Mediciones acústicas de los años setenta situaron su auditorio en tercer lugar de Europa, solo por detrás de La Scala de Milán y el Palais Garnier de París. Restaurada entre 1980 y 1984, reabrió deliberadamente el 27 de septiembre de 1984, cien años exactos después de su estreno; se modernizó de nuevo en 2017.'}
  ],
  official: 'https://opera.hu/en/about-us/guided-tours/',
  tickets: 'Visitas guiadas casi a diario, en varios idiomas.',
  tips: [
    'Si puedes, combina la visita guiada con asistir a una función: la sala se aprecia mucho mejor con música.'
  ]
});
