// Sanjūsangen-dō — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'sanjusangen-do', city: 'kioto', zone: 'higashiyama-sur', name: 'Sanjūsangen-dō', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-sanjusangen-do.jpg',
  lat: 34.9878, lon: 135.7717,
  lead: 'Un salón de madera de 120 metros, el más largo de Japón, con 1001 estatuas doradas de la diosa Kannon alineadas en penumbra.',
  duration: '45–75 minutos',
  price: '600 ¥ adulto',
  stats: [
    {value:'1164', label:'año de fundación, por encargo de Go-Shirakawa', icon:'scroll'},
    {value:'1001', label:'estatuas de Kannon de mil brazos', icon:'eye'},
    {value:'120 m', label:'longitud del salón de madera', icon:'ruler'},
    {value:'28', label:'deidades guardianas Nijūhachi Bushū', icon:'trophy'}
  ],
  blocks: [
    {type:'lead', text:'Sanjūsangen-dō, cuyo nombre oficial es Rengeō-in («templo del rey del loto»), fue construido en 1164 por el guerrero Taira no Kiyomori por encargo del emperador retirado Go-Shirakawa. Un incendio en 1249 destruyó casi todo el recinto original —solo se salvaron 124 estatuas— y el salón que se visita hoy es la reconstrucción de 1266, considerada Tesoro Nacional junto a la práctica totalidad de sus esculturas.'},
    {type:'p', text:'El edificio, de una sola planta y estructura muy alargada, es la construcción de madera más larga de Japón: unos 120 metros de longitud sostenidos por 34 pilares que forman 33 espacios o «gen» entre columnas, de donde viene el nombre del templo —sanjūsan-gen, «33 intervalos»—. Dentro, en fila tras fila, esperan las 1001 estatuas de la Kannon de mil brazos que le dieron fama mundial.'},
    {type:'heading', text:'Las mil estatuas de Kannon', icon:'eye'},
    {type:'stop', title:'Diez filas, quinientas a cada lado', image:{src:'assets/japon-sanjusangen-do.jpg', alt:'Fachada del salón de madera de Sanjūsangen-dō en Kioto'}, text:[
      'A ambos lados de la gran Kannon central se despliegan 500 estatuas por bando, repartidas en diez filas de cincuenta, hasta sumar mil figuras en pie más la imagen central: 1001 en total. Cada una mide algo más de 1,6 metros, está tallada en madera de ciprés japonés (hinoki) y recubierta de pan de oro, con once cabezas y 42 brazos que representan simbólicamente los mil brazos de la compasión infinita.',
      'De las 1001 estatuas, 124 son las supervivientes del incendio de 1249 y datan por tanto del siglo XII; las 876 restantes se tallaron durante la reconstrucción, a lo largo de unos 16 años, por un equipo de cerca de setenta escultores de las escuelas Kei, En e In, entre ellos el maestro Tankei y su padre Unkei. Aunque comparten la misma iconografía, cada rostro es ligeramente distinto: la creencia popular dice que, si buscas con calma, siempre encontrarás una cara que se parece a alguien a quien quieres o a quien has perdido.'
    ]},
    {type:'stop', title:'La gran Kannon sentada y los 28 guardianes', text:[
      'En el centro exacto del salón, presidiendo las mil estatuas, se alza la gran imagen sentada de la Kannon de mil brazos: 3,3 metros de altura, tallada en 1254 por el propio Tankei ya en su vejez y declarada Tesoro Nacional. Es la pieza más importante del conjunto y el punto al que conducen visualmente las diez filas de estatuas menores.',
      'Delante de las filas de Kannon, 28 estatuas de deidades guardianas —los Nijūhachi Bushū— protegen el conjunto: figuras de origen hindú y budista que representan conceptos como la fuerza, la sabiduría o la prosperidad. En los dos extremos del salón destacan especialmente Fūjin, el dios del viento, y Raijin, el dios del trueno, dos de las imágenes más reproducidas del arte japonés.'
    ]},
    {type:'heading', text:'El Tōshiya, el torneo de tiro con arco', icon:'bell'},
    {type:'stop', title:'Flechas a lo largo de 120 metros', text:[
      'Durante el periodo Edo, el largo pasillo cubierto del lado oeste del edificio —los mismos 120 metros del salón— fue escenario del Tōshiya, un exigente torneo de tiro con arco que se remonta a 1606, cuando el samurái Asaoka Heibei disparó 51 flechas seguidas de un extremo a otro de la galería. El techo bajo (unos 5 metros) y la distancia obligaban a los arqueros a lanzar con una trayectoria muy rasa y arcos de gran potencia para que la flecha llegara entera hasta el otro extremo.',
      'El torneo se celebró durante 255 años, hasta que cesó en 1861. Hoy se mantiene viva su herencia en el Ōmato Taikai, un torneo de tiro con arco por la mayoría de edad que se celebra cada mes de enero junto al templo y que reúne a unos 2.000 participantes, muchos de ellos jóvenes con kimono que acaban de cumplir 20 años.'
    ]},
    {type:'cards', title:'Tres cifras que resumen el templo', items:[
      {icon:'ruler', title:'120 metros de madera', text:'El edificio más largo de Japón hecho enteramente de madera, con 34 pilares que forman 33 espacios entre columnas.'},
      {icon:'eye', title:'1001 rostros distintos', text:'Ninguna de las mil estatuas es idéntica a otra: la tradición invita a buscar entre ellas un rostro familiar.'},
      {icon:'trophy', title:'255 años de torneo', text:'El Tōshiya se disputó en la galería oeste del templo desde 1606 hasta 1861, con arqueros disparando a lo largo de todo el pasillo.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Está terminantemente prohibido hacer fotos o grabar vídeo dentro del salón principal, para proteger la madera antigua y mantener el ambiente de recogimiento; sí se puede fotografiar el exterior y el jardín.',
      'Las 1001 estatuas se restauraron por completo entre 1973 y 2017, un proceso que llevó 45 años.',
      'La reconstrucción del siglo XIII se cimentó sobre capas de arcilla y arena pensadas para amortiguar los terremotos, una técnica que sigue funcionando siglos después.'
    ]}
  ],
  hours: 'Del 1 de abril al 15 de noviembre, de 8:30 a 17:00 (última entrada 16:30); del 16 de noviembre al 31 de marzo, de 9:00 a 16:00 (última entrada 15:30). Abierto todos los días del año.',
  hoursSource: 'https://www.sanjusangendo.jp/',
  tickets: 'La entrada se compra en la taquilla del recinto; no suele hacer falta reserva previa. 600 ¥ adultos, 400 ¥ estudiantes de secundaria, 300 ¥ niños de primaria.',
  official: 'https://www.sanjusangendo.jp/',
  tips: [
    'Guarda la cámara antes de entrar: la prohibición de hacer fotos dentro del salón se vigila de cerca.',
    'Camina despacio por el pasillo interior y busca, entre las mil caras, una que te recuerde a alguien.',
    'Combínalo con Kiyomizu-dera o el Museo Nacional de Kioto, ambos a poca distancia a pie.',
    'Si viajas en enero, consulta la fecha del Ōmato Taikai: ese día el recinto tiene entrada gratuita.'
  ],
  access: 'A unos 10 minutos en autobús (líneas 206/208) desde la estación de Kioto hasta la parada Hakubutsukan-Sanjusangendo-mae, o unos 7 minutos a pie desde la estación de Shichijō de la línea Keihan.'
});
