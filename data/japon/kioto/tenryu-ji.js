// Tenryū-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'tenryu-ji', city: 'kioto', zone: 'arashiyama', name: 'Tenryū-ji', category: 'Templo',
  image: 'assets/japon-tenryu-ji.jpg',
  lat: 35.016, lon: 135.6738,
  lead: 'El templo zen más importante de Arashiyama, con un jardín de estanque de 1339 que ha sobrevivido intacto a ocho incendios.',
  duration: '1–1,5 horas',
  price: '500 ¥ jardín; +300 ¥ para entrar también a los edificios',
  stats: [
    {value:'1339', label:'año de fundación del templo', icon:'pagoda'},
    {value:'8', label:'grandes incendios sufridos a lo largo de su historia', icon:'flame'},
    {value:'1994', label:'declarado Patrimonio de la Humanidad', icon:'trophy'},
    {value:'1º', label:'de los cinco grandes templos zen de Kioto', icon:'rock'}
  ],
  blocks: [
    {type:'lead', text:'Tenryū-ji, «el templo del dragón celestial», se construyó en 1339 por orden del shogún Ashikaga Takauji en memoria del emperador Go-Daigo, con quien había estado enfrentado en la guerra civil que dio inicio al periodo Muromachi. Es la cabeza de la escuela Tenryū-ji del budismo zen Rinzai y ocupa el primer puesto en el sistema Gozan, el ranking oficial de los cinco grandes templos zen de Kioto.'},
    {type:'p', text:'Del recinto original apenas queda nada en pie: el templo ardió por completo ocho veces a lo largo de su historia —en 1358, 1367, 1373, 1380, 1447, 1468, 1815 y 1864, este último durante el incidente Kinmon—, y casi todos los edificios que se visitan hoy son reconstrucciones de la era Meiji, de finales del siglo XIX y principios del XX. Lo único que ha sobrevivido intacto desde 1339 es el jardín.'},
    {type:'heading', text:'Musō Soseki y el jardín Sōgen-chi', icon:'rock'},
    {type:'stop', title:'Un jardín de paseo alrededor del estanque', image:{src:'assets/japon-tenryu-ji.jpg', alt:'Jardín Sōgen-chi de Tenryū-ji con el Ōhōjō y las montañas de Arashiyama al fondo'}, text:[
      'El jardín Sōgen-chi es obra del monje y paisajista Musō Soseki, primer abad del templo, y se ha conservado prácticamente sin cambios desde su diseño original en 1339: es uno de los jardines más antiguos de Japón que sigue mostrando su trazado inicial. Fue el primer jardín del país en recibir la designación gubernamental de Lugar de Especial Belleza Escénica e Interés Histórico, un reconocimiento que sigue vigente hoy.',
      'Se recorre como jardín de paseo (kaiyū-shiki): un camino llano rodea el estanque Sōgen y permite apreciar la composición —una cascada seca de piedras dispuesta como un paisaje chino en miniatura, islotes de roca y pinos cuidadosamente podados— desde ángulos distintos en cada tramo.'
    ]},
    {type:'stop', title:'Shakkei: las montañas de Arashiyama como parte del jardín', text:[
      'La genialidad del diseño de Musō Soseki está en el shakkei o «paisaje prestado»: el jardín se construyó de forma que las laderas boscosas de Arashiyama y del monte Ogura, fuera del recinto, se integran visualmente como telón de fondo del estanque. El efecto multiplica la sensación de profundidad de un jardín que, en realidad, es bastante más pequeño de lo que aparenta desde el porche del Ōhōjō, el gran salón principal desde el que se contempla.'
    ]},
    {type:'heading', text:'El dragón del techo del Hattō', icon:'eye'},
    {type:'stop', title:'Unryūzu, el dragón de las nubes', text:[
      'En el Hattō o salón del Dharma, el techo está decorado con el Unryūzu, un gran dragón pintado en tinta por el artista Suzuki Shōnen y terminado en 1997 para conmemorar el 650 aniversario del templo. Mide unos 9 metros de diámetro y está pintado de forma que, según desde donde se mire, el dragón parece mirar directamente al espectador —un recurso habitual en los techos de dragón de los templos zen japoneses.',
      'A diferencia del jardín, de acceso libre con la entrada general, el Hattō solo abre al público los sábados, domingos, festivos y algunos periodos especiales de primavera y otoño, con una entrada adicional propia. Conviene comprobar el calendario en la web oficial antes de ir si ver el dragón es una prioridad de la visita.'
    ]},
    {type:'heading', text:'Salida norte hacia el bosque de bambú', icon:'gate'},
    {type:'stop', title:'De Tenryū-ji al bosque de bambú de Sagano sin volver atrás', text:[
      'Tras recorrer el jardín y pasar junto al salón Tahōden —dedicado al emperador Go-Daigo—, la puerta norte del recinto conduce directamente a la base del célebre bosque de bambú de Arashiyama, sin necesidad de salir por la entrada principal ni desandar el camino. Es la forma más lógica de encadenar las dos visitas, y quienes entran temprano por esta ruta suelen encontrar el bosque con bastante menos gente que accediendo directamente desde la estación.'
    ]},
    {type:'cards', title:'Cuándo ver mejor el jardín', items:[
      {icon:'blossom', title:'Primavera', text:'Los cerezos alrededor del estanque Sōgen florecen junto a los pinos, con las montañas de Arashiyama todavía con tonos suaves de brote nuevo.'},
      {icon:'tree', title:'Verano', text:'El jardín luce en su verde más intenso y suele tener menos afluencia que en las temporadas altas de flores y hojas.'},
      {icon:'flame', title:'Otoño', text:'El momiji rodea el estanque de rojos y naranjas; es la época de mayor afluencia, y el jardín amplía su horario de apertura a las 7:30 entre el 15 y el 30 de noviembre.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El jardín Sōgen-chi es prácticamente el único elemento del templo que se conserva desde 1339: todo lo demás son reconstrucciones posteriores a ocho grandes incendios.',
      'Fue el primer jardín de Japón en recibir la designación oficial de Lugar de Especial Belleza Escénica.',
      'La puerta norte del recinto lleva directamente al bosque de bambú de Arashiyama, sin tener que salir por la entrada principal.'
    ]}
  ],
  hours: 'Jardín: todos los días de 8:30 a 17:00 (desde las 7:30 entre el 15 y el 30 de noviembre). Edificios: mismo horario, última entrada 16:50. Hattō (techo del dragón): solo sábados, domingos, festivos y periodos especiales de primavera/otoño, con entrada aparte de 500 ¥.',
  hoursSource: 'https://www.tenryuji.com/en/visit/',
  tickets: 'Se compra en el acceso: 500 ¥ el jardín (300 ¥ estudiantes de primaria/secundaria), +300 ¥ para entrar también a los edificios. No suele hacer falta reserva previa.',
  official: 'https://www.tenryuji.com/en/',
  tips: [
    'Entra por la puerta principal y sal por la puerta norte: enlazas directamente con el bosque de bambú sin desandar camino.',
    'Si quieres ver el dragón del Hattō, comprueba antes en la web oficial si coincide con un fin de semana o periodo especial de apertura.',
    'Ve a primera hora, sobre todo en otoño, cuando el jardín es de los puntos con más afluencia de todo Arashiyama.'
  ],
  access: 'A pie desde la estación Arashiyama de la línea Keifuku (Randen), a unos 5 minutos; también a 13 minutos desde Saga-Arashiyama (línea JR Sagano) o en autobús hasta la parada Arashiyama Tenryu-ji-mae.'
});
