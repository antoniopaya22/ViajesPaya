// Calle Omotesandō — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'omotesando', city: 'miyajima', name: 'Calle Omotesandō', category: 'Calle y gastronomía', reviewed: '2026-09',
  image: 'assets/japon-omotesando.jpg',
  lat: 34.2965, lon: 132.3182,
  lead: 'La calle comercial cubierta que lleva del muelle al gran torii, con más de un siglo de historia como escaparate de los sabores de Miyajima.',
  duration: '30–45 min',
  price: 'Acceso gratuito; gasto solo en tiendas y puestos de comida',
  stats: [
    {value:'350 m', label:'longitud aproximada de la calle comercial', icon:'ruler'},
    {value:'70', label:'tiendas y restaurantes aproximados a lo largo de la calle', icon:'bag'},
    {value:'1906', label:'año en que se inventó el momiji manju en Miyajima', icon:'blossom'},
    {value:'4 M', label:'visitantes anuales aproximados que recorren la calle', icon:'footprints'}
  ],
  blocks: [
    {type:'lead', text:'La calle Omotesandō —también conocida como Machidori de la Torii, por acabar frente al gran torii— es la arteria comercial de Miyajima: una galería cubierta de unos 350 metros con cerca de 70 tiendas y restaurantes, muy transitada por ser el camino más directo entre el muelle y el santuario de Itsukushima.'},
    {type:'p', text:'Su trazado actual se remonta a los trabajos de relleno de tierra de finales del periodo Edo, y las mejoras de la vía durante los años veinte y treinta del siglo XX terminaron de darle forma como la ruta turística coherente que es hoy.'},
    {type:'heading', text:'Momiji manju, el dulce de la isla', icon:'blossom'},
    {type:'stop', title:'Bollitos con forma de hoja de arce', text:[
      'El dulce más asociado a Miyajima es el momiji manju: un pequeño bizcocho con forma de hoja de arce (momiji), relleno tradicionalmente de pasta de judía roja, aunque hoy existen versiones de crema, chocolate o queso. Se atribuye su invención a Tsunesuke Takatsu en 1906, y desde entonces se ha convertido en un símbolo tan reconocible de la isla que más de diez tiendas de la calle compiten por su propia receta.',
      'Un capricho curioso de la zona son los KitKat de sabor momiji manju, una edición típica de la región de Hiroshima que solo se encuentra en tiendas de la zona y que se ha vuelto un souvenir habitual entre quienes visitan la isla.'
    ]},
    {type:'heading', text:'Ostras a la parrilla y anguila', icon:'flame'},
    {type:'stop', title:'Yakigaki y anago, los sabores salados', text:[
      'Junto a los puestos de dulces, buena parte de la calle huele a ostra a la parrilla (yakigaki): la bahía de Hiroshima es una de las mayores zonas de cultivo de ostras de Japón, y comerlas recién asadas en la propia calle es una parada casi obligada. Otro clásico local es el anago, la anguila de mar, que se sirve sobre arroz en versiones que van del bento económico al plato de restaurante.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El momiji manju se inventó en 1906 y hoy se vende en más de veinte variedades distintas solo en esta calle.',
      'Existe una edición de KitKat con sabor a momiji manju, exclusiva de la región de Hiroshima.',
      'La mayoría de los comercios de la isla cierran sobre las 18:00, así que conviene pasear por aquí antes de que caiga la tarde.'
    ]}
  ],
  hours: 'La mayoría de las tiendas abren durante el día y cierran alrededor de las 18:00.',
  hoursSource: 'https://www.miyajima.or.jp/english/sightseeing/',
  tickets: 'No hace falta entrada; el gasto depende de lo que se compre en cada tienda.',
  official: 'https://www.miyajima.or.jp/english/sightseeing/',
  tips: [
    'Ve con hambre: es la mejor zona de la isla para picar entre puestos en vez de sentarte a comer en un solo sitio.',
    'Compara varias tiendas de momiji manju antes de comprar: cada una tiene su propio relleno y textura.',
    'Ten en cuenta que a partir de las 18:00 casi todo cierra, así que no la dejes para el final del día.'
  ],
  access: 'A pie desde el muelle de ferris de Miyajima, siguiendo la calle hacia el santuario de Itsukushima (unos 5-10 minutos).'
});
