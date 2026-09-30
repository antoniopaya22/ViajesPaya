// Nigatsu-dō — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'nigatsu-do', city: 'nara', name: 'Nigatsu-dō', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-nigatsudo.jpg',
  lat: 34.6892, lon: 135.8478,
  lead: 'El salón de madera colgado sobre la ladera del monte Wakakusa, con una de las mejores vistas de Nara y el escenario del ritual de las antorchas cada mes de marzo.',
  duration: '30–45 min',
  price: 'Acceso libre',
  stats: [
    {value:'752', label:'año de fundación según la tradición', icon:'scroll'},
    {value:'1669', label:'año en que terminó su reconstrucción tras el incendio de 1667', icon:'wood'},
    {value:'1–14 mar', label:'noches de las antorchas del Omizutori', icon:'flame'}
  ],
  blocks: [
    {type:'lead', text:'Nigatsu-dō («salón del segundo mes») forma parte del recinto de <a href="#/pais/japon/ciudad/nara/lugar/todai-ji">Tōdai-ji</a>, pero está algo apartado del Gran Buda, en la ladera este del monte Wakakusa. Según la tradición lo fundó en 752 el monje Sanetada, y su nombre alude al ritual que se celebra en él desde hace siglos: el Shuni-e, la «ceremonia del segundo mes», que se hacía en el segundo mes del antiguo calendario lunisolar.'},
    {type:'p', text:'El salón que se ve hoy es una reconstrucción: el edificio original ardió en 1667 y se levantó de nuevo hasta 1669, con una gran plataforma de madera sostenida por pilares sobre la pendiente. Es Tesoro Nacional.'},
    {type:'heading', text:'La terraza sobre Nara', icon:'eye'},
    {type:'p', text:'Desde el balcón se ve el tejado de Tōdai-ji, la pagoda de cinco pisos de Kōfuku-ji, buena parte del parque de Nara y, en un día despejado, el monte Ikoma en el límite con Osaka. Es una de las vistas más fotografiadas de la ciudad, sobre todo al atardecer.'},
    {type:'heading', text:'Omizutori: el ritual del fuego y el agua', icon:'flame'},
    {type:'p', text:'Omizutori, «recoger el agua sagrada», es el nombre popular del Shuni-e: una ceremonia de arrepentimiento dedicada a Kannon de once caras que, según la tradición, se celebra cada año desde 760. Hoy empieza el 1 de marzo y termina a mediados de mes. Cada noche del 1 al 14, los monjes suben al balcón con enormes antorchas encendidas y las agitan sobre la multitud, que se congrega abajo para recibir la lluvia de brasas: se cree que purifica. Las mejores vistas son desde la explanada inferior, y conviene llegar con mucha antelación.'},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La entrada al Nigatsu-dō es gratuita, a diferencia del vecino Sangatsu-dō (Hokke-dō), por el que sí se paga entrada.'
    ]}
  ],
  hours: 'Recinto de acceso libre; el horario exacto varía según la época del año y no está confirmado en la web oficial.',
  hoursSource: 'https://www.todaiji.or.jp/en/',
  tickets: 'No se necesita entrada.',
  official: 'https://www.todaiji.or.jp/en/',
  tips: [
    'Sube por la larga escalinata de piedra desde el camino de Tōdai-ji: el desnivel es corto, pero llévalo en cuenta si vas con poco tiempo.',
    'Si coincides con marzo, llega mucho antes del anochecer para conseguir un buen sitio en la explanada inferior.',
    'Combínalo con el vecino Sangatsu-dō y con el paseo hacia Kasuga Taisha, todo dentro del parque.'
  ],
  access: 'A pie desde Tōdai-ji, subiendo por la ladera este hacia el monte Wakakusa; unos 30 minutos andando desde la estación Kintetsu-Nara.'
});
