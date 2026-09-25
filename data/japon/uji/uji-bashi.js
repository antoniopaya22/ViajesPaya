// Puente Uji-bashi — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'uji-bashi', city: 'uji', name: 'Puente Uji-bashi', category: 'Puente histórico',
  image: 'assets/japon-uji-bashi.jpg',
  lat: 34.8928, lon: 135.806,
  lead: 'Uno de los tres puentes más antiguos de Japón, escenario de batallas y de los capítulos finales de «Genji».',
  duration: '15–20 min',
  price: 'Acceso gratuito',
  stats: [
    {value:'646', label:'año de construcción original, según la piedra de Hōjō-in', icon:'gate'},
    {value:'3', label:'puesto entre los puentes más antiguos de Japón, junto a Seta y Yamazaki', icon:'trophy'},
    {value:'1996', label:'año de la última reconstrucción del puente actual', icon:'wood'},
    {value:'10', label:'capítulos finales de «Genji» ambientados en Uji, junto a este puente', icon:'scroll'}
  ],
  blocks: [
    {type:'lead', text:'El puente que cruza el río Uji frente a la estación es, según la tradición, uno de los tres puentes más antiguos de Japón: se dice que fue erigido en el año 646 por el monje Dōtō, del templo Gangō-ji de Nara. Desde entonces ha sido escenario de batallas, se ha quemado y reconstruido en numerosas ocasiones, y ha aparecido en la literatura, la pintura y el arte japonés durante más de mil años.'},
    {type:'p', text:'Tras su construcción, Uji se convirtió en un punto estratégico de las rutas de transporte fluvial y terrestre entre la antigua capital de Nara y Kioto, lo que lo llevó a ser escenario de varios enfrentamientos armados, entre ellos la batalla del puente de Uji de 1180, uno de los primeros combates de la guerra Genpei.'},
    {type:'heading', text:'Un puente con una plataforma para el té', icon:'droplet'},
    {type:'stop', title:'San-no-ma, la plataforma sobre el río', text:[
      'A media altura, en el lado aguas arriba, sobresale una pequeña plataforma cuadrada conocida como san-no-ma. La tradición cuenta que el señor de la guerra Toyotomi Hideyoshi mandaba sacar agua desde este punto para sus ceremonias del té, por considerarla especialmente pura. Hoy, el festival anual del té de Uji, en octubre, recrea ese mismo gesto, y la plataforma sigue siendo uno de los rincones más fotografiados del puente.'
    ]},
    {type:'stop', title:'El puente actual', text:[
      'La estructura que se cruza hoy es una reconstrucción de marzo de 1996 en hormigón y acero revestidos de madera, que mantiene las proporciones y el aspecto del puente tradicional, con remates ornamentales en la barandilla. Forma parte del itinerario de Patrimonio Japón (Japan Heritage) dedicado a la cultura del té de Uji.'
    ]},
    {type:'stop', title:'El puente en «La historia de Genji»', text:[
      'Los diez capítulos finales de «La historia de Genji» (Genji Monogatari), escritos por Murasaki Shikibu a principios del siglo XI, se ambientan en Uji y se conocen como los «capítulos de Uji». En ellos, la joven Ukifune, atrapada entre dos pretendientes, intenta poner fin a su vida arrojándose al río Uji cerca de este puente; su historia es una de las razones por las que la zona sigue asociada a la novela más de mil años después.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Una inscripción en el templo Hōjō-in, junto al puente, atribuye su primera construcción al monje Dōtō en el año 646.',
      'La plataforma san-no-ma se sigue usando simbólicamente cada octubre para sacar agua durante el festival del té de Uji.',
      'El puente aparece en los capítulos finales de «La historia de Genji», donde la heroína Ukifune intenta arrojarse al río.'
    ]}
  ],
  hours: 'Puente público de acceso libre en todo momento.',
  hoursSource: 'https://www.kyototourism.org/en/sightseeing/20910/',
  tickets: 'No se necesita entrada.',
  official: 'https://www.kyototourism.org/en/sightseeing/20910/',
  tips: [
    'Para la mejor vista de la plataforma san-no-ma, mira hacia el puente desde la orilla, río arriba.',
    'Combina la visita con un paseo por Sawarabi-no-michi, el camino junto al río que lleva hacia Ujigami-jinja y el museo de Genji.'
  ],
  access: 'Justo a la salida de la estación de Uji (línea Keihan Uji); unos 10 minutos a pie desde la estación JR Uji (línea JR Nara).'
});
