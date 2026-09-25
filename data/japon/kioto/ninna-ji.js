// Ninna-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'ninna-ji', city: 'kioto', name: 'Ninna-ji', category: 'Templo',
  image: 'assets/japon-ninna-ji.jpg',
  lat: 35.0307, lon: 135.7148,
  lead: 'Un templo imperial con una pagoda de cinco pisos y cerezos que florecen más tarde que el resto de Kioto.',
  duration: '1–1,5 horas',
  price: 'Recinto exterior gratuito (con tarifa especial en floración de cerezos)',
  stats: [
    {value:'888', label:'año de fundación, por el emperador Uda', icon:'pagoda'},
    {value:'36 m', label:'altura de la pagoda de cinco pisos', icon:'tower'},
    {value:'200', label:'cerezos Omuro Zakura de floración tardía', icon:'blossom'}
  ],
  blocks: [
    {type:'lead', text:'Fundado en 888 por orden del emperador Uda, que se convirtió en el primer «monje aristocrático» del templo, Ninna-ji mantuvo durante siglos la tradición de que hijos de la familia imperial ocuparan el cargo de monje principal. La mayoría de sus edificios, destruidos en un incendio durante las guerras Ōnin de 1467, son reconstrucciones de comienzos del siglo XVII financiadas por el patronazgo imperial.'},
    {type:'stop', title:'Puerta Niō-mon y Omuro Goten', text:[
      'La puerta Niō-mon, de 18 metros y uno de los tres grandes portones budistas de Kioto, da acceso al recinto; a la izquierda se encuentra el Omuro Goten, antigua residencia del monje principal con jardines y pinturas de estilo palaciego, la única zona de pago del templo salvo en temporada de cerezos.'
    ]},
    {type:'stop', title:'La pagoda de cinco pisos', text:[
      'De 36 metros y original de 1624, se sostiene gracias a un pilar central que anticipó técnicas antisísmicas usadas hoy en construcciones modernas como el Tokyo Skytree.'
    ]},
    {type:'stop', title:'Los cerezos Omuro Zakura', text:[
      'El templo es célebre por sus cerezos Omuro Zakura, unos 200 árboles de menor altura plantados a comienzos del periodo Edo que florecen más tarde que los Somei Yoshino habituales, por lo que Ninna-ji es una buena opción para quien llega a Kioto cuando la floración general ya ha pasado.'
    ]},
    {type:'stop', title:'La mini peregrinación de los 88 Kasho', text:[
      'Detrás del templo, en el monte Jōju, esta ruta recrea en un par de horas los 88 templos de la peregrinación de Shikoku, pensada para quienes no pueden completar la original.'
    ]}
  ],
  hours: 'El recinto exterior tiene horario propio; el Omuro Goten y las zonas de pago suelen abrir de 9:00 a 17:00.',
  hoursSource: 'https://www.ninnaji.jp/en/',
  tickets: 'La entrada al Omuro Goten se compra en su propio acceso.',
  official: 'https://www.ninnaji.jp/en/',
  tips: [
    'Ve a mediados o finales de abril si quieres ver los cerezos Omuro Zakura cuando ya han pasado los del resto de la ciudad.',
    'Combina la visita con Ryōan-ji y Kinkaku-ji siguiendo el paseo Kinukake-no-michi.'
  ],
  access: 'A pie desde la parada de tranvía Randen Omuro-Ninnaji (línea Randen/Keifuku), o en autobús hasta la parada Omuro Ninnaji.'
});
