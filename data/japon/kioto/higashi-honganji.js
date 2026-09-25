// Higashi Hongan-ji — ficha con estructura de bloques.
addJapanPlace({
  slug: 'higashi-honganji', city: 'kioto', name: 'Higashi Hongan-ji', category: 'Templo',
  image: 'assets/japon-higashi-honganji.jpg',
  lat: 34.9917, lon: 135.7589,
  lead: 'Uno de los edificios de madera más grandes del mundo, reconstruido con cuerdas trenzadas con cabello donado.',
  duration: '45–60 min',
  price: 'Entrada gratuita',
  stats: [
    {value:'1602', label:'fundación, al dividirse el budismo Jōdo Shinshū', icon:'scroll'},
    {value:'76 m', label:'longitud del salón Goeidō', icon:'pagoda'},
    {value:'4', label:'incendios sufridos durante el periodo Edo', icon:'flame'}
  ],
  blocks: [
    {type:'lead', text:'Higashi Hongan-ji nació en 1602 cuando el shōgun Tokugawa Ieyasu decidió dividir en dos la poderosa escuela budista Jōdo Shinshū, debilitando así su influencia: el templo occidental, Nishi Hongan-ji, y este, el oriental. Se trasladó a su ubicación actual, cerca de la estación de Kioto, en 1658.'},
    {type:'heading', text:'Cuatro incendios y una reconstrucción con cabello', icon:'flame'},
    {type:'stop', title:'Goeidō, el salón del fundador', text:[
      'Con 76 metros de largo, 58 de ancho y 38 de alto, el Goeidō es una de las estructuras de madera más grandes del mundo y alberga una imagen de Shinran, fundador de la escuela. El edificio actual se completó en 1895, tras el último de los cuatro grandes incendios que sufrió el templo durante el periodo Edo (1788, 1823, 1858 y 1864, este último durante el incidente Kinmon).'
    ]},
    {type:'stop', title:'Amidadō, el salón de Amida', text:[
      'Junto al Goeidō, este salón guarda una imagen del Buda Amida y otra del príncipe Shōtoku, decoradas con pan de oro y pinturas del periodo Meiji. También se terminó de reconstruir en 1895.'
    ]},
    {type:'stop', title:'Las cuerdas de cabello humano', text:[
      'Levantar las gigantescas vigas de los nuevos salones exigía cuerdas mucho más resistentes que el cáñamo disponible en la época. Devotas de todo Japón donaron su cabello, que se trenzó junto con cáñamo hasta formar unas cincuenta cuerdas descomunales capaces de izar la madera. Una de ellas, de más de un metro de diámetro, se conserva todavía hoy expuesta en una vitrina dentro del recinto, como recuerdo de aquel esfuerzo colectivo.'
    ]}
  ],
  hours: 'De 5:50 a 17:30 entre marzo y octubre; de 6:20 a 16:30 entre noviembre y febrero. Entrada hasta 30 minutos antes del cierre.',
  hoursSource: 'https://www.higashihonganji.or.jp/',
  tickets: 'No se necesita entrada; el acceso a los salones principales es gratuito.',
  official: 'https://www.higashihonganji.or.jp/',
  tips: [
    'Busca la cuerda de cabello humano expuesta en el recinto: es fácil pasarla por alto si no se sabe que existe.',
    'Combínalo con un paseo hasta el jardín Shōsei-en, una dependencia del templo a poca distancia con estanques y pabellones tradicionales.'
  ],
  access: 'A pie desde la estación de Kioto, saliendo por la salida norte (unos 7 minutos).'
});
