const countries = [
  {
    slug: 'espana', name: 'España', kicker: 'Sol, arte y sobremesas largas', flag: 'ES',
    intro: 'Plazas que invitan a quedarse, arquitectura que sorprende y una manera muy propia de disfrutar cada momento.',
    image: 'assets/barcelona.jpg', cities: ['barcelona']
  },
  {
    slug: 'italia', name: 'Italia', kicker: 'Historia a cada paso', flag: 'IT',
    intro: 'Capas de historia, calles para pasear sin rumbo y una mesa que siempre merece una pausa.',
    image: 'assets/roma.jpg', cities: ['roma']
  },
  {
    slug: 'francia', name: 'Francia', kicker: 'El arte de mirar despacio', flag: 'FR',
    intro: 'Museos, barrios y pequeños rituales cotidianos para descubrir a tu propio ritmo.',
    image: 'assets/paris.jpg', cities: ['paris']
  }
];

const cities = [
  {
    slug: 'barcelona', country: 'espana', name: 'Barcelona', region: 'Cataluña', image: 'assets/barcelona.jpg',
    eyebrow: 'Mar, modernismo y vida de barrio',
    intro: 'Una ciudad que se entiende caminando: del trazado del Eixample a las curvas de Gaudí, con el Mediterráneo siempre cerca.',
    days: '3–4 días', best: 'Primavera y otoño', move: 'Metro + a pie', lat: 41.3874, lon: 2.1686,
    tips: [
      ['Muévete con calma', 'Agrupa las visitas por barrios: ahorrarás trayectos y descubrirás más rincones entre parada y parada.'],
      ['Reserva lo popular', 'La Sagrada Família y el Park Güell funcionan mejor con entrada anticipada y franja horaria.'],
      ['Mira más allá del centro', 'Pasea por Gràcia, Sant Antoni o Poblenou para conocer otras caras de la ciudad.']
    ]
  },
  {
    slug: 'roma', country: 'italia', name: 'Roma', region: 'Lacio', image: 'assets/roma.jpg',
    eyebrow: 'La ciudad eterna, sin prisa',
    intro: 'Cada calle parece llevar a otra época. Entre ruinas, plazas y fuentes, lo mejor suele aparecer durante el camino.',
    days: '3–5 días', best: 'Primavera y otoño', move: 'A pie + transporte público', lat: 41.9028, lon: 12.4964,
    tips: [
      ['Lleva agua', 'Las fuentes públicas de Roma son una buena aliada durante los paseos.'],
      ['Deja margen', 'Los controles de seguridad y las colas pueden alargar las visitas más conocidas.'],
      ['Respeta los templos', 'El Panteón sigue siendo una iglesia: puede haber cambios por celebraciones religiosas.']
    ]
  },
  {
    slug: 'paris', country: 'francia', name: 'París', region: 'Isla de Francia', image: 'assets/paris.jpg',
    eyebrow: 'Un paseo siempre es buena idea',
    intro: 'Grandes iconos y pequeños cafés conviven junto al Sena. Elige un barrio, camina y deja que la ciudad haga el resto.',
    days: '3–5 días', best: 'Primavera y otoño', move: 'Metro + a pie', lat: 48.8566, lon: 2.3522,
    tips: [
      ['Piensa por zonas', 'Combina visitas cercanas y guarda tiempo para pasear sin itinerario.'],
      ['Confirma el horario', 'Algunos museos cierran un día a la semana y pueden variar por eventos.'],
      ['Reserva con tiempo', 'Las franjas para la Torre Eiffel y el Louvre suelen agotarse en fechas concurridas.']
    ]
  }
];

