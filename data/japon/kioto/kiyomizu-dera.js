// Kiyomizu-dera — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'kiyomizu-dera', city: 'kioto', name: 'Kiyomizu-dera', category: 'Templo',
  image: 'assets/japon-kiyomizu-dera.jpg',
  lat: 34.9948, lon: 135.785,
  lead: 'Un templo del siglo VIII sobre la ladera de Higashiyama, con un gran balcón de madera sin un solo clavo.',
  duration: '1,5–2,5 horas',
  price: '400 ¥ adulto',
  stats: [
    {value:'778', label:'año de fundación del templo', icon:'pagoda'},
    {value:'0', label:'clavos usados en el balcón principal', icon:'wood'},
    {value:'1994', label:'declarado Patrimonio de la Humanidad', icon:'trophy'},
    {value:'13 m', label:'altura del balcón sobre la ladera', icon:'ruler'}
  ],
  blocks: [
    {type:'lead', text:'Fundado en el año 778 junto a la cascada Otowa —«agua pura», que da nombre al templo—, Kiyomizu-dera es Patrimonio de la Humanidad desde 1994 y una de las 33 paradas de la peregrinación Saigoku Kannon. A pesar de su origen en el periodo Heian, los edificios que se ven hoy datan casi todos de la reconstrucción de 1631-1633, después de sucesivos incendios a lo largo de su historia.'},
    {type:'p', text:'El recinto es en realidad un conjunto de más de veinte templos, puertas y salones repartidos por la ladera, y merece la pena recorrerlo entero: hay bastante más que el famoso balcón sobre la ciudad.'},
    {type:'table', title:'Cómo llegar desde el centro de Kioto', columns:['Método','Tiempo','Coste'], rows:[
      ['Autobús urbano (100 / 206)','~15 min + 10 min a pie','230 ¥'],
      ['Línea Keihan a Kiyomizu-Gojō','~20–25 min a pie desde la estación','~210 ¥'],
      ['Taxi','~15 min','≈1.500 ¥']
    ]},
    {type:'timeline', title:'Casi todo se reconstruyó en el mismo par de años', items:[
      {label:'Niō-mon (puerta roja)', year:1495, yearLabel:'~1495'},
      {label:'Torre de la campana', year:1607, yearLabel:'1607'},
      {label:'Amida-dō', year:1631, yearLabel:'1631'},
      {label:'Sanjū-no-tō (pagoda)', year:1633, yearLabel:'1633'},
      {label:'Hondō (salón y balcón)', year:1633, yearLabel:'1633'},
      {label:'Zuigu-dō', year:1718, yearLabel:'1718'}
    ]},
    {type:'heading', text:'Entrada y torre de la campana', icon:'bell'},
    {type:'stop', title:'Puerta Niō-mon', image:{src:'assets/kiyomizu/nio-mon.jpg', alt:'Puerta Niō-mon de Kiyomizu-dera'}, text:[
      'La gran puerta roja de acceso, de unos 10 metros de ancho y madera de ciprés, se reconstruyó a finales del siglo XV tras un incendio. Guarda dos estatuas de reyes Deva de 3,65 metros —de ahí su nombre— y dos leones-perros koma-inu que protegen la entrada; por su color también se la conoce como la puerta Aka-mon, «la puerta roja».'
    ]},
    {type:'stop', title:'Templo Zenkōji y establo Umatodome', text:[
      'Delante de la puerta principal, el pequeño templo Zenkōji guarda la estatua del Kubifuri Jizō, a quien se gira la cabeza para pedirle un favor desde el periodo Edo. A sus pies, el establo Umatodome del siglo XV era donde samuráis y nobles dejaban sus caballos al entrar al templo.'
    ]},
    {type:'stop', title:'Puerta oeste Sai-mon', text:[
      'Reconstrucción de 1631 en madera de ciprés, sostenida por ocho pilares y decorada en rojos y dorados muy elaborados, propios del periodo Momoyama. Sus esculturas con cabezas de elefante llegaron de Corea tras las incursiones militares japonesas de la década de 1590. Desde aquí se disfrutan además buenas vistas del atardecer.'
    ]},
    {type:'stop', title:'Pagoda de tres pisos, Sanjū-no-tō', image:{src:'assets/kiyomizu/pagoda.jpg', alt:'Pagoda de tres pisos de Kiyomizu-dera entre los arces'}, text:[
      'Con origen en el año 847 y reconstruida en 1633, es la pagoda de tres pisos más alta de Japón (31 metros). Se repintó de un rojo bermellón muy vivo en 1987 para que destacara sobre el resto de edificios de madera, y en su interior está consagrada una imagen del Buda del sol Dainichi.'
    ]},
    {type:'stop', title:'Torre de la campana', text:[
      'Data de 1596, aunque se reconstruyó en 1607 con dos pilares adicionales —seis en total— para soportar mejor el peso de la campana, de 1478 y algo más de dos toneladas. Sus tallas de crisantemos y peonías son típicas del periodo Momoyama.'
    ]},
    {type:'heading', text:'Camino hacia el salón principal', icon:'footprints'},
    {type:'stop', title:'Salones Mizugo Kannon-dō y Zuigu-dō', text:[
      'El pequeño Mizugo Kannon-dō está dedicado a los fetos y bebés que no llegaron a nacer. Junto a él, el Zuigu-dō (reconstrucción de 1718) permite entrar, por 100 yenes, en el tainai meguri o «peregrinación del útero»: un pasillo completamente a oscuras que se recorre guiándose solo con una cuerda, hasta llegar a una única piedra iluminada con un carácter en sánscrito.'
    ]},
    {type:'stop', title:'Repositorio Kyō-dō y salón Kaisan-dō', text:[
      'El Kyō-dō (1633) guarda sutras y sirve de sala de lectura a los monjes; su techo interior está decorado con un gran dragón. El Kaisan-dō, o salón del fundador, honra al general que donó el salón principal al sacerdote Enchin en el siglo VIII, junto a tres figuras más ligadas al origen del templo.'
    ]},
    {type:'stop', title:'Puerta Todoroki-mon', text:[
      'Reconstrucción de 1633 también conocida como puerta central Chū-mon, con dos reyes Deva más protegiendo el paso. Justo antes está la pila de abluciones temizuya, cuya agua sale de la boca de un dragón y se conoce como «agua de la lechuza», un animal que en la tradición japonesa protege de la mala suerte.'
    ]},
    {type:'stop', title:'Isla Benten', text:[
      'Detrás del Kaisan-dō, un pequeño estanque con un islote guarda un santuario sintoísta dedicado a Benten, una de las siete deidades de la buena fortuna: un ejemplo más del sincretismo religioso habitual en los recintos budistas japoneses.'
    ]},
    {type:'stop', title:'Salón Asakura-dō', text:[
      'Reconstrucción de 1633 donada por el hijo del emperador Temmu, con una Kannon de once cabezas y mil brazos en su interior. Guarda también una piedra con la huella de Buda: según la tradición, mirarla fijamente perdona los pecados. El pasillo Kairo, con una lámpara de hierro forjado muy fotografiada, conduce desde aquí hasta el salón principal.'
    ]},
    {type:'stop', title:'Salón principal Hondō y su balcón', text:[
      'El gran salón guarda una pequeña estatua de la diosa Kannon de siete caras y mil brazos, pero es sobre todo célebre por su balcón de 13 metros de alto: se sostiene con cientos de pilares de madera de zelkova sin un solo clavo, siguiendo el estilo del templo original del periodo Heian.',
      'Durante el periodo Edo se creía que sobrevivir a un salto desde el balcón concedía un deseo; hay 234 saltos documentados de esa época, con una tasa de supervivencia del 85,4%. Hoy la práctica está terminantemente prohibida. Desde el balcón, las vistas de Kioto y de Higashiyama son especialmente buenas en la floración de los cerezos y en el momiji de noviembre.'
    ]},
    {type:'heading', text:'Santuario Jishu, dedicado al amor', icon:'heart'},
    {type:'stop', title:'El santuario del amor, dentro del templo', text:[
      'Justo detrás del salón principal, el santuario Jishu lleva más de 1.300 años recibiendo a quienes buscan pareja: la tradición es caminar con los ojos cerrados entre dos piedras del amor separadas seis metros; conseguirlo augura encontrar el amor pronto. El recinto estuvo cerrado por obras de restauración entre 2022 y el 2025 anunciado por el templo — conviene confirmar en la web oficial si ya ha reabierto antes de planear la visita en torno a él.',
      'En sus escaleras de acceso está la estatua de Ōkuninushi junto a una liebre, en referencia a un episodio del Kojiki en el que el dios ayuda a una liebre tramposa a la que estaban despellejando como castigo. Por todo el recinto se reparten además tablillas ema en forma de corazón, muñecos de papel hitogata para «disolver» problemas en el agua, la estatua de Daikoku (a la que se toca la cabeza para pedir prosperidad) y puestos de omikuji especializados en predicciones de amor.'
    ]},
    {type:'cards', title:'Leyendas grabadas en el templo', items:[
      {icon:'scroll', title:'El salto de la fe', text:'Entre 1694 y 1864 se documentaron 234 saltos desde el balcón: quien sobrevivía veía su deseo cumplido. El 85,4% lo consiguió. Hoy está terminantemente prohibido.'},
      {icon:'heart', title:'Las piedras del amor', text:'Caminar seis metros con los ojos cerrados entre las dos piedras del santuario Jishu augura, según la tradición, encontrar pareja pronto.'}
    ]},
    {type:'heading', text:'Cascada Otowa y santuarios interiores', icon:'droplet'},
    {type:'stop', title:'Salones Nishimukijizō-dō y Shaka-dō', text:[
      'El primero está dedicado al Jizō protector de niños, viajeros y difuntos; el segundo guarda una imagen sonriente del Buda Shaka sobre una flor de loto dorada, flanqueada por las deidades de la sabiduría y la virtud, Monju y Fugen.'
    ]},
    {type:'stop', title:'Salón de los Cien Jizō', text:[
      'Entre los salones Shaka y Amida, esta estructura abierta reúne cerca de 200 pequeñas estatuas Jizō donadas por padres que han perdido un hijo: la tradición dice que, si encuentran una que se parezca a él, sabrán que descansa en paz.'
    ]},
    {type:'stop', title:'Salón Amida-dō', text:[
      'Reconstrucción de 1631 donde en 1188 se proclamó la doctrina Nembutsu, origen del culto a Amida y de la escuela Jōdo del budismo japonés. Guarda una imagen dorada del Buda Amida de 1,9 metros y varios ihai, tablones en recuerdo de los difuntos.'
    ]},
    {type:'stop', title:'Nurete Kannon, la «Kannon mojada»', text:[
      'Una pequeña imagen de Kannon en una pileta de agua a la que, según la tradición, se le echa agua por la cabeza como acto de purificación del cuerpo, el corazón y el alma.'
    ]},
    {type:'stop', title:'Salón interior Okuno-in', text:[
      'Muy parecido al salón principal, con su propio escenario butai más pequeño y una Kannon de mil brazos. Es el punto más sagrado del recinto: aquí se encontraba la cabaña del ermitaño Gyō-ei con la que se topó el monje Enchin y que dio origen al templo.'
    ]},
    {type:'stop', title:'Cascada Otowa', image:{src:'assets/kiyomizu/otowa.jpg', alt:'Cascada Otowa en Kiyomizu-dera'}, text:[
      'La cascada que da nombre al templo (Kiyomizu, «agua pura») cae a los pies del balcón dividida en tres chorros independientes. Elige uno: beber de los tres seguidos se considera un gesto de avaricia que anula el efecto. Suele haber cola, pero merece la pena acercarse a probar el agua.'
    ]},
    {type:'cards', title:'Elige tu chorro', items:[
      {icon:'heart', title:'Salud y longevidad', text:'El chorro de la izquierda, el más asociado tradicionalmente a una vida larga y sin enfermedades.'},
      {icon:'book', title:'Éxito en los estudios', text:'El chorro central se vincula al buen rendimiento académico y a superar exámenes.'},
      {icon:'droplet', title:'Éxito en el amor', text:'El chorro de la derecha, el que se dice que favorece encontrar pareja o fortalecer una relación.'}
    ]},
    {type:'heading', text:'Zona norte y salida', icon:'gate'},
    {type:'stop', title:'Pagoda Koyasu y templo Taisan-ji', text:[
      'Al sur del recinto principal, esta pagoda de tres pisos del siglo XVI está dedicada a la diosa protectora del parto, Senju Kannon; según la tradición, el emperador Shōmu y su esposa rezaron aquí para tener un parto sin complicaciones. El vecino templo Taisan-ji, cuyo nombre puede traducirse como «buen parto», comparte esa misma devoción.'
    ]},
    {type:'stop', title:'Puerta norte y residencia Jōju-in', text:[
      'La puerta Kita So-mon (reconstrucción de 1631) da paso a la antigua residencia privada del emperador Go-Kashiwabara. Entre el 1 y el 10 de noviembre abre al público su «jardín de la luna», obra de dos de los grandes jardineros de la historia de Japón, Sōami y Kobori Enshū.'
    ]},
    {type:'stop', title:'Los mil Jizō', text:[
      'Una zona con numerosas estatuas de piedra Jizō, muchas cubiertas de musgo y decoradas con gorritos y baberos dejados por devotos y familias.'
    ]},
    {type:'stop', title:'Santuario Kasuga-sha y salón Chūkō-dō', text:[
      'El pequeño santuario Kasuga-sha, ejemplo de la estética Momoyama pese a ser una reconstrucción de finales del Muromachi, convive con el salón Chūkō-dō, de construcción mucho más reciente (1997).'
    ]},
    {type:'stop', title:'Gran Salón de Lectura, Daikō-dō', text:[
      'Construido en 1978 para conmemorar el 1.200 aniversario de la fundación del templo, guarda en sus muros una huella de Buda de 3,4 metros acompañada por más de 4.000 pequeñas imágenes de los cuatro budas principales.'
    ]},
    {type:'stop', title:'Templo Hōshō-in y monumento a Aterui', text:[
      'El Hōshō-in es un pequeño subtemplo dedicado a Kannon del que apenas hay documentación. Cerca, un monumento erigido en 1994 recuerda a los capitanes de los pueblos del norte de Honshū que resistieron la expansión del poder central.'
    ]},
    {type:'stop', title:'Pagoda Jūichijūseki-sō y templo Enmei-in', text:[
      'Ya en el camino de bajada y salida, esta decorativa pagoda de piedra de once pisos precede al templo de la larga vida, Enmei-in, dedicado al Jizō de la longevidad.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El gran balcón se construyó con la técnica tradicional kake-zukuri, sin usar un solo clavo en sus uniones.',
      'De los 234 saltos rituales documentados desde el balcón en el periodo Edo, casi el 85% de quienes saltaron sobrevivieron.',
      'El santuario Jishu, dedicado al amor, convive dentro del recinto budista como ejemplo del sincretismo religioso habitual en Japón hasta 1868.'
    ]}
  ],
  hours: 'Abierto todos los días de 6:00 a 18:00 (hasta las 18:30 en algunos días de verano, y hasta las 21:00 durante iluminaciones nocturnas puntuales).',
  hoursSource: 'https://www.kiyomizudera.or.jp/en/',
  tickets: 'La entrada se compra en el acceso a la zona principal del templo; no suele hacer falta reserva previa.',
  official: 'https://www.kiyomizudera.or.jp/en/',
  tips: [
    'Entra a primera hora y continúa a pie por Sannenzaka y Ninenzaka antes de que lleguen los grupos turísticos.',
    'Elige solo uno de los tres chorros de la cascada Otowa: beber de los tres se considera un gesto de avaricia.',
    'Prueba el tainai meguri del Zuigu-dō si te gustan las experiencias fuera de lo habitual: son solo 100 yenes.',
    'Confirma el estado del santuario Jishu antes de ir, si su tradición de las piedras del amor es tu motivo principal de visita.'
  ],
  access: 'A pie por la cuesta Kiyomizuzaka desde el barrio de Higashiyama; la parada de autobús más cercana es Gojōzaka o Kiyomizu-michi.'
});
