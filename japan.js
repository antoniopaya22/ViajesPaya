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
      ]},
      {type:'heading', text:'Calendario de temporadas', icon:'blossom'},
      {type:'p', text:'Japón cambia mucho según el mes: la floración de los cerezos, las hortensias de la temporada de lluvias y las hojas rojas del otoño marcan tanto la mejor época para ver cada lugar como la más complicada para encontrar alojamiento barato. Esto es lo que puedes esperar mes a mes, con los lugares de esta guía donde se ve mejor cada temporada.'},
      {type:'cards', title:'Las tres grandes temporadas', items:[
        {icon:'blossom', title:'Sakura — finales de marzo a comienzos de abril', text:'La floración de los cerezos dura solo una o dos semanas y varía cada año. Los más de 600 cerezos del <a href="#/pais/japon/ciudad/osaka/lugar/castillo-de-osaka">Castillo de Osaka</a>, el Dankazura del <a href="#/pais/japon/ciudad/kamakura/lugar/tsurugaoka-hachimangu">Tsurugaoka Hachimangū</a> y los cerezos junto al torii de <a href="#/pais/japon/ciudad/kioto/lugar/heian-jingu">Heian Jingū</a> están entre los mejores puntos.'},
        {icon:'blossom', title:'Ajisai — junio', text:'Las hortensias cubren de azul los caminos de <a href="#/pais/japon/ciudad/kamakura/lugar/meigetsu-in">Meigetsu-in</a> («Ajisai-dera») y de <a href="#/pais/japon/ciudad/kamakura/lugar/hase-dera">Hase-dera</a>, en Kamakura, durante la temporada de lluvias, cuando hay menos turistas que en primavera u otoño.'},
        {icon:'flame', title:'Momiji — segunda mitad de noviembre', text:'Los arces se tiñen de rojo en <a href="#/pais/japon/ciudad/kioto/lugar/eikando">Eikan-dō</a>, <a href="#/pais/japon/ciudad/kioto/lugar/tenryu-ji">Tenryū-ji</a>, <a href="#/pais/japon/ciudad/kioto/lugar/kodai-ji">Kōdai-ji</a> y <a href="#/pais/japon/ciudad/kioto/lugar/nanzen-ji">Nanzen-ji</a> en Kioto, en <a href="#/pais/japon/ciudad/miyajima/lugar/momijidani">Momijidani</a> en Miyajima y en <a href="#/pais/japon/ciudad/uji/lugar/koshoji">Kōshō-ji</a> en Uji; varios templos amplían el horario por la noche para ver los arces iluminados.'}
      ]},
      {type:'table', title:'Qué ver mes a mes', columns:['Mes','Qué buscar','Dónde'], rows:[
        ['Finales de febrero','Ciruelos (ume) en flor y farolillos Setsubun Mantoro','<a href="#/pais/japon/ciudad/osaka/lugar/castillo-de-osaka">Castillo de Osaka</a> (~1.300 ciruelos) · <a href="#/pais/japon/ciudad/nara/lugar/kasuga-taisha">Kasuga Taisha</a>, Nara'],
        ['Comienzos de marzo','Melocotoneros en flor, Hina Matsuri (3 de marzo) y ceremonia del fuego Omizutori','<a href="#/pais/japon/ciudad/osaka/lugar/castillo-de-osaka">Castillo de Osaka</a> · <a href="#/pais/japon/ciudad/nara/lugar/isui-en">Isui-en</a> y <a href="#/pais/japon/ciudad/nara/lugar/todai-ji">Tōdai-ji</a> (Nigatsu-dō), Nara'],
        ['Finales de marzo – comienzos de abril','Floración de los cerezos (sakura)','<a href="#/pais/japon/ciudad/osaka/lugar/castillo-de-osaka">Castillo de Osaka</a> · <a href="#/pais/japon/ciudad/kioto/lugar/heian-jingu">Heian Jingū</a>, Kioto'],
        ['Mediados-finales de abril','Cerezos tardíos Omuro Zakura','<a href="#/pais/japon/ciudad/kioto/lugar/ninna-ji">Ninna-ji</a>, Kioto'],
        ['Mediados de mayo','Sanja Matsuri, festival sintoísta muy multitudinario','<a href="#/pais/japon/ciudad/tokio/lugar/asakusa">Asakusa</a>, Tokio'],
        ['Junio','Hortensias (ajisai) y lirios en flor','<a href="#/pais/japon/ciudad/kamakura/lugar/meigetsu-in">Meigetsu-in</a>, Kamakura'],
        ['Julio','Gion Matsuri (todo el mes, procesiones a mediados)','Santuario Yasaka, Kioto'],
        ['14-15 de agosto','Obon Mantoro: miles de farolillos encendidos a la vez','<a href="#/pais/japon/ciudad/nara/lugar/kasuga-taisha">Kasuga Taisha</a>, Nara'],
        ['22 de octubre','Jidai Matsuri, procesión histórica por la ciudad','<a href="#/pais/japon/ciudad/kioto/lugar/heian-jingu">Heian Jingū</a>, Kioto'],
        ['Segunda mitad de noviembre','Hojas rojas de los arces (momiji), con iluminaciones nocturnas en varios templos','<a href="#/pais/japon/ciudad/kioto/lugar/eikando">Eikan-dō</a>, Kioto · <a href="#/pais/japon/ciudad/miyajima/lugar/momijidani">Momijidani</a>, Miyajima']
      ]},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'Las fechas de floración de los cerezos y del momiji varían cada año según la temperatura: conviene revisar una previsión de floración (sakura/momiji forecast) unas semanas antes del viaje en vez de fiarse solo del mes.',
        'Los templos que iluminan sus arces o cerezos por la noche suelen vender la entrada nocturna aparte de la diurna, y no siempre se puede permanecer dentro de un turno a otro: conviene decidir de antemano si ir de día, de noche, o ambas veces.'
      ]}
    ]
  },
  food: {
    title: 'Comida típica <em>de Japón.</em>',
    intro: 'Más allá de la comida callejera de cada ciudad, estos son los grandes platos e ingredientes que definen la cocina japonesa en todo el país.',
    blocks: [
      {type:'heading', text:'Sushi y sashimi, del pescado fermentado al nigiri', icon:'droplet'},
      {type:'p', text:'El sushi nació como método de conservación: el narezushi, pescado fermentado en arroz, probablemente se originó en el sudeste asiático y llegó a Japón con la expansión del cultivo de arroz inundado en el periodo Yayoi. El funazushi, elaborado con carpa cruciana del lago Biwa (Shiga), sigue siendo hoy el heredero directo de aquella tradición.'},
      {type:'p', text:'El nigiri tal como se conoce hoy nace en el periodo Edo: se atribuye su creación a Hanaya Yohei hacia 1824, en el barrio de Ryōgoku, como una comida rápida de porciones más grandes y menos avinagradas que las actuales. Técnicamente, sushi es cualquier preparación con arroz avinagrado (shari), mientras que sashimi es solo pescado o marisco crudo en lonchas, sin arroz: la palabra ya aparece en un recetario de 1489.'},
      {type:'cards', title:'Tres formas de comerlo', items:[
        {icon:'droplet', title:'Nigiri', text:'Una bola de arroz prensada a mano con una loncha de pescado encima.'},
        {icon:'droplet', title:'Makizushi', text:'Rollos enrollados con una esterilla de bambú, envueltos en alga nori.'},
        {icon:'droplet', title:'Temaki', text:'Conos grandes de alga nori pensados para comerse con las manos.'}
      ]},
      {type:'heading', text:'Ramen: un mismo plato, un acento distinto en cada región', icon:'flame'},
      {type:'p', text:'El ramen desciende de los fideos cantoneses que trajeron inmigrantes chinos a Yokohama a finales del siglo XIX, conocidos primero como «nankin soba» y más tarde «chūka soba». El nombre «ramen» se impuso tras el lanzamiento del ramen instantáneo de Momofuku Ando en 1958, y el plato se convirtió en un icono nacional en la posguerra, cuando la escasez de arroz y la llegada de trigo importado de Estados Unidos impulsaron su consumo.'},
      {type:'cards', title:'Cuatro estilos regionales', items:[
        {icon:'flame', title:'Sapporo', text:'Caldo de miso, con maíz, mantequilla y marisco.'},
        {icon:'flame', title:'Hakata (Fukuoka)', text:'Caldo tonkotsu lechoso de hueso de cerdo, fideos finos, ajo triturado y jengibre encurtido.'},
        {icon:'flame', title:'Tokio', text:'Caldo shoyu (soja), con fideos finos y rizados.'},
        {icon:'flame', title:'Kitakata', text:'Fideos gruesos y planos en caldo de cerdo y niboshi; la ciudad con más locales de ramen per cápita de Japón.'}
      ]},
      {type:'heading', text:'Wagyu, la ternera más marmoleada del mundo', icon:'trophy'},
      {type:'p', text:'Wagyu no es una raza sino cuatro, oficializadas en 1944 (Japanese Black, Brown, Polled y Shorthorn); más del 90% del ganado wagyu es de la variedad Black. Se clasifica por rendimiento (A-B-C) y calidad (1 a 5, según marmoleado, color y firmeza), hasta el máximo A5.'},
      {type:'cards', title:'Dos denominaciones históricas', items:[
        {icon:'trophy', title:'Kobe', text:'Solo la cepa Tajima de Japanese Black, criada en Hyōgo; exige un marmoleado mínimo BMS 6 y una canal de menos de 500 kg. Se exporta fuera de Japón solo desde 2012.'},
        {icon:'trophy', title:'Matsusaka', text:'Solo hembras vírgenes de Japanese Black en la prefectura de Mie, cada una con un identificador propio de 10 dígitos trazable hasta la granja.'}
      ]},
      {type:'heading', text:'Sake y la cultura del izakaya', icon:'teacup'},
      {type:'p', text:'El grado de pulido del arroz (seimai-buai) determina el tipo de sake: honjōzō (65-70% del grano restante), ginjō (60% o menos, fermentación lenta en frío) y daiginjō (50% o menos); el junmai es el que no lleva alcohol añadido.'},
      {type:'p', text:'El izakaya —literalmente «quedarse» más «tienda de sake»— tiene raíces documentadas ya en el Kojiki, del siglo VIII. Se consolidó en el periodo Edo, cuando las tabernas donde se bebía de pie empezaron a ofrecer primero barriles para sentarse y después pequeños aperitivos (sakana), sentando las bases del izakaya moderno.'},
      {type:'heading', text:'Konbini, la comida de las tiendas de conveniencia', icon:'bag'},
      {type:'p', text:'Japón tiene una tienda de conveniencia por cada 2.000 habitantes —frente a una por cada 8.000 en Estados Unidos—, lideradas por 7-Eleven, Lawson y FamilyMart. Reciben reparto de comida fresca desde fábricas varias veces al día, lo que explica una calidad muy por encima de la media internacional del formato; el onigiri, por ejemplo, incorporó en los años 80 un envoltorio de plástico que mantiene el alga nori separada y crujiente hasta el momento de comerlo.'},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'La tempura no es una técnica japonesa original: la introdujeron comerciantes y misioneros portugueses en el siglo XVI, a través de Nagasaki; su nombre vendría del latín «tempora», los periodos de ayuno católico en los que se comía pescado y verdura rebozados en vez de carne.'
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
  ],
  transport: {
    title: 'Cómo moverse <em>por Kioto.</em>',
    intro: 'Kioto se recorre sobre todo en autobús urbano y a pie; el metro cubre menos zonas turísticas de lo que parece.',
    blocks: [
      {type:'heading', text:'Autobús urbano', icon:'footprints'},
      {type:'p', text:'Es el transporte más útil para llegar a Higashiyama, Arashiyama o el norte de la ciudad. La tarifa es plana dentro de la zona central: 230 ¥ por trayecto. Se sube por la puerta trasera y se paga —o se pasa la tarjeta IC— al bajar por la puerta delantera, junto al conductor; no hace falta tocar la tarjeta al subir.'},
      {type:'heading', text:'Pases de un día', icon:'ruler'},
      {type:'table', title:'Pases frente a pago por trayecto', columns:['Pase','Precio','Cubre'], rows:[
        ['Metro 1 día','800 ¥','Solo las líneas de metro Karasuma y Tōzai'],
        ['Bus + Metro 1 día','1.100 ¥','Autobuses urbanos y las dos líneas de metro']
      ]},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'Kioto retiró en 2023 el antiguo pase de autobús de un día (700 ¥) por la saturación que generaba en las rutas más turísticas; el pase combinado de 1.100 ¥ es su sustituto oficial.',
        'Los autobuses 101 y 205, que paran en Kinkaku-ji, no aceptan el pase de un día entre las 9:00 y las 17:00 de marzo a diciembre: en esas rutas y horario hay que pagar cada trayecto por separado.',
        'El pase combinado solo compensa a partir de unos 5 trayectos en el día; para 2 o 3 paradas suele salir más barato pagar con una tarjeta IC (Suica, Pasmo, ICOCA).'
      ]}
    ]
  },
  food: {
    title: 'Qué comer <em>en Kioto.</em>',
    intro: 'La cocina de Kioto gira en torno al tofu, el yuba y la cocina vegetariana budista: muchas de las mejores paradas están a un paso de los templos que ya vas a visitar.',
    blocks: [
      {type:'heading', text:'El mercado Nishiki, de puesto en puesto', icon:'teacup'},
      {type:'p', text:'Más de 130 puestos conviven en la calle cubierta del <a href="#/pais/japon/ciudad/kioto/lugar/nishiki">mercado Nishiki</a>: yuba y tofu recién hecho, dashimaki tamago, sashimi de la pescadería centenaria Kimura y mochis de fresa. Se come de pie, junto al puesto donde se ha comprado, sin avanzar por la calle.'},
      {type:'cards', title:'Algunos imprescindibles', items: [
        {icon:'droplet', title:'Yuba y tofu', text:'La nata que se forma al hervir leche de soja, servida fresca o frita; Kioto es de los mejores sitios de Japón para probarla.'},
        {icon:'blossom', title:'Yatsuhashi', text:'El dulce más típico de la ciudad: horneado y crujiente, o fresco (nama-yatsuhashi) con relleno de canela o matcha.'},
        {icon:'teacup', title:'Shōjin ryōri', text:'La cocina vegetariana budista que se sirve como comida formal en templos y restaurantes especializados.'}
      ]},
      {type:'heading', text:'Dulces de Higashiyama', icon:'blossom'},
      {type:'p', text:'La cuesta que baja de <a href="#/pais/japon/ciudad/kioto/lugar/kiyomizu-dera">Kiyomizu-dera</a> hacia Sannenzaka y Ninenzaka está llena de tiendas centenarias de yatsuhashi y de helado de matcha del cercano Uji, de los más apreciados de Japón.'}
    ]
  }},
  {slug:'nara',country:'japon',name:'Nara',region:'Kansai',image:'assets/nara.jpg',eyebrow:'El Gran Buda y los ciervos del parque',intro:'Nara fue una de las primeras capitales de Japón. Sus grandes templos se encuentran junto a un parque donde los ciervos forman parte del paisaje.',days:'1–2 días',best:'Primavera y otoño',move:'A pie',lat:34.6851,lon:135.8048,tips:[['Respeta a los ciervos','Son animales salvajes; aliméntalos solo con las galletas autorizadas y guarda papeles y comida.'],['Camina entre templos','El parque conecta varias visitas importantes.'],['Reserva tiempo','El recinto de Tōdai-ji merece algo más que una foto rápida.']],
  food: {
    title: 'Qué comer <em>en Nara.</em>',
    intro: 'Nara se recorre entera a pie, así que buena parte de su comida se toma también así: dulces de mochi recién machacado y cafés instalados en antiguas machiya de Naramachi.',
    blocks: [
      {type:'heading', text:'Mochi recién machacado', icon:'flame'},
      {type:'p', text:'Cerca del templo Kōfuku-ji y del estanque Sarusawa son frecuentes las demostraciones de mochitsuki, el machacado tradicional de mochi a golpe de mazo, que se vende recién hecho al momento.'},
      {type:'heading', text:'Cafés y dulces en Naramachi', icon:'teacup'},
      {type:'p', text:'El barrio de <a href="#/pais/japon/ciudad/nara/lugar/naramachi">Naramachi</a>, antiguo recinto del templo Gangō-ji, conserva casas de madera machiya reconvertidas en cafés y tiendas de dulces tradicionales, un buen sitio para hacer una pausa entre templos.'}
    ]
  }},
  {slug:'uji',country:'japon',name:'Uji',region:'Prefectura de Kioto',image:'assets/uji.jpg',eyebrow:'Té, río y patrimonio Heian',intro:'A orillas del río Uji, esta pequeña ciudad reúne casas de té, calles tranquilas y el célebre Salón del Fénix de Byōdō-in.',days:'Medio día–1 día',best:'Primavera y otoño',move:'A pie',lat:34.8845,lon:135.7997,tips:[['Prueba el té local','Uji es una de las zonas más conocidas por su té verde.'],['Cruza el río','Las dos orillas ofrecen paseos y vistas diferentes.'],['Consulta el Salón del Fénix','La visita interior puede tener cupo y horario propios.']],
  food: {
    title: 'Qué comer <em>en Uji.</em>',
    intro: 'El matcha es la seña de identidad de la ciudad: el té verde de Uji se considera, junto con el de Nishio, una de las dos grandes denominaciones de Japón desde el periodo Heian.',
    blocks: [
      {type:'heading', text:'La calle del té', icon:'teacup'},
      {type:'p', text:'De la estación de Uji a Byōdō-in, la <a href="#/pais/japon/ciudad/uji/lugar/calle-te-uji">calle del té</a> reúne generaciones de tiendas y casas de té especializadas en matcha.'},
      {type:'cards', title:'Qué probar', items: [
        {icon:'blossom', title:'Helado de matcha', text:'El sabor más repetido de la calle: intenso y ligeramente amargo, solo o combinado con otros dulces.'},
        {icon:'teacup', title:'Matcha soba', text:'Fideos de trigo sarraceno teñidos y aromatizados con té verde en polvo, fríos o en caldo caliente.'},
        {icon:'bag', title:'Té para llevar', text:'Latas y bolsas de sencha y matcha de distintos grados, una compra clásica de Uji.'}
      ]}
    ]
  }},
  {slug:'osaka',country:'japon',name:'Osaka',region:'Kansai',image:'assets/osaka.jpg',eyebrow:'Neones, castillo y cultura de calle',intro:'Osaka mezcla el legado de su castillo con barrios comerciales muy vivos. Dōtonbori y Namba muestran su cara más luminosa.',days:'2–3 días',best:'Primavera y otoño',move:'Metro + a pie',lat:34.6937,lon:135.5023,tips:[['Ve con hambre','Dōtonbori es una zona popular para probar comida callejera.'],['Distingue parque y museo','Pasear por el parque del castillo es diferente a entrar en el museo de la torre.'],['Explora a pie','Namba, Nipponbashi y Dōtonbori se disfrutan caminando.']],
  zones:[
    {slug:'castillo',name:'Castillo de Osaka'},
    {slug:'tennoji',name:'Tennōji y Shinsekai'},
    {slug:'namba',name:'Namba y Dōtonbori'}
  ],
  transport: {
    title: 'Cómo moverse <em>por Osaka.</em>',
    intro: 'El metro conecta directamente las tres zonas de la ciudad; para varias paradas al día, el Osaka Amazing Pass suele compensar.',
    blocks: [
      {type:'heading', text:'Metro y autobús', icon:'footprints'},
      {type:'p', text:'La tarifa del metro depende de la distancia, entre 190 y 420 ¥ por trayecto. Si vas a hacer varios trayectos solo en metro y autobús, sin entradas incluidas, la tarjeta Enjoy Eco Card (820 ¥ entre semana, 620 ¥ en fin de semana y festivos) da acceso ilimitado a ambos durante el día.'},
      {type:'heading', text:'Osaka Amazing Pass', icon:'ruler'},
      {type:'table', title:'Qué incluye el pase', columns:['Pase','Precio','Incluye'], rows:[
        ['1 día','3.500 ¥','Metro y bus ilimitados + entrada gratis o con descuento a unos 40 lugares'],
        ['2 días','5.000 ¥','Lo mismo, con un segundo día para repartir las visitas']
      ]},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'Entre los cerca de 40 lugares con entrada incluida están la torre principal del castillo de Osaka, el mirador del Umeda Sky Building, la Torre Tsutenkaku, la noria de HEP FIVE y el Museo de Historia de Osaka.',
        'Solo con la entrada al castillo de Osaka y un mirador ya se recupera buena parte del precio del pase de un día: compensa claramente si vas a entrar en 2 o más atracciones de pago el mismo día.',
        'Si no piensas entrar en museos o miradores, el metro y el bus sueltos —o la Enjoy Eco Card— salen más baratos que el Amazing Pass.'
      ]}
    ]
  },
  food: {
    title: 'Qué comer <em>en Osaka.</em>',
    intro: 'Osaka es la capital japonesa del «kuidaore» («arruinarse comiendo»): la ciudad donde la comida callejera es la razón del viaje, no un extra.',
    blocks: [
      {type:'heading', text:'Dōtonbori, el paseo gastronómico', icon:'flame'},
      {type:'p', text:'A lo largo del canal de <a href="#/pais/japon/ciudad/osaka/lugar/dotonbori">Dōtonbori</a> se concentran algunos de los locales de takoyaki, okonomiyaki y kushikatsu más conocidos de la ciudad, muchos con fachadas gigantes de pulpos, dragones o el propio letrero de Glico.'},
      {type:'cards', title:'Los tres imprescindibles', items: [
        {icon:'flame', title:'Takoyaki', text:'Bolitas de masa con pulpo, la especialidad más asociada a Osaka; algunos locales de Dōtonbori usan pulpo crudo en vez de hervido.'},
        {icon:'flame', title:'Okonomiyaki', text:'La «tortilla» de col y masa a la plancha, cocinada al estilo Osaka (los ingredientes se mezclan antes de cocinar, a diferencia del estilo Hiroshima).'},
        {icon:'flame', title:'Kushikatsu', text:'Brochetas empanadas y fritas, especialidad de <a href="#/pais/japon/ciudad/osaka/lugar/shinsekai">Shinsekai</a>; la norma no escrita es no volver a mojar una brocheta ya mordida en la salsa comunitaria.'}
      ]},
      {type:'heading', text:'Shinsekai: kushikatsu y fugu', icon:'flame'},
      {type:'p', text:'El barrio retro de Shinsekai, a los pies de la torre Tsutenkaku, es también uno de los asociados al fugu, el pez globo, un plato que exige licencia especial para prepararlo.'}
    ]
  }},
  {slug:'miyajima',country:'japon',name:'Miyajima',region:'Prefectura de Hiroshima',image:'assets/miyajima.jpg',eyebrow:'La isla del torii sobre el mar',intro:'La isla de Itsukushima combina santuarios, montaña y el ritmo de las mareas. Su gran torii cambia de aspecto a lo largo del día.',days:'1 día',best:'Primavera y otoño',move:'Ferri + a pie',lat:34.2959,lon:132.3199,tips:[['Mira las mareas','La experiencia del torii cambia mucho con marea alta y baja.'],['Cuida a los ciervos','No les des comida ni dejes bolsas a su alcance.'],['Atiende al último ferri','Consulta los horarios de regreso antes de alejarte del muelle.']],
  food: {
    title: 'Qué comer <em>en Miyajima.</em>',
    intro: 'Dos sabores dominan la isla: el dulce momiji manju y las ostras recién asadas de la bahía de Hiroshima.',
    blocks: [
      {type:'heading', text:'Momiji manju, el dulce de la isla', icon:'blossom'},
      {type:'p', text:'A lo largo de la <a href="#/pais/japon/ciudad/miyajima/lugar/omotesando">calle Omotesandō</a>, más de diez tiendas compiten por su propia versión del momiji manju, el bizcocho con forma de hoja de arce inventado en la isla en 1906, hoy también en variantes de crema, chocolate o queso.'},
      {type:'heading', text:'Ostras a la parrilla y okonomiyaki de Hiroshima', icon:'flame'},
      {type:'p', text:'Junto a los puestos de dulces es habitual encontrar ostras a la parrilla (yakigaki), ya que la bahía de Hiroshima es una de las mayores zonas de cultivo de ostras de Japón. En la <a href="#/pais/japon/ciudad/miyajima/lugar/machiya-dori">calle Machiya-dōri</a> también se prepara okonomiyaki al estilo Hiroshima, con fideos soba o udon en vez de mezclarse en la masa.'}
    ]
  }},
  {slug:'himeji',country:'japon',name:'Himeji',region:'Prefectura de Hyōgo',image:'assets/himeji.jpg',eyebrow:'Un castillo blanco que parece flotar',intro:'Himeji es conocido por uno de los castillos históricos mejor conservados de Japón, rodeado por un complejo sistema de puertas y murallas.',days:'Medio día–1 día',best:'Primavera y otoño',move:'A pie',lat:34.8151,lon:134.6853,tips:[['Lleva calcetines','En el interior del castillo se camina sin zapatos.'],['Sube con calma','Hay escaleras de madera empinadas.'],['Añade el jardín','Kōko-en está cerca del castillo y se puede visitar por separado.']],
  food: {
    title: 'Qué comer <em>en Himeji.</em>',
    intro: 'Himeji tiene dos especialidades propias, fáciles de encontrar cerca de la estación y del castillo.',
    blocks: [
      {type:'cards', title:'Dos sabores de Himeji', items: [
        {icon:'flame', title:'Himeji oden', text:'El oden local se moja en shōga-jōyu, salsa de soja con jengibre rallado, en vez de mostaza: una combinación nacida de la producción de soja de la zona y del jengibre que antes se cultivaba en la cercana Shirahama.'},
        {icon:'droplet', title:'Anago (anguila de mar)', text:'A diferencia del unagi de agua dulce, el anago de Himeji viene del mar Interior de Seto; suele cocinarse al vapor y terminarse con un ligero toque a la parrilla, en platos como el anago-don.'}
      ]}
    ]
  }},
  {slug:'tokio',country:'japon',name:'Tokio',region:'Kantō',image:'assets/tokio.jpg',eyebrow:'Barrios, templos y mil maneras de mirar',intro:'Tokio cambia de carácter en cada barrio: Asakusa, Ueno, Akihabara, Shibuya, Harajuku y Shinjuku ofrecen mundos distintos dentro de la misma ciudad.',days:'4–6 días',best:'Primavera y otoño',move:'Tren + metro',lat:35.6762,lon:139.6503,tips:[['Elige barrios cercanos','Los trayectos pueden llevar más tiempo de lo que parecen en el mapa.'],['Lleva una tarjeta de transporte','Facilita los cambios entre redes de tren y metro.'],['Alterna ritmos','Combina calles concurridas con parques y santuarios.']],
  zones:[
    {slug:'este',name:'Asakusa, Ueno y Akihabara'},
    {slug:'harajuku-shibuya',name:'Harajuku y Shibuya'},
    {slug:'shinjuku',name:'Shinjuku'},
    {slug:'minato',name:'Torre de Tokio y Minato'}
  ],
  transport: {
    title: 'Cómo moverse <em>por Tokio.</em>',
    intro: 'Tres redes conviven en Tokio —Tokyo Metro, Toei y la línea JR Yamanote— y ningún pase las cubre todas a la vez.',
    blocks: [
      {type:'heading', text:'Tokyo Metro, Toei y la línea Yamanote', icon:'footprints'},
      {type:'p', text:'Tokyo Metro y Toei Subway son dos compañías de metro distintas, y ninguna de las dos incluye la línea JR Yamanote, el anillo de tren que conecta Shinjuku, Shibuya, Ueno o Tokio Central: esa línea se paga aparte o con tarjeta IC, tanto si tienes un pase de metro como si no. Un trayecto suelto de metro cuesta entre 180 y 330 ¥ según la distancia.'},
      {type:'heading', text:'Pases de metro', icon:'ruler'},
      {type:'table', title:'Qué cubre cada pase', columns:['Pase','Precio','Cubre'], rows:[
        ['Tokyo Subway Ticket 24h','1.000 ¥','Tokyo Metro + Toei, sin límite de trayectos'],
        ['Tokyo Subway Ticket 48h','1.500 ¥','Tokyo Metro + Toei, 2 días'],
        ['Tokyo Subway Ticket 72h','2.000 ¥','Tokyo Metro + Toei, 3 días'],
        ['Metro 24h (solo Tokyo Metro)','700 ¥','Solo las 9 líneas de Tokyo Metro, sin Toei']
      ]},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'Ninguno de estos pases incluye la línea Yamanote (JR): si tu día combina templos del este de Tokio con Shibuya o Shinjuku, es fácil acabar pagando el Yamanote aparte aunque lleves el pase.',
        'El pase de 24 horas compensa a partir de unos 5 trayectos en metro; el más barato, solo de Tokyo Metro, a partir de 4.',
        'Para un día suelto con pocos trayectos, suele salir más simple pagar cada uno con una tarjeta IC que calcular si el pase compensa.'
      ]}
    ]
  },
  food: {
    title: 'Qué comer <em>en Tokio.</em>',
    intro: 'Cada barrio tiene su propia cultura de comida callejera: dulces centenarios junto a un templo, mercado de pescado o yakitori en un callejón de posguerra.',
    blocks: [
      {type:'heading', text:'Dulces de Nakamise-dōri', icon:'blossom'},
      {type:'p', text:'La calle comercial que lleva hasta Sensō-ji, en <a href="#/pais/japon/ciudad/tokio/lugar/asakusa">Asakusa</a>, vende desde el periodo Edo dulces como el ningyo-yaki (bizcocho relleno de anko con forma de los Siete Dioses de la Fortuna o de la pagoda del templo), el kaminari-okoshi (arroz tostado con almíbar, llamado así por la cercana puerta Kaminarimon) y el age-manju, un bollo relleno frito.'},
      {type:'heading', text:'Ameyoko, el mercado de Ueno', icon:'droplet'},
      {type:'p', text:'La calle de mercado <a href="#/pais/japon/ciudad/tokio/lugar/ueno-ameyoko">Ameyoko</a>, entre las estaciones de Ueno y Okachimachi, nació como mercado de posguerra y hoy mezcla puestos de pescado fresco y seco con dulces como el taiyaki o el daifuku mochi.'},
      {type:'heading', text:'Yakitori en Omoide Yokocho', icon:'flame'},
      {type:'p', text:'En <a href="#/pais/japon/ciudad/tokio/lugar/shinjuku">Shinjuku</a>, el callejón Omoide Yokocho reúne unos 70 diminutos locales de yakitori con el aire de un Tokio de los años cincuenta.'}
    ]
  }},
  {slug:'kamakura',country:'japon',name:'Kamakura',region:'Prefectura de Kanagawa',image:'assets/kamakura.jpg',eyebrow:'El Gran Buda junto al mar',intro:'Antigua sede del poder samurái, Kamakura reúne templos, santuarios y senderos entre colinas a poca distancia de la costa.',days:'1 día',best:'Primavera y otoño',move:'Tren local + a pie',lat:35.3192,lon:139.5467,tips:[['Camina entre visitas','El Gran Buda y Hase-dera están relativamente cerca.'],['Mira el tiempo','Los senderos y jardines se disfrutan más con buen tiempo.'],['Deja margen para volver','La zona recibe muchas excursiones de un día desde Tokio.']],
  transport: {
    title: 'Cómo moverse <em>por Kamakura.</em>',
    intro: 'El tren Enoden es la forma más práctica de encadenar el Gran Buda, Hase-dera y Enoshima en el mismo día.',
    blocks: [
      {type:'heading', text:'El tren Enoden', icon:'footprints'},
      {type:'p', text:'La línea Enoden conecta la estación de Kamakura con Hase (Gran Buda y Hase-dera) y con Enoshima, con un trayecto suelto entre 190 y 300 ¥ según la distancia.'},
      {type:'heading', text:'Pases de un día', icon:'ruler'},
      {type:'table', title:'Qué compensa según tu punto de partida', columns:['Pase','Precio','Cubre'], rows:[
        ['Noriorikun (solo Enoden)','800 ¥','Enoden ilimitado entre Kamakura y Fujisawa, con descuentos en Enoshima y Hase-dera'],
        ['Enoshima-Kamakura Freepass, desde Fujisawa','810 ¥','Lo mismo que el Noriorikun, para quien ya está en la zona'],
        ['Enoshima-Kamakura Freepass, desde Shinjuku','1.640 ¥','Ida y vuelta en tren Odakyu desde Shinjuku + Enoden ilimitado']
      ]},
      {type:'callout', label:'¿SABÍAS QUE...?', items:[
        'Si solo vas a hacer 2 o 3 paradas —por ejemplo Kamakura, Hase y vuelta— pagar cada trayecto con tarjeta IC suele salir más barato que el pase de 800 ¥.',
        'El pase compensa claramente si vas a completar un día entero saltando entre el Gran Buda, Hase-dera y Enoshima, sumando 4 trayectos o más.',
        'La versión desde Shinjuku solo tiene sentido si llegas a Kamakura en tren Odakyu ese mismo día; si ya estás en la zona por JR, la versión desde Fujisawa es la que corresponde.'
      ]}
    ]
  },
  food: {
    title: 'Qué comer <em>en Kamakura.</em>',
    intro: 'La especialidad local es el shirasu, el boquerón blanco recién pescado en la bahía de Sagami, que aquí se sirve prácticamente de todas las formas posibles.',
    blocks: [
      {type:'heading', text:'Shirasu, el sabor de la bahía de Sagami', icon:'droplet'},
      {type:'p', text:'El shirasu-don —un cuenco de arroz cubierto de shirasu crudo o hervido— es el plato más asociado a Kamakura y Enoshima; también se sirve frito en tempura o como topping de otros platos.'},
      {type:'heading', text:'Calle Komachi, para picar entre templos', icon:'footprints'},
      {type:'p', text:'La <a href="#/pais/japon/ciudad/kamakura/lugar/komachi-dori">calle Komachi</a>, peatonal y paralela a la avenida principal, concentra la mayor densidad de puestos de comida callejera de la ciudad, ideal para comer algo rápido antes de coger el tren de vuelta.'}
    ]
  }}
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