const places = [
  {
    slug: 'sagrada-familia', city: 'barcelona', name: 'Sagrada Família', category: 'Arquitectura', image: 'assets/sagrada.jpg',
    lead: 'Una basílica que convierte la piedra, la luz y la naturaleza en una sola historia.',
    story: 'Antoni Gaudí dedicó las últimas décadas de su vida a esta basílica. El proyecto comenzó en 1882 y sigue avanzando a través del trabajo de generaciones de arquitectos, artesanos y escultores. Sus fachadas narran episodios distintos y el interior recuerda a un bosque de columnas.',
    curiosity: 'Gaudí imaginó las columnas como árboles: se ramifican hacia el techo y ayudan a repartir la luz de las vidrieras.',
    duration: '1,5–2 horas', hours: 'Nov–feb: lun–sáb 9:00–18:00; dom 10:30–18:00. Horario más amplio otros meses.',
    price: 'Desde 26 € (entrada básica de adulto)', ticket: 'Compra solo en la web oficial; elige día y hora antes de ir.',
    official: 'https://sagradafamilia.org/es/entrada-sagrada-familia', hoursSource: 'https://sagradafamilia.org/es/faqs',
    lat: 41.4036, lon: 2.1744, tip: 'Lleva auriculares para la audioguía incluida y revisa si quieres añadir una torre.'
  },
  {
    slug: 'park-guell', city: 'barcelona', name: 'Park Güell', category: 'Parque y arquitectura', image: 'assets/park-guell.jpg',
    lead: 'Mosaicos, formas orgánicas y vistas de Barcelona en un parque que parece un cuento.',
    story: 'Eusebi Güell encargó a Gaudí un proyecto residencial inspirado en las ciudades jardín. La urbanización no prosperó como se planeó, pero el espacio se transformó en un parque público y en una de las obras más reconocibles del modernismo catalán.',
    curiosity: 'El trencadís, un mosaico hecho con fragmentos de cerámica, da color a bancos, esculturas y detalles del parque.',
    duration: '1,5–2 horas', hours: 'Acceso turístico con entrada en franjas variables según la temporada; consulta el calendario oficial.',
    price: '18 € (entrada general)', ticket: 'Reserva la franja de acceso en la web oficial y llega con margen.',
    official: 'https://parkguell.barcelona/es/planifica-la-visita/tarifas-y-horarios', hoursSource: 'https://parkguell.barcelona/es/planifica-la-visita/tarifas-y-horarios',
    lat: 41.4145, lon: 2.1527, tip: 'El parque tiene cuestas: lleva calzado cómodo y agua si hace calor.'
  },
  {
    slug: 'coliseo', city: 'roma', name: 'Coliseo', category: 'Historia', image: 'assets/colosseum.jpg',
    lead: 'El anfiteatro que todavía cuenta cómo era el espectáculo en la antigua Roma.',
    story: 'Construido en el siglo I d. C. bajo la dinastía Flavia, el Coliseo acogió grandes espectáculos públicos. Sus graderíos, pasillos y estructuras subterráneas permiten imaginar la escala y la complejidad de la vida romana.',
    curiosity: 'Su nombre popular se relaciona con una enorme estatua, el Coloso de Nerón, que estuvo cerca del anfiteatro.',
    duration: '1,5–2 horas', hours: 'Abre a las 8:30; el cierre cambia según la temporada. Hasta el 30 de septiembre de 2026: 19:15.',
    price: 'Según recorrido y modalidad; consulta la tarifa al reservar', ticket: 'La entrada al Coliseo requiere franja horaria. La venta oficial abre 30 días antes.',
    official: 'https://colosseo.it/en/opening-times-and-tickets/', hoursSource: 'https://colosseo.it/en/opening-times-and-tickets/',
    lat: 41.8902, lon: 12.4922, tip: 'Revisa qué zonas incluye tu entrada: Foro, Palatino, arena y subterráneos tienen modalidades distintas.'
  },
  {
    slug: 'panteon', city: 'roma', name: 'Panteón', category: 'Arquitectura', image: 'assets/pantheon.jpg',
    lead: 'Una cúpula de casi dos mil años que sigue dejando sin palabras.',
    story: 'El edificio actual fue levantado en época del emperador Adriano sobre un templo anterior. Su gran cúpula de hormigón y el óculo abierto al cielo crean uno de los espacios más singulares de la antigüedad. Desde el siglo VII se utiliza como iglesia.',
    curiosity: 'El óculo no tiene cristal: cuando llueve, el agua entra y se evacua por desagües en el suelo.',
    duration: '30–60 min', hours: 'Habitualmente 9:00–19:00; las celebraciones religiosas pueden modificar el acceso.',
    price: '7 € (entrada general)', ticket: 'Consulta las opciones de entrada y disponibilidad en la web oficial.',
    official: 'https://direzionemuseiroma.cultura.gov.it/en/pantheon/', hoursSource: 'https://direzionemuseiroma.cultura.gov.it/en/pantheon/',
    lat: 41.8986, lon: 12.4769, tip: 'Acércate también a la Piazza della Rotonda para ver el conjunto desde fuera.'
  },
  {
    slug: 'torre-eiffel', city: 'paris', name: 'Torre Eiffel', category: 'Mirador', image: 'assets/eiffel.jpg',
    lead: 'La silueta de París vista desde dentro y desde arriba.',
    story: 'Construida para la Exposición Universal de 1889, la torre diseñada por el equipo de Gustave Eiffel fue una proeza de ingeniería. Se pensó como una estructura temporal, pero terminó convirtiéndose en el símbolo más reconocible de París.',
    curiosity: 'El hierro se dilata con el calor: la altura de la torre puede variar ligeramente según la temperatura.',
    duration: '1,5–2,5 horas', hours: 'Varían según el día y la temporada; selecciona una fecha en el calendario oficial.',
    price: 'Desde 14,80 € (adulto, escaleras al 2.º piso)', ticket: 'Compra en la taquilla oficial online y elige escaleras o ascensor, segundo piso o cima.',
    official: 'https://www.toureiffel.paris/en/rates-opening-times', hoursSource: 'https://www.toureiffel.paris/en/rates-opening-times',
    lat: 48.8584, lon: 2.2945, tip: 'Llega con antelación para pasar el control de seguridad; la cima puede cerrar por meteorología.'
  },
  {
    slug: 'museo-del-louvre', city: 'paris', name: 'Museo del Louvre', category: 'Museo', image: 'assets/louvre.jpg',
    lead: 'Un palacio lleno de siglos de arte: mejor elegir unas pocas salas y disfrutarlas.',
    story: 'Antes de ser museo, el Louvre fue fortaleza y residencia real. Abrió como museo público durante la Revolución francesa y hoy reúne colecciones de muchas culturas y épocas, desde la antigüedad hasta el siglo XIX.',
    curiosity: 'La pirámide de vidrio, inaugurada en 1989, organiza el acceso a un palacio mucho más antiguo.',
    duration: '2–4 horas', hours: 'Lun, jue, sáb y dom 9:00–18:00; mié y vie 9:00–21:00. Cierra los martes.',
    price: '22 € para residentes o ciudadanos del EEE; 32 € para otros visitantes adultos', ticket: 'Se recomienda reservar una franja horaria en la web oficial, incluso con entrada gratuita.',
    official: 'https://www.louvre.fr/en/visit/tickets-and-prices', hoursSource: 'https://www.louvre.fr/en/visit/tickets-and-prices',
    lat: 48.8606, lon: 2.3376, tip: 'Escoge una colección o un recorrido corto: intentar verlo todo en un día resulta agotador.'
  }
];

