// Sannenzaka y Ninenzaka — ficha con estructura de bloques.
addJapanPlace({
  slug: 'sannenzaka-ninenzaka', city: 'kioto', name: 'Sannenzaka y Ninenzaka', category: 'Calles históricas',
  image: 'assets/japon-sannenzaka-ninenzaka.jpg',
  lat: 34.9975, lon: 135.7817,
  lead: 'Las cuestas empedradas de Higashiyama, entre tiendas centenarias, una pagoda icónica y un Starbucks en una casa Edo.',
  duration: '1–2 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'2', label:'cuestas escalonadas del periodo Edo', icon:'🥾'},
    {value:'24 m', label:'de altura de la pagoda Yasaka, al fondo', icon:'🏯'},
    {value:'1', label:'Starbucks dentro de una casa tradicional', icon:'☕'}
  ],
  blocks: [
    {type:'lead', text:'Al bajar de Kiyomizu-dera, la cuesta Kiyomizuzaka —la calle principal de tiendas y restaurantes que sale del templo— conduce hasta las escalinatas de Sannenzaka y Ninenzaka, el acceso histórico de peregrinación al templo y una de las postales más reconocibles de Higashiyama.'},
    {type:'stop', title:'Pagoda Yasaka, desde lo alto de Sannenzaka', text:[
      'Desde la cima de la cuesta se ve la pagoda Yasaka, único resto del antiguo templo Hōkan-ji y uno de los telones de fondo más fotografiados de Kioto.'
    ]},
    {type:'stop', title:'Ninenzaka: casas de té y un Starbucks histórico', text:[
      'Al bajar por Ninenzaka aparece la casa de té tradicional Kasagiya, con menú en inglés, y un Starbucks instalado en un edificio del periodo Edo que se ha convertido en atracción por sí mismo, gracias a la mezcla entre cadena moderna y arquitectura de madera tradicional.'
    ]},
    {type:'stop', title:'Calle Nene y los templos Kōdai-ji y Entoku-in', text:[
      'Siguiendo hacia el sur se llega a la estatua de Ryōzen Kannon, un monumento de 24 metros en memoria de las víctimas de la guerra del Pacífico, y a la calle Nene, construida junto a los templos Kōdai-ji y Entoku-in por la esposa de Toyotomi Hideyoshi. El Entoku-in, subtemplo poco conocido por los turistas, guarda biombos fusuma-e de Hasegawa Tōhaku y jardines especialmente bonitos en otoño.'
    ]}
  ],
  hours: 'Calles públicas a cualquier hora; las tiendas suelen abrir de 10:00 a 18:00 aproximadamente.',
  hoursSource: 'https://kyoto.travel/en/areas/higashiyama/',
  tickets: 'No se necesita entrada para caminar por las cuestas; el templo Entoku-in cobra entrada aparte.',
  official: 'https://kyoto.travel/en/areas/higashiyama/',
  tips: [
    'Camina despacio y entra en las tiendas de artesanía y dulces típicos: es parte esencial de la experiencia.',
    'Visita a primera hora si quieres fotografiar las cuestas sin aglomeraciones.',
    'No te pierdas el pequeño templo Entoku-in si te interesa el arte de biombos tradicionales: pasa desapercibido para la mayoría de turistas.'
  ],
  access: 'Conectan directamente con la bajada desde Kiyomizu-dera y llevan hacia el parque Maruyama y el santuario Yasaka; todo el recorrido se hace a pie.'
});
