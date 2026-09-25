// Guías organizadas por lugar a partir de las notas de viaje del autor.
// Los datos de visita enlazan a fuentes oficiales porque pueden cambiar.
const japanCountry = {
  slug: 'japon', name: 'Japón', kicker: 'Tradición y energía urbana', flag: 'JP',
  intro: 'Templos, barrios llenos de vida y paisajes que invitan a mirar con atención. Explora cada lugar sin seguir un itinerario fijo.',
  image: 'assets/kioto.jpg', cities: ['kioto','nara','uji','osaka','miyajima','himeji','tokio','kamakura'],
  guide: {
    title: 'Guía práctica <em>de Japón.</em>',
    intro: 'Transporte, tarjetas y presupuesto: lo esencial para organizar el viaje antes de pisar Japón.',
    blocks: [
      {type:'heading', text:'Llegada: del aeropuerto a la ciudad', icon:'gate'},
      {type:'p', text:'Los vuelos internacionales suelen llegar a Narita o Haneda si el viaje empieza por Tokio, o al aeropuerto de Kansai si empieza por Osaka o Kioto. Los tres tienen un tren rápido directo al centro y alternativas más baratas en autobús o tren convencional.'},
      {type:'table', title:'Cómo llegar a la ciudad desde cada aeropuerto', columns:['Trayecto','Opción','Tiempo','Precio aprox.'], rows:[
        ['Narita → Tokio','Narita Express (N’EX)','~55–60 min','3.070 ¥'],
        ['Narita → Tokio','Keisei Skyliner','~36–41 min','2.580 ¥'],
        ['Narita → Tokio','Autobús TYO-NRT','~65 min','1.500 ¥'],
        ['Haneda → Tokio','Monorraíl de Tokio','~13 min a Hamamatsuchō','520 ¥'],
        ['Haneda → Tokio','Línea Keikyu','~15 min a Shinagawa','~300–540 ¥'],
        ['Kansai (KIX) → Osaka','Haruka (exprés limitado)','~75 min a Shin-Osaka','~3.640 ¥'],
        ['Kansai (KIX) → Osaka','Nankai Rapi:t','~35 min a Namba','~1.500–1.700 ¥'],
        ['Kansai (KIX) → Osaka','Nankai rápido (sin reserva)','~45–50 min a Namba','970 ¥']
      ]},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'El aeropuerto de Kansai está en una isla artificial en la bahía de Osaka: todos los trenes y autobuses cruzan un puente para llegar a él.',
        'El tren Nankai rápido a Namba cuesta un tercio que el Rapi:t y tarda solo 10-15 minutos más: la opción más razonable si no vas cargado.'
      ]},
      {type:'heading', text:'Moverse entre ciudades: JR Pass y pases regionales', icon:'ruler'},
      {type:'p', text:'El JR Pass nacional deja de compensar en itinerarios muy centrados en una sola región. Para una ruta por Kansai (Kioto, Osaka, Nara, Uji, Himeji) con una excursión a Hiroshima y Miyajima, un pase regional de JR-West suele salir más a cuenta.'},
      {type:'table', title:'Comparativa de pases (precio adulto)', columns:['Pase','Precio','Duración','Qué cubre'], rows:[
        ['JR Pass nacional','50.000 ¥ (sube a 53.000 ¥ el 1 de octubre de 2026)','7 días','Toda la red JR y la mayoría de Shinkansen — Nozomi y Mizuho requieren un suplemento aparte'],
        ['Kansai-Hiroshima Area Pass','17.000 ¥','5 días consecutivos','Shinkansen Sanyo Shin-Osaka–Hiroshima (incluye Nozomi/Mizuho), trenes JR-West de la región y el ferri a Miyajima'],
        ['Kansai Area Pass','2.800–7.000 ¥','1 a 4 días','Trenes JR-West de Osaka, Kioto, Kobe, Nara e Himeji, más el tren Haruka al aeropuerto de Kansai — sin Shinkansen']
      ]},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'El precio del JR Pass subió cerca de un 70% en octubre de 2023, y vuelve a subir el 1 de octubre de 2026: si vas a comprarlo, hazlo antes de esa fecha.',
        'El JR Pass no incluye el metro de Tokio ni el de Osaka, ni ninguna línea privada (como la Keikyu o la Nankai): esos trayectos se pagan aparte aunque tengas el pase.',
        'Para un billete suelto Tokio-Kioto-Osaka sin salir de esa zona, suele compensar más comprar billetes sueltos que el JR Pass completo; el pase gana sentido en cuanto se añade un trayecto largo como Hiroshima.'
      ]},
      {type:'heading', text:'Tarjetas IC: Suica, Pasmo e ICOCA', icon:'bag'},
      {type:'p', text:'Son tarjetas de prepago que se usan igual en trenes, metros, autobuses, taquillas de consigna y en la mayoría de tiendas de conveniencia de todo el país: da igual cuál compres, funcionan de forma intercambiable en casi cualquier sistema de transporte japonés.'},
      {type:'cards', title:'Qué versión elegir', items:[
        {icon:'bag', title:'Suica, Pasmo o ICOCA física', text:'La venta de tarjetas físicas sin registrar, suspendida por la escasez mundial de chips, se reanudó por completo en marzo de 2025. Depósito reembolsable de 500 ¥.'},
        {icon:'bag', title:'Welcome Suica / Tourist Pasmo', text:'Versión turística sin depósito, válida 28 días: la opción más simple si no vas a volver a Japón a corto plazo.'},
        {icon:'bag', title:'Suica en Apple Wallet', text:'Si tienes iPhone, añadir Suica al Wallet evita colas en la estación y cualquier posible falta de tarjetas físicas.'}
      ]},
      {type:'heading', text:'Equipaje grande en el Shinkansen', icon:'clock'},
      {type:'p', text:'Desde 2020, llevar una maleta cuyas tres dimensiones sumen más de 160 cm obliga a reservar el asiento con el hueco para equipaje grande (la última fila del vagón) en los Shinkansen Tōkaidō, Sanyō, Kyūshū y Nishi-Kyūshū —los que conectan Tokio, Kioto, Osaka e Hiroshima—. La reserva no tiene coste extra si se hace al reservar el asiento, pero subir sin haberla hecho conlleva un cargo de 1.000 ¥ a bordo y el revisor puede pedirte que cambies el equipaje de sitio. La norma no aplica a los Shinkansen de JR East (Tōhoku, Jōetsu, Hokuriku) ni a trenes limitados como el Haruka.'},
      {type:'heading', text:'Conectividad: eSIM o wifi de bolsillo', icon:'book'},
      {type:'cards', title:'Qué te compensa más', items:[
        {icon:'book', title:'eSIM', text:'Desde unos 600 ¥ para pocos GB hasta 2.000-2.800 ¥ para dos semanas de datos: la opción más barata si viajas solo o en pareja y tu móvil admite eSIM.'},
        {icon:'book', title:'Wifi de bolsillo', text:'Entre 4 y 8 $ al día (más depósito): compensa sobre todo en grupos de tres o más compartiendo un mismo aparato, o si algún móvil del grupo no admite eSIM.'}
      ]},
      {type:'heading', text:'Presupuesto diario orientativo', icon:'teacup'},
      {type:'table', title:'Por persona y día, sin contar alojamiento ni pases de transporte', columns:['Nivel','Comida','Presupuesto total'], rows:[
        ['Ajustado','3.500–6.000 ¥','7.000–10.000 ¥'],
        ['Medio','6.000–12.000 ¥','10.000–25.000 ¥'],
        ['Alto','Desde 12.000 ¥','Desde 25.000 ¥']
      ]},
      {type:'heading', text:'Etiqueta básica', icon:'heart'},
      {type:'cards', items:[
        {icon:'footprints', title:'Zapatos fuera', text:'Te los quitarás en templos, algunos restaurantes y alojamientos tradicionales: lleva calcetines sin agujeros.'},
        {icon:'teacup', title:'No comer caminando', text:'Se considera de mala educación; lo habitual es comer de pie junto al puesto donde has comprado, sin avanzar.'},
        {icon:'bag', title:'Lleva tu basura contigo', text:'Hay muy pocas papeleras en la calle: es normal guardar el envoltorio hasta encontrar una o volver al alojamiento.'},
        {icon:'eye', title:'Pide permiso para fotos', text:'Evita fotografiar a geishas, maiko o desconocidos de cerca sin preguntar antes, sobre todo en barrios como Gion.'}
      ]}
    ]
  }
};

