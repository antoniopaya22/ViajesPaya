// Płaszów — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'plaszow', city: 'cracovia', zone: 'podgorze', name: 'Campo de Płaszów', category: 'Memorial', reviewed: '2026-09',
  image: 'assets/cracovia-plaszow.jpg',
  lat: 50.0263, lon: 19.9635,
  lead: 'El emplazamiento del campo de concentración nazi construido sobre dos antiguos cementerios judíos, hoy una gran extensión abierta con un memorial.',
  duration: '60–90 min',
  price: 'Entrada gratuita',
  stats: [
    {value: '1942–45', label: 'periodo de funcionamiento del campo', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'El campo de Płaszów funcionó entre el 28 de octubre de 1942 y enero de 1945, construido sobre el terreno de dos antiguos cementerios judíos. Tras la liquidación del gueto de Cracovia en marzo de 1943, absorbió a buena parte de su población, y en 1943 se convirtió oficialmente en campo de concentración.'},
    {type: 'p', text: 'Su comandante, Amon Göth, se hizo tristemente célebre por la brutalidad arbitraria de sus castigos; fue destituido en septiembre de 1944 por cargos de corrupción y más tarde juzgado y ejecutado. Se calcula que unas 8.000 personas murieron en fusilamientos masivos junto al cercano lugar de ejecución de Hujowa Górka.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Los prisioneros que reconocían el característico sombrero tirolés de Göth aprendían a esconderse en cuanto lo veían aparecer; según testigos, no empezaba a desayunar sin haber disparado antes a al menos un prisionero.',
      'El 14 de mayo de 1944, Göth ordenó a todos los niños del campo presentarse en un supuesto «jardín de infancia»: era una trampa, y al día siguiente fueron deportados a Auschwitz y asesinados.'
    ]},
    {type: 'heading', text: 'De descampado a memorial', icon: 'rock'},
    {type: 'p', text: 'Hoy el terreno son en su mayoría colinas y campos arbolados, con un gran memorial general y dos monumentos más pequeños de memoria judía y húngaro-judía. Desde marzo de 2024 existe una exposición al aire libre, de entrada gratuita y unos 60 minutos de recorrido, gestionada conjuntamente por el ayuntamiento de Cracovia y el Ministerio de Cultura polaco; un edificio-memorial permanente, con la exposición «KL Plaszow. Miejsce po, miejsce bez», está previsto para comienzos de 2027.'}
  ],
  official: 'https://plaszow.org',
  tips: [
    'Cada mes de marzo se celebra aquí una «Marcha del Recuerdo».',
    'El museo permanente todavía está en construcción; consulta el estado de la exposición al aire libre antes de ir.'
  ]
});
