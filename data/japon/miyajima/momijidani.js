// Parque Momijidani — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'momijidani', city: 'miyajima', name: 'Parque Momijidani', category: 'Parque y naturaleza', reviewed: '2026-09',
  image: 'assets/japon-momijidani.jpg',
  lat: 34.2973, lon: 132.3226,
  lead: 'El «valle de los arces», un parque frondoso a los pies del monte Misen y la puerta natural hacia la montaña.',
  duration: '30–45 min',
  price: 'Acceso al parque gratuito',
  stats: [
    {value:'700', label:'arces aproximados repartidos por el parque', icon:'tree'},
    {value:'Edo', label:'periodo en el que se plantaron los primeros arces del valle', icon:'blossom'},
    {value:'1945', label:'año en que un fuerte tifón devastó buena parte del parque', icon:'droplet'},
    {value:'2', label:'tramos del funicular Miyajima Ropeway, con transbordo en Kayatani', icon:'peak'}
  ],
  blocks: [
    {type:'lead', text:'Momijidani (literalmente «valle del momiji») es un parque frondoso a los pies del monte Misen, célebre por sus arces japoneses y por ser el punto de partida del funicular hacia la montaña.'},
    {type:'p', text:'El parque se extiende a lo largo de un arroyo entre laderas cubiertas de arces, cedros y otras especies que en otoño tiñen el valle de rojos y naranjas intensos, uno de los momentos más fotografiados de la isla. En primavera y verano, en cambio, ofrece una sombra fresca muy agradecida tras el paseo desde el santuario.'},
    {type:'heading', text:'Un paseo entre arces y puentes', icon:'tree'},
    {type:'stop', title:'El valle y sus pequeños puentes', text:[
      'Además de pasear junto al río y sus pequeños puentes de piedra y madera, el parque es el punto de acceso a la estación inferior del funicular Miyajima Ropeway, que sube en dos tramos —con transbordo en la estación Kayatani— hacia el monte Misen y evita la parte más dura de la subida a pie.',
      'Es habitual cruzarse con ciervos de la isla paseando tranquilamente entre los árboles, además de familias locales haciendo pícnic bajo la sombra en los meses más calurosos.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El parque reúne unos 700 arces, la mayoría de la variedad iroha momiji, que se tiñen de rojo a mediados o finales de noviembre.',
      'En 1945 un fuerte tifón devastó buena parte del valle, que tuvo que replantarse en las décadas siguientes.',
      'El nombre «Momijidani» se repite en varios parques de Japón famosos por sus arces; el de Miyajima es de los más visitados por su cercanía al santuario de Itsukushima.'
    ]}
  ],
  hours: 'Parque de acceso libre a cualquier hora; el funicular tiene su propio horario de servicio.',
  hoursSource: 'https://www.miyajima-ropeway.info/en/',
  tickets: 'No se necesita entrada para pasear por el parque; el funicular al monte Misen se paga aparte.',
  official: 'https://www.miyajima-ropeway.info/en/',
  tips: [
    'Combina la visita con la subida al monte Misen: el parque es literalmente el punto de partida del funicular.',
    'Si vas en época de momiji (noviembre), ve a primera hora para evitar las horas de más afluencia.'
  ],
  access: 'A pie desde el santuario de Itsukushima, siguiendo la costa hacia el interior de la isla (unos 15-20 minutos).'
});
