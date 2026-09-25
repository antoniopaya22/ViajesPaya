// Ginkaku-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'ginkaku-ji', city: 'kioto', name: 'Ginkaku-ji', category: 'Templo y jardín',
  image: 'assets/japon-ginkaku-ji.jpg',
  lat: 35.027, lon: 135.7982,
  lead: 'El Pabellón de Plata que nunca llegó a recubrirse de plata, con un jardín de arena que imita el mar.',
  duration: '1–1,5 horas',
  price: '500 ¥ adulto',
  stats: [
    {value:'1474', label:'año de construcción, como retiro del shōgun', icon:'🏯'},
    {value:'0', label:'láminas de plata: nunca se llegaron a instalar', icon:'🥈'},
    {value:'2', label:'edificios originales que sobreviven intactos', icon:'🏛️'}
  ],
  blocks: [
    {type:'lead', text:'Construido en 1474 como retiro del shōgun Ashikaga Yoshimasa, que quiso emular el Pabellón Dorado que su abuelo había levantado años antes, Ginkaku-ji nunca llegó a recubrirse de láminas de plata como se planeó, pero el apodo quedó fijado por su parecido con el Kinkaku-ji. Su nombre oficial es Jishō-ji, aunque nadie lo usa.'},
    {type:'stop', title:'Kannon-den, el pabellón principal', text:[
      'Un pabellón de dos plantas que ha sobrevivido a incendios y terremotos desde el siglo XV. Frente a él se extiende el Ginshadan o «mar de arena plateada», un jardín seco con un gran cono de arena llamado Kōgetsudai o «plataforma de observación de la luna», una de las imágenes más fotografiadas del templo.'
    ]},
    {type:'stop', title:'Hondō y Tōgu-dō', text:[
      'Junto al jardín de arena está el Hondō, con pinturas visibles en sus puertas correderas aunque no se pueda entrar, y el Tōgu-dō, la otra construcción que ha sobrevivido intacta desde el origen del templo.'
    ]},
    {type:'stop', title:'El jardín de musgo y el mirador', text:[
      'El recorrido sube después por un jardín de musgo lleno de riachuelos, estanques e islotes, desde donde se obtienen las mejores vistas del conjunto y de la ciudad. Ginkaku-ji forma parte de los Monumentos Históricos de la Antigua Kioto, Patrimonio de la Humanidad por la Unesco.'
    ]}
  ],
  hours: 'Todos los días de 8:00 a 17:30 (de 9:00 a 16:30 de diciembre a febrero).',
  hoursSource: 'https://www.shokoku-ji.jp/en/ginkakuji/',
  tickets: 'La entrada se compra en el acceso al templo.',
  official: 'https://www.shokoku-ji.jp/en/ginkakuji/',
  tips: [
    'Sube hasta el mirador del jardín de musgo para ver el conjunto del templo con la ciudad al fondo.',
    'Combina la visita con el Camino del Filósofo, que conecta Ginkaku-ji con Nanzen-ji paseando junto a un canal.'
  ],
  access: 'A pie desde la parada de autobús Ginkakuji-michi, o siguiendo el Camino del Filósofo desde el sur.'
});
