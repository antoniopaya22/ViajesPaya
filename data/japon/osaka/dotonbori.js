// Dōtonbori — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'dotonbori', city: 'osaka', zone: 'namba', name: 'Dōtonbori', category: 'Barrio y ocio',
  image: 'assets/dotonbori.jpg',
  lat: 34.6687, lon: 135.5015,
  lead: 'El canal de los neones, la comida callejera y el corredor más fotografiado de Osaka, presidido por el atleta luminoso de Glico Man.',
  duration: '1–2 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'1615', label:'año de finalización del canal, iniciado por el mercader Yasui Doton', icon:'droplet'},
    {value:'1935', label:'año de instalación del primer neón de Glico Man', icon:'lantern'},
    {value:'2014', label:'año en que el Glico Man cambió sus bombillas por LED', icon:'flame'},
    {value:'20 min', label:'duración de un crucero turístico por el canal', icon:'clock'}
  ],
  blocks: [
    {type:'lead', text:'Dōtonbori se desarrolló alrededor de un canal ideado en 1612 por el mercader Yasui Doton para conectar los ríos Umezu y Yokobori e impulsar el comercio del sur de Osaka; se completó en 1615, ya tras su muerte, y con la llegada de un teatro kabuki cuatro años más tarde se convirtió en el gran centro de entretenimiento de la ciudad. Llegó a tener seis teatros de kabuki, cinco teatros de marionetas bunraku y un espectáculo de autómatas karakuri, un legado que hoy sobrevive sobre todo en el espíritu festivo del barrio.'},
    {type:'p', text:'La expresión kuidaore («comer hasta arruinarse») resume el carácter de Osaka y de Dōtonbori en particular, y nace de un proverbio que contrapone Kioto («vestir hasta arruinarse») con Osaka: aquí se viene sobre todo a comer, y las fachadas de los restaurantes compiten por ser las más llamativas del país.'},
    {type:'heading', text:'Glico Man, el neón más fotografiado de Japón', icon:'lantern'},
    {type:'stop', title:'Un atleta de 20 metros sobre el puente Ebisu', text:[
      'Instalado en 1935 sobre el puente Ebisu (Ebisubashi), el neón de Glico Man —símbolo de la marca de dulces Glico— muestra a un atleta cruzando la meta sobre una pista de atletismo, con 20 metros de alto y 10 de ancho. En el pasado se veía tras él el perfil de Osaka, con el castillo, el Osaka Dome o la torre Tsutenkaku; hoy ese fondo se ha sustituido por el azul de la pista. En 2014 se cambiaron todas sus bombillas por LED, lo que permite programar versiones especiales del cartel para eventos como el Mundial de fútbol o las victorias del equipo local de béisbol, los Hanshin Tigers.'
    ]},
    {type:'stop', title:'El puente de los ligues y la maldición del Coronel', text:[
      'El propio puente Ebisu es también conocido como Nanpa-bashi o «puente de los ligues», un conocido punto de encuentro social de la ciudad. En 1985, un grupo de aficionados de los Hanshin Tigers arrojó al canal la estatua del Coronel Sanders de un KFC cercano; no se recuperó hasta 2009, dando origen a la superstición de la «maldición del Coronel» sobre la mala racha del equipo.'
    ]},
    {type:'heading', text:'Kuidaore Taro y las fachadas de Dōtonbori', icon:'flame'},
    {type:'stop', title:'El muñeco que no deja de tocar el tambor', text:[
      'De la expresión kuidaore nació en los años 50 Kuidaore Taro, un muñeco mecánico tocando el tambor sin parar, creado por el restaurante Cui-daore, un complejo de ocho plantas dedicado cada una a un tipo de comida de Osaka. El restaurante cerró en 2008, pero la presión popular consiguió que Taro volviera al año siguiente a la entrada del complejo Nakaza Cuidaore, donde sigue tocando hoy: uno de los símbolos más queridos del barrio.'
    ]},
    {type:'cards', title:'Fachadas que compiten por llamar la atención', items:[
      {icon:'flame', title:'Kinryu Ramen y su dragón dorado', text:'Abierto 24 horas, sirve ramen con caldo de huesos de cerdo bajo un llamativo dragón dorado en la fachada.'},
      {icon:'eye', title:'Kani Doraku, el cangrejo mecánico', text:'Un gigantesco cangrejo que mueve patas y ojos anuncia uno de los restaurantes de cangrejo más famosos de Osaka.'},
      {icon:'droplet', title:'Zuboraya y el pez globo', text:'Icónico restaurante de fugu (pez globo), con un enorme pez globo decorando la fachada, junto al pulpo animado del museo Dōtonbori Konamon.'},
      {icon:'flame', title:'Akaoni y el takoyaki de pulpo crudo', text:'Su diablo rojo en la fachada señala uno de los mejores locales de takoyaki de la zona, que usa pulpo crudo en vez de hervido.'}
    ]},
    {type:'stop', title:'La noria amarilla de Don Quijote', text:[
      'Junto al Glico Man, la fachada del centro comercial Don Quijote (Donki) luce una gran figura del dios de la fortuna Ebisu y una noria amarilla de 77,4 metros de alto, con 32 góndolas para cuatro pasajeros cada una. Dejó de funcionar en 2008 por una avería y no volvió a girar hasta comienzos de 2018; su vuelta completa dura 15 minutos y cuesta 600 yenes, con la noria abierta las 24 horas.'
    ]},
    {type:'heading', text:'El canal, hoy un lugar para pasear', icon:'droplet'},
    {type:'stop', title:'De la contaminación al paseo peatonal', text:[
      'Con la modernización de Japón el canal se degradó y contaminó durante décadas. Pensando en su 400º aniversario, en el año 2000 se instalaron nuevas esclusas que frenan la entrada de agua contaminada y mejoraron notablemente su calidad, aunque el agua sigue sin ser apta para el baño. En 2003 se añadieron los farolillos de papel que hoy forman parte de la imagen del canal, y en 2005 se inauguró el paseo peatonal entre los puentes Ebisu y Tazaemon.'
    ]},
    {type:'stop', title:'El templo Hōzenji, a un paso del canal', text:[
      'Muy cerca del bullicio del canal, escondido en un callejón, el templo budista Hōzenji guarda una singular escultura cubierta de musgo de la deidad Mizukake Fudō: es tradición echarle agua por encima al rezar, lo que con los años ha ido cubriendo la estatua de un espeso manto verde.'
    ]},
    {type:'heading', text:'Dulces con cola: Rikuro y 551 Horai', icon:'teacup'},
    {type:'cards', items:[
      {icon:'teacup', title:'La tarta de queso de Rikuro Ojisan', text:'De estilo cotton cheesecake, tan esponjosa que tiembla al salir del horno; se marca cada hora en punto, el mejor momento para comprarla recién hecha.'},
      {icon:'bag', title:'Los butaman de 551 Horai', text:'Bollos chinos al vapor rellenos de cerdo y verdura, en la esquina de Ebisubashi-suji con Namba Hondori: uno de los grandes clásicos de la comida callejera de Osaka.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El Glico Man llegó a mostrar el perfil de Osaka al fondo del corredor; hoy esa parte del diseño se ha sustituido por una pista de atletismo azul.',
      'La estatua del Coronel Sanders de un KFC cercano fue arrojada al canal por aficionados de los Hanshin Tigers en 1985 y no se recuperó hasta 2009.',
      'La noria del Donki, junto al Glico Man, estuvo casi diez años parada por una avería antes de volver a funcionar en 2018.'
    ]}
  ],
  hours: 'Calles y canal de acceso libre a cualquier hora; cada restaurante tiene su propio horario (algunos, como Kinryu Ramen, abren 24 horas).',
  hoursSource: 'https://osaka-info.jp/en/area/dotonbori/',
  tickets: 'No se necesita entrada para recorrer el barrio; los cruceros por el canal se pagan aparte (unos 900 ¥, 20 minutos).',
  official: 'https://osaka-info.jp/en/area/dotonbori/',
  tips: [
    'Ve al anochecer para ver los neones encendidos, pero también de día para fotografiar las fachadas sin tanta gente.',
    'Reserva apetito: es la mejor zona de Osaka para probar takoyaki, kushikatsu y okonomiyaki en un mismo paseo.',
    'Asómate al callejón del templo Hōzenji: está a un paso del canal y suele pasar desapercibido entre tanto neón.'
  ],
  access: 'A pie desde la estación de Namba (líneas Nankai, Midosuji, Sennichimae, Yotsubashi), cruzando hacia el norte hasta el canal.'
});
