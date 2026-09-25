// Akihabara — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'akihabara', city: 'tokio', zone: 'este', name: 'Akihabara', category: 'Barrio comercial', reviewed: '2026-09',
  image: 'assets/japon-akihabara.jpg',
  lat: 35.6984, lon: 139.7731,
  lead: 'El barrio de la electrónica que se convirtió en meca del manga, el anime y la cultura otaku.',
  duration: '1,5–3 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'730', label:'año de fundación del santuario Kanda Myōjin', icon:'gate'},
    {value:'13:00–18:00', label:'peatonalización dominical de Chūō-dōri', icon:'clock'},
    {value:'100+', label:'años reabierta la antigua estación de Manseibashi', icon:'wood'}
  ],
  blocks: [
    {type:'lead', text:'Akihabara, conocida como Akiba, fue durante décadas el gran centro de venta de electrónica de Japón. Desde los años noventa esa vocación convive con tiendas de manga, anime, videojuegos y cultura otaku, hasta convertirse en uno de los barrios más reconocibles de Tokio, con permanente competencia de Ikebukuro y Nakano Broadway por el mismo público.'},
    {type:'p', text:'La avenida principal, Chūō-dōri, concentra las grandes cadenas de electrónica como Yodobashi Camera, Laox, Ishimaru, Sofmap o Yamada Denki, mientras que las callejuelas cercanas a la estación, en Sotokanda 1-chōme, conservan tiendas de componentes de aspecto mucho más antiguo. Los domingos por la tarde la avenida se cierra al tráfico de 13:00 a 18:00 (17:00 en invierno) y se convierte en zona peatonal.'},
    {type:'heading', text:'De compras: electrónica, manga y figuras', icon:'bag'},
    {type:'p', text:'Muchas tiendas de electrónica ofrecen venta libre de impuestos (tax free) y personal que habla varios idiomas, por lo que el barrio es muy popular entre turistas que buscan cámaras, relojes o maquillaje a buen precio. Para manga, anime y figuras, cadenas como Mandarake, Animate, Super Potato o Kotobukiya conviven con Radio Kaikan, Suruga-ya y el Tokyo Anime Center, con exposiciones y tienda propia.'},
    {type:'stop', title:'Maid cafes y manga kissaten', text:[
      'El barrio es conocido por sus maid cafes, cafeterías donde las camareras visten de sirvienta, y por los manga kissaten o cibercafés donde se puede leer cómic, ver DVD y hasta pasar la noche si se pierde el último tren.'
    ]},
    {type:'stop', title:'2K540 Aki-Oka Artisan', text:[
      'Bajo las vías del tren, este centro de artesanía reúne talleres y tiendas donde comprar zapatos, joyas o decoración hechos a mano, con artesanos a los que a menudo se puede ver trabajar en directo.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El santuario Kanda Myōjin, fundado en el año 730 y trasladado a su ubicación actual en 1616, se ha convertido en lugar de peregrinación para aficionados a la tecnología y el anime por su aparición en la serie Love Live!; vende amuletos para proteger dispositivos electrónicos.',
      'En las escaleras mecánicas de la estación son frecuentes los carteles contra el upskirting, un recordatorio de un problema real en el barrio.'
    ]},
    {type:'heading', text:'La antigua estación de Manseibashi', icon:'wood'},
    {type:'stop', title:'Centro comercial Maach Ecute', text:[
      'Cerrada desde hacía un siglo, la estación de Manseibashi reabrió como el centro comercial Maach Ecute, con su edificio de ladrillo rojo restaurado. La terraza del Hitachino Brewing Lab sirve tapas y sándwiches junto a cervezas artesanales, y en un extremo hay una pequeña cafetería-mirador junto a las vías por las que pasan los trenes, ideal para verlos entrar y salir de la estación.'
    ]}
  ],
  hours: 'Calles de acceso libre; tiendas abren generalmente de 10:00 a 20:00-22:00; peatonalización dominical de Chūō-dōri de 13:00 a 18:00 (17:00 en invierno).',
  price: 'Paseo gratuito', tickets: 'Las compras y experiencias (maid cafes, tiendas) se pagan por separado.',
  tips: [
    'Si te interesa la electrónica de segunda mano o los componentes sueltos, explora las calles perpendiculares a Chūō-dōri, no solo la avenida principal.',
    'El domingo peatonal es el mejor momento para pasear con calma, pero también el más concurrido.',
    'Camina hasta Ueno pasando por Okachimachi y Ameyoko: son solo dos kilómetros entre tiendas y puestos callejeros.'
  ],
  access: 'Estación de Akihabara (líneas JR Yamanote y Sōbu, y metro Hibiya), salida Electric Town.',
  official: 'https://www.gotokyo.org/en/destinations/central-tokyo/akihabara/index.html'
});
