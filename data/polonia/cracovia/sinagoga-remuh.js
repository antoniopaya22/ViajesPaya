// Sinagoga y cementerio Remuh — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'sinagoga-remuh', city: 'cracovia', zone: 'kazimierz', name: 'Sinagoga y cementerio Remuh', category: 'Templo y cementerio', reviewed: '2026-09',
  image: 'assets/cracovia-remuh.jpg',
  lat: 50.0499, lon: 19.9450,
  lead: 'La sinagoga activa más antigua de Cracovia, junto a un cementerio judío del siglo XVI cuyas lápidas rotas se conservan como un «muro de las lamentaciones».',
  duration: '30–45 min',
  price: '10 PLN adulto, 5 PLN reducida',
  stats: [
    {value: '711', label: 'lápidas conservadas, de los siglos XVI al XIX', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Construida a mediados del siglo XVI por el padre del rabino Moses Isserles (1530-1572), uno de los grandes talmudistas de su época, la sinagoga Remuh es hoy el principal lugar de oración de la comunidad judía de Cracovia, tras una renovación en 2016.'},
    {type: 'heading', text: 'El cementerio y su muro de fragmentos', icon: 'rock'},
    {type: 'p', text: 'Solo una docena de lápidas sobrevivieron intactas a la Segunda Guerra Mundial, entre ellas —según la tradición local— la del propio Isserles, que se dice protegida cuando un soldado alemán que intentaba destruirla fue alcanzado por un rayo. Tras la guerra se recuperaron cientos de fragmentos de lápidas; los que no se pudieron restaurar se incrustaron en un muro de fragmentos, conocido como el «muro de las lamentaciones» de Cracovia. Hoy el cementerio conserva 711 lápidas de los siglos XVI al XIX.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'El edificio original, de madera, ardió solo cuatro años después de construirse, en 1557, y se reconstruyó en piedra; durante la ocupación nazi los alemanes lo usaron como almacén de material contra incendios, y esa reutilización —aunque despojaron el templo de sus objetos rituales y su bimá— es precisamente lo que explica que el edificio siga en pie hoy.',
      'En 1992, el entonces presidente de Israel, Chaim Herzog, donó durante una visita el reloj que todavía puede verse en la sala de oración.'
    ]}
  ],
  hours: 'Cerrado los sábados y festividades judías; consulta el resto de horarios en la web oficial.',
  official: 'https://krakow.travel/en/17798-krakow-remuh-synagogue-and-cemetery',
  tips: [
    'Respeta el carácter activo del templo: es un lugar de culto en funcionamiento, no solo un museo.'
  ]
});
