// Zōjō-ji — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'zojo-ji', city: 'tokio', zone: 'minato', name: 'Zōjō-ji', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-zojo-ji.jpg',
  lat: 35.6575, lon: 139.7484,
  lead: 'El gran templo familiar de los Tokugawa, con la puerta más antigua de Minato, justo a los pies de la Torre de Tokio.',
  duration: '45 min–1 hora',
  price: 'Entrada gratuita',
  stats: [
    {value:'1393', label:'año de fundación del templo', icon:'pagoda'},
    {value:'1598', label:'traslado a su ubicación actual por Tokugawa Ieyasu', icon:'scroll'},
    {value:'6', label:'shōgun Tokugawa enterrados en sus terrenos', icon:'bell'},
    {value:'1622', label:'año de la puerta Sangedatsumon, la más antigua del templo', icon:'gate'}
  ],
  blocks: [
    {type:'lead', text:'Zōjō-ji es el templo principal de la escuela budista Jōdo-shū en la región de Kantō. Fundado en 1393, se trasladó a su ubicación actual en 1598 por orden del shōgun Tokugawa Ieyasu al llegar a Edo, y se convirtió poco después en templo familiar de los Tokugawa: seis de los quince shōgun del clan están enterrados en sus terrenos.'},
    {type:'p', text:'En su época de mayor esplendor, durante el periodo Edo, el recinto ocupaba 826.000 m² y llegó a tener 48 subtemplos, unas 150 escuelas y 3.000 monjes y novicios residentes, convirtiéndose en el centro administrativo de los estudios y la actividad religiosa de la secta Jōdo-shū en toda la región. Con la caída del shogunato en 1868 llegó un movimiento antibudista que redujo su influencia, y la Segunda Guerra Mundial destruyó el salón principal, los subtemplos y el mausoleo Tokugawa: casi todo lo que se ve hoy es reconstrucción de posguerra.'},
    {type:'heading', text:'La puerta Sangedatsumon', icon:'gate'},
    {type:'stop', title:'La única estructura original', text:[
      'De madera lacada en rojo y original de 1622, es de las pocas construcciones que sobrevivieron a los bombardeos que arrasaron el resto del templo. Con 21 metros de alto, 28,7 de ancho y 17,6 de profundidad, está declarada Patrimonio Cultural de Japón.',
      'Su nombre significa literalmente «puerta de la triple liberación»: se cree que al cruzar su umbral uno se libera de tres estados negativos —avaricia, odio e insensatez—. En su segundo piso, invisibles desde abajo, hay imágenes del Buda Shakyamuni, dos bodhisattvas y dieciséis discípulos arhat, obra de escultores especializados de Kioto.'
    ]},
    {type:'heading', text:'El recinto principal', icon:'bell'},
    {type:'stop', title:'Salón principal Daiden', text:[
      'Reconstrucción de 1974, alberga en su interior una gran imagen del Buda Amida del periodo Muromachi. A su lado, hileras de estatuas de jizō vestidas con gorritos de lana recuerdan a los niños fallecidos, incluidos los perdidos en partos y abortos; las familias los visten con baberos y molinillos de viento, y por respeto no deben tocarse.'
    ]},
    {type:'stop', title:'Gran campana Daibonshō', text:[
      'Fundida en 1673 y con 1,76 metros de diámetro, es una de las «tres grandes campanas del periodo Edo». Suena doce veces al día —seis por la mañana y seis por la tarde— marcando solo las horas, aunque simbólicamente sirve para purificar las 108 pasiones que arrastran al mal camino; solo repica esas 108 veces la noche de Año Nuevo, celebración que por motivos de seguridad se ha cancelado varias veces.'
    ]},
    {type:'stop', title:'Santuario Kumano y mausoleo Tokugawa', text:[
      'Muy cerca de la campana, este pequeño santuario sintoísta convive dentro del recinto budista, un ejemplo más del sincretismo religioso japonés. El mausoleo de los Tokugawa, contiguo al templo, guarda los restos de seis de los quince shōgun del clan.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El templo llegó a tener 48 subtemplos y 3.000 monjes residentes en su época de mayor esplendor durante el periodo Edo.',
      'La Sangedatsumon es la puerta más antigua del distrito de Minato: sobrevivió a los bombardeos que arrasaron el resto del complejo en 1945.'
    ]},
    {type:'stop', title:'Parque Shiba', text:[
      'Justo al otro lado del templo, el parque Shiba ofrece vistas conjuntas de los rascacielos de Minato, la Torre de Tokio y los edificios de Zōjō-ji; muy popular en primavera durante la floración de los cerezos.'
    ]}
  ],
  hours: 'De 9:00 a 17:00.',
  tickets: 'Entrada gratuita; no hace falta reserva.',
  tips: [
    'Combínalo con la Torre de Tokio y el parque Shiba: están a un minuto a pie y la entrada al templo es gratuita.',
    'El ángulo desde el parque Shiba es el más agradecido para fotografiar juntos el templo y la torre.',
    'Respeta a los jizō de piedra: son ofrendas familiares por hijos fallecidos y no deben tocarse.'
  ],
  access: 'Estación de Onarimon o Daimon (líneas Toei Mita y Asakusa) o Akabanebashi (línea Toei Ōedo), a pocos minutos a pie, junto a la Torre de Tokio.'
});
