// Fushimi Inari Taisha — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'fushimi-inari', city: 'kioto', zone: 'fushimi', name: 'Fushimi Inari Taisha', category: 'Santuario',
  image: 'assets/fushimi-inari.jpg',
  lat: 34.9671, lon: 135.7727,
  lead: 'Miles de torii bermellón que ascienden por el monte Inari, uno detrás de otro, por cuatro kilómetros de senderos.',
  duration: '1,5–4 horas según se recorra solo la base o toda la montaña',
  price: 'Entrada gratuita',
  stats: [
    {value:'32.000+', label:'santuarios Inari en todo Japón', icon:'gate'},
    {value:'4 km', label:'de senderos con torii hasta la cumbre', icon:'footprints'},
    {value:'233 m', label:'altura de la cumbre Ichi-no-mine', icon:'peak'},
    {value:'24 h', label:'abierto todos los días del año', icon:'clock'}
  ],
  blocks: [
    {type:'lead', text:'Fushimi Inari es la sede principal de una red de más de 32.000 santuarios japoneses dedicados a Inari, deidad del arroz y, por extensión, de la prosperidad en los negocios. El zorro o kitsune, mensajero de Inari, aparece por todo el recinto —a menudo con una llave en la boca que representa el almacén del arroz— y los comerciantes donan torii con su nombre para pedir que el dios les sea propicio, una costumbre que ha ido formando el pasadizo de puertas rojas que hace célebre al lugar.'},
    {type:'p', text:'El itinerario empieza en la estación de JR Inari: 200 metros después del primer gran torii bermellón aparece la puerta Rōmon, inicio real de la visita. A partir de ahí el camino solo sube, así que conviene llevar agua y algo de comer si se piensa completar la montaña entera.'},
    {type:'heading', text:'Un paseo por el santuario, torii a torii', icon:'gate'},
    {type:'stop', title:'Puerta Rōmon', image:{src:'assets/fushimi/romon.jpg', alt:'Puerta Romon de Fushimi Inari'}, text:[
      'La puerta principal de acceso al santuario se construyó en 1589 por orden de Toyotomi Hideyoshi. Cuenta la leyenda que, cuando su madre enfermó, Hideyoshi rezó a Inari y prometió una generosa donación si mejoraba; su recuperación llegó, y con el dinero se levantó esta puerta.'
    ]},
    {type:'stop', title:'Salón principal Honden', image:{src:'assets/fushimi/honden.jpg', alt:'Salón principal Honden'}, text:[
      'Declarado Bien de Interés Cultural, el Honden alberga las cinco deidades del monte Inari. El edificio actual, de estilo uchikoshi nagashi-zukuri, se reconstruyó en 1499 después de que la rebelión de Ōnin de 1468 arrasara los edificios originales; sus muros de más de 10 metros conservan decoraciones coloridas del periodo Azuchi-Momoyama.'
    ]},
    {type:'stop', title:'Senbon Torii, el camino de las mil puertas', image:{src:'assets/fushimi/senbon-torii.jpg', alt:'Camino Senbon Torii'}, text:[
      'Tras el salón principal arranca la imagen más icónica del santuario: miles de torii, uno junto a otro, pintados con la técnica inari-nuri. Desde el periodo Edo los fieles los donan para pedir o agradecer favores, y en la parte trasera de cada uno figura el nombre del donante y la fecha de la donación.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Existen unos 32.000 santuarios dedicados a Inari en todo Japón, y Fushimi Inari es la sede principal de todos ellos.',
      'Los torii del camino son donaciones reales: cualquier negocio puede encargar el suyo con su nombre grabado.'
    ]},
    {type:'stop', title:'Okusha Hōhaisho (Okuno-in)', image:{src:'assets/fushimi/okuno-in.jpg', alt:'Salón de plegarias Okuno-in'}, text:[
      'Al final del camino de las mil puertas está el salón de plegarias del santuario interior, construido en 1499 y orientado para ver los tres picos sagrados del monte Inari. Fue destruido por un desastre natural en 1794, reconstruido algo más grande y trasladado a su posición actual en 1975.'
    ]},
    {type:'stop', title:'Lámparas Omokaru-ishi', text:[
      'A la derecha del Okuno-in hay dos lámparas de piedra con una tradición muy concreta: se pide un deseo y se levanta la parte superior de la lámpara. Si pesa menos de lo que se esperaba, el deseo se cumplirá; si pesa más, no.'
    ]},
    {type:'stop', title:'Estanque Shin-ike', image:{src:'assets/fushimi/shin-ike.jpg', alt:'Estanque Shin-ike'}, text:[
      'También llamado Kodamagaike, cuenta la leyenda que si se dan dos palmadas a sus orillas mientras se busca a alguien, la dirección del eco marca el camino para encontrarlo.'
    ]},
    {type:'stop', title:'Intersección Yotsu-tsuji', image:{src:'assets/fushimi/yotsu-tsuji.jpg', alt:'Intersección Yotsu-tsuji'}, text:[
      'Unos 20 minutos después de Shin-ike se llega a la primera vista abierta sobre Kioto, con temperaturas algo más frescas en verano y hojas de momiji en otoño. Desde aquí se puede desviar al mirador Kojin-mine o al santuario Miyuki Hōhaisho, rodeado de bambú negro y conocido por su fude-zuka, un lugar donde enterrar ritualmente pinceles de caligrafía usados.'
    ]},
    {type:'heading', text:'La ruta de la montaña, para quien sigue subiendo', icon:'footprints'},
    {type:'p', text:'No hace falta completar el circuito de la montaña para disfrutar del santuario, pero quien sigue más allá de Yotsu-tsuji encuentra mucha menos gente y descubre que los torii no son un decorado: enlazan de verdad pequeños altares, estanques y cimas de culto reales a lo largo de unos 4 kilómetros y entre tres y cuatro horas de camino.'},
    {type:'stop', title:'Tercera cima, San-no-mine', text:['Aquí se encuentran las ruinas del antiguo santuario Shimosha Shinseki, dedicado a la deidad Shiragiku Okami.']},
    {type:'stop', title:'Cima intermedia, Ai-no-mine', text:['Una puerta torii de piedra, Nunetorii, con decoraciones que recuerdan al estilo gasshō de Shirakawa-go, marca el acceso a esta cima dedicada a la deidad Ise no Okami.']},
    {type:'stop', title:'Segunda cima, Ni-no-mine', text:['El antiguo santuario Nakasha Shinseki venera aquí a la deidad Aoki Okami.']},
    {type:'stop', title:'Cumbre Ichi-no-mine', text:['La cima principal del monte Inari, a 233 metros sobre el nivel del mar, alberga el santuario Kamisha Shinseki dedicado a Suehiro Okami. Es habitual sacar aquí papeletas de la fortuna omikuji, especialmente valoradas por los vecinos de Kioto.']},
    {type:'stop', title:'Santuario Mitsurugisha', text:['Consagra a la misma deidad que el santuario Shimogamo de Kioto. Justo al lado se puede ver la roca Kaminari-iwa, la «roca del trueno», que según la leyenda fue golpeada varias veces por rayos.']},
    {type:'stop', title:'Santuario Yakurikisha', text:['A solo cinco minutos de la cumbre, este santuario está dedicado a la deidad de la tos, por lo que actores de teatro kabuki acuden a pedir que no les falle la voz.']},
    {type:'stop', title:'Gozendani Hōhaisho', text:[
      'Situada entre las tres cimas, esta zona de plegarias ofrece una vista privilegiada de toda la montaña. Aquí se celebra cada 5 de enero el festival Oyama-sai, en el que se cuelga una cuerda sagrada shimenawa y se ofrece sake a las deidades antes de una peregrinación ritual.',
      'Desde aquí, un camino de bajada de unos 200 metros lleva a las cascadas Kiyotaki. Si se sigue por esa ruta alternativa uno se aleja de Fushimi Inari, pero llega, por un trayecto muy distinto y espectacular, hasta los templos Tōfuku-ji y Sennyū-ji.'
    ]},
    {type:'stop', title:'Santuario Suehiro', text:['Ya de bajada, este santuario rompe la norma de los zorros guardianes: aquí custodian el lugar unas ranas de piedra, con un juego de palabras que las asocia a «la suerte que vuelve» (fuku kaeru).']}
  ],
  hours: 'Acceso libre las 24 horas; oficinas y edificios del santuario tienen horario propio.',
  hoursSource: 'https://inari.jp/en/',
  tickets: 'No hace falta entrada ni reserva para recorrer los torii.',
  official: 'https://inari.jp/en/',
  tips: [
    'Sube más allá de los primeros tramos de Senbon Torii si buscas un paseo con menos gente.',
    'Lleva agua y calzado cómodo: la ruta completa a la cumbre son cuestas continuas de tres a cuatro horas.',
    'Ve a primera hora de la mañana para disfrutar del tramo inicial de torii casi en soledad.'
  ],
  access: 'La estación de JR Inari (línea JR Nara) queda justo enfrente del acceso principal; también se llega a pie desde la estación de Fushimi-Inari de la línea Keihan, un poco más lejos.'
});
