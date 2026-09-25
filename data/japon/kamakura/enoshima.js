// Playas de Kamakura y Enoshima — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'enoshima', city: 'kamakura', name: 'Playas de Kamakura y Enoshima', category: 'Playa e isla', reviewed: '2026-09',
  image: 'assets/japon-enoshima.jpg',
  lat: 35.3006, lon: 139.4803,
  lead: 'Las playas de Yuigahama, Zaimokuza y Koshigoe y, un poco más allá, la pequeña isla de Enoshima.',
  duration: '2–4 horas',
  price: 'Acceso a las playas gratuito',
  stats: [
    {value: '3', label: 'playas principales: Yuigahama, Zaimokuza y Koshigoe', icon: 'droplet'},
    {value: '~20 min', label: 'a pie desde la estación de Kamakura hasta la costa', icon: 'footprints'},
    {value: '~25 min', label: 'en el tren Enoden hasta la isla de Enoshima', icon: 'clock'},
    {value: 'marea baja', label: 'condición para ver Wakaenoshima, el puerto más antiguo de Japón', icon: 'rock'}
  ],
  blocks: [
    {type: 'lead', text: 'En verano, las playas de Yuigahama, Zaimokuza y Koshigoe ofrecen un contrapunto costero a los templos de Kamakura: son playas amplias, con instalaciones y restaurantes, a unos veinte minutos a pie de la estación de tren, muy populares entre los propios habitantes de Tokio que buscan un escape rápido al mar.'},
    {type: 'p', text: 'En Zaimokuza, justo frente a la arena, hay un local de la conocida cadena de ramen Afuri: comer un tazón de ramen con vistas al mar es uno de esos pequeños placeres que se recuerdan bien de la visita.'},
    {type: 'heading', text: 'Wakaenoshima, el puerto artificial más antiguo de Japón', icon: 'rock'},
    {type: 'stop', title: 'Solo visible con la marea baja', text: [
      'Cuando baja la marea frente a la playa de Zaimokuza aparece Wakaenoshima, la orilla que conforma los restos del puerto artificial más antiguo conocido de Japón, construido en el siglo XIII para dar salida marítima a la Kamakura medieval. Es otro de los lugares candidatos a Patrimonio de la Humanidad de la zona, aunque conviene consultar la tabla de mareas antes de ir, porque con marea alta queda completamente cubierto.'
    ]},
    {type: 'heading', text: 'La isla de Enoshima', icon: 'peak'},
    {type: 'stop', title: 'Santuario, cuevas y miradores sobre la bahía de Sagami', text: [
      'Un poco más al oeste, conectada por un puente peatonal, la isla de Enoshima añade un santuario dedicado a la diosa Benzaiten, unas cuevas junto al mar y varios miradores sobre la bahía de Sagami, con el monte Fuji al fondo en los días despejados. Es una excursión clásica que se combina de forma natural con el propio paseo por las playas de Kamakura, y a la que se llega directamente en el pintoresco tren Enoden.'
    ]},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Wakaenoshima, visible solo con marea baja frente a Zaimokuza, se considera el resto del puerto artificial más antiguo de Japón.',
      'El tren Enoden, que conecta Kamakura con Enoshima, discurre en algunos tramos pegado a las casas y casi a pie de playa: forma parte de la experiencia tanto como el propio destino.'
    ]}
  ],
  hours: 'Playas de acceso libre en cualquier momento; los servicios de temporada suelen operar de junio a septiembre.',
  hoursSource: 'https://www.enoshima-seacandle.com/',
  tickets: 'No hace falta entrada para las playas; el santuario y las cuevas de Enoshima tienen tarifa propia.',
  official: 'https://www.enoshima-seacandle.com/',
  tips: [
    'Consulta la tabla de mareas si quieres ver Wakaenoshima desde Zaimokuza: solo emerge con marea baja.',
    'El tren Enoden conecta directamente Kamakura con Enoshima y es parte de la experiencia: ve junto a la ventanilla.',
    'Si tienes hambre en Zaimokuza, el ramen de Afuri junto al mar es una parada clásica.'
  ],
  access: 'Las playas están a 15-20 minutos a pie de la estación de Kamakura; Enoshima se alcanza en el tren Enoden (unos 25 minutos) o combinando el Enoshima-Kamakura Free Pass, que incluye trayectos ilimitados en ambos.'
});
