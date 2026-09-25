// Mercado Nishiki — ficha con estructura de bloques.
addJapanPlace({
  slug: 'nishiki', city: 'kioto', zone: 'centro', name: 'Mercado Nishiki', category: 'Mercado',
  image: 'assets/japon-nishiki.jpg',
  lat: 35.005, lon: 135.764,
  lead: '«La cocina de Kioto»: una calle techada con más de 130 puestos de producto fresco y elaboraciones típicas.',
  duration: '1–2 horas',
  price: 'Paseo gratuito; cada elaboración se paga por separado, normalmente entre 200 y 800 ¥',
  stats: [
    {value:'130+', label:'puestos de alimentación', icon:'lantern'},
    {value:'400+', label:'años de historia como mercado', icon:'scroll'},
    {value:'1', label:'única calle techada en pleno centro', icon:'bag'}
  ],
  blocks: [
    {type:'lead', text:'El mercado Nishiki ocupa una estrecha calle peatonal techada en pleno centro de Kioto y reúne más de 130 puestos de alimentación. Los primeros puestos de comida aparecieron aquí a comienzos del siglo XIV, y ya en el periodo Edo se convirtió en un gran mercado especializado en pescado y marisco; desde hace más de 400 años combina la compra diaria de los vecinos con la curiosidad de los visitantes.'},
    {type:'p', text:'Es de mala educación comer mientras se camina por el mercado: lo habitual es apartarse junto al puesto donde se ha comprado y disfrutar la elaboración de pie, sin avanzar.'},
    {type:'heading', text:'Qué comer en el mercado', icon:'teacup'},
    {type:'p', text:'Cada tramo de la calle tiene su especialidad. Esta es una selección para picar de puesto en puesto sin necesidad de sentarse en ningún sitio.'},
    {type:'cards', items:[
      {icon:'droplet', title:'Yuba y tofu', text:'Yubakichi la vende fresca y seca desde el siglo XVIII; Hanayori-Kiyoe hace una croqueta de yuba crujiente por fuera y cremosa por dentro.'},
      {icon:'flame', title:'Tako-tamago y tempura', text:'Brocheta de pulpo confitado con huevo de codorniz en Kai; tempura de hamo en Uoriki y de langostinos en Nishiki Hirano.'},
      {icon:'teacup', title:'Wagyu, pescado y unagi', text:'Wagyu al momento en las carnicerías, sashimi en la pescadería Kimura (desde 1620) y unagi kabayaki en Notoyo Nishi-ten.'},
      {icon:'blossom', title:'Mochi y dulces', text:'Ichigo daifuku de Fuka, warabimochi de matcha de Sawawa, ichigo sando y gofres Snoopy-yaki de postre.'}
    ]},
    {type:'heading', text:'Qué comprar', icon:'bag'},
    {type:'p', text:'Además de comida para el momento, el mercado es un buen sitio para llevarse algo de Kioto a casa.'},
    {type:'cards', items:[
      {icon:'bag', title:'Para la despensa', text:'Tsukemono en barricas (incluida la berenjena Kamo), alga konbu, pescado seco y furikake para el arroz.'},
      {icon:'wood', title:'Aritsugu, cuchillos de Kioto', text:'Tienda familiar desde finales del siglo XVI; graban el nombre del comprador gratis en el cuchillo.'},
      {icon:'gate', title:'Otros clásicos', text:'Palillos grabados en You-Zen y Heibei Shoten, sake y whisky en Tsunoki, souvenirs de gatos en Neko Masshiguru.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La tienda de cuchillos Aritsugu tiene una historia familiar que se remonta a finales del siglo XVI y graba el nombre del comprador gratis.',
      'El mercado lleva más de 400 años funcionando como mercado al por menor en la misma calle techada.'
    ]}
  ],
  hours: 'La calle es pública y accesible en cualquier momento; cada puesto tiene su propio horario, generalmente de mañana a media tarde.',
  hoursSource: 'https://www.kyoto-nishiki.or.jp/',
  tickets: 'No hace falta entrada; se paga directamente en cada puesto.',
  official: 'https://www.kyoto-nishiki.or.jp/',
  tips: [
    'Come de pie, junto al puesto donde has comprado: caminar mientras se come se considera de mala educación aquí.',
    'Prueba el tako-tamago y el ichigo daifuku, dos de los bocados más fotografiados del mercado.',
    'Ve con hambre pero sin prisa: la mayoría de raciones son pequeñas y pensadas para ir probando varios puestos.'
  ],
  access: 'Está a unos 5 minutos a pie de las estaciones de Shijō (Karasuma) y Kawaramachi, en pleno centro de Kioto, muy cerca de Pontochō.'
});
