// Arashiyama Monkey Park Iwatayama — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'arashiyama-monkey-park', city: 'kioto', zone: 'arashiyama', name: 'Arashiyama Monkey Park Iwatayama', category: 'Naturaleza', reviewed: '2026-09',
  image: 'assets/japon-arashiyama-monkey-park.jpg',
  lat: 35.0106, lon: 135.6775,
  lead: 'Una subida a pie por el monte Iwatayama hasta una caseta de observación donde decenas de macacos japoneses en libertad conviven con una de las mejores vistas panorámicas sobre Kioto.',
  duration: '1–2 horas (incluida la subida)',
  price: '800 ¥ adulto (16 años o más), 400 ¥ niños de 4 a 15 años, gratis menores de 4',
  stats: [
    {value:'120-130', label:'macacos japoneses en semilibertad', icon:'footprints'},
    {value:'1957', label:'año de apertura como reserva natural', icon:'clock'},
    {value:'~20 min', label:'subida a pie hasta la caseta de observación', icon:'peak'},
    {value:'160 m', label:'desnivel salvado durante el ascenso', icon:'ruler'}
  ],
  blocks: [
    {type:'lead', text:'En la ladera sur del puente Togetsukyō, dentro del recinto del santuario Ichitani Munakata, se abre el acceso a Iwatayama, una montaña de apenas 160 metros de desnivel convertida en reserva natural en 1957. Desde entonces, un grupo de macacos japoneses (Macaca fuscata) —también llamados «monos de las nieves»— vive en libertad por toda la ladera, mientras los visitantes suben a pie hasta una caseta en la cima desde la que se domina buena parte de Kioto.'},
    {type:'p', text:'A diferencia de otros parques de animales, aquí no hay jaulas para los monos: son los propios visitantes quienes entran en una caseta con malla metálica para observarlos y darles de comer, invirtiendo el esquema habitual de un zoológico.'},
    {type:'heading', text:'La subida al monte Iwatayama', icon:'footprints'},
    {type:'stop', title:'Un camino de bosque de unos 20 minutos', text:[
      'Desde la entrada, un sendero de tierra y raíces —a tramos con bastante pendiente— asciende algo más de un kilómetro entre el bosque hasta la cima. Se tarda unos 20 minutos caminando a paso normal, aunque conviene calzado cómodo: puede embarrarse tras la lluvia. Es habitual cruzarse con algún macaco bajando hacia mitad de camino, antes incluso de llegar a la zona de observación.',
      'El desnivel es modesto (unos 160 metros) y el esfuerzo está al alcance de cualquiera con una condición física normal, incluidos niños; hay algún banco para descansar en el trayecto.'
    ]},
    {type:'heading', text:'La caseta de alimentación', icon:'tree'},
    {type:'stop', title:'Dar de comer solo desde dentro de la caseta', text:[
      'Arriba, junto al área de observación, hay una pequeña caseta de madera con malla metálica en las ventanas. Dentro se venden bolsas de cacahuetes, manzana o boniato (unos 100 ¥) para dar de comer a los monos a través de la rejilla: son ellos quienes se acercan a la malla a pedir comida con la mano extendida.',
      'La norma es estricta y se explica en varios idiomas al entrar: está terminantemente prohibido dar comida a los monos fuera de la caseta o directamente con la mano al aire libre. El objetivo es evitar que los animales, que siguen siendo salvajes, asocien a las personas con comida fácil fuera de un contexto controlado.'
    ]},
    {type:'heading', text:'Normas de seguridad con los monos', icon:'eye'},
    {type:'cards', title:'Tres normas que hay que respetar', items:[
      {icon:'eye', title:'No los mires fijamente a los ojos', text:'Un macaco interpreta la mirada directa y sostenida como un gesto de amenaza o desafío, y puede reaccionar mostrando los dientes o acercándose de forma agresiva.'},
      {icon:'bag', title:'No lleves bolsas ni comida a la vista', text:'Bolsas de plástico, mochilas abiertas o comida visible pueden despertar el interés de los monos, que asocian esos objetos con alimento e intentan cogerlos.'},
      {icon:'footprints', title:'Guarda las distancias y no los toques', text:'Aunque parezcan tranquilos, siguen siendo animales salvajes: no hay que acariciarlos, agacharse junto a ellos ni intentar tocarlos, y conviene mantener siempre cierta distancia.'}
    ]},
    {type:'heading', text:'Las vistas desde la cima', icon:'peak'},
    {type:'stop', title:'Panorámica sobre Kioto', text:[
      'La recompensa de la subida es una de las mejores vistas abiertas de la ciudad: desde la plataforma de observación se domina el valle del río Katsura, el puente Togetsukyō a los pies de la montaña y, en días despejados, buena parte del centro de Kioto y las colinas que la rodean. Es un buen lugar para parar a descansar antes de bajar por el mismo camino.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El parque funciona como reserva natural desde 1957: los monos no viven en jaulas, sino en libertad por toda la montaña, y es el visitante quien entra en la caseta con malla para observarlos y alimentarlos.',
      'Cada macaco nacido en el parque recibe un nombre propio que sigue la línea materna, una práctica de seguimiento que llevan a cabo investigadores desde mediados del siglo XX.',
      'Los macacos japoneses son el primate no humano que vive de forma natural más al norte del planeta, adaptados a inviernos fríos gracias a su espeso pelaje.'
    ]}
  ],
  hours: 'Todos los días de 9:00 a 16:30 (última entrada 16:00) en temporada alta; en invierno suele cerrar a las 16:00. Cierra el 1 de enero y en días de lluvia o nieve intensa.',
  hoursSource: 'https://www.monkeypark.jp/',
  tickets: 'La entrada se paga en la taquilla de acceso, junto al santuario Ichitani Munakata; solo se acepta efectivo en yenes, no se puede reservar online.',
  official: 'https://www.monkeypark.jp/',
  tips: [
    'Lleva solo efectivo en yenes: no se aceptan tarjetas ni para la entrada ni para la comida de los monos.',
    'Sube con calzado cómodo: el camino tiene tramos de tierra con pendiente que se embarran tras la lluvia.',
    'No mires a los monos fijamente a los ojos ni lleves bolsas o comida a la vista durante el ascenso.',
    'Combínalo con el bosque de bambú y el puente Togetsukyō: la entrada está a solo unos minutos a pie de ambos.'
  ],
  access: 'La entrada está junto al lado sur del puente Togetsukyō, dentro del recinto del santuario Ichitani Munakata, muy cerca del lado sur del templo Tenryū-ji. A pie desde la estación de Arashiyama (línea Randen/Keifuku) son unos 7 minutos; también accesible desde las estaciones JR Saga-Arashiyama y Hankyū Arashiyama.'
});
