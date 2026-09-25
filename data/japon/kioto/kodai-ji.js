// Kōdai-ji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'kodai-ji', city: 'kioto', zone: 'higashiyama-sur', name: 'Kōdai-ji', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-kodai-ji.jpg',
  lat: 35.0008, lon: 135.7811,
  lead: 'El templo que Nene, viuda de Toyotomi Hideyoshi, mandó construir en 1606 para rezar por el alma de su marido: laca dorada, jardines de Kobori Enshū y dos casas de té de Sen no Rikyū.',
  duration: '45 min – 1,5 horas',
  price: '800 ¥ adulto (incluye el museo Sho); 400 ¥ estudiantes de secundaria; gratis menores de primaria acompañados',
  stats: [
    {value:'1606', label:'año de fundación por Nene, viuda de Hideyoshi', icon:'heart'},
    {value:'2', label:'casas de té originales de Sen no Rikyū conservadas', icon:'teacup'},
    {value:'1598', label:'año de la muerte de Toyotomi Hideyoshi', icon:'scroll'},
    {value:'26', label:'años que vivió Nene como monja tras enviudar', icon:'bell'}
  ],
  blocks: [
    {type:'lead', text:'Kōdai-ji es el templo que la viuda de Toyotomi Hideyoshi, Nene, mandó construir en 1606 para rezar por el alma de su marido: un monumento al amor y al poder del Japón de finales del siglo XVI, cubierto de laca dorada y rodeado de jardines diseñados por el gran maestro Kobori Enshū.'},
    {type:'p', text:'Tras la muerte de Hideyoshi en 1598, Nene —conocida también como Kita-no-Mandokoro, «la de la residencia norte»— se convirtió en monja budista bajo el nombre de Kōdai-in y dedicó el resto de su vida a honrar la memoria de su esposo. El templo se levantó con el generoso apoyo económico de Tokugawa Ieyasu, el mismo señor que heredaría el poder unificado por Hideyoshi, e incorporó estructuras trasladadas desde otros templos y castillos de la época, entre ellas las dos casas de té de Sen no Rikyū que aún se conservan.'},
    {type:'heading', text:'El mausoleo dorado de Otama-ya', icon:'heart'},
    {type:'stop', title:'Otama-ya, el mausoleo de maki-e', text:[
      'En el interior del recinto se levanta el Otama-ya, el mausoleo donde reposan las imágenes de Hideyoshi y de la propia Nene. Sus puertas, altares y pilares están decorados con la técnica de laca maki-e —«imagen espolvoreada»—, que combina motivos de otoño y crisantemos en oro y plata sobre fondo negro, en un estilo tan característico del periodo Momoyama que Kōdai-ji es conocido popularmente como «el templo del maki-e».',
      'La pieza es uno de los pocos ejemplos de laca decorativa de esta época que ha sobrevivido casi intacta hasta hoy, después de que varios incendios destruyeran buena parte del resto del complejo original a lo largo de los siglos XVII y XVIII.'
    ]},
    {type:'heading', text:'Las casas de té de Sen no Rikyū', icon:'teacup'},
    {type:'stop', title:'Shigure-tei, la casa de la lluvia fina', text:[
      'Trasladada desde el castillo de Fushimi tras su desmantelamiento, Shigure-tei es una rareza entre las casas de té japonesas: tiene dos plantas, con una zona de preparación (mizuya) en la planta baja y la sala donde se sirve el té en la superior. Su diseño se atribuye a Sen no Rikyū, el maestro que en el siglo XVI fijó buena parte de la estética que hoy asociamos con la ceremonia del té, y está catalogada como bien cultural importante de Japón.'
    ]},
    {type:'stop', title:'Kasa-tei, el pabellón sombrilla', text:[
      'Unida a Shigure-tei por un pasillo cubierto, Kasa-tei debe su nombre a su tejado de bambú y troncos finos dispuestos en abanico, que recuerda a una sombrilla de paja abierta. Es una construcción mucho más humilde que la del mausoleo dorado, fiel al espíritu wabi-sabi de sencillez e imperfección que Rikyū llevó a su máxima expresión.'
    ]},
    {type:'heading', text:'Jardines, el mirador de la luna y el bosque de bambú', icon:'tree'},
    {type:'stop', title:'El jardín del estanque y el Kangetsudai', text:[
      'Diseñado por Kobori Enshū, uno de los grandes paisajistas y maestros de té de la historia de Japón, el jardín tsukiyama que rodea el estanque está pensado para pasear y para contemplarse desde distintos puntos fijos, con pinos, rocas y un puente de piedra en curva. El Kangetsudai, un pequeño mirador cubierto junto al agua, era el lugar desde el que Nene y sus invitados observaban el reflejo de la luna sobre el estanque en las noches despejadas.'
    ]},
    {type:'stop', title:'El jardín seco de rocas', text:[
      'Frente al salón principal se extiende un jardín de rocas de estilo karesansui, con gravilla rastrillada que representa el océano y un puñado de piedras dispuestas como islas. A diferencia de otros jardines secos más conocidos de Kioto, aquí el conjunto se completa con arces que en otoño tiñen de rojo el fondo del jardín.'
    ]},
    {type:'stop', title:'El sendero de bambú', text:[
      'Un breve camino flanqueado por bambúes conecta la zona de las casas de té con la salida del templo, hacia el llamado «Camino de Nene» (Nene-no-michi). No tiene la escala del bosque de bambú de Arashiyama, al otro lado de la ciudad, pero comparte la misma luz verdosa filtrándose entre las cañas, y suele estar mucho más tranquilo.'
    ]},
    {type:'heading', text:'Iluminaciones nocturnas de primavera y otoño', icon:'lantern'},
    {type:'stop', title:'El templo de noche', text:[
      'Kōdai-ji abre por la noche durante varias temporadas especiales al año —normalmente en primavera, verano y otoño—, con el jardín y el estanque iluminados y, en los últimos años, proyecciones de arte digital (projection mapping) sobre el agua y la vegetación. Las fechas exactas cambian cada año y conviene comprobarlas en la web oficial antes de planear la visita, pero suelen incluir varias semanas en torno a los cerezos de primavera y a los arces de finales de otoño, con horario ampliado hasta cerca de las 22:00 y entrada independiente de la diurna.'
    ]},
    {type:'cards', title:'Alrededores de Kōdai-ji', items:[
      {icon:'eye', title:'Ryōzen Kannon', text:'A pocos metros de la entrada, esta gran estatua de hormigón de 24 metros, construida en 1955, honra a los caídos de la Segunda Guerra Mundial de todos los bandos; se visita con una entrada aparte.'},
      {icon:'footprints', title:'Nene-no-michi', text:'El empedrado que baja desde el templo hacia Yasaka-jinja y Kiyomizu-dera, con tiendas y casas de té tradicionales, es uno de los paseos más fotogénicos de todo Higashiyama.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Nene enviudó en 1598 y vivió otros 26 años como monja budista, dedicada por completo a la memoria de Hideyoshi hasta su propia muerte en 1624.',
      'Shigure-tei es una de las poquísimas casas de té históricas de dos plantas que se conservan en Japón, algo muy inusual en este tipo de construcciones.',
      'Desde 2019, un robot humanoide llamado Mindar recita fragmentos del Sutra del Corazón en uno de los salones del templo, una singular mezcla de tradición budista y robótica desarrollada con la Universidad de Osaka.'
    ]}
  ],
  hours: 'Todos los días de 9:00 a 17:30 (última entrada a las 17:00); durante las iluminaciones nocturnas de primavera, verano y otoño el horario se amplía hasta cerca de las 21:30–22:00, con entrada independiente de la diurna.',
  hoursSource: 'https://www.kodaiji.com/',
  tickets: 'La entrada se compra en la taquilla de acceso al recinto; las iluminaciones nocturnas especiales requieren una entrada aparte, distinta de la diurna.',
  official: 'https://www.kodaiji.com/',
  tips: [
    'Combina la visita con el cercano santuario Yasaka-jinja y el templo Kiyomizu-dera: los tres están a poca distancia a pie por Higashiyama.',
    'Si coincide con una temporada de iluminación nocturna (primavera, verano u otoño), resérvala para el final del día: el ambiente cambia por completo respecto a la visita diurna.',
    'Baja después hacia Nene-no-michi y Sannenzaka para seguir el paseo entre casas de té y tiendas tradicionales.'
  ],
  access: 'A 5–10 minutos a pie desde la parada de autobús Higashiyama-Yasui (líneas 206 y 100 desde la estación de Kioto), entre el santuario Yasaka y Kiyomizu-dera.'
});
