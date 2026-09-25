// Naramachi — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'naramachi', city: 'nara', name: 'Naramachi', category: 'Barrio histórico', reviewed: '2026-09',
  image: 'assets/japon-naramachi.jpg',
  lat: 34.675024, lon: 135.830667,
  lead: 'Un laberinto de callejuelas con casas de comerciantes de madera, al sur de Kōfuku-ji, construido sobre los antiguos terrenos del templo Gangō-ji.',
  duration: '1,5–2,5 horas paseando sin prisa',
  price: 'Acceso libre al barrio; Koshi-no-ie es gratuito',
  stats: [
    {value:'593', label:'fundación del linaje del templo Gangō-ji, como Hōkō-ji en Asuka', icon:'scroll'},
    {value:'1998', label:'Gangō-ji, declarado Patrimonio de la Humanidad', icon:'trophy'},
    {value:'1.400', label:'años de antigüedad de parte de las tejas de su salón principal', icon:'wood'},
    {value:'10–20 min', label:'a pie desde las estaciones de Kintetsu Nara o JR Nara', icon:'footprints'}
  ],
  blocks: [
    {type:'lead', text:'Al sur de Kōfuku-ji y del estanque Sarusawa, Naramachi ocupa lo que fue el enorme recinto del templo Gangō-ji: a medida que sus terrenos se fueron urbanizando desde el siglo XV, el barrio creció durante el periodo Edo como zona de comerciantes, destiladores de sake y artesanos, y hoy conserva un entramado de calles estrechas con casas de madera tradicionales (machiya) reconvertidas en tiendas de artesanía, cafés y pequeños museos.'},
    {type:'p', text:'No tiene un límite oficial, pero suele entenderse como la zona que se extiende desde el entorno de Sarusawa hacia el sur, hasta el área de Gokurakubō de Gangō-ji: se recorre bien a pie en 10-20 minutos desde las estaciones de Kintetsu Nara o JR Nara, y merece la pena perderse por sus calles sin un plan fijo.'},
    {type:'heading', text:'Gangō-ji, el origen budista del barrio', icon:'scroll'},
    {type:'stop', title:'El templo que da nombre y forma al barrio', text:[
      'Gangō-ji desciende de Hōkō-ji (también llamado Asuka-dera), fundado en el año 593 por el clan Soga como el primer gran templo budista de Japón. Se trasladó a Nara en 718, cuando la capital se estableció en Heijō-kyō, y desde 1998 forma parte de los «Monumentos Históricos de la Antigua Nara» declarados Patrimonio de la Humanidad por la UNESCO.',
      'Parte de las tejas del tejado de su salón principal se remontan al periodo Asuka, hace unos 1.400 años, entre las más antiguas que se conservan en uso en cualquier edificio de Japón. Con el tiempo, buena parte de su antiguo y extenso recinto se fue parcelando y vendiendo, dando origen al trazado urbano que hoy se conoce como Naramachi.'
    ]},
    {type:'heading', text:'Una casa de comerciantes abierta al público', icon:'wood'},
    {type:'stop', title:'Koshi-no-ie, una machiya reconstruida', text:[
      'Koshi-no-ie es una casa de comerciantes tradicional reconstruida por el ayuntamiento y abierta gratis al público, pensada para enseñar cómo se vivía en una machiya de Nara: incluye el fogón kamado de la cocina, un patio interior (naka-niwa) que ilumina y ventila la casa, una escalera-armario para aprovechar el espacio y una claraboya sobre el tejado. Su fachada de celosía de madera (koshi), que deja ver el interior sin exponerlo del todo, da nombre tanto a la casa como a este estilo constructivo.'
    ]},
    {type:'heading', text:'Los monos que protegen la casa', icon:'heart'},
    {type:'stop', title:'Migawari-zaru, el «mono sustituto»', text:[
      'Es habitual ver colgados de los aleros de las casas pequeños muñecos de tela roja y blanca con forma de mono: son los migawari-zaru, «monos sustitutos», un amuleto tradicional que se cuelga para que absorba en lugar de la familia las desgracias y enfermedades que pudieran llegar al hogar. El pequeño museo Naramachi Shiryōkan explica con detalle el origen de esta costumbre y otras tradiciones del barrio.'
    ]},
    {type:'cards', title:'Qué hacer en Naramachi', items:[
      {icon:'teacup', title:'Parar en un café centenario', text:'Muchas machiya restauradas funcionan hoy como cafés y tiendas de dulces tradicionales, ideales para hacer una pausa entre templos.'},
      {icon:'bag', title:'Artesanía y tiendas pequeñas', text:'Cerámica, textiles y otros oficios tradicionales conviven con tiendas de recuerdos más actuales en las mismas calles estrechas.'},
      {icon:'eye', title:'Callejear sin mapa', text:'El barrio se disfruta tanto por sus puntos concretos como por perderse sin rumbo entre casas de madera y patios escondidos.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El linaje del templo Gangō-ji se remonta al año 593, cuando se fundó como Hōkō-ji en Asuka: se considera el origen del primer gran templo budista de Japón.',
      'Los migawari-zaru, los muñecos de tela con forma de mono colgados en los aleros, se cuelgan para que carguen ellos con la mala suerte de la familia.',
      'Buena parte del trazado de calles estrechas de Naramachi corresponde al antiguo recinto del templo Gangō-ji, urbanizado poco a poco desde el siglo XV.'
    ]}
  ],
  hours: 'El barrio se pasea libremente a cualquier hora; Koshi-no-ie abre de 9:00 a 17:00 (última entrada 16:30) y cierra los lunes.',
  hoursSource: 'https://www.narashikanko.or.jp/en/',
  tickets: 'No se necesita entrada para pasear por el barrio; Koshi-no-ie es de acceso gratuito.',
  official: 'https://www.narashikanko.or.jp/en/',
  tips: [
    'Combínalo con la visita a Kōfuku-ji y el estanque Sarusawa: están justo al norte del barrio.',
    'Entra en Koshi-no-ie aunque sea un momento: es gratis y da una idea muy clara de cómo era una casa de comerciantes tradicional.',
    'Busca los migawari-zaru colgados en los aleros: una vez que aprendes a verlos, aparecen por todo el barrio.'
  ],
  access: 'A pie desde la estación de Kintetsu Nara o JR Nara (10-20 minutos), o siguiendo el paseo desde Kōfuku-ji y el estanque Sarusawa hacia el sur.'
});
