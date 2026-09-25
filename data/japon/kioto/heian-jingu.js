// Heian Jingū y canal Okazaki — ficha con estructura de bloques.
addJapanPlace({
  slug: 'heian-jingu', city: 'kioto', zone: 'higashiyama-norte', name: 'Heian Jingū y canal Okazaki', category: 'Santuario y paseo',
  image: 'assets/japon-heian-jingu.jpg',
  lat: 35.0156, lon: 135.7824,
  lead: 'Un santuario de 1895 que reconstruye a menor escala el antiguo palacio de la capital Heian.',
  duration: '1–1,5 horas',
  price: 'Santuario gratuito; jardines de pago',
  stats: [
    {value:'1895', label:'construido para el 1.100 aniversario de Kioto', icon:'scroll'},
    {value:'24,2 m', label:'altura del gran torii de acceso', icon:'gate'},
    {value:'33.000 m²', label:'superficie de los jardines Shin-en', icon:'tree'}
  ],
  blocks: [
    {type:'lead', text:'Heian Jingū se construyó entre 1893 y 1895 para conmemorar el 1.100 aniversario de la fundación de Heian-kyō, la antigua Kioto, y está dedicado a los emperadores Kammu, fundador de la ciudad, y Kōmei, el último antes de la restauración Meiji: dos figuras que marcan el principio y el fin de Kioto como capital de Japón.'},
    {type:'stop', title:'Kōmei, un segundo kami para el santuario', text:[
      'Kammu fue el único dedicado del santuario original, pero los habitantes de Kioto consideraban que Kōmei había sentado las bases del Japón moderno, así que en 1938 se organizó una asociación para convertirlo también en kami de Heian Jingū. El proyecto se unió a los preparativos del 2.600 aniversario de la fundación de Japón, y el 19 de octubre de 1940 se celebró la ceremonia que lo consagró. Desde entonces el santuario recuerda a dos emperadores que marcan, respectivamente, el principio y el final de Kioto como capital.'
    ]},
    {type:'stop', title:'El gran torii y la puerta Ōten-mon', text:[
      'Sus edificios siguen el estilo del antiguo Chōdō-in, el recinto administrativo de la capital Heian, aunque a menor escala que el original. El gran torii de acceso, construido en 1929 junto al canal Okazaki, mide 24,2 metros de alto y 33,9 entre sus pilares, y es una de las mayores puertas sintoístas de Japón. Tras cruzar la puerta bermellón Ōten-mon, de 1894, se accede al complejo, con las torres de vigilancia Byakko-rō y Sōryū-rō y el salón exterior Daigoku-den, reconstruido en 1976 tras el incendio de ese mismo año que destruyó nueve edificios del santuario.'
    ]},
    {type:'stop', title:'Puertas laterales, torres y el santuario interior', text:[
      'Ya dentro del recinto, las puertas laterales Nishi-mon y Higashi-mon dan acceso a los salones Gakuden y Kaguraden, y la plataforma Ryūbi-dan separa la parte exterior del santuario de la interior. Junto a la torre Sōryū-rō crece el cerezo Sakon-no-sakura, y junto a la torre Byakko-rō el naranjo Ukon-no-Tachibana: la misma pareja de árboles que flanquea el Shishinden del Palacio Imperial de Kioto.',
      'Tras el salón exterior Daigoku-den se llega al santuario interior Naihai-den y al salón principal Honden, ambos reconstruidos en 1976 tras el incendio de ese año que destruyó nueve edificios del complejo.'
    ]},
    {type:'stop', title:'Los jardines Shin-en', text:[
      'De unos 33.000 metros cuadrados y diseño de la era Meiji, rodean el complejo en cuatro secciones y son de los pocos rincones de pago del conjunto: uno de los paseos más recomendables de Kioto en primavera y otoño.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Heian Jingū es el santuario del Jidai Matsuri o «festival de las eras», uno de los tres grandes festivales de Kioto: cada octubre una procesión recorre la ciudad con trajes que repasan los distintos periodos de su historia, desde la fundación de Heian-kyō hasta la era Meiji.'
    ]}
  ],
  hours: 'El santuario abre a las 6:00 y cierra entre las 17:00 y las 18:00 según la época; los jardines abren de 8:30 a entre las 16:30 y 17:30.',
  hoursSource: 'https://www.heianjingu.or.jp/english/',
  tickets: 'La entrada a los jardines Shin-en se compra en su propio acceso.',
  official: 'https://www.heianjingu.or.jp/english/',
  tips: [
    'Ve por la calle Niōmon para ver el gran torii con los cerezos de la cuesta Keage al fondo en primavera.',
    'Combina la visita con el paseo por el canal Okazaki, que conecta con museos y jardines cercanos.'
  ],
  access: 'A pie desde la parada de autobús Okazaki-kōen o desde la estación de metro Higashiyama (línea Tōzai), cruzando el canal Okazaki.'
});
