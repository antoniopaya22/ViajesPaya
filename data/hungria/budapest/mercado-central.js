// Gran Mercado Central — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'mercado-central', city: 'budapest', zone: 'centro-pest', name: 'Gran Mercado Central', category: 'Mercado', reviewed: '2026-09',
  image: 'assets/budapest-mercado.jpg',
  lat: 47.4864, lon: 19.0575,
  lead: 'El mercado cubierto más grande y antiguo de Budapest, bajo un tejado de tejas de cerámica Zsolnay de colores.',
  duration: '45–60 min',
  stats: [
    {value: '1897', label: 'año de apertura, el 15 de febrero', icon: 'scroll'},
    {value: '10.000 m²', label: 'superficie bajo una estructura de acero', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'El Gran Mercado Central abrió el 15 de febrero de 1897, diseñado por Samu Pecz a iniciativa del primer alcalde de Budapest, Károly Kamermayer, para modernizar y centralizar el abastecimiento de la ciudad. Ocupa 10.000 m² bajo una estructura de acero cubierta de tejas de cerámica Zsolnay.'},
    {type: 'heading', text: 'Tres plantas, tres mundos', icon: 'bag'},
    {type: 'p', text: 'La planta baja concentra frutas, verduras, carne, pimentón y vino de Tokaj; la planta superior reúne puestos de comida —el lugar clásico para probar un lángos— y recuerdos; el sótano, pescaderías y encurtidos. Muy dañado en la Segunda Guerra Mundial, se renovó entre 1991 y 1997 y ganó el premio FIABCI Prix d\'Excellence en 1999.'}
  ],
  official: 'https://www.budapestinfo.hu/',
  tips: [
    'Sube a la planta superior para comer algo rápido entre puestos, y baja al sótano para ver la zona de pescado y encurtidos.'
  ]
});
