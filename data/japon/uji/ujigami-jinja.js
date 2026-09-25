// Santuario Ujigami — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'ujigami-jinja', city: 'uji', name: 'Santuario Ujigami', category: 'Santuario',
  image: 'assets/japon-ujigami-jinja.jpg',
  lat: 34.8909, lon: 135.8095,
  lead: 'Uno de los santuarios sintoístas más antiguos conservados de Japón, junto al río Uji.',
  duration: '20–30 min',
  price: 'Entrada gratuita',
  stats: [
    {value:'1060', label:'año en que se dató la madera del honden por dendrocronología', icon:'tree'},
    {value:'1', label:'puesto como santuario sintoísta más antiguo conservado de Japón', icon:'trophy'},
    {value:'1994', label:'declarado Patrimonio de la Humanidad junto a Byōdō-in', icon:'pagoda'},
    {value:'3', label:'estructuras internas unidas en el estilo nagare-zukuri del honden', icon:'gate'}
  ],
  blocks: [
    {type:'lead', text:'A pocos minutos de Byōdō-in, al otro lado del río, el santuario Ujigami conserva el edificio de santuario sintoísta más antiguo que se conoce en pie en todo Japón, y forma parte de la misma declaración de Patrimonio de la Humanidad que el templo vecino.'},
    {type:'p', text:'Tradicionalmente vinculado a la protección de Byōdō-in y de la zona de Uji, el santuario está dedicado a divinidades relacionadas con la leyenda fundacional local, entre ellas el príncipe Uji no Waki-iratsuko, y su entorno boscoso y discreto ofrece un contraste tranquilo frente a la calle comercial de té que lleva hasta el templo principal.'},
    {type:'heading', text:'El honden más antiguo de Japón', icon:'tree'},
    {type:'stop', title:'Un edificio Heian confirmado por su madera', text:[
      'El salón principal (honden), de pequeñas dimensiones, se atribuía desde hacía tiempo al periodo Heian, pero fue un análisis dendrocronológico de su madera, realizado en 2004, el que permitió datarlo con precisión en torno al año 1060, confirmándolo como el santuario sintoísta más antiguo conservado del archipiélago.',
      'Está construido en el estilo nagare-zukuri, con tres pequeñas estructuras unidas bajo un mismo tejado curvo: la del centro, algo mayor, flanqueada por otras dos simétricas a los lados. El estilo, sobrio y de líneas sencillas, contrasta con la exuberancia del cercano Byōdō-in, y ayuda a entender cómo eran los santuarios sintoístas antes de la fuerte influencia budista posterior.'
    ]},
    {type:'stop', title:'El haiden y el manantial Kiri-no-shimizu', text:[
      'Delante del honden, el haiden (salón de oraciones) es una construcción más abierta, típica de la arquitectura residencial Heian, usada para las ceremonias y ofrendas. Junto al recinto brota el manantial Kiri-no-shimizu, uno de los pocos que sobreviven de los «siete manantiales de Uji» célebres desde la época Heian por la calidad de su agua, tradicionalmente asociada a la elaboración del té.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Su honden está considerado el edificio de santuario sintoísta más antiguo conservado en Japón, según dataciones dendrocronológicas de 2004.',
      'A pesar de su importancia histórica, recibe muchas menos visitas que Byōdō-in, por lo que suele ofrecer un rato de calma.',
      'El manantial Kiri-no-shimizu es uno de los últimos supervivientes de los siete manantiales que dieron fama al agua de Uji desde el periodo Heian.'
    ]}
  ],
  hours: 'Recinto de acceso libre, generalmente durante las horas de luz.',
  hoursSource: 'https://www.kyoto-uji-kankou.or.jp/en/',
  tickets: 'No se necesita entrada.',
  official: 'https://www.kyoto-uji-kankou.or.jp/en/',
  tips: [
    'Combínalo con la visita a Byōdō-in: está a solo unos minutos a pie, cruzando el río.',
    'Es un buen contrapunto tranquilo después de las zonas más concurridas del templo principal.'
  ],
  access: 'A pie desde Byōdō-in, cruzando el puente Uji-bashi hacia la orilla norte del río (unos 10 minutos).'
});
