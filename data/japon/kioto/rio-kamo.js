// Río Kamo — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'rio-kamo', city: 'kioto', zone: 'centro', name: 'Río Kamo', category: 'Paisaje urbano', reviewed: '2026-09',
  image: 'assets/japon-kioto-rio-kamo.jpg',
  lat: 35.0130, lon: 135.7700,
  lead: 'El río que atraviesa Kioto de norte a sur, con terrazas de madera suspendidas sobre el agua en verano y un curioso fenómeno de parejas perfectamente espaciadas en sus orillas.',
  duration: 'Variable, integrado en cualquier paseo por el centro',
  blocks: [
    {type: 'lead', text: 'El Kamo-gawa recorre Kioto de norte a sur, y su tramo junto a <a href="#/pais/japon/ciudad/kioto/lugar/pontocho">Pontochō</a> y el centro es uno de los paseos más queridos de la ciudad. Al norte, cerca de la estación de Demachiyanagi, se unen el Kamo y el Takano formando un delta triangular junto al santuario Shimogamo, cruzado por piedras dispuestas a modo de paso, algunas con forma de tortuga o de chorlito.'},
    {type: 'heading', text: 'Las terrazas kawadoko sobre el agua', icon: 'teacup'},
    {type: 'p', text: 'La costumbre de instalar asientos junto al río para «refrescarse en el cauce» se remonta al inicio del periodo Edo; desde la era Kanbun (1661-1673), unos muros de piedra permitieron levantar plataformas de madera sobre el propio agua, y a mediados del Edo llegó a haber unas 400 casas de té con este tipo de terraza. La tradición decayó con la modernización de la era Meiji, se prohibió en el periodo Taishō por motivos de control de inundaciones, desapareció tras la Segunda Guerra Mundial y resurgió a mediados del periodo Shōwa. Hoy, entre mayo y septiembre aproximadamente, los restaurantes de Pontochō instalan de nuevo estas terrazas de madera —conocidas como kawayuka— sobre el propio Kamo.'},
    {type: 'heading', text: 'Un misterio sin explicación', icon: 'heart'},
    {type: 'p', text: 'Es habitual ver, en las orillas del Kamo, a parejas sentadas guardando entre sí una distancia llamativamente regular. El fenómeno es real y muy comentado —incluido un momento viral en redes en 2024, con fotos de garzas guardando la misma distancia entre ellas—, pero no existe ningún estudio científico riguroso que lo explique: la popular idea de que responde al respeto japonés por el espacio personal es solo una teoría popular, no un hecho demostrado.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Un antiguo emperador retirado, Shirakawa, se dice que citaba las crecidas del Kamo, los dados y los monjes guerreros del monte Hiei como las tres únicas cosas que escapaban a su control, allá por el año 1100. El terraplén de tierra Odoi, construido por Toyotomi Hideyoshi en 1591 para rodear y fortificar Kioto, discurría junto a la orilla este del río, aprovechándolo como foso natural.'
    ]}
  ],
  price: 'Acceso libre',
  official: 'https://www.pref.kyoto.jp/kamogawa/',
  tips: [
    'Ve a Demachiyanagi para cruzar el delta por las piedras, o a Pontochō entre mayo y septiembre para ver las terrazas kawayuka en marcha.'
  ]
});
