// Nishimatsubara y acuario de Miyajima — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'nishimatsubara', city: 'miyajima', name: 'Nishimatsubara y acuario de Miyajima', category: 'Naturaleza y acuario', reviewed: '2026-09',
  image: 'assets/japon-nishimatsubara.jpg',
  lat: 34.2954, lon: 132.3154,
  lead: 'Una lengua de arena con vistas al torii desde otro ángulo, camino de un pequeño santuario y del acuario dedicado al mar interior de Seto.',
  duration: '1–2 horas (paseo + visita al acuario)',
  price: 'Paseo por Nishimatsubara gratuito; acuario de pago',
  stats: [
    {value:'1959', label:'año de apertura del acuario, entonces como acuario prefectural', icon:'droplet'},
    {value:'2011', label:'año de reapertura del edificio actual, bajo el lema «sanar e interactuar»', icon:'gate'},
    {value:'350', label:'especies marinas aproximadas representadas en el acuario', icon:'eye'},
    {value:'13.000', label:'ejemplares aproximados que viven en sus instalaciones', icon:'droplet'}
  ],
  blocks: [
    {type:'lead', text:'Al sur del templo Daiganji, la costa de Miyajima se abre en Nishimatsubara, una lengua de arena y pinos desde la que el gran torii se ve desde un ángulo mucho menos fotografiado que el habitual frente al santuario.'},
    {type:'p', text:'Siguiendo el paseo marítimo desde aquí se llega primero a un pequeño santuario dedicado a Taira no Kiyomori, el noble que impulsó la construcción del santuario de Itsukushima sobre la bahía en el siglo XII, y un poco más allá al acuario de la isla.'},
    {type:'heading', text:'La lengua de arena de Nishimatsubara', icon:'droplet'},
    {type:'stop', title:'Otro ángulo del gran torii', text:[
      'Nishimatsubara es una parada mucho más tranquila que el entorno del santuario, ideal para alejarse un poco de las zonas más concurridas de la isla sin dejar de tener el torii a la vista. El pequeño santuario Kiyomori, de camino, recuerda la figura del noble Heian al que se atribuye el diseño original del santuario flotante.'
    ]},
    {type:'heading', text:'El acuario de Miyajima', icon:'eye'},
    {type:'stop', title:'Vida marina del mar interior de Seto', text:[
      'El acuario de Miyajima abrió por primera vez en 1959 como acuario prefectural, pasó a depender del propio pueblo en 1967 y renovó su edificio en 1981; el edificio actual, con el lema «sanar e interactuar», se inauguró en agosto de 2011. Reúne unas 350 especies y cerca de 13.000 ejemplares, la mayoría propios del mar interior de Seto que rodea la isla.',
      'Uno de sus rincones más curiosos reproduce una batea de ostras al estilo de Hiroshima, la mayor instalación del acuario dedicada a este molusco tan asociado a la región; también hay espacios dedicados a marsopas, focas y otras especies marinas locales.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Desde Nishimatsubara el gran torii se ve desde un ángulo distinto al habitual, con mucha menos gente alrededor.',
      'El acuario reproduce una batea de cultivo de ostras al estilo de Hiroshima, la región productora de ostras más importante de Japón.',
      'El pequeño santuario Kiyomori, de camino al acuario, recuerda al noble que impulsó la construcción del santuario de Itsukushima sobre el mar.'
    ]}
  ],
  hours: 'El acuario suele abrir de 9:00 a 17:00, con la última entrada una hora antes del cierre; conviene confirmar el horario vigente.',
  hoursSource: 'https://www.miyajima-aqua.jp/en/',
  tickets: 'El paseo por Nishimatsubara es gratuito; el acuario tiene entrada de pago independiente.',
  official: 'https://www.miyajima-aqua.jp/en/',
  tips: [
    'Ve por la tarde si buscas menos gente que en la zona del santuario, especialmente en temporada alta.',
    'Combina el paseo con la visita al acuario: la zona queda algo alejada del núcleo turístico principal, así que compensa aprovechar el viaje.',
    'Si viajas con niños, el acuario suele ser una de las paradas favoritas del día en Miyajima.'
  ],
  access: 'A pie desde el templo Daiganji, siguiendo el paseo marítimo hacia el sur (unos 15-20 minutos hasta el acuario).'
});
