// Documentación ampliada, adaptada de las notas de viaje del autor.
addJapanHistory({
  'fushimi-inari': [
    'Fushimi Inari es la sede principal de una extensa red de santuarios dedicados a Inari. Su culto nació vinculado al arroz y, con el tiempo, a la prosperidad de comerciantes y negocios. Los zorros o kitsune son sus mensajeros: por eso aparecen por todo el recinto, a menudo con una llave que simboliza el almacén del arroz.',
    'La ruta de montaña recorre alrededor de cuatro kilómetros de senderos y asciende hasta los 233 metros de Ichi-no-mine. No es necesario completarla para disfrutar del santuario, pero el recorrido completo permite entender que los torii no son un decorado: enlazan pequeños altares, estanques, cruces y cimas de culto.',
    'Tras la puerta Romon, levantada por orden de Toyotomi Hideyoshi en 1589, se encuentra el Honden. El edificio actual se reconstruyó en 1499 después de los daños de la guerra de Ōnin. Sus cinco deidades están ligadas a los picos del monte Inari y a la protección del lugar.',
    'Los Senbon Torii comienzan después del salón principal. Desde el periodo Edo, particulares y empresas donan estas puertas para pedir o agradecer favores. En el reverso suelen figurar el nombre del donante y la fecha; seguir leyendo esas inscripciones cambia la forma de recorrer el camino.',
    'El Okusha Hōhaisho, al final de los primeros corredores de torii, es un buen punto para detenerse. Junto a él están las piedras Omokaru-ishi: se formula un deseo y se levanta la parte superior de una lámpara; la sensación de peso se interpreta de forma simbólica. Más arriba, Yotsu-tsuji ofrece una de las primeras vistas abiertas de Kioto.',
    'Para la visita, calcula entre tres y cuatro horas si quieres cerrar el circuito de la montaña. Hay cuestas continuas, pocos tramos de sombra en algunos momentos y menos servicios conforme se asciende. Lleva agua, calzado cómodo y reserva margen para volver antes de anochecer si no conoces el recorrido.'
  ],
  'kiyomizu-dera': [
    'Kiyomizu-dera se fundó en 778 junto a la cascada Otowa, de la que toma su nombre: «agua pura». El templo pertenece a la peregrinación Saigoku Kannon y su recinto combina edificios budistas, pequeños santuarios y caminos de ladera.',
    'La terraza del salón principal está sostenida por una compleja estructura tradicional de madera. El edificio actual data de la reconstrucción de 1633, después de incendios sucesivos; desde ella se abre una vista amplia sobre Higashiyama y la ciudad.',
    'Antes del salón principal aparecen la puerta Niō-mon y la pagoda de tres pisos. La pagoda actual se reconstruyó en el siglo XVII y es uno de los perfiles más reconocibles de las cuestas de Higashiyama.',
    'Al bajar se llega a la cascada Otowa. Sus tres chorros se asocian tradicionalmente con salud, longevidad y éxito; escoge uno en vez de los tres. Las zonas de agua se forman filas, especialmente a media mañana.',
    'El santuario Jishu, próximo al salón principal, está dedicado a la buena fortuna en las relaciones. Sus piedras del amor no siempre están accesibles por obras o por la gestión del recinto, así que consulta el estado actual antes de buscarlo.',
    'Entra temprano y continúa a pie por Sannenzaka y Ninenzaka. Las calles son parte de la visita: conservan la escala de un acceso histórico al templo y se disfrutan mucho más antes de que abran todos los grupos turísticos.'
  ]
});

Object.assign(japanPlaces.find(place => place.slug === 'fushimi-inari'), {
  gallery: [
    {src:'assets/fushimi/romon.jpg',alt:'Puerta Romon de Fushimi Inari'},
    {src:'assets/fushimi/honden.jpg',alt:'Salón principal Honden'},
    {src:'assets/fushimi/senbon-torii.jpg',alt:'Camino Senbon Torii'},
    {src:'assets/fushimi/okuno-in.jpg',alt:'Salón de plegarias Okuno-in'},
    {src:'assets/fushimi/shin-ike.jpg',alt:'Estanque Shin-ike'},
    {src:'assets/fushimi/yotsu-tsuji.jpg',alt:'Intersección Yotsu-tsuji'}
  ]
});
