// Torre de Tokio — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'torre-tokio', city: 'tokio', zone: 'minato', name: 'Torre de Tokio', category: 'Mirador', reviewed: '2026-09',
  image: 'assets/japon-torre-tokio.jpg',
  lat: 35.6586, lon: 139.7454,
  lead: 'La torre roja y blanca inspirada en la Eiffel, símbolo de la recuperación económica de la posguerra, junto al templo Zōjō-ji.',
  duration: '1–1,5 horas',
  price: 'Observatorio principal desde unos 1.200 ¥ adulto; suplemento para el observatorio especial',
  stats: [
    {value:'1958', label:'año de inauguración de la torre', icon:'tower'},
    {value:'315 m', label:'altura actual (333 m antes de 2012)', icon:'peak'},
    {value:'150 m', label:'altura del observatorio principal', icon:'eye'},
    {value:'250 m', label:'altura del observatorio especial', icon:'peak'}
  ],
  blocks: [
    {type:'lead', text:'Inaugurada en 1958 para dar servicio a las emisiones de la cadena pública NHK (a la que en 1961 se sumaron antenas de radio), la Torre de Tokio se convirtió en símbolo de la recuperación económica del país en la posguerra. Con el cambio de emisión analógica a digital de 2011 dejó de poder cubrir por completo la región de Kantō, por lo que se construyó una torre mucho mayor, la Tokyo Skytree, como nuevo icono de las telecomunicaciones de la ciudad.'},
    {type:'p', text:'El 11 de marzo de 2011, el fuerte terremoto que sacudió el este de Japón dobló la antena analógica de la parte superior de la torre; ya en desuso tras el cambio a emisión digital, se retiró poco después y la altura de la torre pasó de 333 a 315 metros.'},
    {type:'heading', text:'Los dos observatorios', icon:'eye'},
    {type:'stop', title:'FootTown y el observatorio principal', text:[
      'En la base de la torre, el espacio FootTown reúne restaurantes, tiendas de recuerdos y exposiciones, y da acceso al ascensor hacia el observatorio principal, a 150 metros de altura y repartido en dos plantas, con cafés, suelo de cristal (Lookdown Window) y un pequeño santuario en la planta superior.'
    ]},
    {type:'stop', title:'Observatorio especial', text:[
      'Desde el observatorio principal se puede pagar un suplemento para subir al observatorio especial, a 250 metros, con vistas de 360 grados sobre Tokio; en días despejados se distinguen tanto el skyline de Minato como, más lejos, la silueta del monte Fuji.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El diseño se inspiró en la Torre Eiffel, aunque la Torre de Tokio la supera en altura y sigue cumpliendo funciones activas de radiodifusión.',
      'Justo al lado se levanta el templo Zōjō-ji, con el mausoleo de seis shōgun Tokugawa; merece una visita aparte por su propia entidad histórica.'
    ]},
    {type:'stop', title:'Parque Shiba', text:[
      'Al otro lado del templo Zōjō-ji, este parque ofrece uno de los ángulos más clásicos para fotografiar la torre entre cerezos en primavera, y es un lugar habitual para sentarse en el césped a disfrutar de los días de sol.'
    ]}
  ],
  hours: 'Observatorio principal de 9:00 a 22:00; observatorio especial de 9:00 a 21:30.',
  tickets: 'Se puede comprar solo el acceso al observatorio principal o un billete combinado con el especial; conviene reservar con antelación en temporada alta.',
  official: 'https://www.tokyotower.co.jp/en.html',
  tips: [
    'Combina la torre con un paseo por el templo Zōjō-ji y el parque Shiba: están a un minuto a pie y son gratuitos.',
    'Al atardecer suele haber menos cola que a mediodía y se ven tanto la ciudad de día como iluminada de noche.',
    'Si buscas la foto clásica de la torre junto al templo, el ángulo desde el parque Shiba es el más agradecido.'
  ],
  access: 'Estación de Akabanebashi (línea Toei Ōedo) u Onarimon/Daimon (líneas Toei Mita y Asakusa), 5-10 minutos a pie.'
});
