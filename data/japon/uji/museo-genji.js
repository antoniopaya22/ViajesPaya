// Museo de la Historia de Genji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'museo-genji', city: 'uji', name: 'Museo de la Historia de Genji', category: 'Museo',
  image: 'assets/japon-genji-museum.jpg',
  lat: 34.8941, lon: 135.8102,
  lead: 'Un museo dedicado a los diez capítulos finales de la primera gran novela de la literatura mundial, ambientados aquí en Uji.',
  duration: '45–60 min',
  price: '500 ¥ adulto',
  stats: [
    {value:'XI', label:'siglo en que Murasaki Shikibu escribió «Genji Monogatari»', icon:'scroll'},
    {value:'54', label:'capítulos totales de la novela', icon:'book'},
    {value:'10', label:'«capítulos de Uji» finales, ambientados en esta ciudad', icon:'pagoda'},
    {value:'1998', label:'año de apertura del museo', icon:'gate'}
  ],
  blocks: [
    {type:'lead', text:'«La Historia de Genji» (Genji Monogatari), escrita por la dama de la corte Murasaki Shikibu a principios del siglo XI, está considerada por muchos la primera novela psicológica de la literatura mundial. Sus diez capítulos finales, conocidos como los «capítulos de Uji», abandonan la corte imperial de Kioto y trasladan la acción a esta ciudad junto al río: el museo, inaugurado en 1998, está dedicado por completo a recrear ese mundo.'},
    {type:'p', text:'Frente a los templos y santuarios del resto de la ciudad, este es un espacio pensado para el relato: maquetas a tamaño real, proyecciones y recreaciones ayudan a imaginar cómo era la vida de la aristocracia Heian, sus vestidos, su música y sus intrigas amorosas, sin necesidad de conocer la novela de antemano.'},
    {type:'heading', text:'De la corte imperial a los capítulos de Uji', icon:'scroll'},
    {type:'stop', title:'La vida en la corte Heian', text:[
      'La primera sala reconstruye, con maquetas a escala real, un carruaje de bueyes (gissha) y el interior de una residencia aristocrática de la época, decorada según las descripciones de la novela: biombos, cortinas y los vestidos de capas superpuestas típicos de la corte Heian.'
    ]},
    {type:'stop', title:'Ukifune y los capítulos de Uji', text:[
      'La sala central se centra en los últimos diez capítulos de la obra, ambientados en Uji, donde Kaoru y el príncipe Niou se disputan el amor de Ukifune, hija de una rama secundaria de la familia imperial. Una gran maqueta recrea la escena en la que Ukifune, atormentada por no poder decidir entre los dos pretendientes, contempla el río Uji desde la orilla, en referencia directa al puente cercano de Uji-bashi.'
    ]},
    {type:'stop', title:'Sala de proyección y biblioteca', text:[
      'Una sala de vídeo proyecta adaptaciones y recreaciones animadas de distintos episodios de la novela, con subtítulos en inglés; la biblioteca del museo reúne ediciones y estudios sobre la obra en varios idiomas para quien quiera profundizar más.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Murasaki Shikibu escribió «Genji Monogatari» a principios del siglo XI: se la considera la primera novela psicológica de la historia de la literatura.',
      'Los diez capítulos finales de la novela, los «capítulos de Uji», dan nombre a esta parte de la trama y explican la fuerte identidad literaria de la ciudad.',
      'El museo se encuentra junto a Sawarabi-no-michi, el mismo camino que menciona uno de los capítulos finales de la novela.'
    ]}
  ],
  hours: '9:00–17:00 (última entrada 16:30). Cerrado los lunes (o el día siguiente si el lunes es festivo) y en el periodo de fin y principio de año.',
  hoursSource: 'https://www.iz2.or.jp/english/open.htm',
  tickets: 'Entrada de pago en la propia taquilla del museo; no suele hacer falta reserva previa.',
  official: 'https://www.iz2.or.jp/english/open.htm',
  tips: [
    'Es una buena parada con sombra y aire acondicionado en los meses de más calor, a medio camino entre Ujigami-jinja y la calle del té.',
    'Si te interesa la novela, lee antes un resumen de los "capítulos de Uji": ayuda mucho a seguir las maquetas y proyecciones.'
  ],
  access: 'Unos 8-10 minutos a pie desde la estación de Uji (línea Keihan Uji), junto al camino Sawarabi-no-michi.'
});
