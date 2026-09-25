// Ninna-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'ninna-ji', city: 'kioto', zone: 'noroeste', name: 'Ninna-ji', category: 'Templo',
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
      'La puerta Niō-mon, de 18 metros, construida en el estilo japonés que se desarrolló en el periodo Nara (710-794) para diferenciarse de las influencias chinas, es uno de los tres grandes portones budistas de Kioto; debe su nombre a los dos guardianes Niō que protegen la entrada a ambos lados. A la izquierda se encuentra el Omuro Goten, antigua residencia del monje principal con jardines y pinturas de estilo palaciego, la única zona de pago del templo salvo en temporada de cerezos.'
    ]},
    {type:'stop', title:'Puerta del enviado imperial Chokushi-mon', text:[
      'Un poco más allá de la entrada al Goten se alza la puerta Chokushi-mon, construida exclusivamente para el paso del emperador. Hoy solo se abre una vez al año, en octubre, durante la procesión del festival del santuario Fukuoji —donde está consagrada la madre del emperador Uda— hasta el Ninna-ji. La puerta original ardió en 1887 y fue reconstruida en 1913.'
    ]},
    {type:'stop', title:'La pagoda de cinco pisos', text:[
      'De 36 metros y original de 1624, se sostiene gracias a un pilar central que anticipó técnicas antisísmicas usadas hoy en construcciones modernas como el Tokyo Skytree. El acceso a la puerta central Chumon, del siglo XVII y flanqueada por guardianes Deva, lleva a la zona de los cerezos.'
    ]},
    {type:'cards', title:'Otros edificios del complejo', items:[
      {icon:'pagoda', title:'Kondō, el salón principal', text:'Tesoro Nacional y ejemplo más antiguo conservado de Shishin-den; trasladado aquí entre 1624 y 1644, alberga la deidad Amida Sanzon.'},
      {icon:'book', title:'Kyōzō, el repositorio de sutras', text:'De 1613, en estilo Zen Shuyō; guarda la estatua de Shaka Nyorai y un repositorio con 768 cajas de sutras budistas.'},
      {icon:'bell', title:'Shōrō, la torre de campana', text:'Construida entre 1624 y 1644 y pintada de bermellón, es Bien de Interés Cultural.'},
      {icon:'scroll', title:'Kannon-dō', text:'De 1641-1644; guarda la estatua de Senju Kannon Bosatsu flanqueada por dos guardianes y rodeada de 28 figuras.'},
      {icon:'heart', title:'Mieidō', text:'Consagra a Kōbō Daishi, al emperador-monje Kanpyō y al príncipe Dainisei Shoshin; reutiliza estructura de un salón del siglo XVI.'}
    ]},
    {type:'stop', title:'Los cerezos Omuro Zakura', text:[
      'El templo es célebre por sus cerezos Omuro Zakura, unos 200 árboles de menor altura plantados a comienzos del periodo Edo que florecen más tarde que los Somei Yoshino habituales, por lo que Ninna-ji es una buena opción para quien llega a Kioto cuando la floración general ya ha pasado. Ya eran populares entre los habitantes de Kioto a mediados del periodo Edo, como muestra la pintura Miyako Meisho Zu-e de 1780.'
    ]},
    {type:'stop', title:'La mini peregrinación de los 88 Kasho', text:[
      'Detrás del templo, en el monte Jōju, esta ruta recrea en un par de horas los 88 templos de la peregrinación de Shikoku, pensada para quienes no pueden completar la original; su fundador, Kūkai (Kōbō Daishi), está consagrado en el Mieidō del propio Ninna-ji.'
    ]},
    {type:'stop', title:'El paseo Kinukake-no-michi', text:[
      'Ninna-ji está conectado con Kinkaku-ji y Ryōan-ji por el paseo Kinukake-no-michi, de 2,5 km entre árboles a los pies del monte Kinugasa. Su nombre, «el camino cubierto de seda», recuerda al emperador Uda: para que pudiera contemplar un paisaje nevado en pleno verano, se cubrieron las laderas de la montaña con seda blanca.'
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
