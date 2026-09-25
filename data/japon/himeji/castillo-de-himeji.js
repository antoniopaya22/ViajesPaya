// Castillo de Himeji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'castillo-de-himeji', city: 'himeji', name: 'Castillo de Himeji', category: 'Castillo', reviewed: '2026-09',
  image: 'assets/himeji.jpg',
  lat: 34.8394, lon: 134.6939,
  lead: 'La «garza blanca» de Japón: un castillo original del periodo Edo, con seis siglos de historia, que nunca fue destruido.',
  duration: '3–4 horas (o más con Kōko-en)',
  price: '1000 ¥ adulto',
  stats: [
    {value:'1993', label:'declarado Patrimonio de la Humanidad', icon:'trophy'},
    {value:'1', label:'de los 12 castillos originales que quedan en Japón', icon:'tower'},
    {value:'997', label:'aspilleras (sama) repartidas por sus muros', icon:'eye'},
    {value:'6', label:'plantas de la torre principal (una subterránea)', icon:'ruler'}
  ],
  blocks: [
    {type:'lead', text:'El castillo de Himeji o Himeji-jō (姫路城), apodado «castillo de la garza blanca» (Hakuro-jō o Shirasagi-jō) por el blanco de su yeso exterior —ignífugo además de decorativo—, es Patrimonio de la Humanidad por la UNESCO desde 1993 y Tesoro Nacional. Es uno de los tres castillos más célebres de Japón, junto a Matsumoto y Kumamoto, y uno de los doce castillos originales que aún se conservan en el país: el edificio que se visita hoy nunca fue destruido por incendio, terremoto o guerra, ni siquiera cuando varias bombas cayeron sobre él durante la Guerra del Pacífico sin llegar a explotar.'},
    {type:'p', text:'Su origen está en 1333, cuando el señor del distrito de Harima construyó un primer fuerte en el lugar. Toyotomi Hideyoshi levantó ahí un castillo de tres pisos en 1581, y en 1601 Ikeda Terumasa —yerno del shōgun Tokugawa Ieyasu— lo reconstruyó con la torre de cinco pisos que se conserva hoy. Fue sede del gobierno feudal durante el periodo Edo y cuartel del ejército imperial en el Meiji, época en la que estuvo a punto de ser demolido. Es del tipo hirayama-jiro, levantado sobre una colina entre llanuras.'},
    {type:'timeline', title:'Ocho siglos de historia en el mismo cerro', items:[
      {label:'Fuerte del señor de Harima', year:1333, yearLabel:'1333'},
      {label:'Castillo de 3 pisos de Toyotomi Hideyoshi', year:1581, yearLabel:'1581'},
      {label:'Reconstrucción de Ikeda Terumasa: torre de 5 pisos', year:1601, yearLabel:'1601'},
      {label:'Restauración Heisei: el castillo reabre el 27 de marzo', year:2015, yearLabel:'2009–2015'}
    ]},
    {type:'heading', text:'Un laberinto pensado para confundir al invasor', icon:'gate'},
    {type:'p', text:'La fama de Himeji no se debe solo a su torre principal: todo el recinto es un diseño defensivo con puertas, pasadizos y muros pensados para desorientar a quien atacara el castillo. Hay 997 aspilleras o sama de formas distintas —rectangulares para arcos; redondas, triangulares y cuadradas para armas de fuego— repartidas según la postura de tiro: tachi-zama para disparar de pie, i-sama de rodillas y ne-sama tumbado. Las ventanas-celosía katōmado, con forma de campana, decoran las dos torres secundarias con laca negra y pan de oro. En los tejados, las tejas onigawara («tejas del demonio») llevan el emblema de la familia del castillo en vez de la tradicional máscara de demonio —se han identificado hasta ocho blasones distintos— y los amuletos shachihoko, con cabeza de tigre y cuerpo de carpa, se colocan tradicionalmente para atraer la lluvia y proteger de incendios.'},
    {type:'table', title:'El recorrido, puerta a puerta', columns:['Puerta / tramo','Qué encontrar'], rows:[
      ['Puente Sakuramon y puerta Otemon','Reconstrucciones modernas (2007 y 1938); entrada principal al recinto'],
      ['Explanada Sannomaru','Mejor mirador exterior; piedra con el nombre del castillo y el sello de la UNESCO'],
      ['Puerta Hishi-no-mon','La mayor puerta que se conserva, con motivos del periodo Azuchi-Momoyama'],
      ['Foso Sangoku-bori','Estanque Mikuni, uno de los puntos fotográficos clásicos'],
      ['Pozo Ikiku','8,8 m de profundidad; sobreviven 11 de los 33 pozos originales'],
      ['Puertas I-no-mon, Ro-no-mon, Ha-no-mon','Tres puertas sucesivas, cada vez más difíciles de forzar; bloqueables por dentro con piedras'],
      ['Puerta Ni-no-mon','Una de sus tejas lleva una cruz, posible vínculo cristiano con el señor Kuroda Kanbei'],
      ['Muro Abura-kabe','Restos de la muralla techada original de Hashiba Hideyoshi'],
      ['Tenshu (torre principal)','Final del recorrido: unos 30 m de alto y 6 plantas, una de ellas subterránea']
    ]},
    {type:'heading', text:'La torre principal, planta a planta', icon:'tower'},
    {type:'stop', title:'Subida descalzo hasta el tenshu', text:[
      'Antes de entrar en la torre principal hay que descalzarse, así que conviene llevar calcetines. Con unos 30 metros de altura y seis plantas —una de ellas subterránea—, el tenshu parece tener cinco pisos vistos desde fuera pero esconde uno más por dentro.'
    ]},
    {type:'stop', title:'Segunda planta: armas y disfraces', text:[
      'Aquí se exhiben réplicas de los amuletos shachihoko de los tejados y hay disfraces de samurái para probarse. La sala Hafu-no-ma, bajo uno de los grandes gabletes del tejado, servía de almacén de armas.'
    ]},
    {type:'stop', title:'Tercera y cuarta planta: objetos de Hideyoshi', text:[
      'Estas plantas conservan objetos y referencias a Toyotomi Hideyoshi, el señor que construyó el primer castillo de tres pisos en este mismo lugar en 1581.'
    ]},
    {type:'stop', title:'Quinta planta: el asedio de Osaka y un pilar torcido', text:[
      'Dedicada al asedio del castillo de Osaka de 1615, esta planta guarda también un detalle estructural curioso: dos grandes pilares sostienen el edificio, y el oriental empezó a torcerse ya en el periodo Edo temprano, poco después de construirse la torre.'
    ]},
    {type:'stop', title:'Séptima planta: historia del castillo', text:[
      'Un repaso a la historia completa de Himeji-jō, desde el fuerte de 1333 hasta la restauración Heisei del siglo XXI.'
    ]},
    {type:'stop', title:'Octava planta: mirador y santuario Osakabe-myōjin', text:[
      'En lo más alto, un mirador con vistas de toda la ciudad y, en la última planta, un pequeño santuario dedicado a Osakabe-myōjin, deidad protectora del castillo. La leyenda local cuenta que aquí fue donde Miyamoto Musashi, el legendario espadachín, acabó con un yōkai que atormentaba la fortaleza.'
    ]},
    {type:'heading', text:'Después de la torre: leyendas y últimos rincones', icon:'lantern'},
    {type:'stop', title:'Galería Ro-no-Watari-Yagura y el sistema sogamae', text:[
      'De bajada, esta galería de conexión guarda una pequeña exposición sobre las tejas onigawara y sobre el sistema defensivo sogamae, que organizaba la ciudad en tres anillos concéntricos: el soto guruwa exterior para mercaderes, el naka guruwa intermedio para samuráis y el uchi guruwa interior para la población.'
    ]},
    {type:'stop', title:'Pozo Okiku, la leyenda de los platos', text:[
      'Muy cerca, el pozo Okiku está ligado a la leyenda de fantasmas Banshū Sarayashiki: la sirvienta Okiku fue acusada falsamente de robar un plato de una vajilla y asesinada por ello. Se dice que todavía puede oírse su voz contando platos, uno a uno, desde el fondo del pozo.'
    ]},
    {type:'stop', title:'Torre Ri-no-ichi Watari Yagura y los muros en abanico', text:[
      'Aquí se conservan tres ornamentos shachihoko de generaciones distintas —Meiji (1910), Shōwa y Heisei (2009-2015)— uno junto a otro. Los muros de piedra de esta zona son «en abanico»: cuanto más alto, más verticales se vuelven, precisamente para dificultar que se puedan escalar. Un pequeño jardín cercano conserva piedras de cimentación originales rescatadas en las obras del periodo Shōwa.'
    ]},
    {type:'heading', text:'La princesa Sen y el paseo Senhime no Komichi', icon:'blossom'},
    {type:'stop', title:'Una vida marcada por dos castillos', text:[
      'El paseo Senhime no Komichi recuerda a la princesa Sen (Senhime), hija del segundo shōgun Tokugawa y nieta de Ieyasu. Casada a los siete años con Toyotomi Hideyori, vivió en el castillo de Osaka hasta que su propio abuelo lo atacó en 1615 y su marido se hizo seppuku. Rescatada del asedio, se volvió a casar a los veinte años con Honda Tadatoki, hijo del señor de Himeji, y vivió aquí diez años felices hasta que su hijo murió con tres años y su marido con treinta y uno. Volvió a Edo como monja budista y murió a los setenta.'
    ]},
    {type:'cards', title:'Dos leyendas del castillo', items:[
      {icon:'droplet', title:'El pozo Okiku', text:'Banshū Sarayashiki: la sirvienta Okiku, acusada en falso de robar un plato, fue asesinada y arrojada al pozo. Aún se dice que se la oye contar platos desde el fondo.'},
      {icon:'flame', title:'El yōkai de la torre', text:'La tradición local sitúa en la última planta del tenshu el lugar donde el espadachín Miyamoto Musashi habría acabado con un espíritu maligno que atormentaba el castillo.'}
    ]},
    {type:'heading', text:'Jardines Kōko-en, al pie del castillo', icon:'tree'},
    {type:'stop', title:'Nueve jardines de estilo Edo', text:[
      'Justo al lado del castillo, los jardines Kōko-en se construyeron en 1992 sobre el terreno de la antigua residencia samurái Nishi-Oyashiki. Sus 3,5 hectáreas reúnen nueve jardines tradicionales distintos, todos del estilo chisen-kaiyu o «jardín de paseo alrededor de un estanque», con técnicas de jardinería del periodo Edo. Es la parada natural después de la torre, con vistas del castillo desde varios rincones (ficha propia: Jardín Kōko-en).'
    ]},
    {type:'heading', text:'Puntos fotográficos por la ciudad', icon:'eye'},
    {type:'cards', title:'Dónde conseguir la mejor foto', items:[
      {icon:'ruler', title:'Avenida desde la estación', text:'La gran avenida principal que sale de la estación de Himeji tiene el castillo al fondo durante todo el trayecto a pie.'},
      {icon:'tower', title:'Parque Shiromidai', text:'Una plataforma elevada permite fotografiar el castillo enmarcado entre dos ornamentos shachihoko.'},
      {icon:'rock', title:'Museo de Arte de Himeji', text:'Su patio combina el castillo al fondo con el ladrillo rojo de este edificio de la era Meiji, un contraste muy fotografiado.'},
      {icon:'teacup', title:'Museo de Historia de la Prefectura de Hyōgo', text:'Desde su cafetería hay vistas del castillo, y en el jardín unas piedras señalan el punto exacto donde el castillo se refleja en el cristal de la cafetería.'},
      {icon:'blossom', title:'Parque de los cerezos', text:'Detrás del castillo, una zona de cerezos (ideal en hanami) con espacio infantil junto al recinto.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Hay una app de realidad aumentada, Himeji-jo Daikai, pensada para imaginar cómo era la vida en el castillo, aunque solo está disponible en las tiendas de aplicaciones japonesas.',
      'De los 33 pozos que tuvo el castillo en origen, solo sobreviven 11; el más conocido, el pozo Ikiku, tiene 8,8 metros de profundidad.',
      'Antes de la restauración Heisei (2009-2015), el interior del tenshu mostraba recreaciones de la vida cotidiana en el periodo Edo y armaduras samurái; hoy esas piezas se exponen en la zona Nishi-no-Maru, al oeste del complejo.',
      'Una de las tejas de la puerta Ni-no-mon lleva grabada una cruz, lo que ha alimentado la teoría de un vínculo cristiano con el señor de la zona, Kuroda Kanbei.'
    ]}
  ],
  hours: 'Todos los días de 9:00 a 16:00 (hasta las 17:00 de abril a agosto); cierra el 29 y 30 de diciembre. Último acceso una hora antes del cierre.',
  hoursSource: 'https://www.himejicastle.jp/en/',
  tickets: 'Entrada 1000 ¥; el billete combinado con los jardines Kōko-en añade solo 50 ¥ más. Conviene comprarlo en la propia taquilla de los jardines, donde suele haber menos cola que en el castillo.',
  official: 'https://www.himejicastle.jp/en/',
  tips: [
    'En el interior de la torre principal se camina descalzo: lleva calcetines y una bolsa para guardar el calzado.',
    'Calcula un mínimo de 4 horas para recorrer el castillo completo y los jardines Kōko-en.',
    'Compra el billete combinado con Kōko-en en la taquilla de los jardines: hay menos cola que en la del castillo.',
    'Para fotos distintas del conjunto, prueba el parque Shiromidai, el patio del Museo de Arte de Himeji o la cafetería del Museo de Historia de la Prefectura de Hyōgo, con el castillo reflejado en su cristalera.'
  ],
  access: 'A pie desde la estación de Himeji: la gran avenida principal conduce directa al castillo en unos 15-20 minutos, con la torre visible desde la misma plaza de la estación.'
});
