// Jardín Yoshiki-en — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'yoshiki-en', city: 'nara', name: 'Jardín Yoshiki-en', category: 'Jardín', reviewed: '2026-09',
  image: 'assets/japon-yoshiki-en.jpg',
  lat: 34.685102, lon: 135.837212,
  lead: 'Tres jardines distintos —de estanque, de musgo y de té— reunidos en un único recinto tranquilo, justo al lado de Isui-en pero con muchos menos visitantes.',
  duration: '20–30 min',
  price: '250 ¥ adulto (gratis mostrando un pasaporte extranjero)',
  stats: [
    {value:'3', label:'estilos de jardín distintos en un solo recinto', icon:'tree'},
    {value:'0 ¥', label:'entrada gratuita mostrando un pasaporte extranjero', icon:'bag'},
    {value:'9:00–17:00', label:'horario habitual (última entrada 16:30)', icon:'clock'},
    {value:'Kōfuku-ji', label:'antiguo terreno de las residencias de sacerdotes del templo vecino', icon:'scroll'}
  ],
  blocks: [
    {type:'lead', text:'Construido junto al arroyo Yoshiki, sobre lo que fueron residencias de sacerdotes del vecino templo Kōfuku-ji, este jardín reúne en un espacio pequeño tres estilos distintos: un jardín de estanque (chisen) tradicional, un jardín de musgo y un jardín de té organizado en torno a una casa de ceremonia tradicional.'},
    {type:'p', text:'Está justo al lado de Isui-en, pero recibe muchísimos menos visitantes, lo que lo convierte en una parada mucho más tranquila para quien busca un rato de calma entre templo y templo.'},
    {type:'heading', text:'Tres jardines en uno', icon:'tree'},
    {type:'stop', title:'Estanque, musgo y té bajo un mismo recorrido', text:[
      'El jardín de estanque, con su recorrido alrededor del agua, es el más clásico de los tres; el jardín de musgo, más sobrio y verde, invita a caminar despacio; y el jardín de té, con su casa de ceremonia tradicional, recuerda que este tipo de espacios se pensaban también como escenario para la ceremonia del té.'
    ]},
    {type:'heading', text:'Un truco para viajeros extranjeros', icon:'bag'},
    {type:'stop', title:'Entrada gratuita con el pasaporte', text:[
      'A diferencia de la mayoría de jardines y templos de Nara, Yoshiki-en ofrece entrada gratuita a quien presente un pasaporte extranjero original en la taquilla (no vale una foto o copia); los visitantes japoneses pagan una entrada de 250 ¥ (120 ¥ niños). Conviene llevar el pasaporte físico encima si se quiere aprovechar.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Yoshiki-en combina tres estilos de jardín japonés —estanque, musgo y té— en un único recinto, algo poco habitual.',
      'Los visitantes con pasaporte extranjero entran gratis mostrando el documento original en la taquilla.',
      'Al estar justo al lado de Isui-en pero recibir mucha menos gente, es una de las paradas más tranquilas del entorno de Tōdai-ji.'
    ]}
  ],
  hours: 'De 9:00 a 17:00 (última entrada 16:30).',
  hoursSource: 'https://www.pref.nara.jp/1795.htm',
  tickets: '250 ¥ adulto, 120 ¥ niños; gratuito para quien presente un pasaporte extranjero original.',
  official: 'https://www.pref.nara.jp/1795.htm',
  tips: [
    'Lleva el pasaporte físico si quieres aprovechar la entrada gratuita: no se acepta una foto o copia.',
    'Combínalo con Isui-en, justo al lado: se visitan los dos en la misma media mañana o tarde.',
    'Si buscas un rato de calma lejos de los grupos, este jardín suele estar mucho más vacío que sus vecinos.'
  ],
  access: 'A pie desde el templo Tōdai-ji (unos 5 minutos) o desde la estación de Kintetsu Nara (unos 15-20 minutos), junto al jardín Isui-en.'
});