countries.push(japanCountry);
cities.push(...japanCities);
places.push(...japanPlaces);

const app = document.querySelector('#app');
const countryBy = slug => countries.find(item => item.slug === slug);
const cityBy = slug => cities.find(item => item.slug === slug);
const placeBy = (city, slug) => places.find(item => item.city === city && item.slug === slug);
const countryUrl = slug => `#/pais/${slug}`;
const cityUrl = slug => { const city = cityBy(slug); return `#/pais/${city.country}/ciudad/${slug}`; };
const placeUrl = place => `${cityUrl(place.city)}/lugar/${place.slug}`;
const mapUrl = (lat, lon) => `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=16/${lat}/${lon}`;
const mapEmbed = (lat, lon, title) => {
  const d = .013;
  const bbox = [lon - d, lat - d, lon + d, lat + d].join(',');
  return `<iframe loading="lazy" title="Mapa de ${title}" src="https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${lat}%2C${lon}"></iframe>`;
};
const arrow = '<span aria-hidden="true">↗</span>';
const toList = value => Array.isArray(value) ? value.filter(Boolean) : (value ? [value] : []);
const bookmarkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 3.75h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.75a1 1 0 0 1 1-1Z"/></svg>';
const compass = '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/><path d="m27.6 12.4-4.9 10.3-10.3 4.9 4.9-10.3 10.3-4.9Z" fill="currentColor"/><circle cx="20" cy="20" r="2.2" fill="#f7f5ef"/></svg>';
const route = () => location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
const saved = () => { try { return JSON.parse(localStorage.getItem('viajespaya-saved') || '[]'); } catch { return []; } };
const save = ids => localStorage.setItem('viajespaya-saved', JSON.stringify(ids));

