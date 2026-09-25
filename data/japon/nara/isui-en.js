// Jardín Isui-en — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'isui-en', city: 'nara', name: 'Jardín Isui-en', category: 'Jardín',
  image: 'assets/japon-isui-en.jpg',
  lat: 34.685466, lon: 135.837919,
  lead: 'Un jardín de paseo construido en dos tiempos, cuya vista principal «toma prestados» la puerta Nandaimon de Tōdai-ji y el monte Wakakusa como si fueran parte del propio jardín.',
  duration: '30–45 min',
  price: '1.200 ¥ adulto (incluye el Museo Neiraku)',
  stats: [
    {value:'1670', label:'inicio del jardín delantero, la parte más antigua', icon:'tree'},
    {value:'1899', label:'año de creación del jardín trasero', icon:'scroll'},
    {value:'13.500 m²', label:'superficie total del jardín', icon:'ruler'},
    {value:'2.000', label:'piezas de cerámica y bronce del Museo Neiraku', icon:'trophy'}
  ],
  blocks: [
    {type:'lead', text:'Isui-en —«jardín que se apoya en el agua»— es en realidad dos jardines unidos en uno: el delantero, creado entre 1670 y 1681 por un rico comerciante de curtidos y textiles, y el trasero, añadido hacia 1899 por el empresario de Nara Seki Tōjirō con ayuda de un maestro de la escuela de té Urasenke. Ambas partes se fusionaron en una sola propiedad en 1939.'},
    {type:'p', text:'Es el único jardín de paseo (kaiyū-shiki teien) de Nara construido alrededor de un estanque central con esta función contemplativa, y su recorrido, corto pero muy cuidado, se disfruta rodeando el agua paso a paso desde distintos ángulos.'},
    {type:'heading', text:'El arte de tomar prestado el paisaje', icon:'eye'},
    {type:'stop', title:'Shakkei: cuando el paisaje de fuera parece del propio jardín', text:[
      'La vista más célebre de Isui-en está compuesta con la técnica del shakkei o «paisaje prestado»: el jardín se diseñó para que el tejado de la puerta Nandaimon de Tōdai-ji y la silueta del monte Wakakusa (junto con las montañas Kasuga y Mikasa) parezcan formar parte del propio recinto, sin que ningún muro corte la vista hacia ellos.'
    ]},
    {type:'stop', title:'Un estanque con forma de kanji', text:[
      'El estanque central del jardín trasero tiene la forma del carácter japonés de «agua» (水), un detalle discreto que solo se aprecia bien desde algunos puntos del recorrido o desde el aire, y que resume bien el nombre del propio jardín.'
    ]},
    {type:'heading', text:'El Museo Neiraku', icon:'book'},
    {type:'stop', title:'Cerámica y bronces de China y Corea', text:[
      'Junto al jardín, el Museo de Arte Neiraku abrió sus puertas en 1969 y reúne más de 2.000 piezas de cerámica, bronces, espejos y sellos antiguos procedentes de China y la península de Corea, una colección que añade una parada cultural a la pausa contemplativa del jardín.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Isui-en es el único jardín de paseo de Nara construido en torno a un estanque central con esta función contemplativa.',
      'Su vista más fotografiada usa la técnica shakkei para integrar la puerta Nandaimon de Tōdai-ji y el monte Wakakusa en el propio jardín, sin muros que corten la vista.',
      'El jardín cierra varias semanas al año por mantenimiento, a finales de diciembre-mediados de enero y a finales de septiembre: conviene comprobarlo si se visita fuera de temporada alta.'
    ]}
  ],
  hours: 'De 9:30 a 16:30 (última entrada 16:00). Cierra los martes, y por mantenimiento a finales de diciembre-mediados de enero y a finales de septiembre.',
  hoursSource: 'https://isuien.or.jp/',
  tickets: 'Entrada combinada con el Museo Neiraku: 1.200 ¥ adulto, 500 ¥ estudiante de universidad o instituto, 300 ¥ primaria y secundaria.',
  official: 'https://isuien.or.jp/',
  tips: [
    'Ve con calma: es un jardín pequeño, pero cada ángulo del estanque ofrece una vista distinta de la puerta Nandaimon y el monte Wakakusa.',
    'Combínalo con Yoshiki-en, justo al lado: se visitan los dos en la misma media mañana o tarde.',
    'Comprueba las fechas de cierre por mantenimiento antes de ir si viajas a finales de diciembre, enero o septiembre.'
  ],
  access: 'A pie desde el templo Tōdai-ji (unos 5 minutos) o desde la estación de Kintetsu Nara (unos 15-20 minutos).'
});
