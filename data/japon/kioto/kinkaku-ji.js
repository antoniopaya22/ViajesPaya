// Kinkaku-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'kinkaku-ji', city: 'kioto', zone: 'noroeste', name: 'Kinkaku-ji', category: 'Templo y jardín',
  image: 'assets/kinkakuji.jpg',
  lat: 35.0394, lon: 135.7292,
  lead: 'El Pabellón Dorado reflejado en su estanque, con las dos plantas superiores recubiertas de pan de oro.',
  duration: '45–75 min',
  price: 'Consulta la tarifa vigente en la web oficial',
  stats: [
    {value:'1397', label:'año de construcción, como villa de retiro', icon:'pagoda'},
    {value:'1955', label:'reconstrucción tras el incendio de 1950', icon:'flame'},
    {value:'3', label:'estilos arquitectónicos, uno por planta', icon:'pagoda'}
  ],
  blocks: [
    {type:'lead', text:'Construido en 1397 como villa de retiro del shōgun Ashikaga Yoshimitsu, el pabellón se convirtió en templo zen en 1408 tras su muerte, según su propia voluntad, y pasó a funcionar como shariden, relicario de las reliquias de Buda. Su nombre oficial es Rokuon-ji, y fue declarado Patrimonio de la Humanidad por la Unesco en 1994.'},
    {type:'heading', text:'La entrada al recinto', icon:'gate'},
    {type:'stop', title:'Puerta Sōmon, la torre de campana y el Kuri', text:[
      'El acceso se hace por la puerta tradicional Sōmon. A la izquierda se alza una torre de campana que, según la tradición, se forjó en el periodo Kamakura (1185-1333); a la derecha, el Kuri, un gran edificio de arquitectura zen que se cree construido a finales del siglo XV o comienzos del XVI. Al final del camino aparece la puerta Karamon, de estilo chino, hoy cerrada: el acceso al estanque y al pabellón se realiza por una puerta lateral.'
    ]},
    {type:'stop', title:'Un pabellón reconstruido, tres estilos superpuestos', text:[
      'El edificio actual es una reconstrucción de 1955, ya que en 1950 un monje incendió el pabellón original, un episodio narrado en la novela El pabellón de oro de Yukio Mishima. Cada una de sus tres plantas sigue un estilo distinto: la primera, shinden-zukuri, de estilo palaciego Heian con paredes blancas; la segunda, buke-zukuri, propia de las residencias samurái, y la tercera, karayō o zen chino; las dos plantas superiores están cubiertas por completo de pan de oro sobre laca, y en lo alto del tejado corona el conjunto un fénix chino dorado.',
      'La primera planta, Hōsui-in, es la única sin pan de oro. La segunda, Chō-on-dō, guarda una estatua del bodhisattva Kannon rodeada por los Cuatro Reyes Celestiales, guardianes del budismo. Y la tercera, Kukkyō-chō, alberga una tríada de budas y 25 pequeñas figuras de bodhisattvas; ni el interior de ninguna planta es accesible al visitante, que las observa desde el camino que bordea el estanque.'
    ]},
    {type:'stop', title:'El estanque Kyōko-chi y el jardín original', text:[
      'El recorrido bordea el estanque «espejo de agua», salpicado de islas y piedras que representan capítulos del budismo, y continúa por el jardín original del siglo XIV, con la fuente Gingasen que Yoshimitsu usaba para el té.',
      'Cerca discurre el arroyo Gankasui, que Yoshimitsu usaba para lavarse las manos, y una escalinata de piedra llamada Kokei-kyō con barandillas de bambú: su estilo dio nombre a las vallas «Kinkakuji-gaki» que hoy se ven en jardines de todo Japón. Junto a las escaleras cae la cascada Ryūmon-taki, de 2,3 metros, coronada por una roca llamada rigyoseki o «roca-carpa», en referencia a una leyenda china sobre una carpa que remontó la cascada y se transformó en dragón. En el estanque Anmintaku, que según la tradición nunca se seca, hay un islote con una pagoda de piedra de cinco pisos y estatuas a las que los visitantes lanzan monedas para pedir fortuna.'
    ]},
    {type:'stop', title:'Casa de té Sekka-tei y salón Fudō-dō', text:[
      'El paseo termina en la casa de té Sekka-tei, del periodo Edo y estilo sukiya-zukuri, conocida por su altar tokonoma con detalles de bambú y sus estanterías con forma de trébol; hoy se puede tomar allí un té matcha con un dulce mientras se disfruta de vistas al pabellón, especialmente al atardecer. Cierra la visita el salón Fudō-dō, cuya estatua de Fudō Myōō se atribuye al monje Kōbō Daishi, fundador de la escuela budista Shingon, en el siglo IX, y solo se muestra al público durante el Setsubun y el Obon.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'La roca en lo alto de la cascada Ryūmon-taki se llama rigyoseki o «roca-carpa», por la leyenda china de una carpa que remontó la cascada y se convirtió en dragón.',
      'El estanque Anmintaku, junto a la casa de té, nunca se seca según la tradición del templo.',
      'El nieto de Yoshimitsu, Ashikaga Yoshimasa, se inspiró en este pabellón para construir el Ginkaku-ji o «Pabellón de Plata», al otro extremo de la ciudad.'
    ]}
  ],
  hours: 'Todos los días de 9:00 a 17:00.',
  hoursSource: 'https://www.shokoku-ji.jp/en/kinkakuji/access/',
  tickets: 'La entrada funciona también como amuleto tradicional de protección: consérvala en lugar de tirarla.',
  official: 'https://www.shokoku-ji.jp/en/kinkakuji/',
  tips: [
    'Ve a primera hora de la mañana para fotografiar el reflejo del pabellón en el estanque sin aglomeraciones.',
    'El recorrido es de sentido único: no te precipites, hay buenas vistas también desde la parte trasera del edificio.',
    'Guarda la entrada como recuerdo: tradicionalmente funciona como amuleto de protección para el hogar.'
  ],
  access: 'En autobús desde el centro de Kioto hasta la parada Kinkakuji-michi; también se puede combinar a pie con Ryōan-ji y Ninna-ji por el paseo Kinukake-no-michi.'
});
