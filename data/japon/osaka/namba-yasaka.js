// Santuario Namba Yasaka — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'namba-yasaka', city: 'osaka', zone: 'namba', name: 'Santuario Namba Yasaka', category: 'Santuario', reviewed: '2026-09',
  image: 'assets/japon-namba-yasaka.jpg',
  lat: 34.6614, lon: 135.4971,
  lead: 'Un remanso de paz a pocos minutos de Dōtonbori, con un escenario en forma de cabeza de león de doce metros que «se come» a los malos espíritus.',
  duration: '20–30 min',
  price: 'Entrada gratuita',
  stats: [
    {value:'12 m', label:'altura del salón Shishiden, la cabeza de león', icon:'tower'},
    {value:'1872', label:'año en que el recinto budista se convirtió en santuario sintoísta', icon:'scroll'},
    {value:'1974', label:'año de reconstrucción del salón actual', icon:'gate'},
    {value:'3er domingo', label:'de enero: competición de tira y afloja en honor a Susanoo', icon:'trophy'}
  ],
  blocks: [
    {type:'lead', text:'El santuario Namba Yasaka es un auténtico remanso de paz a pocos minutos del centro comercial Namba Parks y de Dōtonbori, y uno de los santuarios más curiosos y peculiares de Osaka; salvo que se sepa exactamente dónde está, es fácil pasarlo de largo.'},
    {type:'p', text:'Lo que ha convertido a este santuario en un lugar popular es su espectacular salón con forma de cabeza de león, que funciona como escenario para artes escénicas tradicionales: la boca abierta del león representa, según la tradición, «comerse» a los malos espíritus.'},
    {type:'heading', text:'Shishiden, el escenario con forma de cabeza de león', icon:'tower'},
    {type:'stop', title:'Doce metros de hormigón, acero y madera', text:[
      'El salón mide 12 metros de alto, 11 de ancho y 7 de profundidad, y está construido en hormigón armado sobre una estructura de acero y madera; el exterior se acabó con resina sintética rociada con polvo de cobre, lo que le da su característico color verdoso.',
      'Como el salón funciona como escenario para artes escénicas, los ojos del león son en realidad luces y la nariz un altavoz. Aquí se celebran espectáculos de kagura (danza ritual sintoísta) e iaido (arte marcial japonés) en Año Nuevo, así como danzas folclóricas como el Shishimai o «baile del león» durante el festival de verano.'
    ]},
    {type:'stop', title:'Una reconstrucción de 1974', text:[
      'El santuario ocupa los antiguos terrenos de un gran complejo de templos budistas que, con la restauración Meiji y la separación oficial del sintoísmo y el budismo, se convirtió en 1872 en un santuario sintoísta dedicado a la deidad local del barrio de Namba. La zona no sobrevivió a los bombardeos de la Segunda Guerra Mundial, así que lo que se visita hoy es una reconstrucción de mayo de 1974, momento en el que se levantó el actual escenario con forma de cabeza de león.'
    ]},
    {type:'heading', text:'El resto del recinto', icon:'lantern'},
    {type:'stop', title:'El salón principal y sus lámparas', text:[
      'El salón principal (haiden), de arquitectura mucho más tradicional que la del escenario del león, pasa bastante más desapercibido pese a sus preciosas lámparas de piedra. Alrededor hay también pequeños santuarios dedicados a otras deidades, como Inari, además de varios ciruelos y cerezos que en primavera tiñen de rosa todo el recinto.'
    ]},
    {type:'stop', title:'El cañón del acorazado Mutsu', text:[
      'Entre los monumentos del recinto destaca el tapón de boca de uno de los ocho cañones del acorazado japonés Mutsu, hundido en la bahía de Hiroshima en 1943 tras una violenta explosión interna que no tuvo relación con ataques enemigos. Este tapón fue rescatado de los restos del barco, y aquí están consagrados los espíritus del capitán Teruhisa Miyoshi y del resto de los 1.021 oficiales y soldados fallecidos en la explosión.'
    ]},
    {type:'heading', text:'Susanoo y el tira y afloja de enero', icon:'trophy'},
    {type:'stop', title:'La leyenda de la serpiente y el festival de invierno', text:[
      'El santuario está dedicado a la deidad Susanoo, y el tercer domingo de enero se celebra en su honor una competición de tira y afloja o sokatira: el festival recrea un mito local según el cual Susanoo mató a una enorme serpiente y liberó con ello a la gente del barrio de Namba. El santuario celebra también eventos propios en Año Nuevo y durante su festival de verano.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Los ojos del león son luces y la nariz un altavoz: el propio salón está pensado para funcionar como escenario de artes escénicas.',
      'El santuario ocupó primero un complejo budista; solo se convirtió en santuario sintoísta en 1872, tras la separación oficial de ambas religiones en Japón.',
      'Entre los monumentos del recinto hay un tapón de cañón del acorazado Mutsu, hundido en 1943 en una explosión interna sin relación con la guerra.'
    ]}
  ],
  hours: '9:00–17:00, entrada gratuita.',
  hoursSource: 'https://nambayasaka.jp/',
  tickets: 'No se necesita entrada.',
  official: 'https://nambayasaka.jp/',
  tips: [
    'Búscalo con calma: al estar algo escondido entre calles comerciales, es fácil pasarlo de largo pese a estar muy cerca de Dōtonbori y Namba Parks.',
    'Si viajas el tercer domingo de enero, no te pierdas la competición de tira y afloja en honor a Susanoo.',
    'Combina la visita con Namba Parks y Dōtonbori: los tres están a pocos minutos a pie entre sí.'
  ],
  access: 'A pie desde la estación de Namba (líneas Nankai, Midosuji, Sennichimae, Yotsubashi, Kintetsu), a unos 5 minutos hacia el suroeste.'
});
