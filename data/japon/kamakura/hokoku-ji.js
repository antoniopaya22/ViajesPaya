// Hōkoku-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'hokoku-ji', city: 'kamakura', name: 'Hōkoku-ji', category: 'Templo zen',
  image: 'assets/japon-hokoku-ji.jpg',
  lat: 35.3140, lon: 139.5628,
  lead: '«El templo del bambú»: un bosque de cañas altísimas y un pequeño pabellón de té, mucho más tranquilo que Arashiyama.',
  duration: '30–60 min',
  price: '300 ¥ adulto + 600 ¥ aprox. por el té matcha en la casa de té',
  stats: [
    {value: '1334', label: 'año de fundación por el clan Ashikaga', icon: 'gate'},
    {value: '~2.000', label: 'cañas de bambú moso en el jardín', icon: 'tree'},
    {value: 'take-dera', label: 'apodo popular: «el templo del bambú»', icon: 'scroll'},
    {value: 'siglo XIV', label: 'antigüedad de las tumbas yagura talladas en la roca', icon: 'rock'}
  ],
  blocks: [
    {type: 'lead', text: 'Conocido popularmente como take-dera, «el templo del bambú», Hōkoku-ji esconde tras su salón principal un bosque de unas 2.000 cañas de bambú moso que se ha convertido en una de las estampas más fotografiadas de Kamakura, y que muchos visitantes prefieren precisamente porque recibe una fracción de las multitudes del bosque de Arashiyama, en Kioto.'},
    {type: 'p', text: 'El templo se fundó en 1334 como templo funerario del clan Ashikaga, la familia samurái que gobernaría Japón durante los dos siglos siguientes como shogunato Muromachi, y pertenece a la escuela zen Rinzai.'},
    {type: 'heading', text: 'Un paseo entre cañas de diez metros', icon: 'tree'},
    {type: 'stop', title: 'El sendero de bambú y la casa de té', text: [
      'Un camino de tierra y piedra serpentea entre las cañas, algunas de más de diez metros de altura, filtrando una luz verdosa muy distinta a la del resto del templo. Al fondo del bosquecillo hay una pequeña casa de té, Kyūkoan, donde se puede tomar un matcha con vistas directas al bambú, sentado sobre el tatami: una pausa que casi siempre merece la pena pese al pequeño suplemento sobre la entrada.'
    ]},
    {type: 'heading', text: 'Las tumbas yagura talladas en la roca', icon: 'rock'},
    {type: 'stop', title: 'Un cementerio excavado en el acantilado', text: [
      'En la ladera que rodea el bosque de bambú se abren varias yagura, pequeñas cuevas artificiales excavadas directamente en la roca que se usaban como tumbas familiares durante el periodo Kamakura y Muromachi, una solución funeraria típica de esta ciudad rodeada de colinas donde escasea el terreno llano. Las de Hōkoku-ji, vinculadas al clan Ashikaga, se cuentan entre las más conocidas de la ciudad.'
    ]},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'El bosque de bambú de Hōkoku-ji recibe muchos menos visitantes que el de Arashiyama en Kioto, pese a tener un ambiente muy similar.',
      'Hōkoku-ji se fundó como templo funerario del clan Ashikaga, la familia que gobernaría Japón como shogunato durante los dos siglos siguientes.',
      'Las cuevas yagura excavadas en la roca de la ladera se usaban como tumbas familiares, una costumbre propia de la topografía de Kamakura.'
    ]}
  ],
  hours: 'Todos los días de 9:00 a 16:00 (última entrada a la casa de té sobre las 15:30).',
  hoursSource: 'https://www.houkokuji.or.jp/',
  tickets: 'La entrada al bosque de bambú se compra en el acceso; el té en la casa de té se paga aparte, dentro del propio jardín.',
  official: 'https://www.houkokuji.or.jp/',
  tips: [
    'Ve a primera hora de la mañana o entre semana para disfrutar del bosque de bambú con poca gente.',
    'Resérvate unos minutos para el matcha en la casa de té: la vista desde dentro del bosque es distinta a la del propio paseo.'
  ],
  access: 'Unos 20-25 minutos a pie desde la estación de Kamakura, o unos 10 minutos en autobús (parada Jōmyō-ji) más un corto paseo.'
});