function header() {
  const count = saved().length;
  return `<header class="site-header"><div class="shell header-inner">
    <a class="brand" href="#/" aria-label="ViajesPaya, inicio"><span class="brand-mark">${compass}</span><span>viajes<span class="brand-accent">paya</span><small>GUÍAS PARA PERDERSE BIEN</small></span></a>
    <nav class="main-nav" aria-label="Navegación principal"><a href="#/" data-nav="home">Inicio</a><a href="#/destinos" data-nav="destinos">Destinos</a><a href="#/guardados" data-nav="guardados">Guardados <span class="saved-count">${count}</span></a></nav>
    <a class="header-cta" href="#/destinos">Explorar destinos <span aria-hidden="true">↗</span></a>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-grid"><div><a class="brand footer-brand" href="#/"><span class="brand-mark">${compass}</span><span>viajes<span class="brand-accent">paya</span><small>GUÍAS PARA PERDERSE BIEN</small></span></a><p>Ideas para llegar, mirar alrededor y sentir que ya estás allí.</p></div><div><span class="footer-label">Explora</span><a href="#/destinos">Todos los destinos</a><a href="#/guardados">Tus lugares guardados</a></div><div><span class="footer-label">Antes de salir</span><p>Horarios y precios revisados en septiembre de 2026. Confírmalos siempre en la web oficial antes de tu visita.</p></div></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} ViajesPaya</span><span>Hecho para viajar con curiosidad.</span><a href="#/creditos">Créditos de imágenes</a></div></footer>`;
}

function countryCard(country, index = 0) {
  return `<a class="destination-card reveal" style="--delay:${index * 80}ms" href="${countryUrl(country.slug)}"><div class="destination-image"><img src="${country.image}" alt="Vista de ${country.name}" loading="lazy"/><span class="card-flag">${country.flag}</span></div><div class="destination-content"><div><span class="overline">${country.cities.length} ${country.cities.length === 1 ? 'ciudad' : 'ciudades'} para descubrir</span><h3>${country.name}</h3><p>${country.kicker}</p></div><span class="round-arrow" aria-hidden="true">↗</span></div></a>`;
}

function cityCard(city, index = 0) {
  const count = places.filter(p => p.city === city.slug).length;
  return `<a class="city-card reveal" style="--delay:${index * 80}ms" href="${cityUrl(city.slug)}"><img src="${city.image}" alt="Vista de ${city.name}" loading="lazy"/><div class="city-card-shade"></div><div class="city-card-info"><span>${city.region} · ${count} ${count === 1 ? 'lugar' : 'lugares'}</span><h3>${city.name}</h3><p>${city.eyebrow}</p></div><span class="city-card-arrow" aria-hidden="true">↗</span></a>`;
}

function placeCard(place, index = 0) {
  const active = saved().includes(`${place.city}/${place.slug}`);
  return `<article class="place-card reveal" style="--delay:${index * 65}ms"><a class="place-image" href="${placeUrl(place)}"><img src="${place.image}" alt="${place.name}" loading="lazy"/></a><div class="place-content"><div class="place-topline"><span class="tag">${place.category}</span><button class="save-button ${active ? 'is-saved' : ''}" data-save="${place.city}/${place.slug}" aria-label="${active ? 'Quitar de guardados' : 'Guardar'} ${place.name}" aria-pressed="${active}">${bookmarkIcon}</button></div><a href="${placeUrl(place)}"><h3>${place.name}</h3></a><p>${place.lead}</p><div class="place-card-bottom"><span>◷ ${place.duration}</span><a href="${placeUrl(place)}" aria-label="Ver guía de ${place.name}">Ver guía <span aria-hidden="true">↗</span></a></div></div></article>`;
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Ruta de navegación"><a href="#/">Inicio</a>${items.map(item => `<span aria-hidden="true">/</span>${item.href ? `<a href="${item.href}">${item.label}</a>` : `<span aria-current="page">${item.label}</span>`}`).join('')}</nav>`;
}

