// Kōfuku-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'kofuku-ji', city: 'nara', name: 'Kōfuku-ji', category: 'Templo',
  image: 'assets/japon-kofuku-ji.jpg',
  lat: 34.6837, lon: 135.8318,
  lead: 'Trasladado a Nara en el año 710, Kōfuku-ji fue durante siglos el templo familiar del poderoso clan Fujiwara y uno de los siete grandes templos de la antigua capital; su esbelta pagoda de cinco pisos es hoy uno de los símbolos de la ciudad.',
  duration: '45–60 min',
  price: 'Acceso al recinto exterior gratuito; entrada de pago para los salones con las colecciones de esculturas',
  stats: [
    {value:'669', label:'año de fundación del templo original, en Yamashina', icon:'scroll'},
    {value:'50 m', label:'altura de la pagoda de cinco pisos', icon:'pagoda'},
    {value:'734', label:'año de talla de la estatua de Ashura', icon:'trophy'},
    {value:'2018', label:'reinauguración del Salón Dorado Central tras su reconstrucción', icon:'tower'}
  ],
  blocks: [
    {type:'lead', text:'El templo nació en el año 669 con el nombre de Yamashina-dera, fundado por Kagami no Ōkimi para pedir la recuperación de su marido enfermo, Fujiwara no Kamatari, fundador del clan Fujiwara. Tras varios traslados, el hijo de Kamatari, Fujiwara no Fuhito, lo reconstruyó en su ubicación actual en el año 710, coincidiendo con el establecimiento de Nara (Heijō-kyō) como nueva capital imperial, y lo convirtió explícitamente en el templo familiar de su clan.'},
    {type:'p', text:'Durante siglos, Kōfuku-ji fue el templo más poderoso de Nara y uno de los siete grandes templos budistas de la ciudad, con enorme influencia política gracias a su vínculo con los Fujiwara. Como tantos grandes templos japoneses, sufrió numerosos incendios y reconstrucciones a lo largo de su historia; algunas de sus estructuras originales nunca volvieron a levantarse, mientras que otras se han convertido en símbolo de la ciudad y se ven desde buena parte de Nara.'},
    {type:'heading', text:'La pagoda que domina el perfil de Nara', icon:'pagoda'},
    {type:'stop', title:'Pagoda de cinco pisos, Gojū-no-tō', image:{src:'assets/japon-kofuku-ji.jpg', alt:'Pagoda de cinco pisos de Kōfuku-ji en Nara'}, text:[
      'La primera pagoda se construyó en el año 730 por encargo de la emperatriz Kōmyō; a lo largo de su historia ha sido pasto de las llamas y reconstruida hasta cinco veces, y la actual, de 1426, mide unos 50 metros de altura y es la segunda pagoda de madera más alta de Japón, solo por detrás de la de Tō-ji, en Kioto.',
      'Junto a ella, el Salón Dorado del Este (Tōkondō), reconstruido en 1425, conserva estatuas budistas de gran valor histórico, mientras que el Salón Dorado Central (Chūkondō) —corazón original del recinto— fue reconstruido en su forma y técnicas del periodo Nara y reabrió al público en 2018, tras años de trabajo para devolverle su aspecto original.'
    ]},
    {type:'stop', title:'La pagoda de tres pisos, más discreta y más antigua', text:[
      'A un lado del recinto, casi escondida entre los árboles, la pequeña pagoda de tres pisos (Sanjū-no-tō) pasa desapercibida para la mayoría de visitantes. Se levantó en 1143 por encargo de una consorte imperial y se reconstruyó poco después del incendio que arrasó el templo en 1180-81: junto al Hokuen-dō, es una de las dos estructuras más antiguas que se conservan en Kōfuku-ji.'
    ]},
    {type:'heading', text:'El tesoro escultórico de Kōfuku-ji', icon:'trophy'},
    {type:'stop', title:'La estatua de Ashura, la pieza más célebre del templo', text:[
      'En el Museo del Tesoro Nacional (Kokuhōkan) del recinto se conserva la estatua de Ashura, tallada en el año 734 durante el periodo Tenpyō: una figura de tres rostros y seis brazos, de rasgos sorprendentemente delicados y expresión melancólica para representar a una deidad guerrera, considerada una de las obras maestras del arte budista japonés.',
      'El museo reúne además obras vinculadas a Unkei, uno de los grandes maestros escultores del periodo Kamakura, conocido por el realismo de sus figuras budistas, y decenas de piezas clasificadas como Tesoro Nacional o Bien Cultural Importante acumuladas a lo largo de más de 1.300 años de historia del templo.'
    ]},
    {type:'heading', text:'El santuario octogonal y el estanque de la leyenda', icon:'rock'},
    {type:'stop', title:'Nan’en-dō, novena parada de la peregrinación Saigoku Kannon', text:[
      'Este salón octogonal, reconstruido entre 1741 y 1789 sobre una versión original del año 813, es la novena parada de la peregrinación Saigoku Kannon, una ruta de 33 templos dedicados a la diosa Kannon. Su imagen principal, la Fukūkenjaku Kannon, solo se muestra al público una vez al año, el 17 de octubre.'
    ]},
    {type:'stop', title:'Estanque Sarusawa, la leyenda de la doncella', text:[
      'Excavado en el año 749 como parte del propio recinto de Kōfuku-ji, el estanque Sarusawa guarda una leyenda trágica: una dama de la corte se habría arrojado a sus aguas tras perder el favor del emperador, y en su memoria se erigió el pequeño santuario Uneme, hoy dependiente de Kasuga Taisha, en su orilla.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La pagoda de cinco pisos de Kōfuku-ji, con unos 50 metros de altura, es la segunda más alta de Japón después de la de Tō-ji, en Kioto.',
      'La estatua de Ashura, tallada en el 734, es una de las obras más reproducidas y estudiadas del arte budista japonés pese a medir poco más de metro y medio.',
      'El salón octogonal Nan’en-dō forma parte de la peregrinación Saigoku Kannon, una ruta de 33 templos dedicados a la diosa Kannon.'
    ]}
  ],
  hours: 'El recinto exterior es de acceso libre; los salones con estatuas tienen su propio horario y entrada.',
  hoursSource: 'https://www.kohfukuji.com/en/',
  tickets: 'Consulta los horarios y tarifas de cada salón en la web oficial del templo.',
  official: 'https://www.kohfukuji.com/en/',
  tips: [
    'La pagoda se ve muy bien desde el estanque Sarusawa, en el extremo sur del parque: merece la pena acercarse también hasta allí.',
    'Si te interesa la escultura budista, no te saltes el Museo del Tesoro Nacional (Kokuhōkan) y su estatua de Ashura.',
    'El Salón Dorado Central, reabierto en 2018, suele tener menos cola que la pagoda y el museo: no lo dejes fuera del recorrido.'
  ],
  access: 'A pie desde la estación de Kintetsu Nara (2-3 minutos, prácticamente a la salida de la estación).'
});
