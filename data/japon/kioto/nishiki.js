// Mercado Nishiki — ficha con estructura de bloques.
addJapanPlace({
  slug: 'nishiki', city: 'kioto', name: 'Mercado Nishiki', category: 'Mercado',
  image: 'assets/japon-nishiki.jpg',
  lat: 35.005, lon: 135.764,
  lead: '«La cocina de Kioto»: una calle techada con más de 130 puestos de producto fresco y elaboraciones típicas.',
  duration: '1–2 horas',
  price: 'Paseo gratuito; cada elaboración se paga por separado, normalmente entre 200 y 800 ¥',
  stats: [
    {value:'130+', label:'puestos de alimentación', icon:'🏮'},
    {value:'400+', label:'años de historia como mercado', icon:'📜'},
    {value:'1', label:'única calle techada en pleno centro', icon:'🛍️'}
  ],
  blocks: [
    {type:'lead', text:'El mercado Nishiki ocupa una estrecha calle peatonal techada en pleno centro de Kioto y reúne más de 130 puestos de alimentación. Los primeros puestos de comida aparecieron aquí a comienzos del siglo XIV, y ya en el periodo Edo se convirtió en un gran mercado especializado en pescado y marisco; desde hace más de 400 años combina la compra diaria de los vecinos con la curiosidad de los visitantes.'},
    {type:'p', text:'Es de mala educación comer mientras se camina por el mercado: lo habitual es apartarse junto al puesto donde se ha comprado y disfrutar la elaboración de pie, sin avanzar.'},
    {type:'heading', text:'Qué comer en el mercado', icon:'🍢'},
    {type:'stop', title:'Yuba y tofu', text:[
      'La yuba es la fina película que se forma al hervir leche de soja, uno de los productos más representativos de la cocina de Kioto. Yubakichi la vende fresca y seca desde el siglo XVIII, y Hanayori-Kiyoe prepara una croqueta de yuba crujiente por fuera y cremosa por dentro. Konna Monja añade donuts de soja en sabores como azúcar moreno, chocolate o caramelo.'
    ]},
    {type:'stop', title:'Bocados para comer de pie', text:[
      'El tako-tamago —una brocheta de pulpo confitado en salsa dulce, relleno de un huevo de codorniz— es uno de los más fotografiados; se prueba en Kai. La tempura también tiene mucho protagonismo: Uoriki fríe hamo (morenocio) del mar Interior de Seto, mientras Nishiki Hirano se especializa en langostinos. Los satsuma-age de Houkyuuan, pasteles de pescado fritos con relleno de edamame, patata o queso, son otra parada clásica.'
    ]},
    {type:'stop', title:'Carnes y pescados de casas centenarias', text:[
      'Las carnicerías del mercado cocinan al momento el corte de wagyu que se elija, servido en una cajita de obento. La pescadería Kimura vende desde 1620 y ofrece sashimi o pescado a la parrilla con sake para acompañar. También hay unagi kabayaki (anguila asada y glaseada) en Notoyo Nishi-ten y brochetas de cangrejo, hervido o en tempura, en Yatai-mura Nishiki.'
    ]},
    {type:'stop', title:'Dulces y postres', text:[
      'Kofukudo reúne mochi de todo tipo, pero los favoritos suelen ser el ichigo daifuku de Fuka —un mochi con una fresa entera dentro— y el warabimochi de matcha de Uji de Sawawa. El ichigo sando, un sándwich de pan de leche con nata y fresas frescas, y las brochetas de senbei y dango de Terakoya Honpo completan la ronda dulce. En Snoopy Cha-Ya se preparan gofres rellenos con forma del personaje.'
    ]},
    {type:'heading', text:'Qué comprar', icon:'🛍️'},
    {type:'stop', title:'Para llevar a la cocina de casa', text:[
      'Barricas de tsukemono (verduras encurtidas, incluida la berenjena Kamo, exclusiva de Kioto), alga konbu seca o en tsukudani, pescado seco como niboshi o sakura ebi, y paquetes de furikake para el arroz blanco son los clásicos que más se llevan los visitantes.'
    ]},
    {type:'stop', title:'Aritsugu, los cuchillos de Kioto', text:[
      'Esta tienda familiar, con historia desde finales del siglo XVI, es una referencia para comprar cuchillos de cocina japoneses; graban el nombre del comprador de forma gratuita. También venden utensilios de aluminio, cobre y latón.'
    ]},
    {type:'stop', title:'Otros clásicos para llevar', text:[
      'You-Zen y Heibei Shoten venden palillos japoneses de todos los precios y diseños, con posibilidad de grabado. Tsunoki, con más de 200 años de historia, es un buen sitio para comprar sake, shochu o whisky japonés. Y si te gustan los gatos, Neko Masshiguru tiene todo tipo de souvenirs con temática felina, desde maneki-neko a paraguas.'
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