function home() {
  return `<main id="contenido"><section class="home-hero"><div class="shell hero-grid"><div class="hero-copy reveal"><div class="eyebrow"><span class="eyebrow-line"></span> TU PRÓXIMA HISTORIA EMPIEZA AQUÍ</div><h1>El mundo se entiende <em>mejor caminándolo.</em></h1><p>Guías para descubrir ciudades, conocer sus historias y tener todo lo importante a mano cuando estés allí.</p><div class="hero-actions"><a class="button button-dark" href="#/destinos">Explorar destinos <span aria-hidden="true">↗</span></a><span class="hero-note">Viaja a tu manera, con la curiosidad por delante.</span></div></div><div class="hero-visual reveal"><div class="hero-photo main-photo"><img src="assets/kioto.jpg" alt="Una calle tradicional de Kioto"/></div><div class="hero-photo small-photo"><img src="assets/roma.jpg" alt="El Coliseo de Roma"/></div><div class="hero-stamp"><span>UN MUNDO<br/>POR DESCUBRIR</span><strong>✳</strong></div><div class="hero-coordinate">35°00′ N &nbsp; 135°46′ E <span>KIOTO</span></div></div></div><div class="shell hero-footer"><span>DESLIZA PARA EXPLORAR</span><span class="hero-footer-line"></span><span>04 DESTINOS</span></div></section>
  <section class="section destinations-section" id="destinos"><div class="shell"><div class="section-heading"><div><span class="section-kicker">ELIGE EL SIGUIENTE PASO</span><h2>Destinos para <em>dejarse llevar.</em></h2></div><p>De un país a una ciudad. De una ciudad a esos lugares que no se olvidan.</p></div><div class="destination-grid">${countries.map(countryCard).join('')}</div><div class="section-end"><span>Empieza por donde más te apetezca.</span><a class="text-link" href="#/destinos">Ver todos los destinos ${arrow}</a></div></div></section>
  <section class="feature-band"><div class="shell feature-grid"><div><span class="section-kicker light">LA IDEA DETRÁS DE VIAJESPAYA</span><h2>Una guía que viaja <em>contigo.</em></h2></div><div class="feature-items"><div><span class="feature-number">01</span><h3>Encuentra tu lugar</h3><p>Explora por países y ciudades hasta dar con el plan que encaja contigo.</p></div><div><span class="feature-number">02</span><h3>Conoce la historia</h3><p>Cada punto de interés tiene una guía breve, curiosidades y consejos útiles.</p></div><div><span class="feature-number">03</span><h3>Sal con todo claro</h3><p>Mapas, entradas y enlaces oficiales para organizar la visita sobre la marcha.</p></div></div></div></section>
  <section class="section spotlight-section"><div class="shell spotlight-grid"><div class="spotlight-photo"><img src="assets/paris.jpg" alt="La Torre Eiffel al atardecer" loading="lazy"/><span>48°51′ N · 2°17′ E</span></div><div class="spotlight-copy"><span class="section-kicker">UN LUGAR, MIL HISTORIAS</span><h2>Cada rincón tiene algo que <em>contar.</em></h2><p>Descubre qué hace especial a cada lugar antes de llegar. Y cuando estés allí, abre la guía para encontrar lo que necesitas sin perder tiempo.</p><a class="button button-outline" href="${placeUrl(places[4])}">Descubrir la Torre Eiffel <span aria-hidden="true">↗</span></a></div></div></section></main>`;
}

function destinations() {
  return `<main id="contenido" class="page-main"><div class="shell">${breadcrumbs([{label:'Destinos'}])}<div class="page-intro"><span class="section-kicker">EL MAPA EMPIEZA AQUÍ</span><h1>¿Dónde nos <em>vamos?</em></h1><p>Elige un país y descubre sus ciudades, rutas y lugares imprescindibles.</p></div><div class="destination-grid destination-page-grid">${countries.map(countryCard).join('')}</div></div></main>`;
}

