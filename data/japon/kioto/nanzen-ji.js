// Nanzen-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'nanzen-ji', city: 'kioto', zone: 'higashiyama-norte', name: 'Nanzen-ji', category: 'Templo zen', reviewed: '2026-09',
  image: 'assets/japon-nanzen-ji.jpg',
  lat: 35.0114, lon: 135.793,
  lead: 'La gran puerta zen más alta de Kioto y un acueducto de ladrillo del periodo Meiji entre los arces.',
  duration: '1–2 horas',
  price: 'Recinto exterior gratuito; San-mon y Hōjō 500 ¥ cada uno',
  stats: [
    {value:'1291', label:'fundación, sobre el palacio de verano imperial', icon:'pagoda'},
    {value:'22 m', label:'altura de la puerta San-mon', icon:'gate'},
    {value:'93 m', label:'longitud del acueducto Suirokaku', icon:'droplet'}
  ],
  blocks: [
    {type:'lead', text:'Nanzen-ji nació en 1291 cuando el emperador Kameyama donó parte de su palacio de verano al budismo zen, tras encargar a un monje que ahuyentara los fenómenos paranormales que allí ocurrían. Aunque no forma parte de los cinco grandes templos zen de Kioto (Kyoto Gozan), el budismo zen sitúa a Nanzen-ji por encima de todos ellos, en una categoría propia.'},
    {type:'stop', title:'Puerta Chokushi-mon', text:[
      'Antes de llegar al San-mon se pasa por la puerta imperial Chokushi-mon, de acceso reservado antiguamente al emperador. Procede del Palacio Imperial de Kioto —era la antigua puerta Hino-mon— y se trasladó aquí en 1642.'
    ]},
    {type:'stop', title:'Puerta San-mon', text:[
      'De 22 metros de alto y reconstruida en 1628 en honor a los soldados caídos en el asedio del castillo de Osaka, su segundo piso está abierto al público y ofrece vistas de la ciudad entre pinturas de la escuela Kanō.',
      'Conocida también como la puerta Tenka Ryū-mon («la mayor puerta del dragón»), está considerada una de las tres grandes puertas de Kioto, junto con la del templo Chion-in y la puerta Goedomori de Higashi Hongan-ji, y fue escenario de la obra kabuki «Sanmon Gosan no Kiri». A su derecha se alza una lámpara de piedra de casi 6 metros tallada en 1631 por el samurái Sakuma Katsuyuki, que algunos consideran la más grande de todo el este asiático.'
    ]},
    {type:'stop', title:'Salón Hattō', text:[
      'El salón de lectura Hattō, donde se celebran los actos oficiales del templo, se ha reconstruido varias veces tras sucesivos incendios; el edificio actual data de 1909. En su interior hay tres estatuas de Buda sentado sobre un león y un elefante, y el techo conserva pinturas tradicionales, aunque el salón no está abierto al público.'
    ]},
    {type:'stop', title:'Salón Hōjō y su jardín zen', text:[
      'Declarado Tesoro Nacional, el Hōjō guarda un jardín seco karesansui conocido como «el jardín del tigre que brinca», obra del maestro Kobori Enshū, y puertas correderas fusuma con tigres pintados por Kanō Tan\'yū.'
    ]},
    {type:'stop', title:'Honbō y el jardín Ogata Jō', text:[
      'La entrada al Hōjō se realiza por el Honbō, un enorme salón de madera que alberga la antigua cocina del templo, sus oficinas y una pequeña sala para la ceremonia del té junto a una cascada, donde es posible sentarse a tomar un té matcha con un dulce tradicional. Junto al jardín seco principal está también el jardín Ogata Jō, un diseño zen mucho más moderno (1966) conocido como «jardín Yoshinshi», con una roca en forma de corazón que se dice evoca un corazón roto.'
    ]},
    {type:'stop', title:'Acueducto Suirokaku', text:[
      'Junto al Hōjō se alza el inesperado acueducto de ladrillo rojo, construido entre 1881 y 1890 para llevar agua del lago Biwa a Kioto: mide 93 metros de largo y 14 de alto, y hoy es uno de los rincones más fotografiados del templo pese a su contraste con la arquitectura tradicional que lo rodea.',
      'El sistema de canales tenía un doble objetivo: permitir la navegación de pequeñas embarcaciones entre el lago Biwa y la bahía de Osaka, y proveer de agua para riego, consumo y prevención de incendios en Kioto, con capacidad para unas dos toneladas de agua por segundo. En 1891 alimentó la primera central hidroeléctrica de Japón, en la cercana cuesta Keage; un segundo canal se completó en 1912 para reforzar el suministro.'
    ]},
    {type:'table', title:'Subtemplos de pago dentro del recinto', columns:['Subtemplo','Horario','Precio'], rows:[
      ['Nanzen-in','8:40–17:00 (16:30 dic.–feb.); cerrado del 28 al 31 de diciembre','300 ¥'],
      ['Konchi-in','8:30–17:00 (16:30 dic.–feb.)','400 ¥'],
      ['Tenju-an','9:00–17:00 (16:30 en invierno)','500 ¥ (+100 ¥ en iluminaciones de otoño)']
    ]}
  ],
  hours: 'El recinto exterior es de acceso libre; la puerta San-mon y el salón Hōjō abren de 8:40 a 17:00 (hasta las 16:30 de diciembre a febrero).',
  hoursSource: 'https://www.nanzenji.or.jp/en/',
  tickets: 'Cada zona de pago (San-mon, Hōjō, subtemplos) vende su propia entrada en el acceso.',
  official: 'https://www.nanzenji.or.jp/en/',
  tips: [
    'Sube al segundo piso de la puerta San-mon para las vistas, y no te pierdas el acueducto justo detrás del Hōjō.',
    'La zona es especialmente bonita en otoño, con los arces que rodean el camino hacia el salón Hatto.'
  ],
  access: 'A pie desde la estación de Keage (línea Tōzai de metro), bajando por la cuesta Keage; también conecta con el extremo norte del Camino del Filósofo.'
});
