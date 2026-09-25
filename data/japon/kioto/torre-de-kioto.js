// Torre de Kioto — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'torre-de-kioto', city: 'kioto', zone: 'estacion', name: 'Torre de Kioto', category: 'Torre panorámica',
  image: 'assets/japon-torre-de-kioto.jpg',
  lat: 34.9875, lon: 135.7592,
  lead: 'Una torre-vela de 131 metros frente a la estación de Kioto: la construcción más alta de la ciudad y, durante décadas, su edificio más discutido.',
  duration: '45 min–1,5 horas',
  price: '900 ¥ adulto (mirador)',
  stats: [
    {value:'131 m', label:'altura total, la construcción más alta de Kioto', icon:'tower'},
    {value:'1964', label:'año de inauguración, el mismo de las Olimpiadas de Tokio', icon:'clock'},
    {value:'100 m', label:'altura del mirador sobre la ciudad', icon:'ruler'},
    {value:'2 min', label:'a pie desde la salida central de la estación de Kioto', icon:'footprints'}
  ],
  blocks: [
    {type:'lead', text:'Inaugurada el 28 de diciembre de 1964, la Torre de Kioto se alza justo enfrente de la estación central y es, con sus 131 metros, la construcción más alta de la ciudad. Se levantó en pleno año de la reconstrucción de posguerra, coincidiendo con la llegada del Shinkansen y los Juegos Olímpicos de Tokio, como símbolo de una nueva era de modernización para Japón.'},
    {type:'p', text:'A diferencia de otras torres de observación japonesas construidas como estructuras de celosía metálica, la Torre de Kioto usa un armazón monocasco: un cilindro de acero soldado que reparte el peso por su propia piel, sin vigas internas visibles. Fue la primera vez que Japón empleaba esta técnica a gran escala, y permite a la torre mantenerse esbelta y blanca mientras resiste terremotos y tifones sobre un edificio de nueve plantas que le sirve de base.'},
    {type:'heading', text:'Una vela encendida sobre la ciudad', icon:'flame'},
    {type:'stop', title:'El diseño de Yamada Mamoru y Tanahashi Makoto', text:[
      'El arquitecto Yamada Mamoru y el ingeniero Tanahashi Makoto diseñaron la torre para evocar una vela japonesa tradicional (rōsoku): de ahí su forma afilada, su color blanco y el remate rojizo de la antena en la punta. La idea, según sus propios autores, era que la torre actuara como un faro que "iluminara" el camino de quienes llegaban a Kioto por primera vez, con la estación de tren a sus pies.',
      'Ese parecido con un faro le dio pronto el apodo de "el faro de Kioto", y su silueta blanca y estilizada se convirtió en una de las imágenes más reconocibles al salir de la estación, junto al perfil bajo de tejados tradicionales que se extiende a su alrededor.'
    ]},
    {type:'heading', text:'La polémica que dividió a la ciudad', icon:'scroll'},
    {type:'stop', title:'"Una estaca en el corazón" de Kioto', text:[
      'Desde que se anunció el proyecto, la torre generó una oposición feroz. Académicos y vecinos consideraron que una aguja blanca y roja de estética futurista no tenía lugar en una ciudad de templos y tejados bajos con más de mil años de historia; el japonólogo Alex Kerr llegó a describirla célebremente como "una estaca clavada en el corazón" de la antigua capital.',
      'Las críticas no se limitaron a la estética: también hubo debate sobre el coste de la obra y sobre si una torre de comunicaciones y observación privada debía ocupar un lugar tan simbólico, justo frente a la puerta de entrada tradicional a la ciudad. Con el tiempo, sin embargo, la percepción cambió: hoy se la compara a menudo con la Torre Eiffel, que también nació entre un rechazo similar, y se ha convertido en un símbolo asumido de la modernización de posguerra de Kioto.'
    ]},
    {type:'heading', text:'El mirador, a 100 metros de altura', icon:'eye'},
    {type:'stop', title:'Vistas de 360° sobre Kioto y las montañas', text:[
      'Un ascensor sube hasta la undécima planta del edificio base, desde donde se accede al mirador propiamente dicho, situado a unos 100 metros de altura (la antena, en la punta, añade los 31 metros restantes hasta los 131 m totales). El espacio tiene capacidad para unas 500 personas y cuenta con prismáticos gratuitos repartidos por las ventanas.',
      'Desde ahí se ve la cuadrícula de calles de Kioto extendida en el valle, con las montañas de Higashiyama, Kitayama y Arashiyama cerrando el horizonte en las tres direcciones; en días despejados se distinguen incluso picos más lejanos. De noche, la ciudad se convierte en un tapiz de luces mucho más difícil de apreciar desde cualquier otro punto cercano a la estación.'
    ]},
    {type:'heading', text:'Hotel, tiendas y un baño tradicional en la base', icon:'bag'},
    {type:'stop', title:'El edificio Kyoto Tower', text:[
      'Bajo el mirador, el propio edificio-base de nueve plantas reúne el Kyoto Tower Hotel (unas 160 habitaciones, entre las plantas 5ª y 9ª), tiendas de souvenirs, un restaurante-mirador en altura y el complejo comercial Kyoto Tower Sando, entre el sótano y la planta baja, con puestos de comida de Kioto y tiendas de dulces típicos.',
      'En el tercer sótano se esconde además Kyoto Tower Daiyokujo Yuu, un baño público de estilo sentō abierto a cualquier visitante: incluye toalla, jabón y productos de aseo, una manera poco habitual de descansar los pies después de caminar por los templos antes de coger un tren.'
    ]},
    {type:'cards', title:'Cuándo subir', items:[
      {icon:'eye', title:'De día', text:'La opción más clara para orientarse: se distinguen bien Higashiyama, el centro histórico y las montañas que rodean la ciudad.'},
      {icon:'blossom', title:'Al atardecer', text:'La luz baja ilumina los tejados y las montañas se recortan en tonos cálidos; suele haber menos gente que a mediodía.'},
      {icon:'lantern', title:'De noche', text:'La cuadrícula de Kioto se convierte en un mar de luces; el mirador abre hasta las 21:00 (última entrada 20:30), así que da tiempo a subir después de cenar.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'En su primer año, 1964, la torre recibió más de un millón de visitantes; hacia 1999 la cifra anual había bajado a unos 400.000.',
      'Su estructura monocasco de acero soldado fue la primera de este tipo a gran escala construida en Japón.',
      'Desde 2024 el nombre oficial es "Nidec Kyoto Tower", tras un acuerdo de patrocinio con la empresa Nidec.'
    ]}
  ],
  hours: 'Mirador abierto todos los días de 10:00 a 21:00 (última entrada 20:30); el 16 de agosto cierra antes, a las 18:30.',
  hoursSource: 'https://www.kyoto-tower.jp/en/',
  tickets: 'Entrada directa en taquilla el mismo día, en la planta baja del edificio; también se puede reservar online en la web oficial.',
  official: 'https://www.kyoto-tower.jp/en/',
  tips: [
    'Está literalmente enfrente de la salida central (Karasuma) de la estación de Kioto: un buen primer o último parón del viaje, incluso con equipaje.',
    'Si solo tienes un rato entre trenes, el mirador se recorre bien en 45 minutos.',
    'Compara la vista con la de Kiyomizu-dera o Higashiyama: aquí se ve la ciudad entera de un vistazo, en lugar de un barrio concreto.',
    'El sentō del sótano (Daiyokujo Yuu) es una buena opción para relajarse después de un día caminando, antes de coger un tren nocturno.'
  ],
  access: 'Justo enfrente de la salida central (Karasuma-guchi) de la estación de Kioto, a menos de 2 minutos a pie.'
});
