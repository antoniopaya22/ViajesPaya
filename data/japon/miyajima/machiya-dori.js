// Calle Machiya-dōri — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'machiya-dori', city: 'miyajima', name: 'Calle Machiya-dōri', category: 'Calle histórica',
  image: 'assets/japon-machiya-dori.jpg',
  lat: 34.2962, lon: 132.3186,
  lead: 'La antigua calle principal de Miyajima, un paso más tranquila que Omotesandō, con ryokan, galerías y farolillos de papel encendidos al anochecer.',
  duration: '20–30 min',
  price: 'Acceso gratuito',
  stats: [
    {value:'51', label:'farolillos de papel que iluminan la calle cada noche', icon:'lantern'},
    {value:'3', label:'veces al año que se cambian los dibujos de los farolillos', icon:'lantern'},
    {value:'2001', label:'año en que arrancó el festival de primavera Miyajima Hina Meguri', icon:'blossom'},
    {value:'700 ¥', label:'precio orientativo de un okonomiyaki en el restaurante Kishibe', icon:'bag'}
  ],
  blocks: [
    {type:'lead', text:'Un bloque tierra adentro de la bulliciosa Omotesandō corre Machiya-dōri, la que fuera calle principal de Miyajima durante el periodo Edo, cuando se la conocía como Honmachi-suji: la vía por la que iban y venían peregrinos y visitantes de las antiguas posadas hatago.'},
    {type:'p', text:'Tras la Segunda Guerra Mundial perdió buena parte de su energía comercial, pero desde el año 2001, con el arranque del festival de primavera Miyajima Hina Meguri, sus edificios machiya de los periodos Edo a Shōwa volvieron a llamar la atención de visitantes y vecinos.'},
    {type:'heading', text:'Ryokan, galerías y farolillos', icon:'lantern'},
    {type:'stop', title:'Una calle para alojarse y pasear de noche', text:[
      'Hoy la calle combina ryokan de aire retro, galerías de arte y pequeñas tiendas instaladas en edificios tradicionales de madera. Bajo los aleros cuelgan 51 farolillos de papel hechos a mano, cada uno con un dibujo distinto que cambia tres veces al año; se encienden cada noche media hora después de la puesta de sol hasta las 23:00, dando a la calle un ambiente muy distinto al de pleno día.'
    ]},
    {type:'heading', text:'Okonomiyaki en la entrada de una casa', icon:'flame'},
    {type:'stop', title:'Kishibe, el okonomiyaki de una abuela', text:[
      'En esta calle, un paso por detrás del bullicio de Omotesandō, se encuentra Kishibe: un pequeño local familiar —lo llevan una abuela y su hija— con un único mostrador para unos doce comensales, donde se prepara okonomiyaki al estilo Hiroshima (con fideos soba o udon) desde precios muy asequibles. Es, además, uno de los pocos restaurantes de la isla que abre hasta las 21:00.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Machiya-dōri se llamaba Honmachi-suji en el periodo Edo y era entonces la calle principal de la isla, no Omotesandō.',
      'Los 51 farolillos de papel de la calle cambian de diseño tres veces al año y se iluminan cada noche.',
      'El restaurante Kishibe está entre los pocos de la isla abiertos hasta las 21:00, cuando la mayoría de negocios ya ha cerrado.'
    ]}
  ],
  hours: 'Calle de acceso libre a cualquier hora; los farolillos se iluminan desde media hora después de la puesta de sol hasta las 23:00.',
  hoursSource: 'https://www.miyajima.or.jp/english/sightseeing/',
  tickets: 'No hace falta entrada.',
  official: 'https://www.miyajima.or.jp/english/sightseeing/',
  tips: [
    'Combínala con Omotesandō: son casi paralelas y separadas por solo una manzana, así que puedes ir por una y volver por la otra.',
    'Pasa por aquí al anochecer para ver los farolillos encendidos, cuando el ambiente cambia bastante respecto al día.',
    'Si buscas okonomiyaki con menos cola que en la calle principal, Kishibe es una opción fiable hasta bien entrada la noche.'
  ],
  access: 'A pie, una manzana tierra adentro de la calle Omotesandō, en el centro del pueblo de Miyajima.'
});
