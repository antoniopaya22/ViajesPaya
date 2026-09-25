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
const mapUrl = (lat, lon) => `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
const directionsUrl = (lat, lon) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
const mapEmbed = (lat, lon, title, id) => `<div class="leaflet-map" id="${id}" data-lat="${lat}" data-lon="${lon}" data-title="${(title || '').replace(/"/g,'&quot;')}" role="img" aria-label="Mapa de ${title || ''}"></div>`;
const zonePalette = ['#d86143', '#193e35', '#3d6b8c', '#a8672c', '#7a5a9e', '#5b8a4a', '#b0475a'];
const zoneColor = (city, zoneSlug) => { const i = (city.zones || []).findIndex(z => z.slug === zoneSlug); return i === -1 ? zonePalette[0] : zonePalette[i % zonePalette.length]; };
const activeMaps = [];
const mapTileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const mapLabelsUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}';
const mapAttribution = 'Tiles © <a href="https://www.esri.com" target="_blank" rel="noopener">Esri</a> — Esri, Maxar, Earthstar Geographics';
const pinDivIcon = (big, color) => L.divIcon({
  className: 'map-pin',
  html: `<svg viewBox="0 0 32 40" width="${big ? 40 : 30}" height="${big ? 50 : 38}"><path d="M16 1C7.7 1 1 7.7 1 16c0 11 15 22.5 15 22.5S31 27 31 16C31 7.7 24.3 1 16 1Z" fill="${color || '#d86143'}" stroke="#fffdf8" stroke-width="1.5"/><circle cx="16" cy="16" r="6.5" fill="#fffdf8"/></svg>`,
  iconSize: [big ? 40 : 30, big ? 50 : 38],
  iconAnchor: [big ? 20 : 15, big ? 50 : 38],
  popupAnchor: [0, big ? -46 : -34]
});
const zoneMapState = {};
// Leaflet and Chart.js are heavy (~350KB combined) and only needed on some pages — load on demand
// instead of on every page (home/destinations/saved/credits never show a map or chart).
function loadScript(src) { return new Promise((resolve, reject) => { const s = document.createElement('script'); s.src = src; s.onload = resolve; s.onerror = reject; document.head.appendChild(s); }); }
function loadStylesheet(href) { return new Promise((resolve, reject) => { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; l.onload = resolve; l.onerror = reject; document.head.appendChild(l); }); }
let leafletLoading = null;
function ensureLeaflet() {
  if (window.L) return Promise.resolve();
  if (!leafletLoading) leafletLoading = Promise.all([
    loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css'),
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js')
  ]);
  return leafletLoading;
}
let chartLoading = null;
function ensureChart() {
  if (window.Chart) return Promise.resolve();
  if (!chartLoading) chartLoading = loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.5.1/chart.umd.min.js');
  return chartLoading;
}
function destroyMaps() { activeMaps.forEach(m => { try { m.remove(); } catch {} }); activeMaps.length = 0; Object.keys(zoneMapState).forEach(k => delete zoneMapState[k]); }
function initMaps() {
  if (!window.L) return;
  document.querySelectorAll('.leaflet-map').forEach(el => {
    const lat = Number(el.dataset.lat), lon = Number(el.dataset.lon);
    const map = L.map(el, { scrollWheelZoom: false }).setView([lat, lon], 16);
    L.tileLayer(mapTileUrl, { maxZoom: 19, attribution: mapAttribution }).addTo(map);
    L.tileLayer(mapLabelsUrl, { maxZoom: 19 }).addTo(map);
    L.marker([lat, lon], { icon: pinDivIcon(true) }).addTo(map).bindPopup(el.dataset.title || '');
    activeMaps.push(map);
  });
  document.querySelectorAll('.leaflet-multimap').forEach(el => {
    const points = JSON.parse(el.dataset.points || '[]');
    if (!points.length) return;
    const map = L.map(el, { scrollWheelZoom: false });
    L.tileLayer(mapTileUrl, { maxZoom: 19, attribution: mapAttribution }).addTo(map);
    L.tileLayer(mapLabelsUrl, { maxZoom: 19 }).addTo(map);
    const markers = points.map(p => L.marker([p.lat, p.lon], { icon: pinDivIcon(false, p.color) }).bindPopup(`<strong>${p.name}</strong><br/><a href="${p.href}">Ver guía ↗</a>`));
    const group = L.featureGroup(markers).addTo(map);
    const fullBounds = group.getBounds().pad(0.2);
    map.fitBounds(fullBounds);
    const zoneBounds = {};
    points.forEach((p, i) => {
      if (!p.zone) return;
      if (!zoneBounds[p.zone]) zoneBounds[p.zone] = L.latLngBounds([]);
      zoneBounds[p.zone].extend(markers[i].getLatLng());
    });
    zoneMapState[el.id] = { map, fullBounds, zoneBounds };
    activeMaps.push(map);
  });
}
function focusMapZone(mapId, zoneSlug) {
  const state = zoneMapState[mapId];
  if (!state) return;
  if (zoneSlug === 'all' || !state.zoneBounds[zoneSlug]) state.map.flyToBounds(state.fullBounds, { padding: [20, 20] });
  else state.map.flyToBounds(state.zoneBounds[zoneSlug].pad(0.35), { padding: [20, 20] });
}
const activeCharts = [];
let chartSeq = 0;
function destroyCharts() { activeCharts.forEach(c => { try { c.destroy(); } catch {} }); activeCharts.length = 0; }
function initCharts() {
  if (!window.Chart) return;
  document.querySelectorAll('.timeline-canvas').forEach(canvas => {
    const items = JSON.parse(canvas.dataset.items || '[]');
    if (!items.length) return;
    const labels = items.map(i => i.label);
    const chart = new Chart(canvas, {
      type: 'scatter',
      data: { datasets: [{
        data: items.map((it, idx) => ({ x: it.year, y: idx })),
        backgroundColor: '#d86143',
        borderColor: '#d86143',
        pointRadius: 7,
        pointHoverRadius: 9,
        pointBorderColor: '#fffdf8',
        pointBorderWidth: 2
      }] },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 900, easing: 'easeOutQuart' },
        layout: { padding: { left: 4, right: 20 } },
        scales: {
          x: {
            title: { display: true, text: 'Año', color: '#66716b', font: { family: 'DM Sans', size: 11 } },
            grid: { color: '#eeeae0' },
            ticks: { color: '#66716b', font: { family: 'DM Sans', size: 11 } }
          },
          y: {
            reverse: true,
            min: -0.5, max: items.length - 0.5,
            afterBuildTicks: axis => { axis.ticks = items.map((_, i) => ({ value: i })); },
            ticks: { color: '#1c2925', font: { family: 'DM Sans', size: 12, weight: '700' }, callback: v => labels[v] ?? '', autoSkip: false },
            grid: { color: '#f0ede4' }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1c2925',
            titleFont: { family: 'DM Sans' },
            bodyFont: { family: 'DM Sans' },
            callbacks: { title: () => '', label: ctx => `${labels[ctx.parsed.y]}: ${items[ctx.parsed.y].yearLabel || items[ctx.parsed.y].year}` }
          }
        }
      }
    });
    activeCharts.push(chart);
  });
}
const arrow = '<span aria-hidden="true">↗</span>';
const toList = value => Array.isArray(value) ? value.filter(Boolean) : (value ? [value] : []);
function haversineKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180, dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) ** 2 + Math.cos(lat1 * Math.PI/180) * Math.cos(lat2 * Math.PI/180) * Math.sin(dLon/2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
const formatKm = km => km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1).replace('.', ',')} km`;
const reviewMonths = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const formatReviewed = yyyymm => { const [y,m] = yyyymm.split('-'); return `${reviewMonths[Number(m) - 1]} de ${y}`; };
const slugify = text => text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
// <picture> with a WebP source generated by scripts/generate-image-variants.js.
// card:true uses the small pre-resized "-card" pair (place/city grids) instead of the full-size original (heroes).
function picture(src, alt, { card = false, loading = null, className = '' } = {}) {
  const dot = src.lastIndexOf('.');
  const base = src.slice(0, dot), ext = src.slice(dot);
  const webpSrc = card ? `${base}-card.webp` : `${base}.webp`;
  const fallbackSrc = card ? `${base}-card${ext}` : src;
  return `<picture${className ? ` class="${className}"` : ''}><source srcset="${webpSrc}" type="image/webp"/><img src="${fallbackSrc}" alt="${alt}"${loading ? ` loading="${loading}"` : ''}/></picture>`;
}
// Icono SVG de línea, en vez de emoji (más nítido y consistente con el resto del sitio).
const svgIcon = path => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
const topicIcons = {
  gate: svgIcon('<path d="M2 7.5c3-1.6 17-1.6 20 0M4.5 10.5h15M7.5 10.5V19M16.5 10.5V19"/>'),
  peak: svgIcon('<path d="M3 18h18M4 18l6.2-11L15 15l2.3-3.6L20 18"/>'),
  footprints: svgIcon('<g fill="currentColor" stroke="none"><path d="M6.5 21c-1.6 0-2.8-1.3-2.4-2.9l.6-2.4c.3-1.1.3-2.3 0-3.4l-.6-2.4C3.7 8.3 4.9 7 6.5 7c1.5 0 2.7 1.2 2.5 2.7l-.3 2.6c-.1 1.1-.1 2.2 0 3.3l.3 2.7c.2 1.5-1 2.7-2.5 2.7z"/><circle cx="4.7" cy="5.6" r=".9"/><circle cx="6.4" cy="4.8" r="1"/><circle cx="8.1" cy="5.5" r=".85"/><g transform="translate(11,-0.2) scale(0.55)"><path d="M6.5 21c-1.6 0-2.8-1.3-2.4-2.9l.6-2.4c.3-1.1.3-2.3 0-3.4l-.6-2.4C3.7 8.3 4.9 7 6.5 7c1.5 0 2.7 1.2 2.5 2.7l-.3 2.6c-.1 1.1-.1 2.2 0 3.3l.3 2.7c.2 1.5-1 2.7-2.5 2.7z"/><circle cx="4.7" cy="5.6" r=".9"/><circle cx="6.4" cy="4.8" r="1"/><circle cx="8.1" cy="5.5" r=".85"/></g></g>'),
  clock: svgIcon('<circle cx="12" cy="12" r="8.3"/><path d="M12 7.7V12l3.3 1.9"/>'),
  pagoda: svgIcon('<path d="M12 2.5l2 2.4H10zM7 6.9h10M5.5 10.6h13M4 14.3h16M2.5 18h19"/>'),
  bell: svgIcon('<path d="M7 15.5c0-4 1-8.2 5-8.2s5 4.2 5 8.2H7z"/><path d="M6 15.5h12M10.3 18.4a1.8 1.8 0 0 0 3.4 0M12 4.8v1.5"/>'),
  heart: svgIcon('<path d="M12 19s-7.2-4.4-9.4-8.9C1.3 6.9 3.2 4 6.4 4c2 0 3.5 1.2 5.6 3.6C14.1 5.2 15.6 4 17.6 4c3.2 0 5.1 3 3.8 6.1C19.2 14.6 12 19 12 19z"/>'),
  droplet: svgIcon('<path d="M12 3.2s6.2 6.7 6.2 11A6.2 6.2 0 1 1 5.8 14.2C5.8 9.9 12 3.2 12 3.2z"/>'),
  blossom: svgIcon('<circle cx="12" cy="8" r="2.6"/><circle cx="16" cy="12" r="2.6"/><circle cx="12" cy="16" r="2.6"/><circle cx="8" cy="12" r="2.6"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>'),
  scroll: svgIcon('<path d="M6 4h9a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H8a2 2 0 0 1-2-2z"/><path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2M9.5 9h5M9.5 12.5h5"/>'),
  flame: svgIcon('<path d="M12 3c1.4 2.8-2.3 3.8-2.3 7.1A4.3 4.3 0 0 0 12 21a4.3 4.3 0 0 0 4.3-4.3c0-1-.4-1.7-1-2.4.3 1.3-.5 2.2-1.4 2.2-1.2 0-1.7-1-1.2-2.1.6-1.3 1.7-2.2 1.2-3.9-.3-1.1-1.2-2.2-1.9-3.3C12.6 6.5 12 4.6 12 3z"/>'),
  trophy: svgIcon('<path d="M8 4h8v4a4 4 0 0 1-8 0z"/><path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4M12 12v3M9 19h6M9.3 15.5h5.4l.5 3.5H8.8z"/>'),
  ruler: svgIcon('<path d="M4 16.3 16.3 4l3.7 3.7L7.7 20z"/><path d="M8 12.3 9.5 13.8M11 9.3 12.5 10.8M14 6.3 15.5 7.8"/>'),
  teacup: svgIcon('<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10.5h1.3a2.3 2.3 0 0 1 0 4.6H17M7 4.6c.5 1 1.5 1 2 0M11 4.6c.5 1 1.5 1 2 0"/>'),
  lantern: svgIcon('<path d="M12 2.5v2M9 4.5h6M7.5 6.5c0-1 2-1 4.5-1s4.5 0 4.5 1c1 2 1 9 0 11-.6 1-2.4 1.3-4.5 1.3s-3.9-.3-4.5-1.3c-1-2-1-9 0-11z"/><path d="M7 12h10M9 19.5h6v2H9z"/>'),
  tree: svgIcon('<path d="M12 3l4 6h-2.5l3 5H14l2.5 4h-9L10 14H7.5l3-5H8z"/><path d="M12 18v3"/>'),
  rock: svgIcon('<path d="M3 19 4 12 7 13 9 6 12 11 16 5 19 12 21 19Z" stroke-linejoin="miter"/>'),
  eye: svgIcon('<path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/>'),
  tower: svgIcon('<path d="M12 3v2M8 9l4-4 4 4"/><path d="M9.5 12V9h5v3M8 16v-4h8v4M6 21v-5h12v5"/>'),
  wood: svgIcon('<rect x="3.5" y="6" width="17" height="3" rx="1"/><rect x="3.5" y="11" width="17" height="3" rx="1"/><rect x="3.5" y="16" width="17" height="3" rx="1"/>'),
  bag: svgIcon('<path d="M7 8V6a5 5 0 0 1 10 0v2"/><path d="M4.5 8h15l-1 12h-13z"/>'),
  book: svgIcon('<path d="M4 5.5a2 2 0 0 1 2-2h4v15H6a2 2 0 0 0-2 2z"/><path d="M20 5.5a2 2 0 0 0-2-2h-4v15h4a2 2 0 0 1 2 2z"/>')
};
function renderBlocks(blocks) {
  let stop = 0;
  return blocks.map(block => {
    if (block.type === 'lead') return `<p class="story-text">${block.text}</p>`;
    if (block.type === 'p') return `<p class="story-detail">${block.text}</p>`;
    if (block.type === 'heading') return `<div class="block-heading" id="${slugify(block.text)}"><h3>${block.icon && topicIcons[block.icon] ? `<span class="heading-icon">${topicIcons[block.icon]}</span>` : ''}${block.text}</h3></div>`;
    if (block.type === 'callout') return `<div class="curiosity"><span>✳ ${block.label || '¿SABÍAS QUE...?'}</span><ul>${toList(block.items).map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (block.type === 'image') return `<figure class="block-image">${picture(block.src, block.alt || '', {loading:'lazy'})}${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`;
    if (block.type === 'list') return `<div class="block-list">${block.title ? `<h4>${block.title}</h4>` : ''}<ul>${toList(block.items).map(i => `<li>${i}</li>`).join('')}</ul></div>`;
    if (block.type === 'cards') return `<div class="card-block">${block.title ? `<h4>${block.title}</h4>` : ''}${block.intro ? `<p>${block.intro}</p>` : ''}<div class="mini-card-grid">${toList(block.items).map(c => `<article class="mini-card">${c.icon && topicIcons[c.icon] ? `<span class="mini-card-icon">${topicIcons[c.icon]}</span>` : ''}<h5>${c.title}</h5><p>${c.text}</p></article>`).join('')}</div></div>`;
    if (block.type === 'table') return `<div class="table-block">${block.title ? `<h4>${block.title}</h4>` : ''}<div class="mini-table-wrap"><table class="mini-table"><thead><tr>${block.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead><tbody>${block.rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
    if (block.type === 'timeline') {
      chartSeq += 1;
      const items = toList(block.items);
      const height = items.length * 44 + 50;
      return `<div class="timeline-block">${block.title ? `<h4>${block.title}</h4>` : ''}<div class="timeline-canvas-wrap" style="height:${height}px"><canvas class="timeline-canvas" id="timeline-chart-${chartSeq}" data-items='${JSON.stringify(items).replace(/'/g,"&#39;")}'></canvas></div></div>`;
    }
    if (block.type === 'stop') {
      stop += 1;
      return `<div class="walk-stop"><span class="walk-stop-number">${stop}</span><div class="walk-stop-body"><h4>${block.title}</h4>${toList(block.text).map(p => `<p>${p}</p>`).join('')}${block.image ? `<div class="walk-stop-image">${picture(block.image.src, block.image.alt || block.title, {loading:'lazy'})}</div>` : ''}</div></div>`;
    }
    return '';
  }).join('');
}
const bookmarkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M6 3.75h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.75a1 1 0 0 1 1-1Z"/></svg>';
const compass = '<svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="1.5"/><path d="m27.6 12.4-4.9 10.3-10.3 4.9 4.9-10.3 10.3-4.9Z" fill="currentColor"/><circle cx="20" cy="20" r="2.2" fill="#f7f5ef"/></svg>';
const searchIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg>';
const closeIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>';
function searchPlaces(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return places
    .map(p => {
      const city = cityBy(p.city);
      const country = city && countryBy(city.country);
      const haystacks = [p.name, p.category, city?.name, country?.name].filter(Boolean).map(s => s.toLowerCase());
      if (!haystacks.some(h => h.includes(q))) return null;
      const score = p.name.toLowerCase().startsWith(q) ? 0 : p.name.toLowerCase().includes(q) ? 1 : 2;
      return { p, city, country, score };
    })
    .filter(Boolean)
    .sort((a,b) => a.score - b.score)
    .slice(0, 8);
}
function renderSearchResults(query) {
  const panel = document.querySelector('[data-search-results]');
  if (!panel) return;
  if (!query.trim()) { panel.innerHTML = '<p class="search-hint">Escribe para buscar entre todos los lugares, por nombre, ciudad o categoría.</p>'; return; }
  const matches = searchPlaces(query);
  if (!matches.length) { panel.innerHTML = `<p class="search-hint">Sin resultados para «${query}».</p>`; return; }
  panel.innerHTML = matches.map(({p,city,country}) => `<a class="search-result" href="${placeUrl(p)}">${picture(p.image, '', {card:true, loading:'lazy'})}<div><strong>${p.name}</strong><span>${p.category} · ${city ? city.name : ''}${country ? ', ' + country.name : ''}</span></div></a>`).join('');
}
const rawHash = () => location.hash.replace(/^#\/?/, '');
const route = () => rawHash().split('?')[0].split('/').filter(Boolean);
const routeQuery = () => new URLSearchParams(rawHash().split('?')[1] || '');
const saved = () => { try { return JSON.parse(localStorage.getItem('viajespaya-saved') || '[]'); } catch { return []; } };
const save = ids => localStorage.setItem('viajespaya-saved', JSON.stringify(ids));

function header() {
  const count = saved().length;
  return `<header class="site-header"><div class="shell header-inner">
    <a class="brand" href="#/" aria-label="ViajesPaya, inicio"><span class="brand-mark">${compass}</span><span>viajes<span class="brand-accent">paya</span><small>GUÍAS PARA PERDERSE BIEN</small></span></a>
    <nav class="main-nav" aria-label="Navegación principal"><a href="#/" data-nav="home">Inicio</a><a href="#/destinos" data-nav="destinos">Destinos</a><a href="#/guardados" data-nav="guardados">Guardados <span class="saved-count">${count}</span></a></nav>
    <button type="button" class="search-toggle" data-search-toggle aria-label="Buscar" aria-expanded="false">${searchIcon}</button>
    <a class="header-cta" href="#/destinos">Explorar destinos <span aria-hidden="true">↗</span></a>
  </div><div class="search-panel" data-search-panel hidden><div class="shell search-panel-inner"><div class="search-input-wrap">${searchIcon}<input type="text" data-search-input placeholder="Busca un lugar, ciudad o categoría..." autocomplete="off" aria-label="Buscar lugares"/><button type="button" class="search-close" data-search-close aria-label="Cerrar búsqueda">${closeIcon}</button></div><div class="search-results" data-search-results><p class="search-hint">Escribe para buscar entre todos los lugares, por nombre, ciudad o categoría.</p></div></div></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="shell footer-grid"><div><a class="brand footer-brand" href="#/"><span class="brand-mark">${compass}</span><span>viajes<span class="brand-accent">paya</span><small>GUÍAS PARA PERDERSE BIEN</small></span></a><p>Ideas para llegar, mirar alrededor y sentir que ya estás allí.</p></div><div><span class="footer-label">Explora</span><a href="#/destinos">Todos los destinos</a><a href="#/guardados">Tus lugares guardados</a></div><div><span class="footer-label">Antes de salir</span><p>Cada ficha indica cuándo se revisó por última vez. Confirma siempre horarios y precios en la web oficial antes de tu visita.</p></div></div><div class="shell footer-bottom"><span>© ${new Date().getFullYear()} ViajesPaya</span><span>Hecho para viajar con curiosidad.</span><a href="#/creditos">Créditos de imágenes</a></div></footer>`;
}

function countryCard(country, index = 0) {
  return `<a class="destination-card reveal" style="--delay:${index * 80}ms" href="${countryUrl(country.slug)}"><div class="destination-image">${picture(country.image, `Vista de ${country.name}`, {card:true, loading:'lazy'})}<span class="card-flag">${country.flag}</span></div><div class="destination-content"><div><span class="overline">${country.cities.length} ${country.cities.length === 1 ? 'ciudad' : 'ciudades'} para descubrir</span><h3>${country.name}</h3><p>${country.kicker}</p></div><span class="round-arrow" aria-hidden="true">↗</span></div></a>`;
}

function cityCard(city, index = 0) {
  const count = places.filter(p => p.city === city.slug).length;
  return `<a class="city-card reveal" style="--delay:${index * 80}ms" href="${cityUrl(city.slug)}">${picture(city.image, `Vista de ${city.name}`, {card:true, loading:'lazy'})}<div class="city-card-shade"></div><div class="city-card-info"><span>${city.region} · ${count} ${count === 1 ? 'lugar' : 'lugares'}</span><h3>${city.name}</h3><p>${city.eyebrow}</p></div><span class="city-card-arrow" aria-hidden="true">↗</span></a>`;
}

function placeCard(place, index = 0) {
  const active = saved().includes(`${place.city}/${place.slug}`);
  return `<article class="place-card reveal" data-category="${place.category}" style="--delay:${index * 65}ms"><a class="place-image" href="${placeUrl(place)}">${picture(place.image, place.name, {card:true, loading:'lazy'})}</a><div class="place-content"><div class="place-topline"><span class="tag">${place.category}</span><button class="save-button ${active ? 'is-saved' : ''}" data-save="${place.city}/${place.slug}" aria-label="${active ? 'Quitar de guardados' : 'Guardar'} ${place.name}" aria-pressed="${active}">${bookmarkIcon}</button></div><a href="${placeUrl(place)}"><h3>${place.name}</h3></a><p>${place.lead}</p><div class="place-card-bottom"><span>◷ ${place.duration}</span><a href="${placeUrl(place)}" aria-label="Ver guía de ${place.name}">Ver guía <span aria-hidden="true">↗</span></a></div></div></article>`;
}

function breadcrumbs(items) {
  return `<nav class="breadcrumbs" aria-label="Ruta de navegación"><a href="#/">Inicio</a>${items.map(item => `<span aria-hidden="true">/</span>${item.href ? `<a href="${item.href}">${item.label}</a>` : `<span aria-current="page">${item.label}</span>`}`).join('')}</nav>`;
}

function home() {
  return `<main id="contenido"><section class="home-hero"><div class="shell hero-grid"><div class="hero-copy reveal"><div class="eyebrow"><span class="eyebrow-line"></span> TU PRÓXIMA HISTORIA EMPIEZA AQUÍ</div><h1>El mundo se entiende <em>mejor caminándolo.</em></h1><p>Guías para descubrir ciudades, conocer sus historias y tener todo lo importante a mano cuando estés allí.</p><div class="hero-actions"><a class="button button-dark" href="#/destinos">Explorar destinos <span aria-hidden="true">↗</span></a><span class="hero-note">Viaja a tu manera, con la curiosidad por delante.</span></div></div><div class="hero-visual reveal"><div class="hero-photo main-photo">${picture('assets/kioto.jpg', 'Una calle tradicional de Kioto')}</div><div class="hero-photo small-photo">${picture('assets/roma.jpg', 'El Coliseo de Roma')}</div><div class="hero-stamp"><span>UN MUNDO<br/>POR DESCUBRIR</span><strong>✳</strong></div><div class="hero-coordinate">35°00′ N &nbsp; 135°46′ E <span>KIOTO</span></div></div></div><div class="shell hero-footer"><span>DESLIZA PARA EXPLORAR</span><span class="hero-footer-line"></span><span>04 DESTINOS</span></div></section>
  <section class="section destinations-section" id="destinos"><div class="shell"><div class="section-heading"><div><span class="section-kicker">ELIGE EL SIGUIENTE PASO</span><h2>Destinos para <em>dejarse llevar.</em></h2></div><p>De un país a una ciudad. De una ciudad a esos lugares que no se olvidan.</p></div><div class="destination-grid">${countries.map(countryCard).join('')}</div><div class="section-end"><span>Empieza por donde más te apetezca.</span><a class="text-link" href="#/destinos">Ver todos los destinos ${arrow}</a></div></div></section>
  <section class="feature-band"><div class="shell feature-grid"><div><span class="section-kicker light">LA IDEA DETRÁS DE VIAJESPAYA</span><h2>Una guía que viaja <em>contigo.</em></h2></div><div class="feature-items"><div><span class="feature-number">01</span><h3>Encuentra tu lugar</h3><p>Explora por países y ciudades hasta dar con el plan que encaja contigo.</p></div><div><span class="feature-number">02</span><h3>Conoce la historia</h3><p>Cada punto de interés tiene una guía breve, curiosidades y consejos útiles.</p></div><div><span class="feature-number">03</span><h3>Sal con todo claro</h3><p>Mapas, entradas y enlaces oficiales para organizar la visita sobre la marcha.</p></div></div></div></section>
  <section class="section spotlight-section"><div class="shell spotlight-grid"><div class="spotlight-photo">${picture('assets/paris.jpg', 'La Torre Eiffel al atardecer', {loading:'lazy'})}<span>48°51′ N · 2°17′ E</span></div><div class="spotlight-copy"><span class="section-kicker">UN LUGAR, MIL HISTORIAS</span><h2>Cada rincón tiene algo que <em>contar.</em></h2><p>Descubre qué hace especial a cada lugar antes de llegar. Y cuando estés allí, abre la guía para encontrar lo que necesitas sin perder tiempo.</p><a class="button button-outline" href="${placeUrl(places[4])}">Descubrir la Torre Eiffel <span aria-hidden="true">↗</span></a></div></div></section></main>`;
}

function destinations() {
  return `<main id="contenido" class="page-main"><div class="shell">${breadcrumbs([{label:'Destinos'}])}<div class="page-intro"><span class="section-kicker">EL MAPA EMPIEZA AQUÍ</span><h1>¿Dónde nos <em>vamos?</em></h1><p>Elige un país y descubre sus ciudades, rutas y lugares imprescindibles.</p></div><div class="destination-grid destination-page-grid">${countries.map(countryCard).join('')}</div></div></main>`;
}

function countryPage(country) {
  const selected = country.cities.map(cityBy);
  const guide = country.guide;
  const guideHeadings = guide ? guide.blocks.filter(b => b.type === 'heading') : [];
  const guideToc = guideHeadings.length ? `<div class="highlights-row">${guideHeadings.map((h,i) => `<a class="highlight-chip" href="#${slugify(h.text)}" data-scroll="${slugify(h.text)}"><span class="chip-num">${i+1}</span>${h.icon && topicIcons[h.icon] ? `<span class="chip-icon">${topicIcons[h.icon]}</span>` : ''}${h.text}</a>`).join('')}</div>` : '';
  const guideSection = guide ? `<section class="section guide-section"><div class="shell"><div class="section-heading"><div><span class="section-kicker">ANTES DE IR</span><h2>${guide.title}</h2></div><p>${guide.intro}</p></div>${guideToc}<div class="guide-body">${renderBlocks(guide.blocks)}</div></div></section>` : '';
  return `<main id="contenido"><div class="shell">${breadcrumbs([{label:'Destinos',href:'#/destinos'},{label:country.name}])}</div><section class="country-hero"><div class="shell country-hero-grid"><div class="country-copy"><span class="section-kicker">DESTINO / ${country.flag}</span><h1>${country.name}<span class="hero-period">.</span></h1><p>${country.intro}</p><div class="country-meta"><span>${selected.length} ${selected.length === 1 ? 'ciudad' : 'ciudades'} por explorar</span><span>✳</span><span>${country.kicker}</span></div></div><div class="country-image">${picture(country.image, `Vista de ${country.name}`)}</div></div></section><section class="section"><div class="shell"><div class="section-heading"><div><span class="section-kicker">DE CALLE EN CALLE</span><h2>Ciudades de <em>${country.name}.</em></h2></div><p>Elige una ciudad y empieza a preparar tu próxima escapada.</p></div><div class="city-grid">${selected.map(cityCard).join('')}</div></div></section>${guideSection}</main>`;
}

function cityPage(city) {
  const country = countryBy(city.country);
  const selected = places.filter(place => place.city === city.slug);
  const mapId = `map-${city.slug}`;
  const zoneGroups = city.zones ? city.zones.map(z => ({ ...z, places: selected.filter(p => p.zone === z.slug) })).filter(z => z.places.length) : null;
  const zoneNav = zoneGroups ? `<div class="zone-nav">${zoneGroups.map(z => `<a class="zone-chip" href="#zona-${z.slug}" data-scroll="zona-${z.slug}"><span class="zone-dot" style="background:${zoneColor(city,z.slug)}"></span>${z.name}<span class="zone-chip-count">${z.places.length}</span></a>`).join('')}</div>` : '';
  const categories = [...new Set(selected.map(p => p.category))].sort((a,b) => a.localeCompare(b,'es'));
  const categoryFilter = categories.length > 1 ? `<div class="category-filter" data-category-filter><button type="button" class="category-chip is-active" data-category="todos">Todos <span class="category-chip-count">${selected.length}</span></button>${categories.map(cat => `<button type="button" class="category-chip" data-category="${cat}">${cat} <span class="category-chip-count">${selected.filter(p=>p.category===cat).length}</span></button>`).join('')}</div>` : '';
  const placesMarkup = zoneGroups
    ? zoneGroups.map(z => `<div class="zone-group" id="zona-${z.slug}"><h3 class="zone-heading"><span class="zone-dot" style="background:${zoneColor(city,z.slug)}"></span>${z.name}</h3><div class="place-grid">${z.places.map(placeCard).join('')}</div></div>`).join('')
    : `<div class="place-grid">${selected.map(placeCard).join('')}</div>`;
  const zoneLegend = zoneGroups ? `<div class="zone-legend">${zoneGroups.map(z => `<button type="button" class="zone-legend-item" data-zone-focus="${z.slug}" data-map-target="${mapId}"><span class="zone-dot" style="background:${zoneColor(city,z.slug)}"></span>${z.name}</button>`).join('')}<button type="button" class="zone-legend-item zone-legend-reset" data-zone-focus="all" data-map-target="${mapId}">Ver todas las zonas</button></div>` : '';
  const points = selected.map(p => ({ lat: p.lat, lon: p.lon, name: p.name, href: placeUrl(p), zone: p.zone, color: p.zone ? zoneColor(city, p.zone) : undefined }));
  const transport = city.transport;
  const transportHeadings = transport ? transport.blocks.filter(b => b.type === 'heading') : [];
  const transportToc = transportHeadings.length ? `<div class="highlights-row">${transportHeadings.map((h,i) => `<a class="highlight-chip" href="#${slugify(h.text)}" data-scroll="${slugify(h.text)}"><span class="chip-num">${i+1}</span>${h.icon && topicIcons[h.icon] ? `<span class="chip-icon">${topicIcons[h.icon]}</span>` : ''}${h.text}</a>`).join('')}</div>` : '';
  const transportSection = transport ? `<section class="section guide-section"><div class="shell"><div class="section-heading"><div><span class="section-kicker">EN LA CIUDAD</span><h2>${transport.title}</h2></div><p>${transport.intro}</p></div>${transportToc}<div class="guide-body">${renderBlocks(transport.blocks)}</div></div></section>` : '';
  const food = city.food;
  const foodHeadings = food ? food.blocks.filter(b => b.type === 'heading') : [];
  const foodToc = foodHeadings.length ? `<div class="highlights-row">${foodHeadings.map((h,i) => `<a class="highlight-chip" href="#${slugify(h.text)}" data-scroll="${slugify(h.text)}"><span class="chip-num">${i+1}</span>${h.icon && topicIcons[h.icon] ? `<span class="chip-icon">${topicIcons[h.icon]}</span>` : ''}${h.text}</a>`).join('')}</div>` : '';
  const foodSection = food ? `<section class="section guide-section"><div class="shell"><div class="section-heading"><div><span class="section-kicker">PARA COMER</span><h2>${food.title}</h2></div><p>${food.intro}</p></div>${foodToc}<div class="guide-body">${renderBlocks(food.blocks)}</div></div></section>` : '';
  return `<main id="contenido"><div class="shell">${breadcrumbs([{label:'Destinos',href:'#/destinos'},{label:country.name,href:countryUrl(country.slug)},{label:city.name}])}</div><section class="city-hero"><div class="city-hero-image">${picture(city.image, `Vista de ${city.name}`)}</div><div class="city-hero-overlay"></div><div class="shell city-hero-content"><span class="hero-location">${country.name} / ${city.region}</span><h1>${city.name}<span>.</span></h1><p>${city.eyebrow}</p><button data-scroll="lugares" class="button button-light">Descubrir lugares <span aria-hidden="true">↓</span></button></div></section><div class="city-facts shell"><div><span>TIEMPO IDEAL</span><strong>${city.days}</strong></div><div><span>MEJOR ÉPOCA</span><strong>${city.best}</strong></div><div><span>CÓMO MOVERSE</span><strong>${city.move}</strong></div><a href="${mapUrl(city.lat,city.lon)}" target="_blank" rel="noopener noreferrer">Abrir mapa ${arrow}</a></div><section class="section city-intro-section"><div class="shell city-intro-grid"><span class="section-kicker">GUÍA DE CIUDAD / ${city.name.toUpperCase()}</span><div><h2>Empieza por <em>sentir la ciudad.</em></h2><p>${city.intro}</p></div></div></section><section class="section place-section" id="lugares"><div class="shell"><div class="section-heading"><div><span class="section-kicker">NO TE LOS PIERDAS</span><h2>Lugares con <em>historia.</em></h2></div><p>${selected.length} ${selected.length === 1 ? 'parada' : 'paradas'} para empezar a conocer ${city.name} de verdad.</p></div>${categoryFilter}${zoneNav}${placesMarkup}</div></section><section class="section practical-section"><div class="shell practical-grid"><div><span class="section-kicker">ANOTA ESTO</span><h2>Consejos para <em>el camino.</em></h2><p>Pequeños detalles que pueden hacer que disfrutes mucho más la visita.</p></div><div class="tips-list">${city.tips.map(([title, description], i) => `<article><span>0${i+1}</span><div><h3>${title}</h3><p>${description}</p></div></article>`).join('')}</div></div></section>${foodSection}${transportSection}<section class="section map-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">UBÍCATE</span><h2>${city.name} en el <em>mapa.</em></h2></div><a class="text-link" href="${mapUrl(city.lat,city.lon)}" target="_blank" rel="noopener noreferrer">Abrir mapa completo ${arrow}</a></div><div class="map-frame map-frame-tall"><div class="leaflet-multimap" id="${mapId}" data-points='${JSON.stringify(points).replace(/'/g,"&#39;")}'></div></div>${zoneLegend}<p class="map-credit">${selected.length} ${selected.length === 1 ? 'lugar marcado' : 'lugares marcados'} · vista satélite © Esri.</p></div></section></main>`;
}

function placePage(place) {
  const curiosities = toList(place.curiosities || place.curiosity);
  const tips = toList(place.tips || place.tip);
  const fullWidthBlocks = place.blocks ? place.blocks.filter(b => b.type === 'table' || b.type === 'timeline') : [];
  const narrativeBlocks = place.blocks ? place.blocks.filter(b => b.type !== 'table' && b.type !== 'timeline') : place.blocks;
  const headings = narrativeBlocks ? narrativeBlocks.filter(b => b.type === 'heading') : [];
  const introData = fullWidthBlocks.length ? `<div class="shell intro-data">${renderBlocks(fullWidthBlocks)}</div>` : '';
  const storyBody = narrativeBlocks
    ? `${renderBlocks(narrativeBlocks)}`
    : `<p class="story-text">${place.story}</p>${(place.history || []).map(paragraph => `<p class="story-detail">${paragraph}</p>`).join('')}${curiosities.length ? `<div class="curiosity"><span>✳ ¿SABÍAS QUE...?</span><ul>${curiosities.map(c => `<li>${c}</li>`).join('')}</ul></div>` : ''}`;
  const storyToc = headings.length ? `<div class="story-toc"><span>En este recorrido</span>${headings.map(h => `<a href="#${slugify(h.text)}" data-scroll="${slugify(h.text)}">${h.text}</a>`).join('')}</div>` : '';
  const statsBlock = place.stats?.length ? `<section class="section stats-section"><div class="shell"><div class="stats-grid">${place.stats.map(s => `<div class="stat-card">${s.icon && topicIcons[s.icon] ? `<span class="stat-icon">${topicIcons[s.icon]}</span>` : ''}<strong>${s.value}</strong><span>${s.label}</span></div>`).join('')}</div>${headings.length ? `<div class="highlights-row">${headings.map((h,i) => `<a class="highlight-chip" href="#${slugify(h.text)}" data-scroll="${slugify(h.text)}"><span class="chip-num">${i+1}</span>${h.icon && topicIcons[h.icon] ? `<span class="chip-icon">${topicIcons[h.icon]}</span>` : ''}${h.text}</a>`).join('')}</div>` : ''}</div></section>` : '';
  const city = cityBy(place.city), country = countryBy(city.country);
  const active = saved().includes(`${place.city}/${place.slug}`);
  const related = places.filter(p => p.city === city.slug && p.slug !== place.slug);
  const nearby = places
    .filter(p => !(p.city === place.city && p.slug === place.slug) && typeof p.lat === 'number' && typeof p.lon === 'number')
    .map(p => ({ p, km: haversineKm(place.lat, place.lon, p.lat, p.lon) }))
    .filter(n => n.km <= 5)
    .sort((a,b) => a.km - b.km)
    .slice(0, 4);
  const nearbySection = nearby.length ? `<section class="section nearby-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">CERCA DE AQUÍ</span><h2>Otros lugares a <em>poca distancia.</em></h2></div></div><div class="nearby-grid">${nearby.map(({p,km}) => `<a class="nearby-card" href="${placeUrl(p)}"><div class="nearby-image">${picture(p.image, p.name, {card:true, loading:'lazy'})}<span class="nearby-distance">${formatKm(km)}</span></div><div class="nearby-content"><span class="nearby-city">${cityBy(p.city).name}</span><h4>${p.name}</h4></div></a>`).join('')}</div></div></section>` : '';
  return `<main id="contenido"><div class="shell">${breadcrumbs([{label:'Destinos',href:'#/destinos'},{label:country.name,href:countryUrl(country.slug)},{label:city.name,href:cityUrl(city.slug)},{label:place.name}])}</div><section class="place-hero"><div class="shell place-hero-grid"><div class="place-hero-copy"><span class="section-kicker">${city.name.toUpperCase()} / ${place.category.toUpperCase()}</span><h1>${place.name}<span class="hero-period">.</span></h1><p>${place.lead}</p><div class="place-hero-actions"><a class="button button-dark" href="${directionsUrl(place.lat,place.lon)}" target="_blank" rel="noopener noreferrer">Cómo llegar ${arrow}</a><button class="button button-outline save-main ${active ? 'is-saved' : ''}" data-save="${place.city}/${place.slug}" aria-pressed="${active}">${bookmarkIcon}<span>${active ? 'Guardado' : 'Guardar lugar'}</span></button></div></div><div class="place-hero-image">${picture(place.image, place.name)}</div></div></section><div class="shell place-quick-facts"><div><span>TIPO DE VISITA</span><strong>${place.category}</strong></div><div><span>TIEMPO ESTIMADO</span><strong>${place.duration}</strong></div><div><span>PRECIO ORIENTATIVO</span><strong>${place.price}</strong></div></div>${statsBlock}${introData}<section class="section place-story"><div class="shell story-grid"><div><span class="section-kicker">01 / DESCUBRE</span><h2>La historia detrás <em>del lugar.</em></h2>${storyToc}</div><div>${storyBody}</div></div></section><section class="section visit-section"><div class="shell"><div class="section-heading"><div><span class="section-kicker">02 / PREPARA TU VISITA</span><h2>Todo lo que necesitas <em>saber.</em></h2></div><p>${place.reviewed ? `Información revisada en ${formatReviewed(place.reviewed)}.` : 'Información revisada periódicamente.'} Los datos pueden cambiar.</p></div><div class="visit-grid"><article><span class="visit-icon">◷</span><span class="visit-label">HORARIOS</span><h3>¿Cuándo ir?</h3><p>${place.hours}</p><a href="${place.hoursSource}" target="_blank" rel="noopener noreferrer">Confirmar horario oficial ${arrow}</a></article><article><span class="visit-icon">€</span><span class="visit-label">ENTRADAS</span><h3>¿Cuánto cuesta?</h3><p>${place.price}. ${place.tickets || place.ticket || ''}</p><a href="${place.official}" target="_blank" rel="noopener noreferrer">Consultar web oficial ${arrow}</a></article><article><span class="visit-icon">✳</span><span class="visit-label">CONSEJO VIAJERO</span><h3>Antes de salir</h3><ul class="visit-list">${tips.map(t => `<li>${t}</li>`).join('')}</ul></article>${place.access ? `<article><span class="visit-icon">➤</span><span class="visit-label">CÓMO LLEGAR</span><h3>Acceso al lugar</h3><p>${place.access}</p><a href="${directionsUrl(place.lat,place.lon)}" target="_blank" rel="noopener noreferrer">Cómo llegar en Google Maps ${arrow}</a></article>` : ''}</div></div></section><section class="section map-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">03 / ENCUÉNTRALO</span><h2>Ya casi estás <em>allí.</em></h2></div><a class="text-link" href="${mapUrl(place.lat,place.lon)}" target="_blank" rel="noopener noreferrer">Abrir mapa ${arrow}</a></div><div class="map-frame">${mapEmbed(place.lat,place.lon,place.name,`map-${place.slug}`)}</div><p class="map-credit">Vista satélite © Esri, Maxar, Earthstar Geographics.</p></div></section>${nearbySection}${place.gallery?.length ? `<section class="section gallery-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">FOTOGRAFÍAS DE LA VISITA</span><h2>El recorrido en <em>imágenes.</em></h2></div></div><div class="gallery-grid">${place.gallery.map(photo => `<figure>${picture(photo.src, photo.alt, {loading:'lazy'})}<figcaption>${photo.alt}</figcaption></figure>`).join('')}</div></div></section>` : ''}${related.length ? `<section class="section related-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">SIGUE EXPLORANDO</span><h2>Más lugares en <em>${city.name}.</em></h2></div><a class="text-link" href="${cityUrl(city.slug)}">Ver guía de ciudad ${arrow}</a></div><div class="place-grid">${related.map(placeCard).join('')}</div></div></section>` : ''}</main>`;
}

function savedPage() {
  const sharedParam = routeQuery().get('ids');
  const isShared = sharedParam !== null;
  const ids = isShared ? sharedParam.split(',').filter(Boolean) : saved();
  const selected = ids.map(id => { const [city,slug] = id.split('/'); return placeBy(city,slug); }).filter(Boolean);
  const mapId = 'map-guardados';

  const groups = [];
  selected.forEach(p => {
    let group = groups.find(g => g.citySlug === p.city);
    if (!group) { group = { citySlug: p.city, city: cityBy(p.city), places: [] }; groups.push(group); }
    group.places.push(p);
  });
  const cityColorOf = citySlug => zonePalette[groups.findIndex(g => g.citySlug === citySlug) % zonePalette.length];

  const groupedMarkup = groups.map(g => `<div class="zone-group" id="ciudad-${g.citySlug}"><h3 class="zone-heading"><span class="zone-dot" style="background:${cityColorOf(g.citySlug)}"></span>${g.city.name}<span class="zone-chip-count">${g.places.length}</span></h3><div class="place-grid">${g.places.map(placeCard).join('')}</div></div>`).join('');

  const points = selected.filter(p => typeof p.lat === 'number' && typeof p.lon === 'number').map(p => ({ lat: p.lat, lon: p.lon, name: p.name, href: placeUrl(p), zone: p.city, color: cityColorOf(p.city) }));
  const mapLegend = groups.length > 1 ? `<div class="zone-legend">${groups.map(g => `<button type="button" class="zone-legend-item" data-zone-focus="${g.citySlug}" data-map-target="${mapId}"><span class="zone-dot" style="background:${cityColorOf(g.citySlug)}"></span>${g.city.name}<span class="zone-chip-count">${g.places.length}</span></button>`).join('')}<button type="button" class="zone-legend-item zone-legend-reset" data-zone-focus="all" data-map-target="${mapId}">Ver todas las ciudades</button></div>` : '';
  const mapSection = points.length ? `<section class="section map-section"><div class="shell"><div class="section-heading compact"><div><span class="section-kicker">TU MAPA</span><h2>Guardados en el <em>mapa.</em></h2></div></div><div class="map-frame map-frame-tall"><div class="leaflet-multimap" id="${mapId}" data-points='${JSON.stringify(points).replace(/'/g,"&#39;")}'></div></div>${mapLegend}<p class="map-credit">${points.length} ${points.length === 1 ? 'lugar marcado' : 'lugares marcados'} · vista satélite © Esri.</p></div></section>` : '';

  const shareUrl = selected.length ? `${location.origin}${location.pathname}#/guardados?ids=${selected.map(p => `${p.city}/${p.slug}`).join(',')}` : '';
  const shareRow = selected.length && !isShared ? `<div class="share-row"><button type="button" class="button button-outline" data-share-list="${shareUrl.replace(/"/g,'&quot;')}">Compartir esta lista ${arrow}</button><span class="share-hint" data-share-hint hidden>Enlace copiado al portapapeles</span></div>` : '';
  const sharedBanner = isShared ? `<div class="curiosity shared-banner"><span>✳ LISTA COMPARTIDA CONTIGO</span><p>${selected.length ? `${selected.length} ${selected.length === 1 ? 'lugar guardado' : 'lugares guardados'} por otra persona.` : 'Este enlace no contiene lugares reconocibles.'}</p>${selected.length ? `<button type="button" class="button button-dark" data-import-shared="${ids.join(',')}">Añadir todos a mis guardados</button>` : ''}</div>` : '';

  return `<main id="contenido" class="page-main"><div class="shell">${breadcrumbs([{label:'Guardados'}])}<div class="page-intro"><span class="section-kicker">${isShared ? 'LISTA COMPARTIDA' : 'TU PEQUEÑA LISTA DE DESEOS'}</span><h1>Lugares <em>guardados.</em></h1><p>${isShared ? 'Alguien te ha compartido esta selección de lugares.' : 'Ten a mano las visitas que quieres hacer durante el viaje.'}</p>${shareRow}</div>${sharedBanner}${selected.length ? groupedMarkup : `<div class="empty-state"><span class="empty-spark">✳</span><h2>Todavía no hay lugares guardados.</h2><p>Explora una ciudad y toca el marcador de los lugares que quieras recordar.</p><a class="button button-dark" href="#/destinos">Explorar destinos ${arrow}</a></div>`}</div>${mapSection}</main>`;
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
  destroyMaps();
  destroyCharts();
  app.innerHTML = header() + (content || notFound()) + footer();
  document.querySelectorAll('[data-nav]').forEach(link => {
    if ((segments.length === 0 && link.dataset.nav === 'home') || (segments[0] === link.dataset.nav)) link.setAttribute('aria-current','page');
  });
  document.title = `${document.querySelector('main h1')?.textContent.trim() || 'ViajesPaya'} — ViajesPaya`;
  if (!preserveScroll) window.scrollTo({top:0,behavior:'instant'});
  if (document.querySelector('.leaflet-map, .leaflet-multimap')) ensureLeaflet().then(initMaps);
  if (document.querySelector('.timeline-canvas')) ensureChart().then(initCharts);
}

function openSearch() {
  const panel = document.querySelector('[data-search-panel]');
  const toggle = document.querySelector('[data-search-toggle]');
  if (!panel) return;
  panel.hidden = false;
  toggle?.setAttribute('aria-expanded','true');
  document.querySelector('[data-search-input]')?.focus();
}
function closeSearch() {
  const panel = document.querySelector('[data-search-panel]');
  const toggle = document.querySelector('[data-search-toggle]');
  if (!panel) return;
  panel.hidden = true;
  toggle?.setAttribute('aria-expanded','false');
}
document.addEventListener('click', event => {
  const scrollButton = event.target.closest('[data-scroll]');
  if (scrollButton) {
    event.preventDefault();
    document.getElementById(scrollButton.dataset.scroll)?.scrollIntoView({behavior:'smooth'});
    return;
  }
  const zoneButton = event.target.closest('[data-zone-focus]');
  if (zoneButton) {
    focusMapZone(zoneButton.dataset.mapTarget, zoneButton.dataset.zoneFocus);
    return;
  }
  if (event.target.closest('[data-search-toggle]')) {
    const panel = document.querySelector('[data-search-panel]');
    if (panel && !panel.hidden) closeSearch(); else openSearch();
    return;
  }
  if (event.target.closest('[data-search-close]')) { closeSearch(); return; }
  const categoryChip = event.target.closest('[data-category]');
  if (categoryChip) {
    const filterRow = categoryChip.closest('[data-category-filter]');
    filterRow.querySelectorAll('[data-category]').forEach(chip => chip.classList.toggle('is-active', chip === categoryChip));
    const wanted = categoryChip.dataset.category;
    document.querySelectorAll('.place-card').forEach(card => {
      card.style.display = (wanted === 'todos' || card.dataset.category === wanted) ? '' : 'none';
    });
    document.querySelectorAll('.zone-group').forEach(group => {
      const anyVisible = [...group.querySelectorAll('.place-card')].some(card => card.style.display !== 'none');
      group.style.display = anyVisible ? '' : 'none';
    });
    return;
  }
  if (event.target.closest('[data-search-result]') || event.target.closest('.search-result')) { closeSearch(); return; }
  const panel = document.querySelector('[data-search-panel]');
  if (panel && !panel.hidden && !event.target.closest('[data-search-panel]') && !event.target.closest('[data-search-toggle]')) { closeSearch(); return; }
  const shareButton = event.target.closest('[data-share-list]');
  if (shareButton) {
    const url = shareButton.dataset.shareList;
    const hint = shareButton.parentElement.querySelector('[data-share-hint]');
    const showHint = () => { if (!hint) return; hint.hidden = false; clearTimeout(shareButton._hintTimer); shareButton._hintTimer = setTimeout(() => { hint.hidden = true; }, 2500); };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(url).then(showHint).catch(() => window.prompt('Copia el enlace:', url));
    else window.prompt('Copia el enlace:', url);
    return;
  }
  const importButton = event.target.closest('[data-import-shared]');
  if (importButton) {
    const incoming = importButton.dataset.importShared.split(',').filter(Boolean);
    const next = saved();
    incoming.forEach(id => { if (!next.includes(id)) next.push(id); });
    save(next);
    location.hash = '#/guardados';
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
document.addEventListener('input', event => {
  if (event.target.matches('[data-search-input]')) renderSearchResults(event.target.value);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeSearch();
  if (event.key === 'Enter' && event.target.matches('[data-search-input]')) {
    const first = document.querySelector('.search-result');
    if (first) { location.hash = first.getAttribute('href'); closeSearch(); }
  }
});
window.addEventListener('hashchange', () => render());
render();
