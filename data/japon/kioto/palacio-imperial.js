// Palacio Imperial de Kioto — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'palacio-imperial', city: 'kioto', zone: 'centro', name: 'Palacio Imperial de Kioto', category: 'Palacio', reviewed: '2026-09',
  image: 'assets/japon-kioto-palacio-imperial.jpg',
  lat: 35.0254, lon: 135.7621,
  lead: 'La residencia de los emperadores de Japón durante más de cinco siglos, reconstruida al menos ocho veces tras sucesivos incendios.',
  duration: '60–90 min',
  stats: [
    {value: '1337', label: 'año en que se convirtió en residencia imperial permanente', icon: 'scroll'},
    {value: '100 ha', label: 'superficie del parque Kyoto Gyoen que lo rodea', icon: 'ruler'}
  ],
  blocks: [
    {type: 'lead', text: 'El emperador Kōmyō se instaló en este emplazamiento en 1337, después de que el antiguo gran palacio imperial (Daidairi), situado unos 1,7 km al oeste, quedara destruido por sucesivos incendios. Desde entonces ha vuelto a arder muchas veces: solo durante el periodo Edo se reconstruyó al menos ocho veces, en 1613, 1642, 1655, 1662, 1675, 1709, 1790 y 1855.'},
    {type: 'p', text: 'Tras el incendio de 1854, el shogun Tokugawa Iesada ordenó reconstruirlo a petición del emperador Kōmei; las obras comenzaron en noviembre de 1855 y el conjunto alcanzó su forma actual hacia 1866, con el Shishinden y el Seiryōden reconstruidos imitando el estilo arquitectónico del periodo Heian.'},
    {type: 'heading', text: 'El Shishinden y las ceremonias de entronización', icon: 'pagoda'},
    {type: 'p', text: 'El Shishinden, el salón principal, acogió las ceremonias de entronización de los emperadores Meiji (1868), Taishō (1915) y Shōwa (1928). El trono original Takamikura se perdió en el incendio de 1854, así que la entronización de Meiji usó como sustituto el Michōdai, el trono normalmente reservado a la emperatriz; para la de Taishō en 1915 se construyó un nuevo Takamikura octogonal, reutilizado en 1928. Ese mismo trono se trasladó después a Tokio para las entronizaciones de Akihito (1990) y Naruhito (2019), que ya no se celebraron en Kioto.'},
    {type: 'p', text: 'El recinto conserva también el Seiryōden, residencia cotidiana del emperador desde el siglo IX, y el Kogosho, escenario el 9 de diciembre de 1867 de la «Conferencia de Kogosho» que marcó el inicio de la Restauración Meiji (el edificio ardió en 1954 y se reconstruyó en 1958).'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Hasta julio de 2016 hacía falta reserva previa de la Agencia de la Casa Imperial para entrar; hoy el acceso es libre, sin reserva, incluidas visitas guiadas gratuitas en inglés.'
    ]}
  ],
  hours: 'Aproximadamente de 9:00 a 16:00-17:00 según la época del año; cerrado los lunes y del 28 de diciembre al 4 de enero. Horario no confirmado directamente en la web oficial.',
  price: 'Entrada gratuita',
  official: 'https://sankan.kunaicho.go.jp/english/guide/kyoto.html',
  tips: [
    'El recinto forma parte del gran parque Kyoto Gyoen, con más espacio verde alrededor por explorar sin prisa.'
  ]
});