function countryPage(country) {
  const selected = country.cities.map(cityBy);
  return `<main id="contenido"><div class="shell">${breadcrumbs([{label:'Destinos',href:'#/destinos'},{label:country.name}])}</div><section class="country-hero"><div class="shell country-hero-grid"><div class="country-copy"><span class="section-kicker">DESTINO / ${country.flag}</span><h1>${country.name}<span class="hero-period">.</span></h1><p>${country.intro}</p><div class="country-meta"><span>${selected.length} ${selected.length === 1 ? 'ciudad' : 'ciudades'} por explorar</span><span>✳</span><span>${country.kicker}</span></div></div><div class="country-image"><img src="${country.image}" alt="Vista de ${country.name}"/></div></div></section><section class="section"><div class="shell"><div class="section-heading"><div><span class="section-kicker">DE CALLE EN CALLE</span><h2>Ciudades de <em>${country.name}.</em></h2></div><p>Elige una ciudad y empieza a preparar tu próxima escapada.</p></div><div class="city-grid">${selected.map(cityCard).join('')}</div></div></section></main>`;
}

function cityPage(city) {
  const country = countryBy(city.country);
  const selected = places.filter(place => place.city === city.slug);
  return `<main id="contenido"><div class="shell">${breadcrumbs([{label:'Destinos',href:'#/destinos'},{label:country.name,href:countryUrl(country.slug)},{label:city.name}])}</div><section class="city-hero"><div class="city-hero-image"><img src="${city.image}" alt="Vista de ${city.name}"/></div><div class="city-hero-overlay"></div><div class="shell city-hero-content"><span class="hero-location">${country.name} / ${city.region}</span><h1>${city.name}<span>.</span></h1><p>${city.eyebrow}</p><button data-scroll="lugares" class="button button-light">Descubrir lugares <span aria-hidden="true">↓</span></button></div></section><div class="city-facts shell"><div><span>TIEMPO IDEAL</span><strong>${city.days}</strong></div><div><span>MEJOR ÉPOCA</span><strong>${city.best}</strong></div><div><span>CÓMO MOVERSE</span><strong>${city.move}</strong></div><a href="${mapUrl(city.lat,city.lon)}" target="_blank" rel="noopener noreferrer">Abrir mapa ${arrow}</a></div><section class="section city-intro-section"><div class="shell city-intro-grid"><span class="section-kicker">GUÍA DE CIUDAD / ${city.name.toUpperCase()}</span><div><h2>Empieza por <em>sentir la ciudad.</em></h2><p>${city.intro}</p></div></div></section><section class="section place-section" id="lugares"><div class="shell"><div class="section-heading"><div><span class="section-kicker">NO TE LOS PIERDAS</span><h2>Lugares con <em>historia.</em></h2></div><p>${selected.length} ${selected.length === 1 ? 'parada' : 'paradas'} para empezar a conocer ${city.name} de verdad.</p></div><div class="place-grid">${selected.map(placeCard).join('')}</div></div></section><section class="section practical-section"><div class="shell practical-grid"><div><span class="section-kicker">ANOTA ESTO</span><h2>Consejos para <em>el camino.</em></h2><p>Pequeños detalles que pueden hacer que disfrutes mucho más la visita.</p></div><div class="tips-list">${city.tips.map(([title, description], i) => `<article><span>0${i+1}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join('')}</div></div></section><section class="section map-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">UBÍCATE</span><h2>${city.name} en el <em>mapa.</em></h2></div><a class="text-link" href="${mapUrl(city.lat,city.lon)}" target="_blank" rel="noopener noreferrer">Abrir mapa completo ${arrow}</a></div><div class="map-frame">${mapEmbed(city.lat,city.lon,city.name)}</div><p class="map-credit">Mapa de © colaboradores de OpenStreetMap.</p></div></section></main>`;
}

function placePage(place) {
  const curiosities = toList(place.curiosities || place.curiosity);
  const tips = toList(place.tips || place.tip);
  const city = cityBy(place.city), country = countryBy(city.country);
  const active = saved().includes(`${place.city}/${place.slug}`);
  const related = places.filter(p => p.city === city.slug && p.slug !== place.slug);
  return `<main id="contenido"><div class="shell">${breadcrumbs([{label:'Destinos',href:'#/destinos'},{label:country.name,href:countryUrl(country.slug)},{label:city.name,href:cityUrl(city.slug)},{label:place.name}])}</div><section class="place-hero"><div class="shell place-hero-grid"><div class="place-hero-copy"><span class="section-kicker">${city.name.toUpperCase()} / ${place.category.toUpperCase()}</span><h1>${place.name}<span class="hero-period">.</span></h1><p>${place.lead}</p><div class="place-hero-actions"><a class="button button-dark" href="${mapUrl(place.lat,place.lon)}" target="_blank" rel="noopener noreferrer">Cómo llegar ${arrow}</a><button class="button button-outline save-main ${active ? 'is-saved' : ''}" data-save="${place.city}/${place.slug}" aria-pressed="${active}">${bookmarkIcon}<span>${active ? 'Guardado' : 'Guardar lugar'}</span></button></div></div><div class="place-hero-image"><img src="${place.image}" alt="${place.name}"/></div></div></section><div class="shell place-quick-facts"><div><span>TIPO DE VISITA</span><strong>${place.category}</strong></div><div><span>TIEMPO ESTIMADO</span><strong>${place.duration}</strong></div><div><span>PRECIO ORIENTATIVO</span><strong>${place.price}</strong></div></div><section class="section place-story"><div class="shell story-grid"><div><span class="section-kicker">01 / DESCUBRE</span><h2>La historia detrás <em>del lugar.</em></h2></div><div><p class="story-text">${place.story}</p>${(place.history || []).map(paragraph => `<p class="story-detail">${paragraph}</p>`).join('')}${curiosities.length ? `<div class="curiosity"><span>✳ ¿SABÍAS QUE...?</span><ul>${curiosities.map(c => `<li>${c}</li>`).join('')}</ul></div>` : ''}</div></div></section><section class="section visit-section"><div class="shell"><div class="section-heading"><div><span class="section-kicker">02 / PREPARA TU VISITA</span><h2>Todo lo que necesitas <em>saber.</em></h2></div><p>Información revisada en septiembre de 2026. Los datos pueden cambiar.</p></div><div class="visit-grid"><article><span class="visit-icon">◷</span><span class="visit-label">HORARIOS</span><h3>¿Cuándo ir?</h3><p>${place.hours}</p><a href="${place.hoursSource}" target="_blank" rel="noopener noreferrer">Confirmar horario oficial ${arrow}</a></article><article><span class="visit-icon">€</span><span class="visit-label">ENTRADAS</span><h3>¿Cuánto cuesta?</h3><p>${place.price}. ${place.ticket}</p><a href="${place.official}" target="_blank" rel="noopener noreferrer">Consultar web oficial ${arrow}</a></article><article><span class="visit-icon">✳</span><span class="visit-label">CONSEJO VIAJERO</span><h3>Antes de salir</h3><ul class="visit-list">${tips.map(t => `<li>${t}</li>`).join('')}</ul></article>${place.access ? `<article><span class="visit-icon">➤</span><span class="visit-label">CÓMO LLEGAR</span><h3>Acceso al lugar</h3><p>${place.access}</p><a href="${mapUrl(place.lat,place.lon)}" target="_blank" rel="noopener noreferrer">Ver ubicación ${arrow}</a></article>` : ''}</div></div></section><section class="section map-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">03 / ENCUÉNTRALO</span><h2>Ya casi estás <em>allí.</em></h2></div><a class="text-link" href="${mapUrl(place.lat,place.lon)}" target="_blank" rel="noopener noreferrer">Abrir mapa ${arrow}</a></div><div class="map-frame">${mapEmbed(place.lat,place.lon,place.name)}</div><p class="map-credit">Mapa de © colaboradores de OpenStreetMap.</p></div></section>${place.gallery?.length ? `<section class="section gallery-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">FOTOGRAFÍAS DE LA VISITA</span><h2>El recorrido en <em>imágenes.</em></h2></div></div><div class="gallery-grid">${place.gallery.map(photo => `<figure><img src="${photo.src}" alt="${photo.alt}" loading="lazy"/><figcaption>${photo.alt}</figcaption></figure>`).join('')}</div></div></section>` : ''}${related.length ? `<section class="section related-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">SIGUE EXPLORANDO</span><h2>Más lugares en <em>${city.name}.</em></h2></div><a class="text-link" href="${cityUrl(city.slug)}">Ver guía de ciudad ${arrow}</a></div><div class="place-grid">${related.map(placeCard).join('')}</div></div></section>` : ''}</main>`;
}

function savedPage() {
  const ids = saved();
  const selected = ids.map(id => { const [city,slug] = id.split('/'); return placeBy(city,slug); }).filter(Boolean);
  return `<main id="contenido" class="page-main"><div class="shell">${breadcrumbs([{label:'Guardados'}])}<div class="page-intro"><span class="section-kicker">TU PEQUEÑA LISTA DE DESEOS</span><h1>Lugares <em>guardados.</em></h1><p>Ten a mano las visitas que quieres hacer durante el viaje.</p></div>${selected.length ? `<div class="place-grid">${selected.map(placeCard).join('')}</div>` : `<div class="empty-state"><span class="empty-spark">✳</span><h2>Todavía no hay lugares guardados.</h2><p>Explora una ciudad y toca el marcador de los lugares que quieras recordar.</p><a class="button button-dark" href="#/destinos">Explorar destinos ${arrow}</a></div>`}</div></main>`;
}

function creditsPage() {
  const photos = Object.entries(imageCredits).map(([file, data]) => `<p><a href="${data.url}" target="_blank" rel="noopener noreferrer">${file.replace('.jpg','').replaceAll('-',' ')}</a> · ${data.artist} · ${data.license} · imagen adaptada para web.</p>`).join('');
  return `<main id="contenido" class="page-main"><div class="shell">${breadcrumbs([{label:'Créditos de imágenes'}])}<div class="page-intro"><span class="section-kicker">GRACIAS A QUIENES COMPARTEN</span><h1>Créditos de <em>imágenes.</em></h1><p>Fotografías usadas para dar vida a las guías.</p></div><div class="credits-list"><p>Imágenes de Roma, París y la Torre Eiffel: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>.</p>${photos}<p>Mapas: © colaboradores de <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>.</p></div></div></main>`;
}

function notFound() {
  return `<main id="contenido" class="page-main"><div class="shell empty-state"><span class="empty-spark">↗</span><h1>Nos hemos salido de la ruta.</h1><p>Esta página no existe. Volvamos a explorar.</p><a class="button button-dark" href="#/">Volver al inicio</a></div></main>`;
}

function render(preserveScroll = false) {
  const segments = route();
  let content;
  if (!segments.length) content = home();
  else if (segments[0] === 'destinos' && segments.length === 1) content = destinations();
  else if (segments[0] === 'guardados' && segments.length === 1) content = savedPage();
  else if (segments[0] === 'creditos' && segments.length === 1) content = creditsPage();
  else if (segments[0] === 'pais') {
    const country = countryBy(segments[1]);
    const city = cityBy(segments[3]);
    if (segments.length === 2 && country) content = countryPage(country);
    else if (segments[2] === 'ciudad' && city && country && city.country === country.slug) {
      if (segments.length === 4) content = cityPage(city);
      else if (segments[4] === 'lugar' && segments.length === 6) {
        const place = placeBy(city.slug,segments[5]);
        content = place ? placePage(place) : notFound();
      }
    }
  }
  app.innerHTML = header() + (content || notFound()) + footer();
  document.querySelectorAll('[data-nav]').forEach(link => {
    if ((segments.length === 0 && link.dataset.nav === 'home') || (segments[0] === link.dataset.nav)) link.setAttribute('aria-current','page');
  });
  document.title = `${document.querySelector('main h1')?.textContent.trim() || 'ViajesPaya'} — ViajesPaya`;
  if (!preserveScroll) window.scrollTo({top:0,behavior:'instant'});
}

document.addEventListener('click', event => {
  const scrollButton = event.target.closest('[data-scroll]');
  if (scrollButton) {
    document.getElementById(scrollButton.dataset.scroll)?.scrollIntoView({behavior:'smooth'});
    return;
  }
  const button = event.target.closest('[data-save]');
  if (!button) return;
  const id = button.dataset.save;
  const next = saved();
  const index = next.indexOf(id);
  if (index >= 0) next.splice(index,1); else next.push(id);
  save(next);
  render(true);
});
window.addEventListener('hashchange', () => render());
render();
