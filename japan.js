// Guías organizadas por lugar a partir de las notas de viaje del autor.
// Los datos de visita enlazan a fuentes oficiales porque pueden cambiar.
const japanCountry = {
  slug: 'japon', name: 'Japón', kicker: 'Tradición y energía urbana', flag: 'JP',
  intro: 'Templos, barrios llenos de vida y paisajes que invitan a mirar con atención. Explora cada lugar sin seguir un itinerario fijo.',
  image: 'assets/kioto.jpg', cities: ['kioto','nara','uji','osaka','miyajima','himeji','tokio','kamakura']
};

const japanCities = [
  {slug:'kioto',country:'japon',name:'Kioto',region:'Kansai',image:'assets/kioto.jpg',eyebrow:'Templos, jardines y calles antiguas',intro:'La antigua capital conserva santuarios, jardines y barrios históricos. Entre Fushimi Inari, Higashiyama y Arashiyama hay mucho que descubrir sin necesidad de seguir una ruta cerrada.',days:'3–5 días',best:'Primavera y otoño',move:'Tren + autobús + a pie',lat:35.0116,lon:135.7681,tips:[['Sal temprano','Los templos más conocidos se disfrutan mejor a primera hora.'],['Agrupa por zonas','Higashiyama, el norte y Arashiyama requieren desplazamientos distintos.'],['Respeta el barrio','En Gion y otras calles residenciales, atiende a la señalización y evita bloquear el paso.']]},
  {slug:'nara',country:'japon',name:'Nara',region:'Kansai',image:'assets/nara.jpg',eyebrow:'El Gran Buda y los ciervos del parque',intro:'Nara fue una de las primeras capitales de Japón. Sus grandes templos se encuentran junto a un parque donde los ciervos forman parte del paisaje.',days:'1–2 días',best:'Primavera y otoño',move:'A pie',lat:34.6851,lon:135.8048,tips:[['Respeta a los ciervos','Son animales salvajes; aliméntalos solo con las galletas autorizadas y guarda papeles y comida.'],['Camina entre templos','El parque conecta varias visitas importantes.'],['Reserva tiempo','El recinto de Tōdai-ji merece algo más que una foto rápida.']]},
  {slug:'uji',country:'japon',name:'Uji',region:'Prefectura de Kioto',image:'assets/uji.jpg',eyebrow:'Té, río y patrimonio Heian',intro:'A orillas del río Uji, esta pequeña ciudad reúne casas de té, calles tranquilas y el célebre Salón del Fénix de Byōdō-in.',days:'Medio día–1 día',best:'Primavera y otoño',move:'A pie',lat:34.8845,lon:135.7997,tips:[['Prueba el té local','Uji es una de las zonas más conocidas por su té verde.'],['Cruza el río','Las dos orillas ofrecen paseos y vistas diferentes.'],['Consulta el Salón del Fénix','La visita interior puede tener cupo y horario propios.']]},
  {slug:'osaka',country:'japon',name:'Osaka',region:'Kansai',image:'assets/osaka.jpg',eyebrow:'Neones, castillo y cultura de calle',intro:'Osaka mezcla el legado de su castillo con barrios comerciales muy vivos. Dōtonbori y Namba muestran su cara más luminosa.',days:'2–3 días',best:'Primavera y otoño',move:'Metro + a pie',lat:34.6937,lon:135.5023,tips:[['Ve con hambre','Dōtonbori es una zona popular para probar comida callejera.'],['Distingue parque y museo','Pasear por el parque del castillo es diferente a entrar en el museo de la torre.'],['Explora a pie','Namba, Nipponbashi y Dōtonbori se disfrutan caminando.']]},
  {slug:'miyajima',country:'japon',name:'Miyajima',region:'Prefectura de Hiroshima',image:'assets/miyajima.jpg',eyebrow:'La isla del torii sobre el mar',intro:'La isla de Itsukushima combina santuarios, montaña y el ritmo de las mareas. Su gran torii cambia de aspecto a lo largo del día.',days:'1 día',best:'Primavera y otoño',move:'Ferri + a pie',lat:34.2959,lon:132.3199,tips:[['Mira las mareas','La experiencia del torii cambia mucho con marea alta y baja.'],['Cuida a los ciervos','No les des comida ni dejes bolsas a su alcance.'],['Atiende al último ferri','Consulta los horarios de regreso antes de alejarte del muelle.']]},
  {slug:'himeji',country:'japon',name:'Himeji',region:'Prefectura de Hyōgo',image:'assets/himeji.jpg',eyebrow:'Un castillo blanco que parece flotar',intro:'Himeji es conocido por uno de los castillos históricos mejor conservados de Japón, rodeado por un complejo sistema de puertas y murallas.',days:'Medio día–1 día',best:'Primavera y otoño',move:'A pie',lat:34.8151,lon:134.6853,tips:[['Lleva calcetines','En el interior del castillo se camina sin zapatos.'],['Sube con calma','Hay escaleras de madera empinadas.'],['Añade el jardín','Kōko-en está cerca del castillo y se puede visitar por separado.']]},
  {slug:'tokio',country:'japon',name:'Tokio',region:'Kantō',image:'assets/tokio.jpg',eyebrow:'Barrios, templos y mil maneras de mirar',intro:'Tokio cambia de carácter en cada barrio: Asakusa, Ueno, Akihabara, Shibuya, Harajuku y Shinjuku ofrecen mundos distintos dentro de la misma ciudad.',days:'4–6 días',best:'Primavera y otoño',move:'Tren + metro',lat:35.6762,lon:139.6503,tips:[['Elige barrios cercanos','Los trayectos pueden llevar más tiempo de lo que parecen en el mapa.'],['Lleva una tarjeta de transporte','Facilita los cambios entre redes de tren y metro.'],['Alterna ritmos','Combina calles concurridas con parques y santuarios.']]},
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
