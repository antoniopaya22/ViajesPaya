// Calle del té de Uji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'calle-te-uji', city: 'uji', name: 'Calle del té de Uji', category: 'Calle y gastronomía',
  image: 'assets/japon-calle-te-uji.jpg',
  lat: 34.8878, lon: 135.8072,
  lead: 'La calle que lleva hasta Byōdō-in, llena de casas de té y tiendas dedicadas al matcha.',
  duration: '30–60 min',
  price: 'Paseo gratuito; cada tienda o casa de té cobra por sus propios productos o experiencias',
  stats: [
    {value:'XI', label:'siglo desde el que se cultiva té en la zona de Uji', icon:'tree'},
    {value:'2', label:'grandes denominaciones de matcha de Japón, junto con Nishio', icon:'trophy'},
    {value:'500 ¥', label:'aprox. por una ceremonia del té sencilla en Taihōan', icon:'teacup'},
    {value:'15–16', label:'siglos en que se perfeccionó el cultivo a la sombra ōishita', icon:'blossom'}
  ],
  blocks: [
    {type:'lead', text:'Desde la estación de Uji hasta el templo Byōdō-in, la calle principal reúne generaciones de tiendas y casas de té especializadas en uno de los productos más famosos de la zona: el té verde de Uji, considerado entre los mejores de Japón desde el periodo Heian.'},
    {type:'p', text:'Uji fue uno de los grandes centros culturales y políticos de Japón durante el periodo Heian (794-1185), y ese pasado se respira todavía en el trazado de sus calles y en la relación estrecha entre la ciudad y el cultivo del té, introducido en la zona en el siglo XI y perfeccionado con el tiempo hasta convertir el matcha de Uji en una referencia nacional.'},
    {type:'heading', text:'De la hoja a la taza', icon:'teacup'},
    {type:'stop', title:'El cultivo a la sombra que creó el matcha moderno', text:[
      'Entre los siglos XV y XVI, los productores de Uji desarrollaron el ōishita saibai, un método de cultivo a la sombra que cubre los arbustos de té semanas antes de la cosecha. La falta de luz directa concentra la clorofila y reduce los taninos, dando un té más dulce, intenso y de un verde muy oscuro: la base del matcha tal y como se conoce hoy.',
      'El matcha de Uji se considera, junto con el de Nishio (Aichi), una de las dos grandes denominaciones de té verde en polvo de Japón, y buena parte de las marcas más prestigiosas del país siguen moliendo aquí sus hojas.'
    ]},
    {type:'stop', title:'Una ceremonia del té junto al río', text:[
      'Frente al Salón del Fénix, la casa de té municipal Taihōan permite sentarse a observar —o participar en— una ceremonia del té sadō sencilla, servida por instructoras locales en una sala de estilo sukiya-zukuri. Es una manera accesible de probar el ritual formal sin necesidad de reserva con mucha antelación.'
    ]},
    {type:'cards', title:'Qué probar por el camino', items:[
      {icon:'blossom', title:'Helado de matcha', text:'El sabor más repetido de la calle: intenso, ligeramente amargo, servido solo o combinado con otros dulces.'},
      {icon:'teacup', title:'Matcha soba', text:'Fideos de trigo sarraceno teñidos y aromatizados con té verde en polvo, servidos fríos o en caldo caliente.'},
      {icon:'bag', title:'Té para llevar', text:'Latas y bolsas de sencha y matcha de distintos grados, una de las compras clásicas para llevarse de Uji.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El cultivo de té en Uji se remonta al siglo XI, y su fama nacional se consolidó durante el shogunato, cuando llegó a suministrar té a la corte y a los señores feudales.',
      'Es habitual encontrar fideos soba de matcha, helados de matcha e incluso dulces salados elaborados con té verde en polvo por toda la calle.',
      'La casa de té Taihōan, frente a Byōdō-in, ofrece una introducción asequible a la ceremonia del té formal sin necesidad de gran experiencia previa.'
    ]}
  ],
  hours: 'Calle pública de acceso libre; cada tienda y casa de té tiene su propio horario.',
  hoursSource: 'https://www.kyoto-uji-kankou.or.jp/en/',
  tickets: 'Cada tienda o casa de té cobra por sus propios productos o experiencias.',
  official: 'https://www.kyoto-uji-kankou.or.jp/en/',
  tips: [
    'Prueba el té o un helado de matcha en alguna de las tiendas de la calle antes o después de visitar Byōdō-in.',
    'Si te interesa una ceremonia del té más formal, la casa de té Taihōan ofrece esa experiencia cerca del río.'
  ],
  access: 'A pie desde la estación de Uji (líneas JR Nara o Keihan Uji), siguiendo la calle principal hacia el templo Byōdō-in.'
});