const japanCities = [
  {slug:'kioto',country:'japon',name:'Kioto',region:'Kansai',image:'assets/kioto.jpg',eyebrow:'Templos, jardines y calles antiguas',intro:'La antigua capital conserva santuarios, jardines y barrios históricos. Entre Fushimi Inari, Higashiyama y Arashiyama hay mucho que descubrir sin necesidad de seguir una ruta cerrada.',days:'3–5 días',best:'Primavera y otoño',move:'Tren + autobús + a pie',lat:35.0116,lon:135.7681,tips:[['Sal temprano','Los templos más conocidos se disfrutan mejor a primera hora.'],['Agrupa por zonas','Higashiyama, el norte y Arashiyama requieren desplazamientos distintos.'],['Respeta el barrio','En Gion y otras calles residenciales, atiende a la señalización y evita bloquear el paso.']],
  zones:[
    {slug:'higashiyama-sur',name:'Higashiyama sur'},
    {slug:'higashiyama-norte',name:'Higashiyama norte'},
    {slug:'arashiyama',name:'Arashiyama'},
    {slug:'noroeste',name:'Noroeste'},
    {slug:'centro',name:'Centro'},
    {slug:'estacion',name:'Estación de Kioto'},
    {slug:'fushimi',name:'Fushimi'}
  ]},
  {slug:'nara',country:'japon',name:'Nara',region:'Kansai',image:'assets/nara.jpg',eyebrow:'El Gran Buda y los ciervos del parque',intro:'Nara fue una de las primeras capitales de Japón. Sus grandes templos se encuentran junto a un parque donde los ciervos forman parte del paisaje.',days:'1–2 días',best:'Primavera y otoño',move:'A pie',lat:34.6851,lon:135.8048,tips:[['Respeta a los ciervos','Son animales salvajes; aliméntalos solo con las galletas autorizadas y guarda papeles y comida.'],['Camina entre templos','El parque conecta varias visitas importantes.'],['Reserva tiempo','El recinto de Tōdai-ji merece algo más que una foto rápida.']]},
  {slug:'uji',country:'japon',name:'Uji',region:'Prefectura de Kioto',image:'assets/uji.jpg',eyebrow:'Té, río y patrimonio Heian',intro:'A orillas del río Uji, esta pequeña ciudad reúne casas de té, calles tranquilas y el célebre Salón del Fénix de Byōdō-in.',days:'Medio día–1 día',best:'Primavera y otoño',move:'A pie',lat:34.8845,lon:135.7997,tips:[['Prueba el té local','Uji es una de las zonas más conocidas por su té verde.'],['Cruza el río','Las dos orillas ofrecen paseos y vistas diferentes.'],['Consulta el Salón del Fénix','La visita interior puede tener cupo y horario propios.']]},
  {slug:'osaka',country:'japon',name:'Osaka',region:'Kansai',image:'assets/osaka.jpg',eyebrow:'Neones, castillo y cultura de calle',intro:'Osaka mezcla el legado de su castillo con barrios comerciales muy vivos. Dōtonbori y Namba muestran su cara más luminosa.',days:'2–3 días',best:'Primavera y otoño',move:'Metro + a pie',lat:34.6937,lon:135.5023,tips:[['Ve con hambre','Dōtonbori es una zona popular para probar comida callejera.'],['Distingue parque y museo','Pasear por el parque del castillo es diferente a entrar en el museo de la torre.'],['Explora a pie','Namba, Nipponbashi y Dōtonbori se disfrutan caminando.']],
  zones:[
    {slug:'castillo',name:'Castillo de Osaka'},
    {slug:'tennoji',name:'Tennōji y Shinsekai'},
    {slug:'namba',name:'Namba y Dōtonbori'}
  ]},
  {slug:'miyajima',country:'japon',name:'Miyajima',region:'Prefectura de Hiroshima',image:'assets/miyajima.jpg',eyebrow:'La isla del torii sobre el mar',intro:'La isla de Itsukushima combina santuarios, montaña y el ritmo de las mareas. Su gran torii cambia de aspecto a lo largo del día.',days:'1 día',best:'Primavera y otoño',move:'Ferri + a pie',lat:34.2959,lon:132.3199,tips:[['Mira las mareas','La experiencia del torii cambia mucho con marea alta y baja.'],['Cuida a los ciervos','No les des comida ni dejes bolsas a su alcance.'],['Atiende al último ferri','Consulta los horarios de regreso antes de alejarte del muelle.']]},
  {slug:'himeji',country:'japon',name:'Himeji',region:'Prefectura de Hyōgo',image:'assets/himeji.jpg',eyebrow:'Un castillo blanco que parece flotar',intro:'Himeji es conocido por uno de los castillos históricos mejor conservados de Japón, rodeado por un complejo sistema de puertas y murallas.',days:'Medio día–1 día',best:'Primavera y otoño',move:'A pie',lat:34.8151,lon:134.6853,tips:[['Lleva calcetines','En el interior del castillo se camina sin zapatos.'],['Sube con calma','Hay escaleras de madera empinadas.'],['Añade el jardín','Kōko-en está cerca del castillo y se puede visitar por separado.']]},
  {slug:'tokio',country:'japon',name:'Tokio',region:'Kantō',image:'assets/tokio.jpg',eyebrow:'Barrios, templos y mil maneras de mirar',intro:'Tokio cambia de carácter en cada barrio: Asakusa, Ueno, Akihabara, Shibuya, Harajuku y Shinjuku ofrecen mundos distintos dentro de la misma ciudad.',days:'4–6 días',best:'Primavera y otoño',move:'Tren + metro',lat:35.6762,lon:139.6503,tips:[['Elige barrios cercanos','Los trayectos pueden llevar más tiempo de lo que parecen en el mapa.'],['Lleva una tarjeta de transporte','Facilita los cambios entre redes de tren y metro.'],['Alterna ritmos','Combina calles concurridas con parques y santuarios.']],
  zones:[
    {slug:'este',name:'Asakusa, Ueno y Akihabara'},
    {slug:'harajuku-shibuya',name:'Harajuku y Shibuya'},
    {slug:'shinjuku',name:'Shinjuku'},
    {slug:'minato',name:'Torre de Tokio y Minato'}
  ]},
  {slug:'kamakura',country:'japon',name:'Kamakura',region:'Prefectura de Kanagawa',image:'assets/kamakura.jpg',eyebrow:'El Gran Buda junto al mar',intro:'Antigua sede del poder samurái, Kamakura reúne templos, santuarios y senderos entre colinas a poca distancia de la costa.',days:'1 día',best:'Primavera y otoño',move:'Tren local + a pie',lat:35.3192,lon:139.5467,tips:[['Camina entre visitas','El Gran Buda y Hase-dera están relativamente cerca.'],['Mira el tiempo','Los senderos y jardines se disfrutan más con buen tiempo.'],['Deja margen para volver','La zona recibe muchas excursiones de un día desde Tokio.']]}
];

const japanPlaces = [];

// Cada ficha de ciudad llama a addJapanPlace(objeto) con un objeto completo:
// slug, city, name, category, lat, lon, lead, story
// history: string[]      -> párrafos adicionales de historia y recorrido por el recinto
// curiosities: string[]  -> curiosidades puntuales
// duration, hours, hoursSource, price, tickets
// tips: string[]         -> consejos prácticos
// access: string         -> cómo llegar
// official: url
// image (opcional, si no se indica usa la foto genérica de la ciudad)
// gallery (opcional): [{src, alt}]
const japanCityImage = Object.fromEntries(japanCities.map(city => [city.slug, city.image]));

function addJapanPlace(place) {
  japanPlaces.push(Object.assign({
    duration: '45–90 min',
    hours: 'Consulta los horarios de cada recinto en la web oficial.',
    price: 'Consulta la tarifa actual',
    tickets: 'Consulta la venta y las reservas en la web oficial.',
    image: japanCityImage[place.city]
  }, place, {
    hoursSource: place.hoursSource || place.official
  }));
}
