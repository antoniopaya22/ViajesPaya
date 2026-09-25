// Gion y Miyagawa-chō — ficha con estructura de bloques.
addJapanPlace({
  slug: 'gion-miyagawacho', city: 'kioto', zone: 'higashiyama-sur', name: 'Gion y Miyagawa-chō', category: 'Barrios históricos',
  image: 'assets/japon-gion-miyagawacho.jpg',
  lat: 35.003, lon: 135.775,
  lead: 'Los barrios de geishas más conocidos de Kioto, de callejuelas empedradas y casas de té centenarias.',
  duration: '1,5–2,5 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'80', label:'casas de té en Gion Kōbu', icon:'teacup'},
    {value:'1881', label:'división de Gion en dos hanamachi', icon:'scroll'},
    {value:'300', label:'años de la casa de té Ichiriki-tei', icon:'lantern'}
  ],
  blocks: [
    {type:'lead', text:'Gion es, probablemente, el barrio de geishas más popular de Japón y en realidad agrupa dos hanamachi distintos desde que la zona se dividió en 1881: el pequeño Gion Higashi y el mucho mayor Gion Kōbu, con unas 80 casas de té frente a las 12 de Higashi, lo que hace más probable cruzarse con una maiko en Kōbu. Al sur, separado por el teatro Minamiza, Miyagawa-chō ofrece la misma arquitectura tradicional con bastante menos turismo.'},
    {type:'heading', text:'Un paseo por Gion', icon:'footprints'},
    {type:'stop', title:'Shirakawa', text:[
      'El distrito de Shirakawa, junto al riachuelo del mismo nombre, reúne algunas de las casas de té más fotogénicas de Gion, como la okiya Ninben o las ochaya Okakai, Fusanoya y Masanoya. Los farolillos de papel que cuelgan de sus puertas llevan el blasón de Gion Kōbu: un círculo hecho con un dango, la bola dulce de pasta de arroz. Cerca está el memorial al poeta Yoshii Isamu y el ryokan Shiraume, antigua ochaya desde 1949.'
    ]},
    {type:'stop', title:'Gion Higashi', text:[
      'Bajando por la calle Hanamikoji hacia Shimbashi se entra en el barrio de geishas de Gion Higashi, reconocible porque sus farolillos muestran el mismo blasón que Gion Kōbu pero con el kanji de «este» (東) en el centro. Aquí siguen activas ochaya de varias generaciones como Tomikiku, abierta a comienzos del periodo Showa.'
    ]},
    {type:'stop', title:'Calle Hanamikoji y la casa de té Ichiriki', text:[
      'La calle Hanamikoji, llena de restaurantes de alta cocina kaiseki, ochaya y tiendas tradicionales, alberga la casa de té más famosa de Kioto: Ichiriki-tei, en activo desde hace unos 300 años. Su cortina noren con el kanji 万 mantiene oculto el interior a los ojos de los curiosos —no está permitido entrar sin invitación—. La casa aparece ligada a la historia de los 47 rōnin: su líder, Kuranosuke, pasó aquí varias noches para ganarse una reputación de juerguista que facilitó el éxito de su posterior venganza.'
    ]},
    {type:'stop', title:'Tiendas tradicionales de Gion', text:[
      'Cerca del santuario Yasaka, la tienda Kintakedo vende kanzashi (adornos de pelo) muy elaborados, popular entre las propias geishas. Yoshiya, especializada en maquillaje tradicional, y Kanshindo, una confitería centenaria conocida por su mizu-yokan, completan un paseo por el comercio más auténtico del barrio.'
    ]},
    {type:'heading', text:'Miyagawa-chō, la joya con menos turismo', icon:'trophy'},
    {type:'stop', title:'Un hanamachi más tranquilo', text:[
      'Situado al sur del teatro Minamiza y del templo Kennin-ji, Miyagawa-chō cuenta con unas 40 geishas y 30 maikos y ofrece un ambiente mucho más sereno que Pontochō o Gion Kōbu. Sus profesionales suelen pararse a saludar y posar con más naturalidad, lejos de las aglomeraciones de turistas. La mejor hora para pasear es entre las 16:00 y las 17:00, cuando maikos y geishas salen hacia sus banquetes nocturnos.'
    ]}
  ],
  hours: 'Calles públicas accesibles a cualquier hora; casas de té y espectáculos con horario y reserva propios.',
  hoursSource: 'https://kyoto.travel/en/see-and-do/gion.html',
  tickets: 'Los banquetes y espectáculos con maikos se reservan directamente con sus organizadores.',
  official: 'https://kyoto.travel/en/see-and-do/gion.html',
  tips: [
    'Pasea entre las 16:00 y las 17:00 si quieres más posibilidades de ver a maikos o geishas de camino al trabajo.',
    'Pide permiso antes de fotografiar a una maiko o geisha; un simple «sumimasen» acompañado de la cámara suele bastar.',
    'Si buscas menos turismo y más autenticidad, prioriza Miyagawa-chō sobre Gion Kōbu.'
  ],
  access: 'A pie desde la estación de Gion-Shijō (línea Keihan) o Kyoto Kawaramachi; Miyagawa-chō queda justo al sur, cruzando la calle Shijō.'
});
