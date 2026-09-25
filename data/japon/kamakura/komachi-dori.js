// Calle Komachi y templos zen de Kamakura — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'komachi-dori', city: 'kamakura', name: 'Calle Komachi y templos zen de Kamakura', category: 'Calle comercial',
  image: 'assets/japon-komachi-dori.jpg',
  lat: 35.3193, lon: 139.5507,
  lead: 'La calle comercial de Kamakura y, tierra adentro, el resto de templos zen y santuarios que completan la ciudad.',
  duration: '1–3 horas según cuántos templos se visiten',
  price: 'Paseo por la calle gratuito; cada templo cobra su propia entrada, normalmente entre 300 y 500 ¥',
  stats: [
    {value: '5', label: 'grandes templos zen de Kamakura (Kamakura Gozan)', icon: 'pagoda'},
    {value: '~360 m', label: 'longitud aproximada de la calle Komachi', icon: 'footprints'},
    {value: 'Kakekomidera', label: 'apodo de Tōkei-ji, antiguo refugio de mujeres maltratadas', icon: 'heart'},
    {value: '9', label: 'templos y santuarios adicionales reunidos en esta ficha', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Al salir de la estación de Kamakura aparece la calle comercial Komachi, una shōtengai sin techar que conecta la estación con el santuario Tsurugaoka Hachimangū y reúne cafeterías, tiendas de artesanía local y pequeños restaurantes: el punto de partida habitual para cualquier paseo por la ciudad.'},
    {type: 'p', text: 'Tierra adentro, Kamakura conserva un buen puñado de templos y santuarios menos conocidos que el Gran Buda o Hase-dera, pero con personalidad propia: desde los tres templos zen que completan los cinco grandes de la ciudad —Kenchō-ji y Engaku-ji tienen ficha propia por su tamaño e importancia— hasta pequeños santuarios de barrio con siglos de historia.'},
    {type: 'heading', text: 'La calle Komachi', icon: 'bag'},
    {type: 'stop', title: 'De la estación al santuario, entre tiendas y aperitivos', text: [
      'La calle Komachi discurre paralela a la avenida principal, sin tráfico rodado, y concentra la mayor densidad de comercios de la ciudad: dulces tradicionales, artesanía, souvenirs y puestos de comida callejera que se comen de pie mientras se pasea. Es el lugar más práctico para comer algo rápido o hacer las últimas compras antes de coger el tren de vuelta.'
    ]},
    {type: 'heading', text: 'Los cinco grandes templos zen de Kamakura', icon: 'pagoda'},
    {type: 'p', text: 'Kamakura conserva cinco grandes templos zen candidatos a Patrimonio de la Humanidad, ordenados por rango dentro del sistema Kamakura Gozan. Kenchō-ji, el primero, y Engaku-ji, el segundo, tienen entidad suficiente para su propia ficha; los otros tres completan el conjunto con un carácter más recogido.'},
    {type: 'cards', title: 'Jufuku-ji, Jōchi-ji y Jōmyō-ji', items: [
      {icon: 'gate', title: 'Jufuku-ji (3º)', text: 'Fundado por la viuda de Yoritomo, Hōjō Masako. Su fachada y el pasillo de acceso, flanqueados por bambú, son de una sobriedad muy fotogénica, aunque el interior del recinto no se abre al público.'},
      {icon: 'tower', title: 'Jōchi-ji (4º)', text: 'Una escalinata de piedra cubierta de musgo y una puerta principal de campanario son la postal más conocida de este templo, uno de los más tranquilos de la ruta zen del norte de la ciudad.'},
      {icon: 'tree', title: 'Jōmyō-ji (5º)', text: 'El quinto y último de los grandes zen, con un tejado de líneas muy marcadas en el pabellón principal y un jardín zen cuidado hasta el último detalle; tiene también su propia casa de té.'}
    ]},
    {type: 'heading', text: 'Otros templos y santuarios con personalidad propia', icon: 'scroll'},
    {type: 'cards', title: 'Más allá de los cinco grandes', items: [
      {icon: 'heart', title: 'Tōkei-ji', text: 'Antiguo refugio para mujeres que huían de matrimonios violentos, conocido como Kakekomidera («templo del refugio») o Engiridera («templo del divorcio»). Hoy es un pequeño remanso de belleza en miniatura, con un cementerio y jardines cuidados.'},
      {icon: 'tree', title: 'Zuisen-ji', text: 'Naturaleza zen poco intervenida en un pequeño valle rodeado de ciruelos, con un jardín tallado en la roca atribuido al monje Musō Soseki.'},
      {icon: 'rock', title: 'Jōkōmyō-ji', text: 'Candidato a Patrimonio de la Humanidad por albergar el enterramiento del clan Hōjō, la familia de regentes que gobernó Kamakura durante generaciones.'},
      {icon: 'pagoda', title: 'Kakuonji', text: 'Guarda un notable conjunto de estatuas budistas; las visitas al interior suelen hacerse con guía y en horarios concretos.'},
      {icon: 'droplet', title: 'Shōmyō-ji', text: 'Conocido por sus jardines, sus cascadas gemelas de simbolismo yin/yang y el pabellón dedicado a Fudō Myōō.'},
      {icon: 'book', title: 'Egara Tenjinsha', text: 'Santuario dedicado a la deidad de las artes literarias y protectora de los estudiantes, visitado sobre todo antes de exámenes importantes.'},
      {icon: 'footprints', title: 'Sugimotodera', text: 'Uno de los templos más antiguos de Kamakura, con una escalinata de piedra cubierta de musgo que es ya parte de su atractivo.'}
    ]},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Tōkei-ji sirvió durante siglos de refugio para mujeres que huían de matrimonios violentos, de ahí su apodo de «templo del divorcio».',
      'El sistema de los cinco grandes templos zen de Kamakura, el Kamakura Gozan, se inspiró directamente en la jerarquía monástica de la China Song.',
      'Varios de estos templos —Jōkōmyō-ji entre ellos— figuran junto al resto del patrimonio samurái de la ciudad entre los candidatos a Patrimonio de la Humanidad.'
    ]}
  ],
  hours: 'La calle Komachi es de acceso libre a cualquier hora; cada templo tiene su propio horario, generalmente entre las 8:00 y las 17:00.',
  hoursSource: 'https://www.trip-kamakura.com/',
  tickets: 'Las entradas de los templos se compran en el acceso de cada uno.',
  official: 'https://www.trip-kamakura.com/',
  tips: [
    'No intentes ver todos los templos en una sola visita: elige uno o dos según lo que te interese (vistas, jardines, historia) y deja margen para pasear.',
    'La calle Komachi es un buen sitio para comer algo rápido antes o después de subir a los templos.',
    'Kenchō-ji y Engaku-ji, los dos primeros del ranking zen, tienen su propia ficha con mucho más detalle.'
  ],
  access: 'La calle Komachi está justo a la salida de la estación de Kamakura; estos templos y santuarios se reparten al norte y noreste de la ciudad, la mayoría a 15-25 minutos a pie o en autobús local.'
});
