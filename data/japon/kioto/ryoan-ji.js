// Ryōan-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'ryoan-ji', city: 'kioto', zone: 'noroeste', name: 'Ryōan-ji', category: 'Templo zen',
  image: 'assets/japon-ryoan-ji.jpg',
  lat: 35.0345, lon: 135.7182,
  lead: 'El jardín zen de piedras más famoso de Japón: quince rocas que nunca se ven todas a la vez.',
  duration: '1 hora',
  price: 'Consulta la tarifa vigente en la web oficial',
  stats: [
    {value:'15', label:'rocas en el jardín seco', icon:'rock'},
    {value:'0', label:'ángulos desde los que se ven las 15 a la vez', icon:'eye'},
    {value:'1450', label:'año en que Hosokawa Katsumoto fundó el templo', icon:'scroll'}
  ],
  blocks: [
    {type:'lead', text:'Antigua residencia aristocrática del clan Tokudaiji, el terreno pasó en 1450 a manos de Hosokawa Katsumoto, quien lo convirtió en templo zen de la secta Rinzai. Destruido en las guerras Ōnin (1467-1477) y reconstruido por su hijo en 1499, llegó a albergar 23 subtemplos en su momento de mayor esplendor, antes de un incendio en 1797 del que nunca recuperó aquel nivel.'},
    {type:'stop', title:'Estanque Kyōyōchi', text:[
      'La visita cruza primero este estanque, con un pequeño santuario a Benzaiten en un islote accesible por un puente de piedra, antes de llegar al salón Hōjō.'
    ]},
    {type:'stop', title:'El jardín seco karesansui', text:[
      'Un rectángulo de unos 10 por 25 metros con quince rocas dispuestas sobre musgo y arena rastrillada, rodeado por tres muros de tierra. Su particularidad es que, se mire desde donde se mire, nunca se pueden ver las quince piedras a la vez.',
      'No se sabe con certeza quién diseñó el jardín ni cuándo, ni qué representa: hasta 2002 la teoría más popular hablaba de un tigre cruzando un río con sus cachorros, pero un estudio de ese año, fijándose en la forma que dibuja la arena rastrillada en vez de las rocas, propuso la silueta de un árbol. Las primeras descripciones documentadas del jardín son de 1680-1682, sin rastro anterior de su existencia.'
    ]},
    {type:'stop', title:'La pileta Tsukubai', text:[
      'Cerca de la salida, esta pileta de agua circular lleva grabados cuatro caracteres que, leídos junto al hueco central, forman la frase «con lo que sé es suficiente», un regalo del daimyō e historiador Mitsukuni Mito en el siglo XVII.'
    ]}
  ],
  hours: 'Consulta el horario estacional en la web oficial (normalmente de 8:00 a 17:00, con ajustes en invierno).',
  hoursSource: 'https://www.ryoanji.jp/smph/eng/',
  tickets: 'La entrada se compra en el acceso al templo.',
  official: 'https://www.ryoanji.jp/smph/eng/',
  tips: [
    'Siéntate en la plataforma de observación del Hōjō con calma: el jardín se disfruta mejor sin prisa.',
    'Combina la visita con Kinkaku-ji y Ninna-ji, conectados por el paseo Kinukake-no-michi.'
  ],
  access: 'A pie desde la parada de autobús Ryōanji-mae, o combinando con el paseo Kinukake-no-michi desde Kinkaku-ji (unos 2,5 km).'
});
