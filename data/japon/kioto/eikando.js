// Eikan-dō (Zenrin-ji) — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'eikando', city: 'kioto', zone: 'higashiyama-norte', name: 'Eikan-dō (Zenrin-ji)', category: 'Templo',
  image: 'assets/japon-eikando.jpg',
  lat: 35.0145, lon: 135.7953,
  lead: 'Un templo de más de 1.100 años al pie de Higashiyama, célebre por su Buda que gira la cabeza para mirar atrás y por ser, sin exagerar, uno de los mejores rincones de Kioto para el momiji de otoño.',
  duration: '1–1,5 horas (más en temporada de otoño, por las colas)',
  price: '1.000 ¥ adulto',
  stats: [
    {value:'853', label:'año de fundación del templo', icon:'scroll'},
    {value:'3.000', label:'arces momiji repartidos por el recinto', icon:'tree'},
    {value:'1082', label:'año de la leyenda del Buda que miró atrás', icon:'eye'},
    {value:'1928', label:'año de construcción de la pagoda Tahōtō', icon:'pagoda'}
  ],
  blocks: [
    {type:'lead', text:'Fundado en el año 853 por Shinshō, discípulo del monje Kūkai, el templo nació como centro de estudio de la escuela esotérica Shingon. En 863 el emperador Seiwa le concedió el nombre oficial de Zenrin-ji, «templo del bosque tranquilo». Su transformación llegó en el siglo XI de la mano de su séptimo abad, Yōkan (también leído Eikan), que lo convirtió en un centro de culto a Amida y de ayuda a los más pobres: de su nombre viene el apodo con el que se conoce hoy, Eikan-dō.'},
    {type:'p', text:'El recinto se apoya en la ladera de Higashiyama y sus salones no están sueltos, sino unidos entre sí por pasillos y escaleras de madera cubiertas que suben literalmente por la montaña, hasta llegar a una pequeña pagoda con las mejores vistas de la ciudad. Junto al templo vecino de Nanzen-ji, es una de las visitas clásicas de esta zona norte de Higashiyama, y probablemente la más fotografiada en la época de hojas rojas.'},
    {type:'table', title:'Cómo llegar desde el centro de Kioto', columns:['Método','Tiempo','Coste'], rows:[
      ['Autobús urbano (línea 5) a Nanzenji-Eikandō-michi','~35 min desde la estación de Kioto + 3 min a pie','230 ¥'],
      ['Metro línea Tōzai a Keage','~20 min + 15 min a pie','260 ¥'],
      ['A pie desde Nanzen-ji','~10 min','—']
    ]},
    {type:'heading', text:'De templo Shingon a templo de Amida', icon:'scroll'},
    {type:'stop', title:'Fundación y cambio de escuela budista', text:[
      'Shinshō compró la villa de un noble de la corte para instalar allí un lugar de culto a los cinco budas de la sabiduría; una década después, en 863, el emperador Seiwa reconoció oficialmente el templo con el nombre de Zenrin-ji. Durante dos siglos siguió siendo un centro Shingon, hasta que en el siglo XI el monje Yōkan (1033–1111) lo reorientó hacia la devoción a Amida y la práctica del nembutsu, sentando las bases de lo que sería la rama Seizan de la escuela Jōdo (Tierra Pura), de la que este templo es hoy cabeza.',
      'Yōkan era conocido por recitar el nembutsu decenas de miles de veces al día y por su entrega a los enfermos y a los pobres: se cuenta que durante una hambruna repartió los frutos de un ciruelo del recinto —el «ciruelo de la compasión», hiden-ume— entre quienes pasaban hambre. El templo fue arrasado durante la guerra Ōnin (1467–1477) y reconstruido a lo largo de las décadas siguientes; el nombre popular Eikan-dō, con el que se le conoce desde entonces, es un homenaje a aquel abad.'
    ]},
    {type:'heading', text:'La leyenda del Buda que miró hacia atrás', icon:'eye'},
    {type:'stop', title:'La estatua Mikaeri Amida', text:[
      'En el salón Amida-dō se guarda la pieza más singular del templo: una pequeña estatua de madera de Amida Nyorai, de apenas 77 centímetros y tallada a finales del periodo Heian, con la cabeza girada hacia atrás sobre el hombro izquierdo en lugar de mirar de frente. Es, según la tradición, la imagen de Buda que gira la cabeza más antigua de Japón, y hoy está clasificada como Bien Cultural Importante.',
      'La leyenda sitúa el origen de esta postura en la madrugada del 15 de febrero de 1082: mientras Yōkan recitaba el nembutsu caminando en círculo alrededor del altar, la estatua de Amida bajó de su pedestal y se puso a caminar por delante de él. Sobrecogido, Yōkan se detuvo un instante, y el Buda giró entonces la cabeza sobre el hombro para decirle «Eikan, ososhi» —«Eikan, vas lento»—. Yōkan le rogó que conservara para siempre esa postura como recordatorio de su compasión hacia quienes avanzan más despacio en el camino, y desde entonces la estatua permanece así, mirando hacia atrás.'
    ]},
    {type:'heading', text:'El Tahōtō y el pasillo del dragón dormido', icon:'tower'},
    {type:'stop', title:'Tahōtō, la pagoda con las mejores vistas', text:[
      'En el punto más alto del recinto, entre los árboles de la ladera, se levanta el Tahōtō: una pagoda de dos pisos —el superior circular, el inferior cuadrado— construida en 1928 gracias a las donaciones de fieles del templo. Desde su plataforma se domina buena parte de Kioto y del bosque de Higashiyama, con el propio recinto de Eikan-dō a los pies.'
    ]},
    {type:'stop', title:'Garyūrō, el pasillo que serpentea como un dragón', text:[
      'Para subir hasta la pagoda y recorrer los distintos salones del templo hay que atravesar el Garyūrō («pasillo del dragón tumbado»), una escalera-corredor de madera cubierta construida a principios del siglo XVI y restaurada durante el periodo Shōwa. Sus vigas se curvan siguiendo la propia pendiente de la montaña, dando la sensación de caminar sobre el lomo ondulado de un dragón; es una de las construcciones más singulares de Kioto y forma parte de los llamados «siete misterios de Eikan-dō».'
    ]},
    {type:'heading', text:'El templo de los arces', icon:'tree'},
    {type:'stop', title:'Tres mil arces alrededor del estanque Hōjō', text:[
      'Eikan-dō es, junto a Tōfuku-ji, uno de los grandes clásicos de Kioto en otoño: unos 3.000 arces —sobre todo de las variedades iroha-momiji y ō-momiji— rodean el jardín paisajístico y el estanque Hōjō-ike, frente al cual se cruza el pequeño puente Gokuraku-bashi. El dicho tradicional «momiji no Eikan-dō» («el Eikan-dō de las hojas rojas») resume su fama desde hace siglos; el mejor momento suele ser la segunda mitad de noviembre.'
    ]},
    {type:'stop', title:'Iluminación nocturna de otoño', text:[
      'Durante unas semanas de mediados de noviembre a mediados de diciembre el templo amplía su horario por la noche para una iluminación especial de los arces, con entrada y horario independientes de la visita diurna: conviene decidir de antemano si se quiere ir de día, de noche, o ambas veces, porque no se puede permanecer dentro de un turno a otro.'
    ]},
    {type:'cards', title:'Los siete misterios de Eikan-dō', items:[
      {icon:'wood', title:'Garyūrō', text:'El corredor de madera que serpentea ladera arriba como el lomo de un dragón dormido, uniendo los salones del templo con la pagoda Tahōtō.'},
      {icon:'blossom', title:'Hiden-ume', text:'El «ciruelo de la compasión»: según la tradición, sus frutos se repartieron entre los pobres durante una hambruna en tiempos del abad Yōkan.'},
      {icon:'bell', title:'Nukesuzume', text:'Un gorrión pintado en una puerta corredera tan realista que, cuenta la leyenda, terminó por escapar volando del propio dibujo.'},
      {icon:'flame', title:'Hi-yoke Amida', text:'Una imagen de Amida a la que se atribuye haber protegido al templo de un incendio cercano, de ahí su nombre de «Amida que aleja el fuego».'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El nombre popular Eikan-dō es en realidad otra lectura de los mismos caracteres con los que se escribe «Yōkan», el abad que dio origen a la leyenda del Buda que mira hacia atrás.',
      'La estatua Mikaeri Amida, de solo 77 centímetros, está considerada la imagen budista de este tipo —con la cabeza girada— más antigua conservada en Japón.',
      'El templo custodia cerca de sesenta obras clasificadas como Tesoro Nacional o Bien Cultural Importante, entre ellas biombos de Kanō Motonobu y Hasegawa Tōhaku.'
    ]}
  ],
  hours: 'Todos los días de 9:00 a 16:00 (cierre de puertas a las 17:00). Durante la exposición otoñal de tesoros e iluminación nocturna, aproximadamente de mediados de noviembre a mediados de diciembre, el horario diurno se mantiene y se añade un turno de noche independiente, normalmente de 17:30 a 20:30 (conviene confirmar las fechas exactas cada año en la web oficial).',
  hoursSource: 'https://www.eikando.or.jp/haikan.html',
  tickets: 'Entrada general 1.000 ¥ adulto, 800 ¥ estudiante universitario, 600 ¥ secundaria y 200 ¥ primaria. Durante la exposición otoñal de tesoros la tarifa diurna cambia ligeramente y la iluminación nocturna se paga aparte (en torno a 700 ¥, solo desde secundaria); no se puede combinar el turno de día con el de noche con una sola entrada.',
  official: 'https://www.eikando.or.jp/',
  tips: [
    'Combínalo con Nanzen-ji, a apenas 5-10 minutos a pie: los dos templos se visitan bien en la misma mañana.',
    'Si vas en plena temporada de momiji (segunda mitad de noviembre), llega a primera hora o entra por la tarde entre semana para evitar las peores colas.',
    'Sube por el Garyūrō hasta la pagoda Tahōtō: es el mejor mirador del recinto y muchos visitantes se quedan solo en la zona baja.',
    'Decide de antemano si prefieres la visita de día o la iluminación nocturna de otoño: son entradas y horarios distintos, no un mismo pase continuo.'
  ],
  access: 'Autobús urbano línea 5 hasta la parada Nanzenji-Eikandō-michi (3 minutos a pie), o metro línea Tōzai hasta la estación de Keage (unos 15 minutos a pie). Queda a un paseo corto del templo Nanzen-ji.'
});
