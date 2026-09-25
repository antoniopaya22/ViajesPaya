// Tōdai-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'todai-ji', city: 'nara', name: 'Tōdai-ji', category: 'Templo',
  image: 'assets/nara.jpg',
  lat: 34.6890, lon: 135.8398,
  lead: 'El gran templo de Nara y su monumental Buda de bronce, bajo el mayor edificio de madera del mundo.',
  duration: '1–1,5 horas',
  price: 'Entrada de pago al Daibutsu-den; consulta la tarifa oficial vigente',
  stats: [
    {value:'752', label:'año de inauguración del Daibutsu-den original', icon:'pagoda'},
    {value:'15 m', label:'altura del Buda de bronce', icon:'ruler'},
    {value:'8,4 m', label:'altura de cada guardián Niō', icon:'gate'},
    {value:'1709', label:'año de la reconstrucción actual del salón', icon:'flame'}
  ],
  blocks: [
    {type:'lead', text:'Fundado en el siglo VIII como cabeza de la red de templos provinciales del país por orden del emperador Shōmu, en un momento en que el budismo se entendía como una fuerza capaz de proteger y unificar la nación, Tōdai-ji alberga el Daibutsu, una de las estatuas de Buda de bronce más grandes de Japón, dentro del Daibutsu-den, la estructura de madera más grande del mundo.'},
    {type:'p', text:'El Gran Salón del Buda que se ve hoy es en realidad la tercera versión del edificio, y ya de dimensiones menores que las dos anteriores, perdidas en sendos incendios; aun reducido, sigue siendo colosal. El propio recorrido a pie por el parque de Nara hasta llegar al templo, cruzando entre los ciervos, forma parte de la experiencia tanto como el Daibutsu en sí.'},
    {type:'table', title:'Incendios y reconstrucciones del Daibutsu-den', columns:['Año','Suceso'], rows:[
      ['752','Inauguración del Daibutsu-den original y consagración del Gran Buda'],
      ['1180','Incendio durante el ataque a los templos de Nara del general Taira no Shigehira'],
      ['1195','Reconstrucción del salón, impulsada por el monje Chōgen'],
      ['1567','Nuevo incendio durante los enfrentamientos entre los clanes Miyoshi y Matsunaga'],
      ['1709','Consagración del Daibutsu-den actual, de planta más reducida que los dos anteriores']
    ]},
    {type:'heading', text:'Puerta Nandai-mon y los guardianes Niō', icon:'gate'},
    {type:'stop', title:'La gran puerta y sus dos guardianes', text:[
      'La monumental Nandai-mon, reconstruida a finales del siglo XII tras el incendio de 1180, guarda a ambos lados dos estatuas de madera de los reyes Deva Niō, de 8,4 metros de altura cada una. Se atribuyen a los escultores Unkei y Kaikei, que las habrían tallado en un tiempo récord de unos 69 días en 1203, trabajando con un equipo de artesanos y piezas de madera ensambladas por separado.',
      'Agyō, con la boca abierta, y Ungyō, con la boca cerrada, representan respectivamente el principio y el final de todas las cosas —el sonido «a» y el sonido «un» del alfabeto sánscrito—, un par que se repite en las puertas de numerosos templos japoneses.'
    ]},
    {type:'heading', text:'El Gran Buda y su salón', icon:'pagoda'},
    {type:'stop', title:'Daibutsu-den, el mayor edificio de madera del mundo', text:[
      'Con 57 metros de ancho, 50 de fondo y casi 49 de alto, el Daibutsu-den actual —pese a ser una reconstrucción de siete vanos, más pequeña que los once vanos del edificio original— sigue siendo la mayor estructura de madera del mundo.'
    ]},
    {type:'stop', title:'El Gran Buda de bronce', text:[
      'En su interior, el Buda Vairocana de bronce mide unos 15 metros de altura y pesa más de 500 toneladas: es una de las estatuas de bronce más grandes del planeta. Fue fundida en varias etapas a mediados del siglo VIII con un gasto de recursos tan enorme que, según algunos historiadores, contribuyó a debilitar las arcas del estado.'
    ]},
    {type:'stop', title:'El pilar con el agujero de la nariz', text:[
      'Uno de los grandes pilares de madera del salón tiene en su base un agujero con las mismas dimensiones que uno de los orificios nasales de la estatua del Buda: la tradición dice que quien consigue pasar por él logrará la iluminación en su siguiente vida, y es habitual ver a niños —y a algún adulto delgado— intentándolo.'
    ]},
    {type:'heading', text:'Omizutori, el festival del fuego', icon:'flame'},
    {type:'stop', title:'Antorchas gigantes en el vecino Nigatsu-dō', text:[
      'Cada noche del 1 al 14 de marzo, en el Nigatsu-dō —un salón anexo situado en la ladera, algo apartado del Daibutsu-den—, los monjes suben al balcón con antorchas de entre 6 y 8 metros de longitud y las agitan para hacer caer una lluvia de brasas sobre los fieles congregados abajo: se cree que ejerce de purificación. La ceremonia Shuni-e de la que forma parte se celebra sin interrupción desde el año 752, lo que la convierte en uno de los rituales budistas más antiguos de Japón que siguen en activo.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El Daibutsu-den actual, con solo siete vanos de ancho frente a los once del edificio original, sigue siendo la mayor estructura de madera del mundo.',
      'Los guardianes Niō de la Nandai-mon, de 8,4 metros cada uno, se tallaron en un tiempo récord de apenas 69 días en 1203.',
      'La ceremonia del fuego Omizutori se celebra sin interrupción desde el año 752, sobreviviendo incluso a los incendios que arrasaron el resto del templo.'
    ]}
  ],
  hours: 'El horario del Gran Salón del Buda cambia según la estación; conviene consultar la web oficial antes de ir.',
  hoursSource: 'https://www.todaiji.or.jp/en/',
  tickets: 'La entrada se compra en la taquilla del propio recinto.',
  official: 'https://www.todaiji.or.jp/en/',
  tips: [
    'Combina la visita con un paseo por el resto del parque de Nara: los ciervos campan libremente por los alrededores del templo.',
    'Guarda bien la comida y los papeles sueltos: los ciervos son curiosos y no dudan en intentar cogerlos.',
    'Si viajas a comienzos de marzo, infórmate sobre el festival Omizutori en el Nigatsu-dō: las antorchas se ven bien desde la explanada inferior.'
  ],
  access: 'A pie desde el centro de Nara o desde la estación de Kintetsu Nara, cruzando el parque de Nara (unos 20-25 minutos).'
});
