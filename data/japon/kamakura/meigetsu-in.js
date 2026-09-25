// Meigetsu-in — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'meigetsu-in', city: 'kamakura', name: 'Meigetsu-in', category: 'Templo zen', reviewed: '2026-09',
  image: 'assets/japon-meigetsu-in.jpg',
  lat: 35.3297, lon: 139.5472,
  lead: 'Conocido como Ajisai-dera, «el templo de las hortensias», y famoso por su ventana circular que enmarca el jardín como un cuadro.',
  duration: '30–45 min',
  price: '500 ¥ adulto (jardín trasero con suplemento, solo en temporada)',
  stats: [
    {value: '~2.500', label: 'hortensias en el recinto, la mayoría azules hime ajisai', icon: 'blossom'},
    {value: '1394', label: 'año de reconstrucción como templo dependiente de Kenchō-ji', icon: 'gate'},
    {value: '1', label: 'ventana circular Marumado, «ventana de la iluminación»', icon: 'eye'},
    {value: '16', label: 'figuras budistas en la cueva-tumba yagura', icon: 'rock'}
  ],
  blocks: [
    {type: 'lead', text: 'Meigetsu-in es conocido popularmente como Ajisai-dera, «el templo de las hortensias», por la espectacular floración de junio que cubre su camino de acceso y sus jardines de un mar de flores azules. Aunque su fama se debe sobre todo a esa temporada, el templo guarda durante todo el año una de las estampas más reconocibles de Kamakura: una ventana circular que enmarca el jardín como si fuera un cuadro.'},
    {type: 'p', text: 'El templo tiene su origen en un oratorio levantado en el siglo XII por el clan Uesugi, pero tomó su forma actual en 1394 como sub-templo dependiente de Kenchō-ji, el primero de los cinco grandes templos zen de la ciudad, del que Meigetsu-in conserva buena parte del carácter recogido y sobrio.'},
    {type: 'heading', text: 'Ajisai-dera: un camino de hortensias azules', icon: 'blossom'},
    {type: 'stop', title: 'La temporada más concurrida de Kamakura', text: [
      'Durante las primeras semanas de junio, el sendero de piedra que sube hasta la entrada se llena de unas 2.500 hortensias, en su mayoría de la variedad hime ajisai, de un azul intenso poco habitual en otros templos de la ciudad. Es, junto con Hase-dera, la cita obligada de quien visita Kamakura en plena temporada de lluvias, y conviene contar con colas a la entrada en los días de mayor floración.'
    ]},
    {type: 'heading', text: 'La ventana circular Marumado', icon: 'eye'},
    {type: 'stop', title: 'Una ventana que enmarca el vacío y el jardín', text: [
      'En la sala principal, la llamada Marumado —«ventana redonda»— recorta un círculo perfecto sobre el jardín trasero, y se conoce también como «ventana de la iluminación»: en la estética zen, el círculo representa el universo, el vacío y la mente iluminada, de modo que mirar a través de ella es, en cierto modo, parte de la propia práctica contemplativa. Es una de las imágenes más fotografiadas de todo Kamakura, especialmente con la luz suave de la mañana.'
    ]},
    {type: 'heading', text: 'El jardín trasero y la cueva yagura', icon: 'rock'},
    {type: 'stop', title: 'Un jardín que solo abre en temporada', text: [
      'Detrás del salón principal se extiende un segundo jardín, de estilo karesansui, que solo abre al público con un suplemento en las semanas de hortensias de junio y durante la temporada de arces de otoño. Cerca de la entrada, una cueva yagura excavada en la roca —la costumbre funeraria típica de Kamakura— alberga dieciséis figuras budistas talladas, entre ellas las de los Dieciséis Arhats.'
    ]},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'La ventana circular Marumado se conoce también como «ventana de la iluminación», por el simbolismo del círculo en la estética zen.',
      'El jardín trasero, con su jardín seco karesansui, solo se abre al público en las temporadas de hortensias y de arces.',
      'Meigetsu-in nació como sub-templo de Kenchō-ji, el primero de los cinco grandes templos zen de Kamakura.'
    ]}
  ],
  hours: 'Todos los días de 9:00 a 16:00 (horario ampliado, aprox. 8:30-17:00, durante la floración de hortensias en junio).',
  hoursSource: 'https://www.meigetsuin.or.jp/',
  tickets: 'La entrada al recinto se compra en el acceso; el jardín trasero, cuando abre en temporada, se paga aparte.',
  official: 'https://www.meigetsuin.or.jp/',
  tips: [
    'Si vas por las hortensias, ve a primera hora de la mañana entre semana: en fin de semana de junio las colas pueden ser largas.',
    'Aunque no coincida con la floración, la ventana Marumado y el jardín seco merecen la visita cualquier época del año.'
  ],
  access: 'Unos 15 minutos a pie desde la estación de Kita-Kamakura (línea JR Yokosuka), en la misma zona que Kenchō-ji y Engaku-ji.'
});
