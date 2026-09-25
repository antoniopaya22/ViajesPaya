// Shibuya — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'shibuya', city: 'tokio', zone: 'harajuku-shibuya', name: 'Shibuya', category: 'Barrio',
  image: 'assets/japon-shibuya.jpg',
  lat: 35.6595, lon: 139.7005,
  lead: 'El cruce peatonal más famoso del mundo y el termómetro de la moda japonesa, en permanente reconstrucción desde 2015.',
  duration: '1,5–2,5 horas',
  price: 'Paseo gratuito; miradores de pago',
  stats: [
    {value:'2027', label:'año previsto para terminar las obras de la estación', icon:'wood'},
    {value:'183 m', label:'altura del mirador gratuito Shibuya Hikarie', icon:'tower'},
    {value:'~1000', label:'años de historia del santuario Konno Hachimangū', icon:'gate'}
  ],
  blocks: [
    {type:'lead', text:'Shibuya es sinónimo de moda joven y de reinvención constante: el entorno de su estación lleva años en obras y no se espera que el proyecto esté terminado hasta 2027, así que el barrio cambia de aspecto casi cada vez que se visita. Su imagen más repetida sigue siendo el cruce de peatones frente a la estación, por el que se puede caminar en cualquier dirección al mismo tiempo.'},
    {type:'p', text:'Junto al cruce, la estatua de Hachikō recuerda al perro que siguió esperando a su dueño frente a la estación durante años tras su muerte, y es hoy uno de los puntos de encuentro más populares de Tokio (su tumba real está en el cementerio de Aoyama, junto a la de su dueño). El histórico mural de cerámica «La familia de Hachikō», de 1990 y obra de Ryūtarō Kitahara, se retiró en enero de 2025 durante las obras de renovación de la zona.'},
    {type:'heading', text:'El cruce y sus miradores', icon:'eye'},
    {type:'stop', title:'El paso de peatones', text:[
      'Se puede cruzar en cualquier dirección al mismo tiempo, y tras hacerlo muchos suben a la primera planta del Starbucks del edificio Tsutaya, frente a la estación, con vistas privilegiadas y gratuitas sobre el cruce.'
    ]},
    {type:'stop', title:'Shibuya Sky y otros miradores', text:[
      'Los nuevos rascacielos han añadido miradores por todo el barrio: el gratuito de la torre Shibuya Hikarie (planta 11, con vistas a los trenes entrando y saliendo de la estación), el de pago en la azotea de Magnet by Shibuya 109 sobre el propio cruce, y el más espectacular, Shibuya Sky, al aire libre en lo alto de Shibuya Scramble Square, abierto en noviembre de 2019.'
    ]},
    {type:'heading', text:'Moda, calles y rascacielos', icon:'bag'},
    {type:'stop', title:'Center-gai y Shibuya 109', text:[
      'Center-gai concentra tiendas, cafeterías y los neones que definen la imagen más reconocible del barrio, mientras Shibuya 109 sigue siendo el gran templo de la moda juvenil desde que popularizó la estética gyaru hace décadas; su icónico logo antiguo se renovó tras un concurso popular en 2018.'
    ]},
    {type:'stop', title:'Shibuya Stream', text:[
      'Junto al río, este complejo abierto en 2018 recuperó el trazado de la antigua línea privada Tōkyū Tōyoko, soterrada en 2013, en un paseo peatonal tranquilo que contrasta con el bullicio de la estación; buen lugar para tomar un yakisobapan o una limonada de yuzu.'
    ]},
    {type:'stop', title:'Dōgenzaka y el santuario Chiyoda-Inari', text:[
      'La colina de Dōgenzaka, célebre por sus love hotels, esconde también el pequeño y tranquilo santuario Chiyoda-Inari, con sus estatuas de zorro y farolillos de papel en pleno corazón de una de las zonas más animadas del barrio.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Hasta 2020, la oficina de información turística de Shibuya ocupaba un antiguo vagón de tren verde apodado Aogaeru («rana verde»), que hoy se conserva en Akita.',
      'El Henn na Café, atendido por un robot barista, funcionó hasta 2024 en el centro comercial Shibuya Modi.'
    ]},
    {type:'heading', text:'Rincones con menos turistas', icon:'tree'},
    {type:'stop', title:'Santuarios Konno Hachimangū y Toyosaka Inari', text:[
      'A pocos pasos del cruce, el santuario Konno Hachimangū tiene casi mil años de historia y escapó de los bombardeos de la Segunda Guerra Mundial; junto a él, un pequeño túnel de torii rojos del santuario Toyosaka Inari recuerda, a menor escala, al de Fushimi Inari en Kioto.'
    ]},
    {type:'stop', title:'Miyashita Park y Nonbei Yokocho', text:[
      'Miyashita Park, reformado sobre la azotea de un centro comercial junto a las vías del tren, ofrece un respiro verde con hotel incluido; a sus pies, la callejuela de bares Nonbei Yokocho recuerda, en miniatura, a Golden Gai en Shinjuku.'
    ]}
  ],
  hours: 'Calles de acceso libre; los miradores de pago tienen horario propio, generalmente hasta las 22:00-23:00.',
  price: 'Paseo gratuito; miradores de pago', tickets: 'Shibuya Sky y Magnet by Shibuya 109 se reservan en sus webs oficiales; el mirador de Shibuya Hikarie es gratuito.',
  tips: [
    'Para fotografiar el cruce sin pagar entrada, sube al Starbucks del edificio Tsutaya o al mirador gratuito de Shibuya Hikarie.',
    'El barrio cambia constantemente por las obras: comprueba accesos y pasarelas actualizados antes de ir.',
    'Reserva Shibuya Sky con antelación si quieres una franja concreta, sobre todo al atardecer.'
  ],
  access: 'Estación de Shibuya (JR Yamanote, líneas de metro Ginza/Hanzōmon/Fukutoshin y líneas privadas Tōkyū/Keiō Inokashira).',
  official: 'https://www.gotokyo.org/en/destinations/western-tokyo/shibuya/index.html'
});
