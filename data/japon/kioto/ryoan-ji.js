// Ryōan-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'ryoan-ji', city: 'kioto', zone: 'noroeste', name: 'Ryōan-ji', category: 'Templo zen', reviewed: '2026-09',
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
      'La entrada se hace por la puerta Sanmon, que deja al visitante en el extremo sureste del estanque. Conviene desviarse hacia la zona norte antes de entrar al salón principal, porque el camino de salida discurre por otro lado y es fácil perderse esta vista.',
      'En el islote Benten, accesible por un puente de piedra, hay un pequeño santuario dedicado a Benzaiten, una de las siete deidades de la fortuna (Shichifukujin), frecuentado en su día por Toyotomi Hideyoshi; a su alrededor hay una hilera de estatuas jizō, faroles de piedra y un torii bermellón. Desde aquí se ve también el islote Fujitora, inaccesible, que se dice tiene forma de tigre tumbado y se cubre de cerezos en primavera. Antes de las escaleras de acceso al Hōjō espera un Buda de piedra rodeado de musgo.'
    ]},
    {type:'stop', title:'El salón Hōjō y el jardín en miniatura', text:[
      'El salón Hōjō, antigua residencia del monje principal, se visita descalzo. En la entrada hay una exposición de caligrafías en papel washi y el antiguo altar de los aposentos del monje; junto a ella, la tienda del templo con amuletos y caligrafías goshuin. Como curiosidad, los doce volúmenes del Taiheiki se conservan aquí como tesoro del templo.',
      'También en el Hōjō hay una reproducción en miniatura del jardín zen: es la única ocasión de ver de un vistazo la disposición completa de las 15 piedras, algo imposible en el jardín real.'
    ]},
    {type:'stop', title:'El jardín seco karesansui', text:[
      'Un rectángulo de unos 10 por 25 metros con quince rocas dispuestas sobre musgo y arena rastrillada, rodeado por tres muros de tierra. Su particularidad es que, se mire desde donde se mire, nunca se pueden ver las quince piedras a la vez.',
      'No se sabe con certeza quién diseñó el jardín ni cuándo, ni qué representa: hasta 2002 la teoría más popular hablaba de un tigre cruzando un río con sus cachorros, pero un estudio de ese año, fijándose en la forma que dibuja la arena rastrillada en vez de las rocas, propuso la silueta de un árbol. Las primeras descripciones documentadas del jardín son de 1680-1682, sin rastro anterior de su existencia.'
    ]},
    {type:'stop', title:'El interior del Hōjō y las pinturas fusuma', text:[
      'Tras observar el jardín, merece la pena fijarse en las salas de tatami del Hōjō, decoradas con pinturas monocromáticas en tinta china sobre las puertas correderas fusuma. Las de las salas laterales son fijas, pero la sala central se usa como espacio de exposición temporal, casi siempre con motivos de dragones en honor al nombre del templo, «templo del dragón pacífico».'
    ]},
    {type:'stop', title:'La pileta Tsukubai', text:[
      'Cerca de la salida, esta pileta de agua circular lleva grabados cuatro caracteres que, leídos junto al hueco central, forman la frase «con lo que sé es suficiente», un regalo del daimyō e historiador Mitsukuni Mito en el siglo XVII. Junto al Hōjō, un pasadizo cubierto lleva al salón de Buda, cerrado al público y solo visible desde fuera; y detrás de la pileta, junto a la casa de té del siglo XVII, crece la «camelia de Wabisuke», traída de la península coreana en el periodo Momoyama y muy apreciada por Sen no Rikyū, padre de la ceremonia del té japonesa.'
    ]},
    {type:'stop', title:'Camino de salida', text:[
      'De vuelta bordeando el estanque hacia la salida se pasa por la puerta imperial de acceso al Hōjō, usada por última vez en 1975 durante la visita de la reina Isabel II de Inglaterra, el templo Daiju-in y el restaurante Saigen-in, especializado en yudōfu y cocina vegetariana, reconocible por su cortina noren azul. En el extremo del complejo se encuentra el osario Nokotsu-dō junto a una pagoda construida en 1970 como cenotafio del 58º monje superior del templo, que luchó en Birmania durante la Segunda Guerra Mundial.'
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
