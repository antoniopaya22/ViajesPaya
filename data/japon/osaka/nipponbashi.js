// Nipponbashi (Den Den Town) — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'nipponbashi', city: 'osaka', zone: 'tennoji', name: 'Nipponbashi (Den Den Town)', category: 'Barrio comercial',
  image: 'assets/japon-nipponbashi.jpg',
  lat: 34.6626, lon: 135.5064,
  lead: 'El «Akihabara de Osaka»: electrónica, manga, anime y cultura otaku en un barrio mucho más pequeño y manejable que su equivalente de Tokio.',
  duration: '1–2 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'1,8 km', label:'distancia a pie entre Shinsekai y Dōtonbori cruzando el barrio', icon:'footprints'},
    {value:'2', label:'estaciones entre las que se extiende: Ebisuchō y Nipponbashi', icon:'gate'}
  ],
  blocks: [
    {type:'lead', text:'Conocido popularmente como Den Den Town, el barrio oficial de Nipponbashi es el gran referente de Osaka en electrónica, manga, anime, videojuegos y cultura otaku, resumido en el dicho japonés «higashi no Akiba, nishi no Ponbashi»: «en el este, Akiba; en el oeste, Ponbashi».'},
    {type:'p', text:'Se extiende a lo largo de la avenida Sakai-suji, entre las estaciones de Ebisuchō y Nipponbashi, y conecta a pie Shinsekai con Dōtonbori en un paseo de 1,8 km: una parada natural para quien recorre el sur de Osaka caminando.'},
    {type:'heading', text:'Qué encontrarás en sus calles', icon:'bag'},
    {type:'cards', items:[
      {icon:'bag', title:'Electrónica y retrogaming', text:'Grandes tiendas de electrónica, locales de componentes de segunda mano y tiendas especializadas en videojuegos y retrogaming.'},
      {icon:'book', title:'Manga, anime y doujinshi', text:'Tiendas de manga y anime, salones recreativos históricos con máquinas como Taiko no Tatsujin o Dance Dance Revolution, y comercios de doujinshi (cómics autoeditados por aficionados) como K-Books o Melon Books.'},
      {icon:'lantern', title:'Idols, figuras y gachapon', text:'Tiendas de merchandising de idols como Jungle, comercios de figuras y coleccionables, y máquinas gachapon repartidas por las entradas de muchas tiendas.'},
      {icon:'eye', title:'Maid cafés y entretenimiento adulto', text:'Cafeterías de sirvientas y, como en su equivalente de Tokio, comercios de entretenimiento adulto conviven en las mismas manzanas.'}
    ]},
    {type:'stop', title:'Ota Road, el corazón otaku del barrio', text:[
      'La calle paralela conocida como Ota Road concentra la mayor densidad de tiendas dedicadas a la cultura otaku de toda la zona: es el mejor punto de partida si el interés principal es el manga, el anime o los videojuegos.'
    ]},
    {type:'heading', text:'Mercado Kuromon, de camino al barrio', icon:'bag'},
    {type:'stop', title:'El mercado más importante de Osaka', text:[
      'Muy cerca de Nipponbashi, entre este barrio y Dōtonbori, el mercado Kuromon Ichiba es el más importante de Osaka: un buen sitio para descubrir de un vistazo los productos más populares de la cocina local —marisco fresco, wagyu, fruta y toda clase de comida callejera para comer de pie— antes de seguir camino hacia las tiendas otaku.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El dicho japonés «higashi no Akiba, nishi no Ponbashi» resume la rivalidad amistosa entre los dos grandes barrios otaku de Japón.',
      'Todos los cruces de Den Den Town llevan una señalización con código de colores para identificar en qué manzana te encuentras, muy útil dada la cantidad de callejuelas paralelas.'
    ]}
  ],
  hours: 'Calles de acceso libre; la mayoría de tiendas abre entre las 11:00 y las 20:00 aproximadamente.',
  hoursSource: 'https://osaka-info.jp/en/area/nipponbashi-den-den-town/',
  tickets: 'No se necesita entrada; cada tienda cobra por sus propios productos.',
  official: 'https://osaka-info.jp/en/area/nipponbashi-den-den-town/',
  tips: [
    'Si vienes desde Shinsekai, puedes enlazar a pie con Dōtonbori atravesando todo el barrio: son apenas 1,8 km en línea recta.',
    'Lleva algo de efectivo en yenes sueltos para las máquinas gachapon, muy habituales en las entradas de las tiendas.',
    'Si buscas la mayor concentración de tiendas otaku, dirígete directamente a Ota Road.'
  ],
  access: 'A pie desde las estaciones de metro Nipponbashi o Ebisuchō, entre los barrios de Shinsekai y Dōtonbori.'
});
