// Meiji Jingū — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'meiji-jingu', city: 'tokio', zone: 'harajuku-shibuya', name: 'Meiji Jingū', category: 'Santuario',
  image: 'assets/meiji.jpg',
  lat: 35.6764, lon: 139.6993,
  lead: 'Un bosque de 120.000 árboles y un gran santuario dedicado al emperador Meiji, junto a Harajuku.',
  duration: '1–1,5 horas',
  price: 'Entrada al santuario gratuita; jardín imperial Gyoen 500 ¥',
  stats: [
    {value:'1921', label:'año de finalización del santuario', icon:'gate'},
    {value:'120.000', label:'árboles donados para el bosque en 1920', icon:'tree'},
    {value:'12 m', label:'altura del gran torii de madera', icon:'peak'},
    {value:'700.000 m²', label:'superficie total del recinto', icon:'ruler'}
  ],
  blocks: [
    {type:'lead', text:'El santuario Meiji, terminado en 1921, honra al emperador Meiji y a la emperatriz Shōken, artífices de la apertura y modernización de Japón tras la caída del shogunato Tokugawa en 1868. Se levantó sobre un jardín de lirios que la pareja imperial solía frecuentar; destruido en los bombardeos de 1945, el santuario se reconstruyó en 1958 con donaciones de todo el país.'},
    {type:'p', text:'Situado en un extremo de Harajuku, casi enfrente de la calle Takeshita y junto al parque Yoyogi, es uno de los santuarios más visitados de la ciudad; conviene contar con que estará lleno tanto de turistas como de locales.'},
    {type:'heading', text:'El camino de acceso', icon:'gate'},
    {type:'stop', title:'Gran torii y camino Minami-sandō', text:[
      'El acceso principal cruza un gran torii de madera de estilo myōjin, el mayor de su tipo en Japón (12 metros de alto y 17,1 de ancho), reconstruido con un ciprés de 1.500 años tras la destrucción del original por un rayo en 1966. Fíjate en los blasones de crisantemo tallados en el dintel: es el emblema de la familia imperial.',
      'Camino del recinto interior se pasa junto a hileras de barriles de sake, ofrenda anual de productores en honor al emperador, y de barriles de vino de Borgoña, donados desde 2006 por bodegas francesas en recuerdo de la afición del emperador Meiji por el vino europeo.'
    ]},
    {type:'stop', title:'Puerta Minami Shinmon', text:[
      'De 1920 y construida en madera de ciprés japonés y cobre, es la única puerta de dos pisos del recinto y una de las pocas estructuras que sobrevivieron a los bombardeos de la Segunda Guerra Mundial. En sus herrajes de madera y metal se pueden ver patrones con forma de corazón, un amuleto tradicional contra incendios.'
    ]},
    {type:'heading', text:'El complejo interior', icon:'bell'},
    {type:'stop', title:'Honden, el salón principal', text:[
      'De estilo nagare-zukuri en madera de ciprés japonés, alberga las deidades del santuario y se compone del salón de plegarias (noritoden), el salón interior (naihaiden) y el exterior (gehaiden), donde rezan los visitantes; se completó en 1920, fue destruido en la guerra y se reconstruyó en 1958, cuando se añadió el revestimiento de cobre.'
    ]},
    {type:'stop', title:'Árboles Meoto Kusu y tablillas ema', text:[
      'A un lado del Honden, los árboles gemelos Meoto Kusu, unidos por una cuerda sagrada shimenawa, se han convertido en símbolo de matrimonio feliz. Al otro lado, un espacio recoge las tablillas ema en las que los visitantes escriben sus deseos por 500 yenes; los sacerdotes las ofrecen cada mañana en un ritual llamado mikesai antes de quemarlas cuando se acumulan.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El bosque que rodea el santuario, de 700.000 m², se plantó artificialmente en 1920 con 120.000 árboles donados desde todo Japón y hoy parece un bosque centenario.',
      'Los omamori sowa-mamori, perfumados con aroma de alcanfor, se consideran especialmente propicios para el amor.',
      'El Kaguraden, salón de danzas y música sintoístas terminado en 1993, solo se puede visitar si coincide con algún festival o ritual, como el Shichi-go-san de noviembre.'
    ]},
    {type:'heading', text:'El recinto exterior', icon:'blossom'},
    {type:'stop', title:'Jardín imperial Gyoen', text:[
      'Al sur del gran torii, este jardín fue encargado por el propio emperador Meiji para su esposa y es célebre por sus lirios de junio, azaleas de primavera y arces de otoño; hay un cenador junto al estanque sur desde el que disfrutar de las vistas.'
    ]},
    {type:'stop', title:'Explanada Shibachi', text:[
      'Tras el salón principal, este espacio ofrece otro rincón de calma con el Museo del tesoro (actualmente cerrado), el Shiseikan Dōjō y el estanque norte, donde viven varias especies de patos junto a una roca con forma de tortuga (kame-ishi). Aquí se celebra el ritual nagashi-bina durante el Hina Matsuri del 3 de marzo.'
    ]}
  ],
  hours: 'Abre al amanecer y cierra al atardecer: aproximadamente 5:00–18:00 en verano y 6:00–16:00 en invierno.',
  hoursSource: 'https://www.meijijingu.or.jp/en/',
  tickets: 'No se necesita entrada para el recinto principal; el Gyoen se paga en el acceso.',
  official: 'https://www.meijijingu.or.jp/en/',
  tips: [
    'Entra por el gran torii sur, junto a la estación de Harajuku, para ver primero los barriles de sake y vino.',
    'Combina la visita con el parque Yoyogi y Harajuku, que están justo al lado.',
    'Si viajas en junio, no te pierdas los lirios del jardín Gyoen.'
  ],
  access: 'Estación de Harajuku (línea JR Yamanote) o Meiji-jingūmae (metro Chiyoda/Fukutoshin), a un minuto a pie del gran torii sur.'
});
