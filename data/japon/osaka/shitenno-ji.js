// Shitennō-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'shitenno-ji', city: 'osaka', zone: 'tennoji', name: 'Shitennō-ji', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-shitenno-ji.jpg',
  lat: 34.6540, lon: 135.5164,
  lead: 'Uno de los templos budistas más antiguos de Japón, fundado en 592 por el príncipe Shōtoku tras vencer a un clan opuesto al budismo.',
  duration: '1–1,5 horas',
  price: 'Acceso a la plaza gratuito; entrada de pago para el garan, el museo del tesoro y el jardín japonés',
  stats: [
    {value:'592', label:'año de fundación del templo', icon:'scroll'},
    {value:'1', label:'primer templo budista administrado por el estado japonés', icon:'trophy'},
    {value:'1294', label:'año en que el torii de madera se sustituyó por uno de piedra', icon:'gate'},
    {value:'22 abr', label:'danzas bugaku anuales en el escenario de piedra Ishibutai', icon:'lantern'}
  ],
  blocks: [
    {type:'lead', text:'Fundado en 592 por el príncipe Shōtoku para honrar a los Shitennō, los cuatro reyes celestiales protectores del budismo, Shitennō-ji fue el primer templo budista administrado y apoyado oficialmente por el estado japonés y sigue siendo un centro religioso activo en pleno sur de Osaka.'},
    {type:'p', text:'La tradición cuenta que Shōtoku prometió construir el templo si conseguía derrotar al clan Monobe, opuesto a la introducción del budismo en Japón; tras la victoria, cumplió su promesa y levantó el templo sobre terrenos de sus propios enemigos, oficializando así el budismo como religión de estado. La mayoría de los edificios actuales son reconstrucciones de los años sesenta —tras la destrucción del recinto en los bombardeos de la Segunda Guerra Mundial— que respetan fielmente el trazado y el estilo original.'},
    {type:'heading', text:'Torii de piedra y gran puerta del oeste', icon:'gate'},
    {type:'stop', title:'El torii de piedra y la piedra que responde', text:[
      'El acceso oeste conserva un torii que originalmente era de madera y se sustituyó por uno de piedra en 1294, con una inscripción budista en la placa superior: un ejemplo del sincretismo religioso habitual en templos japoneses. En uno de sus pilares hay un curioso agujero cuadrado, el «pon-pon ishi»: al tocarlo se oye un eco, y según la creencia popular son las voces de los ancestros hablando desde el paraíso.'
    ]},
    {type:'stop', title:'Gokuraku-mon, la gran puerta del oeste', text:[
      'Esta gran puerta es el acceso oficial al garan, el complejo interior amurallado del templo. Justo antes de cruzarla, a la derecha, espera un temizu donde purificarse las manos según la costumbre.'
    ]},
    {type:'heading', text:'El garan, el corazón del templo', icon:'pagoda'},
    {type:'stop', title:'La pagoda de cinco pisos', text:[
      'Según la tradición, el propio príncipe Shōtoku colocó reliquias de Buda y mechones de su propio pelo en el pilar central de la pagoda; hoy esas reliquias se han perdido, pero se conserva algo poco habitual en los templos japoneses: se permite entrar al interior de la pagoda.'
    ]},
    {type:'stop', title:'Kondō, Kōdō y la puerta Niōmon', text:[
      'El salón principal, Kondō, guarda una imagen de Kannon Nyorai consagrando al príncipe Shōtoku, protegida por los cuatro reyes celestiales y con murales que narran leyendas budistas en sus paredes. El salón de lecturas, Kōdō, se usa para la enseñanza de las escrituras y reúne varias estatuas budistas. En el extremo sur del garan, la puerta Niōmon guarda a los guardianes Niō, visibles solo desde fuera del recinto amurallado.'
    ]},
    {type:'heading', text:'Alrededor del garan', icon:'droplet'},
    {type:'stop', title:'Salón Kameido y el pozo del autorretrato', text:[
      'El agua sagrada que fluye desde el salón de lecturas alimenta el salón Kameido, reconstruido en 1955 tras la destrucción del edificio original en los bombardeos. Guarda la imagen de un palillo que, según la leyenda, usó el propio príncipe Shōtoku para dibujar su autorretrato reflejado en un pozo.'
    ]},
    {type:'stop', title:'Rokujiraisan-dō y el escenario de piedra Ishibutai', text:[
      'En este salón se reza seis veces al día ante las imágenes de Yakushi Nyorai, el Buda de la medicina, y los cuatro reyes celestiales. Delante, sobre el estanque de las tortugas, el escenario de piedra Ishibutai acoge cada 22 de abril danzas bugaku en honor al príncipe Shōtoku.'
    ]},
    {type:'stop', title:'Shoryō-in y las puertas del tigre y el gato', text:[
      'Dedicado al propio príncipe Shōtoku, con estatuas suyas junto a los cuatro reyes celestiales, este salón conserva dos tallas de madera muy particulares: la puerta del tigre (Tora-no-mon), que protege a Shōtoku de los malos espíritus, y la puerta del gato (Neko-no-mon), que protege los sutras de los ratones. La leyenda dice que el gato tallado maúlla tres veces en Año Nuevo, comunicándose con otra talla felina del santuario Tōshōgū de Nikkō.'
    ]},
    {type:'stop', title:'Los dos campanarios', text:[
      'El campanario del norte, apodado «amarillo», es popular en los equinoccios: se dice que su sonido llega hasta el paraíso budista y calma las almas. El campanario del sur, Geishōrō, se usaba antiguamente para marcar las horas y hoy suena para despedir el año en Nochevieja.'
    ]},
    {type:'heading', text:'El jardín Gokuraku-Jōdo', icon:'blossom'},
    {type:'stop', title:'Un paraíso budista en miniatura', text:[
      'Este jardín recrea el paraíso budista con dos ríos y dos estanques, y es bonito en cualquier época del año: cerezos en primavera, momiji en otoño y flores de loto en verano. Un pozo del dragón refleja la pintura del mismo animal pintada en el techo, y el recinto reúne además estatuas de Kūkai (Kōbō Daishi) y el salón Ganzan Daishi-dō, dedicado al círculo de la sabiduría.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El torii de piedra del acceso oeste, de 1294, es un elemento sintoísta a la entrada de un templo budista: una muestra más del sincretismo religioso japonés.',
      'A diferencia de la mayoría de pagodas japonesas, en Shitennō-ji se permite subir al interior de la pagoda de cinco pisos.',
      'La talla del gato de Shoryō-in maúlla, según la leyenda, tres veces cada Año Nuevo comunicándose con otra talla gemela en Nikkō, a cientos de kilómetros.'
    ]}
  ],
  hours: '8:30–16:30 (hasta las 16:00 de octubre a marzo); cada día 21 de mes abre media hora antes y cierra media hora más tarde.',
  hoursSource: 'https://www.shitennoji.or.jp/',
  tickets: 'Las entradas se compran en los accesos a cada zona de pago del recinto.',
  official: 'https://www.shitennoji.or.jp/',
  tips: [
    'La gran plaza exterior es de acceso libre a cualquier hora, así que se puede visitar de noche aunque el garan esté cerrado.',
    'Si te interesa la escultura budista, no te pierdas los guardianes Niō de la puerta sur del garan.',
    'Combina la visita con el cercano templo Isshin-ji: están a pocos minutos a pie el uno del otro.'
  ],
  access: 'A pie desde la estación de Shitennoji-mae Yuhigaoka (metro Tanimachi) o desde Tennoji (varias líneas), unos 10 minutos.'
});
