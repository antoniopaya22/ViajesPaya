// Sumiyoshi Taisha — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'sumiyoshi-taisha', city: 'osaka', zone: 'sumiyoshi', name: 'Sumiyoshi Taisha', category: 'Santuario', reviewed: '2026-09',
  image: 'assets/japon-osaka-sumiyoshi.jpg',
  lat: 34.6126, lon: 135.4929,
  lead: 'El santuario principal de los dioses del mar, con un estilo arquitectónico anterior a la llegada del budismo y un puente rojo en forma de arco tan pronunciado que parece un tambor.',
  duration: '60–90 min',
  stats: [
    {value: '211', label: 'año tradicional de fundación, según la leyenda de la emperatriz Jingū', icon: 'scroll'},
    {value: '~2.300', label: 'santuarios Sumiyoshi en todo Japón, de los que este es la sede principal', icon: 'trophy'}
  ],
  blocks: [
    {type: 'lead', text: 'Según la tradición del propio santuario, Sumiyoshi Taisha se fundó en el año 211, cuando el noble Tamomi-no-Sukune lo erigió para agradecer a los dioses del mar el regreso seguro de la emperatriz Jingū de una expedición naval legendaria. Conviene tomar la fecha como leyenda fundacional del santuario, no como un hecho histórico verificado: la propia figura de la emperatriz Jingū se considera hoy semilegendaria.'},
    {type: 'heading', text: 'El estilo Sumiyoshi-zukuri', icon: 'pagoda'},
    {type: 'p', text: 'El santuario da nombre a su propio estilo arquitectónico, el sumiyoshi-zukuri, considerado el más antiguo de Japón y libre de cualquier influencia budista continental: tejados rectos de corteza de ciprés, remates de tejado en horquilla (chigi), listones horizontales sobre la cumbrera (katsuogi) y pilares redondos pintados de bermellón sobre base de piedra. Los cuatro santuarios principales (honden) actuales, reconstruidos en 1810 siguiendo el estilo tradicional, están declarados Tesoro Nacional.'},
    {type: 'cards', title: 'Los cuatro santuarios principales', items: [
      {icon: 'droplet', title: 'Primer y segundo honden', text: 'Dedicados a dos de los tres dioses del mar nacidos de la purificación de Izanagi.'},
      {icon: 'droplet', title: 'Tercer honden', text: 'Dedicado al tercer dios del mar, alineado en línea con los dos anteriores.'},
      {icon: 'heart', title: 'Cuarto honden', text: 'Dedicado a la propia emperatriz Jingū, junto al tercero, distinguible por sus remates de tejado cortados en horizontal.'}
    ]},
    {type: 'heading', text: 'El puente Sorihashi', icon: 'peak'},
    {type: 'p', text: 'Popularmente llamado Taiko-bashi («puente tambor») porque su reflejo en el agua completa un círculo, hay constancia de un puente en este mismo punto desde el siglo XIII; la estructura actual, de unos 21 metros de largo y una pendiente de más de 40 grados, se costeó hacia 1600 con una donación de Yodo-dono, concubina de Toyotomi Hideyoshi. Cruzarlo se considera tradicionalmente un gesto de purificación, un paso simbólico del mundo humano al de los dioses.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'El puerto cercano de Suminoe-no-tsu se considera uno de los más antiguos de Japón, extremo de una ruta marítima hacia China y Corea; de ahí viene el papel histórico de Sumiyoshi como protector de los viajes por mar, todavía invocado hoy por marineros y pescadores.',
      'En los tres primeros días de enero, más de 2 millones de personas visitan el santuario para la primera oración del año (hatsumōde), una de las cifras más altas de la región de Kansai.'
    ]}
  ],
  hours: 'Aproximadamente de 6:00 a 17:00 (de abril a septiembre) y de 6:30 a 17:00 (de octubre a marzo); horario no confirmado directamente en la web oficial.',
  official: 'https://sumiyoshitaisha.net/en/',
  access: 'A 3 minutos a pie de la estación Sumiyoshi-Taisha (línea Nankai, directa desde Namba) o de Sumiyoshi-Torii-mae (tranvía Hankai).',
  tips: [
    'Está a unos 8 km al sur del centro de Osaka: cuenta con el trayecto en tren al planear el día.'
  ]
});
