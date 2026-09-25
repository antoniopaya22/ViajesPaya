// Byōdō-in — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'byodo-in', city: 'uji', name: 'Byōdō-in', category: 'Templo', reviewed: '2026-09',
  image: 'assets/uji.jpg',
  lat: 34.8894, lon: 135.8077,
  lead: 'El Salón del Fénix junto a un estanque, la imagen que aparece en la moneda de 10 yenes.',
  duration: '1–1,5 horas',
  price: 'Entrada de pago al jardín y museo; el acceso al interior del Salón del Fénix suele llevar un suplemento',
  stats: [
    {value:'998', label:'año en que Fujiwara no Michinaga levantó la villa original', icon:'gate'},
    {value:'1053', label:'año de construcción del Salón del Fénix', icon:'pagoda'},
    {value:'1994', label:'declarado Patrimonio de la Humanidad', icon:'trophy'},
    {value:'10 ¥', label:'moneda japonesa que lleva su imagen en el reverso', icon:'scroll'}
  ],
  blocks: [
    {type:'lead', text:'Convertida en templo budista en el siglo XI a partir de una antigua villa aristocrática, Byōdō-in es uno de los edificios más reconocibles del periodo Heian y un ejemplo perfecto de la arquitectura de la escuela de la Tierra Pura.'},
    {type:'p', text:'El terreno perteneció primero a Minamoto no Tōru y después pasó a manos del poderoso Fujiwara no Michinaga, que en el año 998 lo convirtió en una villa de recreo junto al río Uji. Fue su hijo, Fujiwara no Yorimichi, quien transformó la finca en templo en 1052 y ordenó construir, un año después, su edificio más célebre.'},
    {type:'heading', text:'El Salón del Fénix', icon:'pagoda'},
    {type:'stop', title:'Hōō-dō, el Salón del Fénix', text:[
      'El Salón del Fénix (Hōō-dō) representa arquitectónicamente el palacio de Amida Buda en la Tierra Pura, el paraíso budista al que aspiraban llegar los nobles de la corte Heian. Su silueta, con dos alas laterales y un reflejo perfecto en el estanque Aji-ike frente a él, se ha convertido en una de las imágenes más repetidas del patrimonio japonés, hasta el punto de figurar en el reverso de la moneda de 10 yenes desde hace décadas.',
      'A diferencia de otros edificios del recinto, arrasados por un incendio durante una guerra civil en 1331 y de nuevo dañados por el gran incendio que asoló Uji en 1698, el Salón del Fénix nunca ha sido destruido: es una de las escasísimas estructuras de madera del periodo Heian que se conservan tal cual se construyeron, aunque recibió grandes restauraciones durante las épocas Meiji y Shōwa.'
    ]},
    {type:'stop', title:'La estatua de Amida de Jōchō', text:[
      'Dentro del salón se conserva una estatua sedente de Amida Buda tallada en 1053 por el escultor Jōchō, considerada una obra maestra del arte budista japonés y catalogada como Tesoro Nacional, igual que buena parte de los objetos y pinturas que la acompañan.'
    ]},
    {type:'stop', title:'Museo Hōshōkan', text:[
      'El museo del templo, el Hōshōkan, reúne piezas originales retiradas del salón principal para su conservación: campanas, relieves de bodhisattvas voladores y fragmentos de las puertas pintadas que decoraban el Hōō-dō.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La imagen del Salón del Fénix aparece en el reverso de la moneda japonesa de 10 yenes desde hace décadas.',
      'El acceso al interior del Salón del Fénix suele limitarse a grupos reducidos y franjas horarias concretas, a diferencia del jardín y el museo.',
      'El conjunto, junto con otros monumentos históricos de la antigua Kioto, fue declarado Patrimonio de la Humanidad por la UNESCO en 1994.'
    ]}
  ],
  hours: 'El jardín, el museo y el interior del Salón del Fénix tienen horarios y aforos distintos entre sí.',
  hoursSource: 'https://www.byodoin.or.jp/en/guide/',
  tickets: 'Conviene consultar al llegar la disponibilidad de plazas para el interior del Salón del Fénix, ya que el aforo es limitado.',
  official: 'https://www.byodoin.or.jp/en/',
  tips: [
    'Resérvate tiempo para el museo Hōshōkan: reúne piezas originales que ya no están expuestas dentro del salón.',
    'El reflejo del Salón del Fénix en el estanque Aji-ike es especialmente bonito con poco viento; las primeras horas de la mañana suelen ser más tranquilas.'
  ],
  access: 'A pie desde la estación de Uji (líneas JR Nara o Keihan Uji), cruzando el puente sobre el río Uji, unos 10 minutos.'
});
