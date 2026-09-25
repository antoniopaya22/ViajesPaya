// Arashiyama y el bosque de bambú — ficha con estructura de bloques.
addJapanPlace({
  slug: 'arashiyama', city: 'kioto', zone: 'arashiyama', name: 'Arashiyama y el bosque de bambú', category: 'Naturaleza', reviewed: '2026-09',
  image: 'assets/arashiyama.jpg',
  lat: 35.017, lon: 135.6713,
  lead: 'El bosque de bambú, un puente sobre el río Katsura y macacos en semilibertad, al oeste de Kioto.',
  duration: '3–5 horas para una visita completa de la zona',
  price: 'Paseo por el bosque de bambú gratuito; templos con entrada propia',
  stats: [
    {value:'32', label:'patrones de tela en el Kimono Forest', icon:'lantern'},
    {value:'1339', label:'año de fundación del templo Tenryū-ji', icon:'pagoda'},
    {value:'8.000', label:'estatuas de piedra en el Adashino Nenbutsu-ji', icon:'rock'}
  ],
  blocks: [
    {type:'lead', text:'Arashiyama es un distrito al oeste de Kioto conocido sobre todo por su bosque de bambú de Sagano, pero que ofrece mucho más: templos zen de primer nivel, un puente clásico sobre el río Katsura, un parque de macacos y calles de casas tradicionales reconvertidas en tiendas y museos.'},
    {type:'stop', title:'Kimono Forest y el bosque de bambú', text:[
      'Quien llega en el tranvía Randen se encuentra primero el Kimono Forest, una instalación de 2013 con 32 pilares cilíndricos de tela teñida al estilo tradicional kyō-yūzen que se iluminan al anochecer; entre las vías y los pilares hay también un pequeño ashi-yu o baño de pies (de pago). El bosque de bambú en sí se recorre en pocos minutos a pie, pero conviene ir muy temprano (hacia las 6:00-8:00) para evitar la afluencia habitual de visitantes.'
    ]},
    {type:'stop', title:'La calle principal', text:[
      'La calle central de Arashiyama está repleta de cafeterías, tiendas y restaurantes: buen sitio para tomar un helado de matcha o un donut de tofu, o probar el yudōfu, el katsudon, los fideos soba o el katsukare sin gastar demasiado; casi todos los locales exhiben en vitrina los platos que sirven.'
    ]},
    {type:'stop', title:'El santuario Nonomiya', text:[
      'Muy cerca del bosque de bambú, este pequeño santuario sintoísta, vinculado al Gran Santuario de Ise, es un remanso de paz incluso cuando la zona está llena de turistas. Destaca por su kuroki torii o «torii negro», poco habitual, y por sus amuletos específicos para el amor y las mujeres.'
    ]},
    {type:'stop', title:'Residencias y jardines junto al bosque de bambú', text:[
      'Al final del paseo por el bosque se puede visitar la antigua residencia del actor Ōkōchi Denjirō (entrada de unos 1.000 ¥, con té matcha y un dulce incluidos) o, como alternativa, la cabaña Rakushisha, antiguo retiro de un poeta de haiku discípulo de Bashō. A la salida, el parque Kameyama ofrece un respiro tranquilo frente al bullicio habitual de la zona.'
    ]},
    {type:'stop', title:'Templo Tenryū-ji y el puente Togetsukyō', text:[
      'El templo Tenryū-ji, uno de los cinco grandes templos zen de Kioto, se construyó en 1339 dedicado al emperador Go-Daigo; sus edificios son reconstrucciones de la era Meiji, pero el jardín, obra del paisajista Musō Soseki, ha sobrevivido intacto durante siglos. Desde el puente Togetsukyō, reconstrucción de los años 1930 de un puente Heian, se cruza hacia el parque de los macacos de Iwatayama, con vistas sobre la ciudad y ejemplares en semilibertad.'
    ]},
    {type:'stop', title:'Saga Toriimoto, el distrito histórico del norte', text:[
      'Conserva casas machiya reconvertidas en tiendas y restaurantes, y da acceso a templos con miles de estatuas de piedra como el Adashino Nenbutsu-ji (unas 8.000) y el Otagi Nenbutsu-ji (unas 1.200), además del camino que sube hasta el santuario Atago, en la cima del monte homónimo, dedicado a la deidad protectora contra el fuego.'
    ]},
    {type:'cards', title:'Otros templos menos conocidos de la zona', items:[
      {icon:'scroll', title:'Seiryō-ji', text:'Obras de arte y tesoros nacionales, entre ellos una estatua de Buda de hace 1.000 años.'},
      {icon:'tree', title:'Giō-ji', text:'Pequeño jardín de musgo y arces, precioso todo el año y especialmente en otoño.'},
      {icon:'pagoda', title:'Daikaku-ji', text:'Antigua residencia de un emperador en Arashiyama, popular por su pagoda.'},
      {icon:'blossom', title:'Jōjakkō-ji y Nison-in', text:'Vistas sobre Kioto y hojas de arce, en las montañas de Arashiyama.'}
    ]}
  ],
  hours: 'El bosque de bambú y las calles son de acceso libre a cualquier hora; los templos abren generalmente de 8:30 a 17:00.',
  hoursSource: 'https://kyoto.travel/en/areas/saga-arashiyama/',
  tickets: 'No hace falta reservar para pasear por el bosque; los templos venden su entrada en el acceso.',
  official: 'https://kyoto.travel/en/areas/saga-arashiyama/',
  tips: [
    'Ve al bosque de bambú a primera hora (antes de las 8:00) para evitar la mayor afluencia de visitantes.',
    'Combina el bosque con Tenryū-ji y el puente Togetsukyō: están todos a poca distancia a pie.',
    'Si te gustan los templos menos conocidos, sube hasta Saga Toriimoto para ver el Otagi Nenbutsu-ji y sus estatuas de piedra.',
    'Al sur de Arashiyama se encuentra el templo Yoshimine-dera, parada de la peregrinación Saigoku Kannon, por si quieres aprovechar la zona para avanzar en la ruta.'
  ],
  access: 'En el tranvía Randen (Keifuku) hasta la estación de Arashiyama, o en tren JR/Hankyū hasta Saga-Arashiyama o Arashiyama; también en autobús desde el centro de Kioto.'
});
