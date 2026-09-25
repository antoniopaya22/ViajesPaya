// Harajuku y Omotesandō — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'harajuku-omotesando', city: 'tokio', zone: 'harajuku-shibuya', name: 'Harajuku y Omotesandō', category: 'Barrios',
  image: 'assets/japon-harajuku-omotesando.jpg',
  lat: 35.6702, lon: 139.7026,
  lead: 'La calle Takeshita, meca de la moda callejera, y la elegante avenida Omotesandō, antiguo camino de acceso al santuario Meiji.',
  duration: '2–3 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'400 m', label:'de largo tiene la calle Takeshita', icon:'ruler'},
    {value:'1906', label:'año de la estación original de Harajuku', icon:'wood'},
    {value:'2024', label:'apertura del centro comercial Harakado', icon:'gate'}
  ],
  blocks: [
    {type:'lead', text:'Harajuku es uno de los grandes escaparates de la moda juvenil japonesa, con la estrechísima Takeshita-dori como epicentro de tiendas kawaii, puestos de street food fotogénico y idol shops. A solo unos metros, la avenida Omotesandō cambia por completo de registro: boutiques de lujo, arquitectura contemporánea de firma y el aire señorial de un antiguo camino de acceso al santuario Meiji.'},
    {type:'p', text:'La antigua estación de Harajuku, de estilo europeo y en funcionamiento desde 1906 hasta 2020, fue sustituida por una construcción más grande y funcional junto a la línea Yamanote tras decidirse su demolición por motivos de seguridad; una réplica de su fachada original se conserva como recuerdo frente a la nueva estación.'},
    {type:'heading', text:'Calle Takeshita y Ura-Harajuku', icon:'footprints'},
    {type:'stop', title:'Calle Takeshita', text:[
      'De apenas 400 metros, concentra moda kawaii y gótica, idol shops con máquinas gachapon y paredes de pósters, y modas de street food que se suceden con rapidez: de las crepes clásicas de Marion Crêpes (desde 1976) a las nubes de azúcar de colores o las brochetas de fresa caramelizada. Los fines de semana se llena de gente; entre semana se disfruta con más calma.',
      'Justo al lado de la calle, el pequeño santuario Tōgō suele pasar desapercibido: un oasis de calma frente al gentío de Harajuku, perfecto si apetece un cambio de escenario.'
    ]},
    {type:'stop', title:'Ura-Harajuku, el «Harajuku de atrás»', text:[
      'Al cruzar al final de Takeshita-dori empieza esta zona de callejuelas mucho más tranquilas, con cafeterías con encanto y tiendas de moda independiente muy distintas a la masificación (y los precios) de la calle principal. La Design Festa Gallery es referencia de arte joven y rompedor, y Cat Street conecta a pie, sin necesidad de transporte, con Shibuya.'
    ]},
    {type:'heading', text:'Avenida Omotesandō', icon:'tower'},
    {type:'p', text:'Flanqueada de árboles, la avenida reúne obras de arquitectos de renombre: el centro comercial Omotesandō Hills de Tadao Ando, la fachada de espejos de Tokyu Plaza Omotesandō Harajuku (con un Starbucks y terraza exterior) o, enfrente, el centro comercial Harakado, abierto en 2024 con una terraza superior y un sentō de estilo retro. Laforet Harajuku sigue siendo la meca de la moda juvenil del barrio.'},
    {type:'stop', title:'Kiddy Land y Oriental Bazaar', text:[
      'Kiddy Land, dedicada a personajes kawaii como Hello Kitty, Miffy, Rilakkuma o Totoro, lleva décadas siendo parada obligada para coleccionistas. Oriental Bazaar, reconocible por su arquitectura exterior singular, es una gran tienda de recuerdos a precios asequibles: kimonos de segunda mano, artesanía y artículos de samurái.'
    ]},
    {type:'stop', title:'Templo Zenkō-ji', text:[
      'En el cruce de Omotesandō con la avenida Aoyama, este pequeño templo pasa fácilmente inadvertido entre tanta tienda de firma. Guarda una campana, una estatua de jizō y varias piedras conmemorativas, entre ellas un monumento al poeta de haiku Matsuo Bashō y otro a la invención del jinrikisha (rickshaw).'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La avenida Omotesandō se concibió como el camino de acceso principal al santuario Meiji, cuyas puertas están al final de la avenida.',
      'El restaurante de gyoza Gyoza Lou, en una callejuela perpendicular a Omotesandō, es de los más populares de Tokio entre extranjeros por su carta sencilla y sus precios ajustados.'
    ]}
  ],
  hours: 'Calles de acceso libre; comercios suelen abrir de 10:00 a 20:00, con más ambiente los fines de semana.',
  tickets: 'No se necesita entrada para recorrer los barrios; las compras se pagan en cada tienda.',
  tips: [
    'Visita Takeshita-dori entre semana si quieres evitar las aglomeraciones del fin de semana.',
    'Combina la visita con el santuario Meiji y el parque Yoyogi, que están a un paso.',
    'Explora las callejuelas de Ura-Harajuku para encontrar tiendas y cafeterías con menos gente que en la calle principal.'
  ],
  access: 'Estación de Harajuku (línea JR Yamanote) para Takeshita-dori; estación de Meiji-jingūmae o Omotesandō (metro) para la avenida Omotesandō.',
  official: 'https://www.gotokyo.org/en/destinations/western-tokyo/harajuku/index.html'
});
