// Nanzen-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'nanzen-ji', city: 'kioto', name: 'Nanzen-ji', category: 'Templo zen',
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
    {type:'stop', title:'Puerta San-mon', text:[
      'De 22 metros de alto y reconstruida en 1628 en honor a los soldados caídos en el asedio del castillo de Osaka, su segundo piso está abierto al público y ofrece vistas de la ciudad entre pinturas de la escuela Kanō.'
    ]},
    {type:'stop', title:'Salón Hōjō y su jardín zen', text:[
      'Declarado Tesoro Nacional, el Hōjō guarda un jardín seco karesansui conocido como «el jardín del tigre que brinca», obra del maestro Kobori Enshū, y puertas correderas fusuma con tigres pintados por Kanō Tan\'yū.'
    ]},
    {type:'stop', title:'Acueducto Suirokaku', text:[
      'Junto al Hōjō se alza el inesperado acueducto de ladrillo rojo, construido entre 1881 y 1890 para llevar agua del lago Biwa a Kioto: mide 93 metros de largo y 14 de alto, y hoy es uno de los rincones más fotografiados del templo pese a su contraste con la arquitectura tradicional que lo rodea.'
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
