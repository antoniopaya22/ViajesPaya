// Pontochō — ficha con estructura de bloques.
addJapanPlace({
  slug: 'pontocho', city: 'kioto', name: 'Pontochō', category: 'Barrio histórico',
  image: 'assets/japon-pontocho.jpg',
  lat: 35.0072, lon: 135.7708,
  lead: 'Una única calle estrecha de casas de té y restaurantes, paralela al río Kamo.',
  duration: '45–90 min',
  price: 'Paseo gratuito',
  stats: [
    {value:'600 m', label:'de largo, junto al río Kamo', icon:'🏮'},
    {value:'1712', label:'primeras casas de té del barrio', icon:'🍵'},
    {value:'5', label:'hanamachi o barrios de geishas de Kioto', icon:'👘'}
  ],
  blocks: [
    {type:'lead', text:'Pontochō es uno de los cinco hanamachi o distritos de geishas de Kioto (los gokagai), formado por una sola calle peatonal de 600 metros de largo y apenas 5 de ancho. Antes de urbanizarse no era más que un banco de arena del río Kamo: tras las obras de refuerzo de sus márgenes en 1670, empezaron a construirse casas paralelas al río, y ya en 1712 surgieron las primeras casas de té que convirtieron la zona en un próspero barrio de placer.'},
    {type:'heading', text:'De día y de noche', icon:'🌗'},
    {type:'p', text:'La atmósfera de la calle cambia mucho según la hora. De día se puede ver a maikos y geishas sin maquillar, yendo de compras o a clase, junto a repartidores preparando los restaurantes para la noche. De noche, la calle se llena de gente entrando en bares y restaurantes, y con algo de suerte se puede ver a alguna maiko caminando deprisa entre banquetes.'},
    {type:'stop', title:'El santuario del tanuki', text:[
      'Escondido en la calle hay un pequeño santuario dedicado a un tanuki de cerámica. Según la tradición local, un incendio en 1978 que costó la vida a una geisha se detuvo justo en el punto donde se encontró la figura, hecha pedazos por el calor. Desde entonces, vecinos y negocios de la zona le rinden homenaje, y geishas y maikos le piden que mantenga la calle libre de fuego.'
    ]},
    {type:'stop', title:'Terrazas kawayuka sobre el río', text:[
      'En verano, los restaurantes del lado más cercano al Kamo instalan terrazas elevadas sobre los antiguos bancos de arena, un lugar clásico —y caro— para refrescarse en las noches húmedas de Kioto. Una alternativa más económica es comprar algo para llevar y sentarse directamente en la orilla del río.'
    ]},
    {type:'stop', title:'Danzas y teatro de Pontochō', text:[
      'Pontochō contaba con unas 41 geishas y 10 maikos en 2009, que participan en banquetes de este y otros barrios. Sus danzas tradicionales, el Kamogawa Odori, se representan en abril y noviembre en el teatro de Pontochō, cerca de la calle Sanjō.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El origen del nombre Pontochō no está claro: se cree que viene del inglés point o del portugués pont, por la lengua de arena que había en la orilla del río.',
      'El blasón oficial del barrio es un chorlito, visible en los farolillos rojos que cuelgan de casi todos los establecimientos.'
    ]}
  ],
  hours: 'Calle pública accesible a cualquier hora; los restaurantes y casas de té tienen su propio horario, generalmente de noche.',
  hoursSource: 'https://kyoto.travel/en/see-and-do/pontocho.html',
  tickets: 'Los restaurantes se reservan de forma independiente; no se necesita entrada para pasear.',
  official: 'https://kyoto.travel/en/see-and-do/pontocho.html',
  tips: [
    'Visítala tanto de día, cuando se ve el trasiego cotidiano del barrio, como de noche, cuando se ilumina y cobra vida.',
    'Si buscas geishas o maikos de verdad, ten paciencia y respeto: no son una atracción, van y vienen de su trabajo.',
    'En verano, cenar en una terraza kawayuka sobre el río es una experiencia clásica pero cara: resérvala con antelación.'
  ],
  access: 'Corre paralela al río Kamo entre las calles Shijō y Sanjō, a un par de minutos a pie de la estación de Gion-Shijō (línea Keihan) o de Kawaramachi.'
});
