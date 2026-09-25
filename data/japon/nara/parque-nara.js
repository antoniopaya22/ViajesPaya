// Parque de Nara — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'parque-nara', city: 'nara', name: 'Parque de Nara', category: 'Parque y naturaleza', reviewed: '2026-09',
  image: 'assets/japon-parque-nara.jpg',
  lat: 34.6851, lon: 135.8430,
  lead: 'Un gran parque de más de 500 hectáreas donde templos, santuarios y más de 1.400 ciervos sagrados conviven en libertad desde hace siglos.',
  duration: '2–4 horas si se combina con los templos principales',
  price: 'Acceso al parque gratuito',
  stats: [
    {value:'502 ha', label:'superficie oficial del parque (660 ha con los templos vecinos)', icon:'tree'},
    {value:'1.465', label:'ciervos censados en 2025, cifra récord desde 1953', icon:'footprints'},
    {value:'1957', label:'los ciervos, declarados monumento natural de Japón', icon:'trophy'},
    {value:'1892', label:'año de apertura del refugio de ciervos Rokuen', icon:'heart'}
  ],
  blocks: [
    {type:'lead', text:'El parque de Nara conecta a pie los grandes monumentos de la ciudad —Tōdai-ji, Kasuga Taisha, Kōfuku-ji— y es, además, el hogar de una numerosa población de ciervos sika considerados mensajeros de los dioses en la tradición sintoísta. Con sus 502 hectáreas oficiales (660 si se cuenta el terreno de los templos y santuarios vecinos), es uno de los parques urbanos más grandes de Japón.'},
    {type:'p', text:'Los ciervos del parque son animales salvajes, declarados monumento natural de Japón (tennen kinenbutsu) en 1957. El último censo de la Fundación para la Preservación de los Ciervos de Nara, en julio de 2025, contó 1.465 ejemplares —315 machos, 816 hembras y 334 crías—, la cifra más alta desde que se usa el método de recuento actual, en 1953. Conviene comprarles las galletas sembei que se venden en los puestos repartidos por el parque en lugar de darles otro tipo de comida, y evitar llevar bolsas o papeles a la vista, ya que algunos ciervos intentan cogerlos pensando que llevan algo de comer.'},
    {type:'heading', text:'Más allá de los grandes templos', icon:'tree'},
    {type:'stop', title:'Rincones tranquilos entre monumento y monumento', text:[
      'Más allá de los grandes templos, el parque reúne rincones más tranquilos como los jardines Isui-en y Yoshiki-en, el santuario Wakamiya o los toriis de acceso a Kasuga Taisha, además del estanque Sagi y su pabellón Ukimido, ideales para alargar el paseo sin prisa.',
      'Para quien quiera profundizar en el arte budista de la región, el Museo Nacional de Nara, dentro del parque, reúne una colección notable de esculturas y objetos religiosos de los templos de la ciudad, incluida la exposición anual de tesoros del Shōsō-in cada otoño.'
    ]},
    {type:'heading', text:'Los ciervos, mensajeros sagrados', icon:'footprints'},
    {type:'stop', title:'Una convivencia de siglos', text:[
      'Según la tradición sintoísta, el dios Takemikazuchi llegó a Nara montado en un ciervo blanco para proteger la nueva capital; desde entonces, el ciervo es considerado mensajero sagrado de la deidad de Kasuga Taisha, y matarlo estuvo penado con la muerte durante siglos. Hoy los ciervos son animales salvajes protegidos, y la Fundación para la Preservación de los Ciervos de Nara mantiene desde 1892 el refugio Rokuen, donde cuida cada año a varios cientos de ejemplares heridos, enfermos o crías separadas de su madre, además de realizar el censo anual y las campañas de convivencia con los visitantes.'
    ]},
    {type:'stop', title:'La reverencia que en realidad es un truco aprendido', text:[
      'Es habitual ver ciervos agachar la cabeza como si hicieran una reverencia antes de recibir una galleta: una investigadora de la Universidad de Mujeres de Nara documentó que se trata de un gesto aprendido —transmitido de madres a crías— asociado a la recompensa de la galleta, y no de un comportamiento instintivo. La propia investigación lo confirmó de forma indirecta: la frecuencia de estas reverencias cayó de forma notable durante la pandemia, cuando desaparecieron turistas y galletas, y volvió a subir con su regreso. No se ha observado en ciervos sika de ningún otro lugar de Japón.'
    ]},
    {type:'cards', title:'Cómo comportarte con los ciervos', items:[
      {icon:'heart', title:'Solo galletas sembei', text:'Cómpralas únicamente en los puestos autorizados (unos 200 ¥ el paquete de 10, hechas con harina y salvado de arroz, sin azúcar); el resto de comida humana puede sentarles mal.'},
      {icon:'bag', title:'Nada de bolsas a la vista', text:'Algunos ciervos han aprendido a asociar bolsas, mapas y folletos con comida, y no dudan en intentar cogerlos.'},
      {icon:'footprints', title:'La reverencia que piden', text:'Muchos ciervos agachan la cabeza para pedir una galleta: no siempre es un gesto tan educado como parece, y conviene mantener cierta distancia con los niños pequeños.'},
      {icon:'eye', title:'Vigila con los más pequeños', text:'Solo en 2024 se registraron 159 incidentes leves entre ciervos y visitantes (111 de ellos turistas extranjeros), casi siempre por acercarse demasiado al hacer fotos.'}
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'El censo de julio de 2025 contó 1.465 ciervos en el parque, la cifra más alta desde que se usa el método de recuento actual, en 1953.',
      'Los ciervos de Nara fueron declarados monumento natural de Japón en 1957, un estatus de protección que los distingue de la fauna silvestre corriente.',
      'La reverencia de los ciervos para pedir comida es un gesto aprendido, no instintivo: durante la pandemia, sin turistas ni galletas, se hizo mucho menos frecuente.',
      'Con sus 502 hectáreas, el parque de Nara es uno de los espacios verdes urbanos más extensos de Japón.'
    ]}
  ],
  hours: 'Parque de acceso libre a cualquier hora; cada templo y museo tiene su propio horario.',
  hoursSource: 'https://nara-park.com/',
  tickets: 'No se necesita entrada para pasear por el parque; los templos y el museo cobran entrada aparte.',
  official: 'https://nara-park.com/',
  tips: [
    'Compra las galletas sembei solo en los puestos autorizados y ofrécelas con la mano abierta, sin agitarlas: algunos ciervos pueden empujar o dar pequeños topetazos por impaciencia.',
    'Deja tiempo para pasear sin rumbo fijo: el parque conecta varios de los grandes templos de la ciudad a pie.',
    'Si viajas con niños pequeños, mantén cierta distancia al dar de comer a los ciervos: pueden empujar más de lo esperado.'
  ],
  access: 'A pie desde la estación de Kintetsu Nara (5-10 minutos) o desde la estación JR Nara (15-20 minutos).'
});
