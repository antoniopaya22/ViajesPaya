// Santuario Yasaka — ficha con estructura de bloques.
addJapanPlace({
  slug: 'yasaka-jinja', city: 'kioto', zone: 'higashiyama-sur', name: 'Santuario Yasaka', category: 'Santuario',
  image: 'assets/japon-yasaka-jinja.jpg',
  lat: 35.0037, lon: 135.7786,
  lead: 'El santuario del siglo VII que da origen al Gion Matsuri, en el límite entre Gion y el parque Maruyama.',
  duration: '45–75 min',
  price: 'Acceso gratuito',
  stats: [
    {value:'869', label:'año de origen del Gion Matsuri', icon:'gate'},
    {value:'1654', label:'reconstrucción del Honden actual', icon:'pagoda'},
    {value:'300', label:'farolillos alrededor del Buden', icon:'lantern'}
  ],
  blocks: [
    {type:'lead', text:'Antes llamado santuario de Gion, Yasaka Jinja es un santuario sintoísta del siglo VII situado al final de la calle Shijō, tan querido por las geishas y maikos del barrio que lo llaman cariñosamente «Gion-san». Según la leyenda se construyó sobre un lago subterráneo para que el dragón de aguas azules del este recibiera agua, y en el año 869 dio origen al Gion Matsuri, el festival más importante de Kioto.'},
    {type:'heading', text:'Entrada y primeros santuarios', icon:'gate'},
    {type:'stop', title:'Puerta Nishirōmon', text:[
      'La entrada principal, pintada de bermellón en 1497, es de estilo budista y no lleva el torii sintoísta habitual: una prueba de que, antes de 1868, ambas religiones convivían sin problemas en el mismo recinto. A ambos lados montan guardia dos zuijin ataviados como oficiales de la corte Heian, además de cuatro estatuas komainu.',
      'A la izquierda de la puerta está el Chōzuya, la fuente de abluciones donde se puede hacer el ritual del temizu para purificarse antes de entrar al santuario.'
    ]},
    {type:'stop', title:'Los primeros yashiro', text:[
      'Subiendo por el camino en cuesta aparecen los primeros pequeños santuarios o yashiro: el Ekijin-sha, contra las epidemias (origen del propio Gion Matsuri, que nació para combatir una); el Ōta-sha, dedicado a la fuerza y a las artes escénicas; el Ebisu-sha, del dios de los pescadores; y el Ōkuni-sha, dedicado al amor, fácil de reconocer por sus tablillas ema en forma de corazón y la estatua de Ōkuninushi rescatando a una liebre.'
    ]},
    {type:'heading', text:'El patio central', icon:'pagoda'},
    {type:'stop', title:'Buden, el escenario de danza', text:[
      'Rodeado de unos 300 farolillos donados por comercios de la ciudad para asegurarse buena suerte en sus negocios, el Buden acoge danzas gratuitas durante el Setsubun y ceremonias con los mikoshi del Gion Matsuri. También es habitual ver aquí bodas sintoístas.'
    ]},
    {type:'stop', title:'Honden, el salón principal', text:[
      'Con 15 metros de alto y tejado de ciprés hinoki, el Honden es una reconstrucción de 1654. Su estilo, llamado gion-zukuri, funde en un único tejado el salón de plegarias y el salón principal, algo exclusivo de este santuario. La leyenda sitúa bajo el edificio un estanque sin fondo habitado por un dragón azul, guardián de Kioto.',
      'Merece la pena fijarse en las tallas del travesaño superior, donde aparecen varios baku, seres sobrenaturales del folclore japonés que devoran sueños y pesadillas: un tigre blanco, varios dragones y hasta un elefante.'
    ]},
    {type:'heading', text:'Alrededor del santuario', icon:'footprints'},
    {type:'stop', title:'Zona este: Tamamitsu-sha y el agua de la belleza', text:[
      'Al este del Honden, el santuario Tamamitsu-sha está dedicado a Inari, y muy cerca brota el goshin-sui, un pozo de agua de manantial. Junto a la fuente está el Daijingu-sha, vinculado al gran santuario de Ise —el más sagrado de Japón—, con pequeños santuarios interiores dedicados a las deidades Amaterasu y Toyouke.',
      'El santuario Utsukushi-gozensha, consagrado a tres diosas de la belleza, es célebre por su Biyōsui o «agua de la belleza», que muchas maiko del barrio usan para mojarse la cara mientras rezan.',
      'Al lado del Daijingu-sha está el santuario Akuōji-sha, dedicado a Susanoo, deidad sintoísta del mar y las tormentas. Justo al lado se levanta la lámpara de piedra Tadamori Tōrō, dedicada al gobernador del siglo XII Taira no Tadamori: según la leyenda, entrar armado con una katana en el antiguo santuario de Gion se consideró una ofensa, pero el poder del clan Heike hizo que el asunto quedara en nada, y la lámpara quedó como recuerdo de esa fuerza.'
    ]},
    {type:'stop', title:'Zona norte: Hamono y los santuarios de los artesanos', text:[
      'Cerca de la puerta Higashimon, el santuario Hamono está dedicado a los forjadores de cuchillos y espadas: fue aquí donde los artesanos de Kioto desarrollaron sus técnicas de cuchillería. Junto a él se agrupan otros pequeños santuarios como el Hie-sha (deidad de las montañas), el Go-sha (medicina), el Sorei-sha (espíritus de antiguos sacerdotes del santuario) o el Itsukushima-sha, vinculado al santuario de Miyajima. Pasada la puerta Kitamon está el Emasha, el almacén donde se guardan los complementos y decoraciones de las carrozas del Gion Matsuri.'
    ]},
    {type:'stop', title:'De vuelta al patio principal', text:[
      'Camino de regreso al Honden aparecen el Shinme-sha, «santuario del caballo divino», con dos estatuas de caballos a tamaño real (el caballo simboliza tanto una ofrenda como un medio de transporte para la deidad); el Jū-sha, donde se veneran varias deidades entre ellas Izanagi e Izanami, creadores de las islas de Japón; y el Ōtoshi-sha, también llamado Gion Komiya, de gran importancia durante el Setsubun.'
    ]},
    {type:'stop', title:'Salida por Minamiromon', text:[
      'La salida habitual es la puerta sur Minamiromon, bajo un gran torii de piedra —mucho más propio de la arquitectura sintoísta que la entrada principal—. Justo al lado se encuentra el Nobutai, el escenario de teatro Nō del santuario. Desde aquí se puede seguir paseando por Gion o subir directamente al parque Maruyama; la puerta este, Higashimon, es la conexión más directa con el parque.'
    ]}
  ],
  hours: 'Recinto exterior accesible las 24 horas; oficinas y algunos edificios con horario propio.',
  hoursSource: 'https://www.yasaka-jinja.or.jp/en/',
  tickets: 'No hace falta entrada para el recinto principal.',
  official: 'https://www.yasaka-jinja.or.jp/en/',
  tips: [
    'Entra por la puerta Higashimon si quieres continuar directamente hacia el parque Maruyama.',
    'Ve temprano por la mañana para evitar las colas frente al Honden.',
    'Combina la visita con el cercano barrio de Gion y el parque Maruyama en el mismo paseo.'
  ],
  access: 'Está al final de la calle Shijō, a pie desde la estación de Gion-Shijō (línea Keihan) o desde el barrio de Gion.'
});
