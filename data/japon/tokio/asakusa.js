// Asakusa — ficha con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'asakusa', city: 'tokio', zone: 'este', name: 'Asakusa', category: 'Barrio histórico',
  image: 'assets/japon-asakusa.jpg',
  lat: 35.7118, lon: 139.7967,
  lead: 'El shitamachi más tradicional de Tokio, alrededor del templo Sensō-ji, con calles comerciales, izakaya y algún rincón inesperado.',
  duration: '1,5–2 horas',
  price: 'Paseo gratuito',
  stats: [
    {value:'150+', label:'años de historia del parque Hanayashiki', icon:'trophy'},
    {value:'8', label:'plantas del centro de información de Kengo Kuma', icon:'eye'},
    {value:'~1 km', label:'de tiendas de menaje en la calle Kappabashi', icon:'ruler'}
  ],
  blocks: [
    {type:'lead', text:'Asakusa fue durante siglos el gran barrio de ocio de Edo: teatros, casas de té y peregrinos que acudían a Sensō-ji convivían en sus calles. Gran parte del barrio quedó arrasado por los bombardeos de la Segunda Guerra Mundial y se reconstruyó después, pero conserva ese ambiente de shitamachi o «ciudad baja» que ya ha desaparecido de otras zonas de Tokio.'},
    {type:'p', text:'Junto al templo se encuentra el santuario Asakusa, dedicado a los pescadores que según la leyenda hallaron en el río Sumida la estatua de Kannon que dio origen a Sensō-ji; sobrevivió a los bombardeos y hoy es el escenario del Sanja Matsuri, uno de los festivales sintoístas más multitudinarios de la ciudad.'},
    {type:'heading', text:'Calles y mercados alrededor del templo', icon:'footprints'},
    {type:'stop', title:'Shin-Nakamise y el pasaje Asakusa Chikagai', text:[
      'Perpendicular a la Nakamise-dori del templo, la calle Shin-Nakamise es una shotengai llena de tiendas y restaurantes conectada por el pasaje subterráneo Asakusa Chikagai, uno de los más antiguos de Japón, con el aire del periodo Shōwa todavía intacto. Conecta la estación Asakusa de la línea Tobu con la calle en pocos minutos sin salir a la superficie.'
    ]},
    {type:'stop', title:'Centro de información turística de Asakusa', text:[
      'Frente a la puerta Kaminarimon se levanta este edificio de ocho plantas diseñado por Kengo Kuma e inaugurado en 2012, con un mirador gratuito en la última planta (abierto hasta las 22:00) desde el que se ve el templo, la Nakamise y la Skytree en una sola panorámica.'
    ]},
    {type:'stop', title:'Calle Hoppy', text:[
      'Al oeste del templo, esta pequeña calle de apenas 80 metros concentra izakaya con mesas en la calle donde se sirve horumon-yaki (casquería a la plancha) y la bebida —mezcla de shochu y cerveza— que le da nombre.'
    ]},
    {type:'stop', title:'Calle Kappabashi y alrededores', text:[
      'Casi un kilómetro de tiendas de menaje y utensilios de cocina, el lugar de referencia en todo Japón para comprar cuchillos, cuencos o las famosas réplicas de plástico de comida (sampuru). La calle Edo, entre las estaciones de Asakusabashi y Kuramae, suma tiendas de decoración y juguetes tradicionales, y el distrito de Hanakawadō, junto al parque Sumida, tiendas de zapatos y artículos de cuero.'
    ]},
    {type:'heading', text:'Río, cerveza y algo de cultura', icon:'droplet'},
    {type:'stop', title:'Parque Sumida y cruceros fluviales', text:[
      'Desde el muelle junto al puente Azuma salen cruceros hacia los jardines Hama-Rikyū o la isla artificial de Odaiba. El parque Sumida es uno de los mejores lugares del barrio para ver los cerezos en flor en primavera o los fuegos artificiales del verano.'
    ]},
    {type:'stop', title:'Asahi Beer Tower y Asahi Beer Hall', text:[
      'Cruzando el puente Azuma, estos dos edificios son reconocibles por la escultura dorada Flamme d’Or de Philippe Starck —que a muchos les recuerda a otra cosa muy distinta—; buen lugar para tomar una cerveza Asahi con vistas a la Skytree.'
    ]},
    {type:'stop', title:'Marugoto Nippon', text:[
      'Centro comercial dedicado a productos regionales de todo Japón —de Shikoku a Hokkaidō u Okinawa—, con restaurantes de okonomiyaki y wagyu a la parrilla en la planta superior: una manera de recorrer el país entero sin salir de Asakusa.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El parque de atracciones Hanayashiki, con más de 150 años de historia, es el más antiguo de Japón y conserva atracciones de aire retro.',
      'En las baldosas de la acera frente al teatro de rakugo hay huellas de manos de artistas japoneses, incluida la de Takeshi Kitano bajo su nombre artístico, Beat Takeshi.',
      'El museo Taikokan, dedicado a los tambores tradicionales taiko, reúne piezas de todo el mundo.'
    ]}
  ],
  hours: 'Calles y santuario de acceso libre a cualquier hora; los comercios suelen abrir de 10:00 a 18:00-20:00.',
  tickets: 'No se necesita entrada para recorrer el barrio; algunos museos y el parque Hanayashiki cobran acceso.',
  tips: [
    'Visita la Nakamise-dori a primera hora de la mañana o ya de noche, cuando las persianas metálicas de las tiendas muestran sus decoraciones y hay mucha menos gente.',
    'El mirador gratuito del centro de información turística de Asakusa es uno de los mejores puntos para fotografiar el templo sin colas ni entrada.',
    'Reserva algo de hambre para la calle Hoppy si te gusta la cocina de izakaya más castiza de Tokio.'
  ],
  access: 'Estación de Asakusa (líneas Ginza y Asakusa de metro, y línea Tobu Skytree); también se llega cruzando el puente Azuma desde la zona de la Tokyo Skytree.',
  official: 'https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html'
});
