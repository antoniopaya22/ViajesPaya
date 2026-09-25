// Basílica de Santa María — ficha propia con estructura de bloques (ver script.js: renderBlocks).
addPolandPlace({
  slug: 'bazilica-mariacka', city: 'cracovia', zone: 'rynek', name: 'Basílica de Santa María', category: 'Templo', reviewed: '2026-09',
  image: 'assets/cracovia-mariacka.jpg',
  lat: 50.0614, lon: 19.9386,
  lead: 'La iglesia gótica de ladrillo con dos torres desiguales que preside el Rynek, célebre por su gigantesco retablo de madera de Veit Stoss.',
  duration: '30–45 min',
  stats: [
    {value: '1489', label: 'año de conclusión del retablo de Veit Stoss', icon: 'scroll'}
  ],
  blocks: [
    {type: 'lead', text: 'Sus dos torres, de altura desigual, dominan el Rynek Główny desde la Edad Media. La más alta acoge cada hora el hejnał mariacki, la llamada de trompeta que se corta abruptamente a media frase.'},
    {type: 'heading', text: 'El retablo de Veit Stoss', icon: 'scroll'},
    {type: 'p', text: 'El altar mayor, obra del escultor alemán Veit Stoss, se terminó en 1489 y es el mayor tríptico gótico de su época. Durante la ocupación nazi fue saqueado por orden del gobernador Hans Frank y trasladado a Alemania; se recuperó en 1945 en los sótanos del castillo de Núremberg y volvió a instalarse tras su restauración.'},
    {type: 'callout', label: '¿SABÍAS QUE...?', items: [
      'Un trompetista del 2.º Cuerpo polaco tocó el hejnał para anunciar la victoria en la batalla de Monte Cassino, el 18 de mayo de 1944; entre 1941 y 1946, soldados polacos exiliados en Escocia mantuvieron viva la tradición tocándolo cada día desde la torre de un mercado de grano en una ciudad escocesa.'
    ]}
  ],
  hours: 'Abierta a las visitas la mayoría de los días, aproximadamente de 11:30 a 18:00, con excepciones por oficios religiosos.',
  official: 'https://mariacki.com/en/',
  tips: [
    'Respeta los horarios de misa: la basílica cierra al turismo durante los oficios.',
    'Sube a la torre del hejnał si tienes ocasión: las vistas del Rynek desde arriba son de las mejores de la ciudad.'
  ]
});
