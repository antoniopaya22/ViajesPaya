// Jardín Kōko-en — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'jardin-koko-en', city: 'himeji', name: 'Jardín Kōko-en', category: 'Jardín', reviewed: '2026-09',
  image: 'assets/japon-jardin-koko-en.jpg',
  lat: 34.8365, lon: 134.6897,
  lead: 'Nueve jardines de estilo Edo pegados a las murallas del castillo de Himeji, para pasear despacio después de la subida a la torre.',
  duration: '45–70 min',
  price: 'Incluido en el billete combinado con el castillo (+50 ¥); entrada independiente también disponible',
  stats: [
    {value:'1992', label:'año de construcción de los jardines', icon:'tree'},
    {value:'9', label:'jardines tradicionales distintos', icon:'rock'},
    {value:'3,5 ha', label:'superficie total del recinto', icon:'ruler'},
    {value:'5', label:'minutos a pie desde la puerta Otemon', icon:'footprints'}
  ],
  blocks: [
    {type:'lead', text:'Kōko-en se abrió en 1992 exactamente en el solar donde estuvo Nishi-Oyashiki, la residencia de los samuráis que servían al castillo. Sobre 3,5 hectáreas se recrearon nueve jardines tradicionales distintos, todos del estilo chisen-kaiyu o «jardín de paseo alrededor de un estanque», siguiendo las técnicas de jardinería del periodo Edo.'},
    {type:'p', text:'El trazado no es una recreación libre: sigue el plano real de las antiguas residencias samurái que ocupaban este terreno, por lo que los muros que separan los nueve jardines respetan las divisiones históricas de las parcelas. Es el contrapunto perfecto al recorrido defensivo y vertical del castillo: aquí el ritmo es horizontal y pausado, con las murallas blancas de Himeji-jō asomando de fondo en varios rincones.'},
    {type:'heading', text:'Nueve jardines, nueve ambientes', icon:'tree'},
    {type:'stop', title:'Un jardín para cada estación de ánimo', text:[
      'Cada uno de los nueve jardines propone una experiencia propia —desde composiciones de bambú y arces hasta rincones de pinos o el jardín central con su gran estanque— pensados para recorrerse sin prisa, con muros, canales de agua y caminos que separan visualmente un espacio del siguiente.'
    ]},
    {type:'stop', title:'Casa de té Souju-an', text:[
      'En el jardín central hay una casa de té donde se sirve matcha con vistas al estanque, un buen momento para descansar antes de seguir la visita a la ciudad.'
    ]},
    {type:'cards', title:'Antes o después del castillo', items:[
      {icon:'tower', title:'Combínalo con la torre', text:'Visítalo después del castillo: el contraste entre la fortaleza vertical y el silencio horizontal del jardín se aprecia mejor en ese orden.'},
      {icon:'teacup', title:'Pausa de matcha', text:'La casa de té del jardín central es ideal para sentarse, tomar matcha y ver el estanque antes de continuar la ruta por Himeji.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Los muros que dividen los nueve jardines no son decorativos: siguen literalmente las lindes de las antiguas parcelas samurái que ocupaban este terreno.',
      'El billete combinado con el castillo solo añade 50 ¥ al precio de la entrada de Kōko-en, y comprarlo aquí suele ahorrar cola frente a la taquilla del castillo.'
    ]}
  ],
  hours: 'Mismo horario que el castillo de Himeji: 9:00–16:00 (hasta las 17:00 de abril a agosto).',
  hoursSource: 'https://www.himeji-kanko.jp/en/spot/14/',
  tickets: 'Compra el billete combinado con el castillo aquí mismo, en la taquilla de Kōko-en, para evitar colas.',
  official: 'https://www.himeji-kanko.jp/en/spot/14/',
  tips: [
    'Visítalo después del castillo: el contraste entre la fortaleza y el silencio del jardín se aprecia mejor en ese orden.',
    'La casa de té del jardín central es un buen lugar para descansar y tomar matcha antes de seguir la visita a la ciudad.'
  ],
  access: 'A pie desde el castillo de Himeji, pegado a su entrada oeste; unos 5 minutos caminando desde la puerta Otemon.'
});
