// Templo Daiganji — ficha propia con estructura de bloques (ver japan.js: renderBlocks).
addJapanPlace({
  slug: 'daiganji', city: 'miyajima', name: 'Templo Daiganji', category: 'Templo', reviewed: '2026-09',
  image: 'assets/japon-daiganji.jpg',
  lat: 34.2952, lon: 132.3202,
  lead: 'El templo budista que administró el santuario de Itsukushima durante siete siglos, justo a la salida de su recinto, con el acceso más antiguo de la isla a un lado.',
  duration: '15–25 min',
  price: 'Acceso gratuito',
  stats: [
    {value:'1201', label:'inicio aproximado de la reconstrucción del templo por el sacerdote Ryōkai', icon:'scroll'},
    {value:'1868', label:'año de la separación oficial entre sintoísmo y budismo (era Meiji)', icon:'gate'},
    {value:'20', label:'esculturas budistas que reúne, entre otras piezas, su salón principal', icon:'book'}
  ],
  blocks: [
    {type:'lead', text:'Justo al salir del santuario de Itsukushima por su lado sur se levanta el templo Daiganji, perteneciente a la rama Kōyasan del budismo Shingon. Se cree que fue reconstruido entre 1201 y 1203 por el sacerdote local Ryōkai, encargado entonces del mantenimiento del santuario vecino.'},
    {type:'p', text:'Dedicado a la diosa Benzaiten y a varios budas centrales del Shingon, Daiganji fue el templo responsable de la administración de Itsukushima hasta la era Meiji (1868-1912), cuando el gobierno separó oficialmente sintoísmo y budismo en todo el país. Su salón principal (hondō) conserva hoy una veintena de esculturas budistas y otras piezas rescatadas de sus propios edificios y de otros templos de la isla.'},
    {type:'heading', text:'El acceso más antiguo al santuario', icon:'footprints'},
    {type:'stop', title:'Callejón Yamabe, la vía antes de Omotesandō', text:[
      'Junto al templo arranca el callejón Yamabe (Yamabe no Komichi): el acceso más antiguo al santuario desde la zona del puerto, usado cuando la actual calle Omotesandō todavía estaba bajo el mar. El paseo ofrece vistas del gran torii, de la pagoda de cinco pisos y de los tejados tradicionales de la isla, con un aire mucho más tranquilo que las calles comerciales.',
      'A lo largo del callejón empiezan a aparecer pequeños santuarios con imágenes de Enmei Jizō, unas esculturas de deidades protectoras muy queridas por los vecinos de Miyajima, que se dice que velan especialmente por niños y viajeros.'
    ]},
    {type:'heading', text:'Alrededores del santuario', icon:'lantern'},
    {type:'stop', title:'Callejón Taki no Kōji y el museo de la isla', text:[
      'Muy cerca, el callejón Taki no Kōji era antiguamente el lugar donde se alojaban los trabajadores del santuario y del templo Daishō-in, en el monte Misen; hoy sus antiguas casas se han convertido en pequeñas tiendas y cafeterías. A escasos pasos también se encuentra el Museo de Historia y Folclore de Miyajima, instalado en una antigua residencia samurái y dedicado a la vida cotidiana de la isla a lo largo de los siglos.'
    ]},
    {type:'callout', label:'¿SABÍAS QUE...?', items:[
      'Daiganji administró el santuario de Itsukushima durante casi setecientos años, hasta la separación oficial de sintoísmo y budismo en 1868.',
      'El callejón Yamabe fue el acceso principal al santuario antes de que existiera la actual calle Omotesandō, entonces todavía bajo el mar.',
      'Las estatuas de Enmei Jizō repartidas por el callejón son objeto de devoción popular entre los vecinos de la isla, no solo entre los visitantes.'
    ]}
  ],
  hours: 'Recinto de acceso libre durante el día.',
  hoursSource: 'https://www.miyajima.or.jp/english/spot/spot_daiganji.html',
  tickets: 'No hace falta entrada.',
  official: 'https://www.miyajima.or.jp/english/spot/spot_daiganji.html',
  tips: [
    'Entra y sal del santuario de Itsukushima por este lado para enlazar directamente con el templo y el callejón Yamabe.',
    'Busca las pequeñas estatuas de Enmei Jizō a lo largo del callejón: son fáciles de pasar por alto si vas deprisa.',
    'Si te interesa la historia local más allá de los templos, el Museo de Historia y Folclore está a un paso de aquí.'
  ],
  access: 'A pie, justo a la salida sur del santuario de Itsukushima; el callejón Yamabe conecta este punto con la zona del puerto.'
});
