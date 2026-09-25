// Puente de las Cadenas — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'puente-cadenas', city: 'budapest', zone: 'centro-pest', name: 'Puente de las Cadenas', category: 'Puente', reviewed: '2026-09',
  image: 'assets/budapest-puente-cadenas.jpg',
  lat: 47.4996, lon: 19.0429,
  lead: 'El primer puente permanente entre Buda y Pest, símbolo de la unificación de la ciudad y destruido y reconstruido tras la Segunda Guerra Mundial.',
  duration: '20–30 min',
  stats: [
    {value: '1849', label: 'año de apertura, el 20 de noviembre', icon: 'scroll'},
    {value: '202 m', label: 'luz del vano central, de las mayores del mundo al construirse', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'Construido entre 1840 y 1849, el Puente de las Cadenas (Széchenyi Lánchíd) fue el primer puente permanente entre Buda y Pest, impulsado por el conde István Széchenyi, diseñado por el ingeniero inglés William Tierney Clark y levantado sobre el terreno por el escocés Adam Clark (sin parentesco entre ambos), con financiación destacada del comerciante griego Georgios Sinas.'},
    {type: 'p', text: 'Su vano central de 202 metros estaba entre los mayores del mundo al completarse. Los leones de piedra que flanquean sus accesos, obra del escultor János Marschalkó, dieron pie a una leyenda urbana —que no tienen lengua— que no es cierta. El puente fue volado por tropas alemanas en retirada el 18 de enero de 1945 y reabrió reconstruido en 1949.'}
  ],
  official: 'https://www.budapestinfo.hu/',
  tips: [
    'Cruzarlo a pie de noche, con la iluminación encendida, es uno de los paseos clásicos de Budapest.'
  ]
});
