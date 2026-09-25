// Shinsekai — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'shinsekai', city: 'osaka', zone: 'tennoji', name: 'Shinsekai', category: 'Barrio', reviewed: '2026-09',
  image: 'assets/japon-shinsekai.jpg',
  lat: 34.6524, lon: 135.5063,
  lead: 'El «nuevo mundo» retro-futurista de Osaka, con la torre Tsutenkaku como epicentro y el kushikatsu como bandera gastronómica.',
  duration: '1–1,5 horas',
  price: 'Paseo por el barrio gratuito; entrada de pago para subir a la torre Tsutenkaku',
  stats: [
    {value:'1912', label:'año de construcción de la primera Tsutenkaku (64 m)', icon:'tower'},
    {value:'103 m', label:'altura de la torre Tsutenkaku actual', icon:'ruler'},
    {value:'1956', label:'año de reconstrucción de la torre tras la 2ª Guerra Mundial', icon:'flame'},
    {value:'1979', label:'año desde el que sus luces predicen el tiempo', icon:'lantern'}
  ],
  blocks: [
    {type:'lead', text:'Shinsekai, «el nuevo mundo», se inauguró a comienzos del siglo XX con la torre Tsutenkaku como centro neurálgico de un parque de atracciones: su mitad norte se inspiró en el Paris de la época y su mitad sur en la Coney Island neoyorquina, una mezcla que todavía define el carácter nostálgico y algo desgastado del barrio.'},
    {type:'p', text:'Durante buena parte de la posguerra, Shinsekai fue considerada la zona más peligrosa, pobre y sucia de Japón, una reputación que en parte todavía conserva; sin embargo, el turismo gastronómico la ha revitalizado por completo y hoy es uno de los rincones más fotografiados de Osaka.'},
    {type:'heading', text:'La torre Tsutenkaku, dos veces reconstruida', icon:'tower'},
    {type:'stop', title:'De 64 a 103 metros, pasando por la guerra', text:[
      'La Tsutenkaku actual, de 103 metros, es en realidad la segunda torre construida en el mismo lugar. La original, de 64 metros, se levantó en 1912 como parte del parque de atracciones Luna Park; sufrió un grave incendio en 1943 y fue desmantelada poco después para reutilizar su acero como armamento durante la Segunda Guerra Mundial.',
      'La torre que se ve hoy se reconstruyó en 1956, impulsada por la empresa Hitachi con apoyo del ayuntamiento: más alta que la original y reforzada contra terremotos y tifones, se pensó como símbolo del progreso del «nuevo mundo» de la posguerra.'
    ]},
    {type:'stop', title:'Unas luces que predicen el tiempo', text:[
      'Desde 1979, el color de las luces de la parte superior de la torre funciona como una peculiar predicción meteorológica, en colaboración con la Agencia Meteorológica de Japón: blanco significa despejado, naranja nublado y azul lluvia, con combinaciones que indican además cómo va a cambiar el día. Desde 2011 se le sumaron LEDs que cambian de color según el mes: blanco en enero-febrero, rosa en marzo-abril, verde en mayo-junio, azul en julio-agosto, dorado en septiembre-noviembre y verde azulado en diciembre.'
    ]},
    {type:'stop', title:'Qué hay dentro de la torre', text:[
      'En la primera planta espera una estatua del personaje Kinnikuman para la foto de rigor; el ascensor sube hasta la segunda planta, decorada como un tranvía de comienzos del siglo XX, desde donde se compran las entradas a los observatorios de la cuarta y quinta planta. Entre medias, la segunda y tercera planta reúnen tiendas de productos Glico y el Café de Luna Park. En el observatorio de la cuarta planta espera la estatua de un elefante dorado, deidad india de la suerte, y en el de la quinta, la popular figura de Billiken, el «dios de la felicidad» o «de las cosas como deberían ser», al que es tradición frotarle las plantas de los pies para pedir buena suerte.'
    ]},
    {type:'heading', text:'Kushikatsu, fugu y un pez globo que ya no está', icon:'flame'},
    {type:'p', text:'Shinsekai es uno de los mejores sitios de Osaka para probar el kushikatsu, las brochetas empanadas típicas de la ciudad, y también uno de los barrios asociados al fugu, el pez globo. El restaurante Zuboraya, célebre durante décadas por el enorme pez globo que decoraba su fachada, cerró definitivamente en 2020 por la crisis del COVID, aunque el plato sigue siendo habitual en otros locales de la zona.'},
    {type:'cards', title:'Además del kushikatsu', items:[
      {icon:'droplet', title:'Spa World / Sekai no Daionsen', text:'Un spa y onsen decorado al estilo europeo en una de sus salas y al estilo asiático en otra; las salas se intercambian cada mes entre hombres y mujeres.'},
      {icon:'lantern', title:'Ambiente de neón', text:'De noche, los carteles y luces de los restaurantes dan al barrio un aspecto muy distinto al del día, mucho más animado y algo kitsch.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El acero de la primera Tsutenkaku, desmantelada en 1943, se reutilizó como armamento durante la Segunda Guerra Mundial.',
      'El color de las luces superiores de la torre predice el tiempo desde 1979, en colaboración con la Agencia Meteorológica de Japón.',
      'La estatuilla de Billiken, en el quinto piso, se frota en los pies para pedir buena suerte; es uno de los símbolos más queridos del barrio.'
    ]}
  ],
  hours: 'Calles de acceso libre; la torre Tsutenkaku suele abrir de 10:00 a 20:00 (último acceso más temprano).',
  hoursSource: 'https://www.tsutenkaku.co.jp/en/',
  tickets: 'La entrada a los observatorios de la torre se compra en la propia base del edificio.',
  official: 'https://www.tsutenkaku.co.jp/en/',
  tips: [
    'Prueba el kushikatsu en alguno de los locales del barrio: la regla no escrita es no volver a mojar la brocheta ya mordida en la salsa comunitaria.',
    'De noche, los carteles y luces de neón de los restaurantes dan al barrio un ambiente muy distinto al de día.',
    'Combina la visita con Nipponbashi: se puede caminar entre ambos barrios en pocos minutos.'
  ],
  access: 'A pie desde la estación de Dobutsuen-mae (metro) o Shin-Imamiya (JR/Nankai); también se puede llegar caminando desde Nipponbashi/Den Den Town.'
});
