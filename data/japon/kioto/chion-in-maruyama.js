// Chion-in y parque Maruyama — ficha con estructura de bloques.
addJapanPlace({
  slug: 'chion-in-maruyama', city: 'kioto', zone: 'higashiyama-sur', name: 'Chion-in y parque Maruyama', category: 'Templo y parque',
  image: 'assets/japon-chion-in-maruyama.jpg',
  lat: 35.0056, lon: 135.7831,
  lead: 'La mayor puerta de madera de Japón y el parque de los cerezos más popular de Kioto, uno junto al otro.',
  duration: '1–2 horas',
  price: 'Recinto de Chion-in gratuito; jardines Hōjō y Yūzen 500 ¥',
  stats: [
    {value:'24 m', label:'altura de la puerta Sanmon, la mayor de Japón', icon:'gate'},
    {value:'106', label:'edificios repartidos por la ladera', icon:'pagoda'},
    {value:'7 t', label:'peso de la gran campana Daishōrō', icon:'bell'},
    {value:'680+', label:'cerezos en el parque Maruyama', icon:'blossom'}
  ],
  blocks: [
    {type:'lead', text:'Chion-in es el templo principal de la escuela budista Jōdo, fundada por el monje Hōnen en el siglo XII, y se encuentra en Higashiyama entre el santuario Yasaka y el parque Maruyama. El complejo actual, de más de 106 edificios repartidos por la ladera del monte Kachōzan, data en su mayoría de reconstrucciones posteriores a un incendio del siglo XVII.'},
    {type:'heading', text:'El templo Chion-in', icon:'pagoda'},
    {type:'stop', title:'Puerta Sanmon', text:[
      'De 1619, es la mayor puerta de madera de todo Japón: 24 metros de alto y tres accesos que simbolizan los tres caminos hacia la liberación budista.',
      'Al cruzarla se sube por la escalinata Otokozaka («cuesta de los hombres»), que también salió en la película El Último Samurái, de Tom Cruise, representando en la ficción el Palacio Imperial de Tokio.'
    ]},
    {type:'stop', title:'Puerta Kuromon y la roca calabaza Uryūseki', text:[
      'En el extremo norte del recinto, la puerta Kuromon da acceso a una gran roca previa a la construcción del templo, la Uryūseki o «roca calabaza», una de las siete maravillas de Chion-in. La leyenda cuenta que de ella nacieron calabazas sin que nadie las plantara, y que la propia deidad del santuario Yasaka la visitó en dos ocasiones; tras la segunda, brotaron varias calabazas en una sola noche. Si se llega en autobús, se suele entrar por la pequeña puerta Furomon, muy cerca de aquí.'
    ]},
    {type:'stop', title:'Salón Mieidō y el pasillo del ruiseñor', text:[
      'Tras subir la escalinata Otokozaka se llega al salón principal Mieidō, de 1639 y con unas medidas imponentes (35 x 45 metros), con el pasillo del ruiseñor cantarín (Uguisubari-no-rōka) que cruje al caminar, y a la gran campana Daishōrō, de siete toneladas, una de las tres más grandes de Japón, que solo suena en ocasiones especiales.',
      'El salón estuvo cubierto por andamios de restauración hasta 2019, así que no hay apenas fotos recientes del edificio terminado por delante: justo después llegó el cierre de fronteras por la pandemia.'
    ]},
    {type:'stop', title:'Jardines Yūzen y la cuesta Onnazaka', text:[
      'Junto a la puerta Sanmon, los jardines Yūzen o Yūzen-en son de diseño moderno y especialmente bonitos en primavera y otoño; a diferencia del recinto del templo, que es gratuito, tienen entrada de pago. Se visitan normalmente al salir por la cuesta Onnazaka («cuesta de las mujeres»), que permite abandonar el templo por el extremo más cercano al parque Maruyama sin volver a cruzar la puerta Sanmon.'
    ]},
    {type:'heading', text:'La zona superior: jardines Hōjō y el mausoleo de Hōnen', icon:'tree'},
    {type:'stop', title:'Casas de invitados y jardines Hōjō', text:[
      'Tras el salón Mieidō, un portón de estilo chino da acceso a las casas de invitados Ōhōjō y Kohōjō, de 1641, ejemplos del estilo arquitectónico shoin-zukuri con puertas correderas pintadas por discípulos de la escuela Kanō. A su alrededor se extienden los jardines Hōjō, diseñados en el siglo XVII por un monje del templo alrededor del estanque Shinji-ike, con una casa de té y vistas privilegiadas de Kioto.'
    ]},
    {type:'stop', title:'Camino Chie no Michi y el mausoleo Gobyō', text:[
      'Desde los jardines Hōjō, el camino Chie no Michi sube entre escaleras hasta la zona más alta del templo. Aquí se encuentra el salón Seishidō, de 1530 y el edificio más antiguo del complejo, y el tranquilo salón de plegarias Haiden, poco frecuentado incluso en temporada alta.',
      'El camino termina en el mausoleo Gobyō, que guarda los restos del fundador Hōnen (muerto en 1212) en un edificio de 1613 de estilo Momoyama, decorado con tallas de dragones, fénix y kirin.'
    ]},
    {type:'cards', title:'Las siete maravillas de Chion-in', items:[
      {icon:'droplet', title:'Wasuregasa, el paraguas olvidado', text:'Una varilla de paraguas en el balcón del Mieidō, hoy amuleto contra incendios; la leyenda duda entre un carpintero que ahuyentaba malos espíritus o un zorro marcando territorio.'},
      {icon:'footprints', title:'Uguisubari-no-rōka, el pasillo del ruiseñor', text:'550 metros de pasillo entre el Mieidō y el Shūedō cuyas maderas crujen como un ruiseñor al pisarlas; cuanto más sigilo, más crujen.'},
      {icon:'rock', title:'Uryūseki, la roca calabaza', text:'Junto a la puerta Kuromon, ligada a la leyenda de la deidad de Yasaka y sus calabazas nacidas en una noche.'},
      {icon:'wood', title:'Shiraki-no-hitsugi, los féretros de madera', text:'En lo alto de la puerta Sanmon; se dice que los constructores de la puerta se suicidaron para descansar en su obra.'},
      {icon:'eye', title:'Nukesuzume, los gorriones que volaron', text:'Pintura de Nobumasa Kanō en la casa Ōhōjō tan viva que se cuenta que los gorriones cobraron vida y escaparon del cuadro.'},
      {icon:'eye', title:'El gato que mira en tres direcciones', text:'Pintura sobre una puerta de cedro en la casa Ōhōjō: te observa lo mires desde donde lo mires (la original está demasiado dañada para exponerse; hoy se ve una réplica).'},
      {icon:'bag', title:'Ōshakushi, la gran pala de arroz', text:'2,5 metros y unos 30 kg; según la leyenda repartió arroz a los soldados en 1614, y hoy simboliza la compasión de Amida.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La campana Daishōrō, de 1636, mide 3,3 metros de alto y 2,7 de diámetro, y hacen falta 17 monjes para tocarla. Junto a las del templo Hōkō-ji, también en Kioto, y el templo Tōdai-ji de Nara, forma el trío de campanas más grandes de Japón. Solo suena en ocasiones especiales, como el festival de abril en honor a Hōnen o la noche de fin de año, cuando repica 108 veces.'
    ]},
    {type:'heading', text:'El parque Maruyama', icon:'blossom'},
    {type:'stop', title:'El cerezo llorón y el hanami', text:[
      'Convertido en parque público en 1871 y rediseñado en 1913 por el paisajista Jihei Ogawa, alberga el shidarezakura o cerezo llorón más fotografiado de Kioto, de unos 80 años, descendiente de un ejemplar anterior que vivió 300. Con más de 680 cerezos, es uno de los lugares más populares de la ciudad para el hanami en primavera.'
    ]},
    {type:'stop', title:'El monumento a Sakamoto Ryōma y Nakaoka Shintarō', text:[
      'Cerca del parque hay unas estatuas dedicadas a estos dos samuráis de Kōchi, figuras clave en el movimiento por la restauración del poder imperial, asesinados en Kioto en 1867 por partidarios del shogunato, apenas un año antes de la Restauración Meiji que ellos impulsaron sin llegar a verla.'
    ]}
  ],
  hours: 'El recinto exterior de Chion-in es de acceso libre; los edificios abren de 9:00 a 16:30. El parque Maruyama es de acceso público permanente.',
  hoursSource: 'https://www.chion-in.or.jp/en/',
  tickets: 'La entrada a los jardines se compra en su propio acceso dentro del templo.',
  official: 'https://www.chion-in.or.jp/en/',
  tips: [
    'Sube por la escalinata Otokozaka hasta el salón Mieidō y escucha el pasillo del ruiseñor cantarín.',
    'Visita el parque Maruyama en temporada de cerezos para ver el shidarezakura, uno de los más fotografiados de Kioto.'
  ],
  access: 'A pie desde el santuario Yasaka o desde la parada de autobús Chion-in-mae, en el límite entre Gion y Higashiyama.'
});
