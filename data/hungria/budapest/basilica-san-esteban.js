// Basílica de San Esteban — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addHungaryPlace({
  slug: 'basilica-san-esteban', city: 'budapest', zone: 'centro-pest', name: 'Basílica de San Esteban', category: 'Templo', reviewed: '2026-09',
  image: 'assets/budapest-basilica.jpg',
  lat: 47.5006, lon: 19.0532,
  lead: 'La mayor iglesia de Budapest, que tardó 55 años en construirse y guarda la reliquia de la mano derecha momificada del primer rey de Hungría.',
  duration: '45–60 min',
  stats: [
    {value: '1851–1906', label: 'los 55 años que llevó su construcción', icon: 'scroll'},
    {value: '96 m', label: 'altura, igual a la cúpula del Parlamento', icon: 'peak'}
  ],
  blocks: [
    {type: 'lead', text: 'Construida entre 1851 y 1906, la basílica comenzó con el arquitecto József Hild; tras el derrumbe de la cúpula en 1858, Miklós Ybl rediseñó el proyecto, que terminó József Kauser. Sus 96 metros de altura igualan, a propósito, a los del Parlamento: una paridad simbólica entre el poder secular y el religioso.'},
    {type: 'heading', text: 'La Santa Mano Derecha', icon: 'rock'},
    {type: 'p', text: 'La basílica conserva la mano derecha momificada de San Esteban (h. 975-1038), el primer rey de Hungría y su fundador. La cúpula y la terraza panorámica se pueden subir en ascensor o por 364 escalones.'}
  ],
  hours: 'Interior: lunes a sábado 9:00–18:00, domingo 13:00–18:00. Cúpula y tesoro: diario 9:00–19:00.',
  official: 'https://www.bazilikabudapest.hu/',
  tips: [
    'Sube a la cúpula para tener una de las mejores vistas panorámicas de Pest.'
  ]
});
