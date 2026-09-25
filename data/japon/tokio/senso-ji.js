// Sensō-ji — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'senso-ji', city: 'tokio', zone: 'este', name: 'Sensō-ji', category: 'Templo',
  image: 'assets/sensoji.jpg',
  lat: 35.7148, lon: 139.7967,
  lead: 'El templo budista más antiguo de Tokio, corazón espiritual de Asakusa y dedicado a Kannon, diosa de la misericordia.',
  duration: '1–1,5 horas',
  price: 'Entrada gratuita',
  stats: [
    {value:'628', label:'año de la leyenda fundacional', icon:'scroll'},
    {value:'670 kg', label:'peso del farolillo de Kaminarimon', icon:'lantern'},
    {value:'89', label:'tiendas en la calle Nakamise', icon:'bag'},
    {value:'6:00–17:00', label:'horario del salón principal Hondō', icon:'clock'}
  ],
  blocks: [
    {type:'lead', text:'La leyenda cuenta que en el siglo VII dos hermanos pescadores hallaron en el río Sumida una pequeña estatua de Kannon y decidieron consagrarla; con el auge del cercano barrio de placer de Yoshiwara en el periodo Edo, el tercer shōgun Tokugawa financió la mayoría de los edificios que hoy se pueden visitar, muchos reconstruidos tras los bombardeos de la Segunda Guerra Mundial que arrasaron gran parte de Asakusa.'},
    {type:'p', text:'La visita se recorre casi en línea recta: la puerta Kaminarimon da paso a la calle comercial Nakamise, que termina en la puerta Hozōmon y en la explanada del salón principal, con la pagoda de cinco pisos a un lado y el santuario sintoísta Asakusa Jinja al otro, un ejemplo clásico del sincretismo religioso japonés.'},
    {type:'heading', text:'La puerta del trueno y la calle Nakamise', icon:'gate'},
    {type:'stop', title:'Puerta Kaminarimon', text:[
      'Su nombre oficial es Fūraijinmon, «puerta de los dioses del viento y el trueno», por las estatuas de Fūjin y Raijin que la flanquean en la parte frontal; detrás se colocan las de Tenryū y Kinryū. La puerta original data del año 942 y se trasladó a su ubicación actual en 1635, aunque ha sido destruida varias veces y la estructura que se ve hoy es de 1960.',
      'El gran farolillo de papel y bambú, de 4 metros de alto, 3,4 de circunferencia y 670 kilos de peso, no es original: lo donó en 2003 el fundador de Panasonic para conmemorar el 400º aniversario del periodo Edo. Bajo el farolillo hay tallado un dragón de madera, fácil de pasar por alto entre tanta gente haciéndose fotos.'
    ]},
    {type:'stop', title:'Calle Nakamise', text:[
      'Con 250 metros de largo y 89 tiendas, es una de las calles comerciales más antiguas de Japón, nacida como zona de entretenimiento (monzen-machi) para los peregrinos que visitaban el templo. Vende de todo, desde kimonos y abanicos hasta dulces típicos como el ningyō-yaki, el agemanju o las galletas de arroz sembei.',
      'Las persianas metálicas de las tiendas están decoradas según la estación del año, así que merece la pena volver de noche, cuando el comercio cierra pero las decoraciones quedan a la vista y hay mucha menos gente que durante el día.'
    ]},
    {type:'stop', title:'Puerta Hozōmon', text:[
      'Antes llamada Niōmon, es la segunda puerta de acceso y guarda dos estatuas guardianas que, según cuentan, se modelaron en los años sesenta a imagen de los luchadores de sumo Myōbudani Kiyoshi y Kitanoumi. Las enormes sandalias de paja waraji que cuelgan al otro lado, de 2,5 toneladas cada una, las donan artesanos de Yamagata en agradecimiento por poder esculpir las estatuas protectoras.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El farolillo gigante de Kaminarimon se pliega durante el Sanja Matsuri de mayo para que los portadores de mikoshi puedan pasar bajo la puerta.',
      'La campana del salón Bentendō, de 1692, sobrevivió a los bombardeos de la Segunda Guerra Mundial aunque su torre tuvo que reconstruirse en los años cincuenta.'
    ]},
    {type:'heading', text:'El corazón del templo', icon:'pagoda'},
    {type:'stop', title:'Pagoda de cinco pisos', text:[
      'La pagoda original era del siglo X; destruida y reconstruida varias veces, la actual es de posguerra. No se puede visitar por dentro, ya que funciona como panteón simbólico donde se guardan tablillas mortuorias de miles de familias y algunas reliquias de Buda.'
    ]},
    {type:'stop', title:'Salón principal Hondō', text:[
      'También llamado Kannon-dō, es donde se cree que sigue enterrada la estatua de Kannon que hallaron los pescadores hace unos 1.400 años. El edificio, de 1.150 m², se divide en un santuario interior de tatami (naijin) y uno exterior de hormigón (gejin); en el interior hay una réplica de la Kannon que se muestra al público cada 13 de diciembre.',
      'Cerca de las escaleras de acceso está la zona de incienso y el temizu-ya, con una detallada estatua de bronce de un dragón; es habitual llevarse el humo del incienso a la parte del cuerpo que se quiera aliviar antes de subir a rezar. Frente al salón, por 100 yenes, se pueden sacar los omikuji o papelitos de la fortuna.'
    ]},
    {type:'stop', title:'Santuario Asakusa y puerta Nitenmon', text:[
      'En el extremo noreste del salón principal, el santuario sintoísta Asakusa Jinja está dedicado a los pescadores que hallaron la estatua y al anciano que decidió levantar el templo en su honor; su torii de piedra es de 1727. La cercana puerta Nitenmon, de comienzos del siglo XVII, se construyó para un santuario Tōshōgū que ardió poco después, y es una de las pocas estructuras del complejo que sobrevivió intacta a los bombardeos.'
    ]},
    {type:'heading', text:'Rincones menos conocidos del recinto', icon:'scroll'},
    {type:'cards', title:'Pequeños salones con historias propias', items:[
      {icon:'tree', title:'Yogodō', text:'Guarda una Kannon con ocho budas protectores del zodiaco y un jardín con el puente de piedra más antiguo de Tokio, de 1618; el edificio actual es de 1994.'},
      {icon:'wood', title:'Yakushidō', text:'De 1649, construido por el shōgun Iemitsu Tokugawa, es de las estructuras más antiguas del recinto; guarda al Buda de la medicina y sus generales celestiales.'},
      {icon:'flame', title:'Chingodō', text:'Alberga la imagen de un tanuki venerado como protector contra incendios y robos desde 1883; su festival se celebra cada 17 de marzo.'},
      {icon:'scroll', title:'Zenizuka Jizō-dō', text:'Un jizō consagrado sobre una jarra de monedas enterrada en el siglo XVIII; comerciantes y empresarios acuden aquí buscando prosperidad.'},
      {icon:'blossom', title:'Jardín del templo Denboin', text:'Residencia del sacerdote principal, con un jardín de más de 12.000 m² que solo abre al público de mediados de marzo a comienzos de mayo.'}
    ]}
  ],
  hours: 'Recinto exterior de acceso libre a cualquier hora; el salón principal (Hondō) abre de 6:00 a 17:00.',
  hoursSource: 'https://www.senso-ji.jp/english/',
  tickets: 'No se necesita entrada ni reserva.',
  official: 'https://www.senso-ji.jp/english/',
  tips: [
    'Llega antes de las 8:00 para fotografiar la Nakamise y la puerta Kaminarimon sin aglomeraciones.',
    'Prueba los omikuji (papelitos de la fortuna) frente al salón principal, por apenas 100 yenes.',
    'Compra unas barritas de incienso y purifícate en el temizu-ya antes de acercarte al Hondō, como hacen los visitantes locales.',
    'Vuelve de noche a la Nakamise para ver las decoraciones pintadas en las persianas metálicas de las tiendas cerradas.'
  ],
  access: 'Estación de Asakusa (líneas Ginza y Asakusa de metro, línea Tobu Skytree), salida 1, a un minuto de la puerta Kaminarimon.'
});
