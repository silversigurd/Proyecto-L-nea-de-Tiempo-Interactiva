const periodos = [
  {
    titulo: "Los Orígenes: La Era Precolombina",
    rango_fechas: "2000 a.C. – 1500 d.C.",
    resumen: "Literatura funcional y sagrada, de tradición oral y anónima, donde la naturaleza es un ente vivo.",
    detalle: `
      <h3>Contexto y cosmovisión</h3>
      <p>Literatura funcional que explicaba el origen del mundo; la naturaleza como ente vivo; predominio de lo místico, sagrado y la tradición oral y anónima.</p>
      <h3>Periodos clave</h3>
      <ul>
        <li>Preclásico (2000 a.C.–250 d.C.): escritura pictográfica.</li>
        <li>Clásico (250–900 d.C.): florecimiento maya.</li>
        <li>Postclásico (900–1500 d.C.): expansión azteca e inca.</li>
      </ul>
      <h3>Cultura Maya</h3>
      <p>Códices y calendario; obra referente <em>Popol-Vuh</em> (mitología y creación del hombre de maíz).${autorMedia("Popol Vuh")}</p>
      <h3>Cultura Azteca (Náhuatl)</h3>
      <p>Poesía filosófica sobre la muerte y el amor; obra clave <em>Huehuetlahtolli</em>.${autorMedia("Huehuetlahtolli")}</p>
      <h3>Cultura Inca (Quechua)</h3>
      <p>Poesía lírica oral, cantos, religión; destaca el <em>Manuscrito de Huarochirí</em>.${autorMedia("Manuscrito de Huarochirí")}</p>
      <h3>Formatos y conservación</h3>
      <p>Mitos, leyendas, poemas épicos, crónicas, códices; gran parte destruida en la colonia por herejía, sobrevivió por oralidad y frailes transcriptores.</p>
    `,
  },
  {
    titulo: "La Búsqueda de Identidad",
    rango_fechas: "Principios del Siglo XIX",
    resumen: "La literatura se vuelve herramienta política de la independencia, bajo la influencia de la Ilustración.",
    detalle: `
      <h3>Contexto de independencia</h3>
      <p>La literatura pasa de artística a herramienta política; influencia de la Ilustración, la Revolución Industrial y la Revolución Francesa de 1830.</p>
      <h3>El Americanismo Literario</h3>
      <p>Búsqueda de expresión propia desligada de Europa (héroes nacionales → naturaleza → denuncia social).</p>
      <h3>El Neoclasicismo (~1825)</h3>
      <p>Racionalismo, reglas formales, carácter aristocrático, fin educativo.</p>
      <h3>Autores clave</h3>
      <ul>
        <li>José Joaquín Fernández de Lizardi — <em>El Periquillo Sarniento</em>, primera novela de América.${autorMedia("José Joaquín Fernández de Lizardi", "El Periquillo Sarniento")}</li>
        <li>Vicente López y Planes — Himno Argentino.${autorMedia("Vicente López y Planes")}</li>
        <li>Esteban de Luca — Marcha Patriótica.${autorMedia("Esteban de Luca")}</li>
        <li>José Trinidad Reyes (Honduras).${autorMedia("José Trinidad Reyes")}</li>
      </ul>
    `,
  },
  {
    titulo: "Consolidación y Rebeldía Estética",
    rango_fechas: "Finales del Siglo XIX",
    resumen: "Del Romanticismo al Modernismo: costumbrismo, realismo social y la explosión sensorial de Rubén Darío.",
    detalle: `
      <h3>Romanticismo</h3>
      <p>El individuo en el centro, tono emocional y nostálgico.</p>
      <ul>
        <li>Jorge Isaacs (Colombia) — obra cumbre <em>María</em>.${autorMedia("Jorge Isaacs", "María")}</li>
      </ul>
      <h3>Literatura Gaucha vs. Gauchesca</h3>
      <p>Popular/oral (campesino mestizo) vs. escrita por intelectuales para crítica social.</p>
      <h3>Costumbrismo</h3>
      <p>Retrato de la cotidianidad vía periodismo.</p>
      <ul>
        <li>Eugenio Díaz Castro — <em>Manuela</em>.${autorMedia("Eugenio Díaz Castro", "Manuela")}</li>
        <li>José Joaquín Vallejo "Jotabeche".${autorMedia("José Joaquín Vallejo")}</li>
        <li>Ricardo Palma — <em>Tradiciones Peruanas</em>.${autorMedia("Ricardo Palma", "Tradiciones Peruanas")}</li>
        <li>Manuel Payno.${autorMedia("Manuel Payno")}</li>
        <li>José María Vergara y Vergara.${autorMedia("José María Vergara y Vergara")}</li>
      </ul>
      <h3>Realismo</h3>
      <p>Crítica social cruda, influencia de Zola.</p>
      <ul>
        <li>Clorinda Matto de Turner — <em>Aves sin nido</em>.${autorMedia("Clorinda Matto de Turner", "Aves sin nido")}</li>
        <li>Tomás Carrasquilla — <em>La Marquesa de Yolombó</em>.${autorMedia("Tomás Carrasquilla", "La Marquesa de Yolombó")}</li>
        <li>Lucio V. López — <em>La gran aldea</em>.${autorMedia("Lucio Vicente López", "La gran aldea")}</li>
      </ul>
      <h3>Premodernismo</h3>
      <p>Transición, sinestesia.</p>
      <ul>
        <li>Julián del Casal.${autorMedia("Julián del Casal")}</li>
      </ul>
      <h3>Modernismo</h3>
      <p>Musicalidad, sinestesia, símbolos exóticos.</p>
      <ul>
        <li>Rubén Darío — <em>Azul</em> (1888).${autorMedia("Rubén Darío", "Azul")}</li>
        <li>Leopoldo Lugones — <em>Las montañas de oro</em>.${autorMedia("Leopoldo Lugones", "Las montañas de oro")}</li>
        <li>Amado Nervo — <em>Perlas negras</em>.${autorMedia("Amado Nervo", "Perlas negras")}</li>
        <li>Julio Herrera y Reissig — <em>Los éxtasis de la montaña</em>.${autorMedia("Julio Herrera y Reissig", "Los éxtasis de la montaña")}</li>
        <li>José Santos Chocano — <em>Alma América</em>.${autorMedia("José Santos Chocano", "Alma América")}</li>
        <li>Guillermo Valencia — <em>Ritos</em>.${autorMedia("Guillermo Valencia", "Ritos")}</li>
        <li>Enrique Larreta — <em>La gloria de don Ramiro</em>.${autorMedia("Enrique Larreta", "La gloria de don Ramiro")}</li>
      </ul>
      <h3>Realismo Finisecular (1890–1910)</h3>
      <p>Literatura local, dialectos, sátira.</p>
      <ul>
        <li>Eduardo Acevedo Díaz — <em>Ismael</em>.${autorMedia("Eduardo Acevedo Díaz", "Ismael")}</li>
        <li>Vicente Pérez Rosales — <em>Recuerdos del pasado</em>.${autorMedia("Vicente Pérez Rosales", "Recuerdos del pasado")}</li>
      </ul>
    `,
  },
  {
    titulo: "Fractura del Lenguaje y la Geografía",
    rango_fechas: "1910 – 1930",
    resumen: "Las vanguardias rompen la métrica y la linealidad, mientras la novela de la tierra y la ciudad narran nuevos mundos.",
    detalle: `
      <h3>Las Vanguardias</h3>
      <p>Ruptura de métrica y linealidad, poesía visual (caligramas), irracionalidad.</p>
      <h3>Los "Ismos"</h3>
      <p>Futurismo (1909), Surrealismo (1924), Creacionismo, Estridentismo (1921).</p>
      <h3>Vanguardistas clave</h3>
      <ul>
        <li>Vicente Huidobro.${autorMedia("Vicente Huidobro")}</li>
        <li>César Vallejo — <em>Trilce</em> (1922).${autorMedia("César Vallejo", "Trilce")}</li>
        <li>Manuel Maples Arce.${autorMedia("Manuel Maples Arce")}</li>
        <li>Jorge Luis Borges (Ultraísmo).${autorMedia("Jorge Luis Borges")}</li>
      </ul>
      <h3>La Novela de la Tierra (años 20)</h3>
      <p>La naturaleza como fuerza primitiva.</p>
      <ul>
        <li>José Eustasio Rivera — <em>La vorágine</em> (1924).${autorMedia("José Eustasio Rivera", "La vorágine")}</li>
        <li>Rómulo Gallegos — <em>Doña Bárbara</em> (1929).${autorMedia("Rómulo Gallegos", "Doña Bárbara")}</li>
      </ul>
      <h3>La Vanguardia Urbana (años 20)</h3>
      <p>Crudeza de la ciudad. Grupo de Boedo y Florida.</p>
      <ul>
        <li>Roberto Arlt — <em>El juguete rabioso</em> (1926).${autorMedia("Roberto Arlt", "El juguete rabioso")}</li>
      </ul>
    `,
  },
  {
    titulo: "El Fenómeno Global: El Boom Latinoamericano",
    rango_fechas: "Años 60",
    resumen: "Realismo mágico y voces múltiples conquistan el mundo, de la mano de los Cuatro Grandes del Boom.",
    detalle: `
      <h3>Contexto</h3>
      <p>Guerra Fría, Revolución Cubana, Bogotazo (1948); influencia de Kafka, Joyce, T.S. Eliot.</p>
      <h3>Impacto editorial</h3>
      <p>Editorial Seix Barral (Barcelona); saltos de tiempo, multiplicidad de voces, Realismo Mágico.</p>
      <h3>Premios Nobel</h3>
      <ul>
        <li>Gabriela Mistral (1945).${autorMedia("Gabriela Mistral")}</li>
        <li>Miguel Ángel Asturias (1967).${autorMedia("Miguel Ángel Asturias")}</li>
        <li>Pablo Neruda (1971).${autorMedia("Pablo Neruda")}</li>
        <li>Octavio Paz (1990).${autorMedia("Octavio Paz")}</li>
      </ul>
      <p>Gabriel García Márquez (1982) y Mario Vargas Llosa (2010) también son Nobel — ver Cuatro Grandes debajo.</p>
      <h3>Los Cuatro Grandes del Boom</h3>
      <ul>
        <li>Gabriel García Márquez (Colombia): <em>Cien años de soledad</em> (1967).${autorMedia("Gabriel García Márquez", "Cien años de soledad")}</li>
        <li>Julio Cortázar (Argentina): <em>Rayuela</em> (1963).${autorMedia("Julio Cortázar", "Rayuela")}</li>
        <li>Mario Vargas Llosa (Perú): <em>La ciudad y los perros</em> (1963).${autorMedia("Mario Vargas Llosa", "La ciudad y los perros")}</li>
        <li>Carlos Fuentes (México): <em>La muerte de Artemio Cruz</em> (1962).${autorMedia("Carlos Fuentes", "La muerte de Artemio Cruz")}</li>
      </ul>
    `,
  },
  {
    titulo: "Caos, Redes y Realidad: Literatura Contemporánea",
    rango_fechas: "Hoy",
    resumen: "El Post-Boom da voz a mujeres y minorías; la era digital trae narcotráfico, migración y el descubrimiento por TikTok.",
    detalle: `
      <h3>Post-Boom</h3>
      <p>Rompe el monopolio del Boom, da voz a mujeres y minorías.</p>
      <ul>
        <li>Ángeles Mastretta — <em>Arráncame la vida</em>.${autorMedia("Ángeles Mastretta", "Arráncame la vida")}</li>
        <li>Elena Poniatowska — <em>La noche de Tlatelolco</em>.${autorMedia("Elena Poniatowska", "La noche de Tlatelolco")}</li>
      </ul>
      <h3>Era Digital</h3>
      <p>Internet, narcotráfico, migración; estilo corto y directo tipo chat, mezcla de crónicas, memes y cultura pop; personajes rotos/reales.</p>
      <h3>Autores contemporáneos</h3>
      <ul>
        <li>Mariana Enríquez — <em>Las cosas que perdimos en el fuego</em>.${autorMedia("Mariana Enríquez", "Las cosas que perdimos en el fuego")}</li>
        <li>Piedad Bonnett — <em>Lo que no tiene nombre</em>.${autorMedia("Piedad Bonnett", "Lo que no tiene nombre")}</li>
        <li>Guillermo Arriaga — <em>Salvar el fuego</em>.${autorMedia("Guillermo Arriaga", "Salvar el fuego")}</li>
        <li>Gilmer Mesa — <em>La cuadra</em>.${autorMedia("Gilmer Mesa", "La cuadra")}</li>
      </ul>
      <h3>Consumo literario de hoy</h3>
      <p>De libros académicos a descubrir novelas por TikTok/WhatsApp; de "leer para soñar con Macondo" a "leer para entendernos y hacer resistencia".</p>
    `,
  },
];

function autorMedia(nombre, obra) {
  const obraAttr = obra ? ` data-obra="${obra.replace(/"/g, "&quot;")}"` : "";
  return `<span class="author-media" data-nombre="${nombre.replace(/"/g, "&quot;")}"${obraAttr}></span>`;
}

const MEDIA_CACHE_KEY = "autoresMediaCache_v2";

let mediaCache = null;
const solicitudesEnCurso = new Map();

function obtenerCacheMedia() {
  if (!mediaCache) {
    try {
      mediaCache = JSON.parse(localStorage.getItem(MEDIA_CACHE_KEY)) || {};
    } catch (error) {
      mediaCache = {};
    }
  }
  return mediaCache;
}

function persistirCacheMedia() {
  try {
    localStorage.setItem(MEDIA_CACHE_KEY, JSON.stringify(mediaCache));
  } catch (error) {
    // localStorage puede no estar disponible (modo privado, cuota llena); ignorar.
  }
}

// Comparte una unica copia en memoria del cache (evita que fetches en paralelo
// se pisen entre si al leer/escribir localStorage) y deduplica pedidos
// concurrentes para la misma clave.
function conCacheMedia(key, fetcher) {
  const cache = obtenerCacheMedia();
  if (key in cache) return Promise.resolve(cache[key]);
  if (solicitudesEnCurso.has(key)) return solicitudesEnCurso.get(key);
  const promesa = fetcher().then((valor) => {
    cache[key] = valor;
    persistirCacheMedia();
    solicitudesEnCurso.delete(key);
    return valor;
  });
  solicitudesEnCurso.set(key, promesa);
  return promesa;
}

async function buscarFotoWiki(lang, nombreWiki) {
  try {
    const res = await fetch(`https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nombreWiki)}`);
    if (!res.ok) return null;
    const data = await res.json();
    const thumb = data.thumbnail?.source || null;
    const full = data.originalimage?.source || thumb;
    if (!thumb && !full) return null;
    return { thumb: thumb || full, full: full || thumb };
  } catch (error) {
    return null;
  }
}

function fotoAutor(nombre) {
  return conCacheMedia(`foto:${nombre}`, async () => {
    const nombreWiki = nombre.trim().replace(/ /g, "_");
    const [es, en] = await Promise.all([
      buscarFotoWiki("es", nombreWiki),
      buscarFotoWiki("en", nombreWiki),
    ]);
    return es || en;
  });
}

function portadaLibro(titulo, autor) {
  return conCacheMedia(`portada:${titulo}|${autor}`, async () => {
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(titulo + " " + autor)}&limit=5`);
      if (!res.ok) return null;
      const data = await res.json();
      // El primer resultado no siempre trae portada (ediciones sin escanear), y
      // algunos cover_i solo existen en un zip de Internet Archive que Open
      // Library proxea al vuelo y a veces falla (502) — se guardan varios
      // candidatos para poder probar el siguiente si el primero no carga.
      const candidatos = (data.docs || [])
        .filter((doc) => doc.cover_i)
        .slice(0, 3)
        .map((doc) => `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`);
      return candidatos.length ? candidatos : null;
    } catch (error) {
      return null;
    }
  });
}

async function cargarMediaAutor(span, inner) {
  const nombre = span.dataset.nombre;
  const obra = span.dataset.obra;
  const [foto, portada] = await Promise.all([
    fotoAutor(nombre),
    obra ? portadaLibro(obra, nombre) : Promise.resolve(null),
  ]);

  if (foto) {
    const img = document.createElement("img");
    img.className = "author-photo";
    img.src = foto.thumb;
    img.dataset.full = foto.full;
    img.alt = `Imagen de ${nombre}`;
    img.loading = "lazy";
    img.tabIndex = 0;
    span.appendChild(img);
  }
  if (portada) {
    const [primera, ...resto] = portada;
    const img = document.createElement("img");
    img.className = "author-cover";
    img.src = primera;
    img.dataset.full = primera;
    img.alt = `Portada de ${obra}`;
    img.loading = "lazy";
    img.tabIndex = 0;
    let candidatosRestantes = resto;
    img.addEventListener("error", function reintentarPortada() {
      if (candidatosRestantes.length === 0) {
        img.remove();
        recalcularAltura(inner);
        return;
      }
      const [siguiente, ...restantes] = candidatosRestantes;
      candidatosRestantes = restantes;
      img.src = siguiente;
      img.dataset.full = siguiente;
    });
    span.appendChild(img);
  }
  if (foto || portada) {
    recalcularAltura(inner);
  }
}

function recalcularAltura(inner) {
  if (!inner.closest(".period").classList.contains("open")) return;
  requestAnimationFrame(() => {
    inner.style.maxHeight = inner.scrollHeight + "px";
  });
}

function cargarMediaAutores(li) {
  const inner = li.querySelector(".period-panel-inner");
  const spans = li.querySelectorAll(".author-media:not([data-cargado])");
  spans.forEach((span) => {
    span.setAttribute("data-cargado", "1");
    cargarMediaAutor(span, inner);
  });
}

function crearPeriodo(periodo, indice) {
  const li = document.createElement("li");
  li.className = `period color-${(indice % 6) + 1}`;

  const panelId = `panel-${indice}`;

  li.innerHTML = `
    <button class="period-toggle" aria-expanded="false" aria-controls="${panelId}">
      <div class="period-head">
        <h2 class="period-title">${periodo.titulo}</h2>
        <span class="period-dates">${periodo.rango_fechas}</span>
      </div>
      <p class="period-resumen">${periodo.resumen}</p>
      <span class="period-chevron">Ver detalle <span class="period-chevron-arrow">▾</span></span>
    </button>
    <div class="period-panel" id="${panelId}">
      <div class="period-panel-inner">
        <div class="period-detail">${periodo.detalle}</div>
      </div>
    </div>
  `;

  const toggle = li.querySelector(".period-toggle");
  const inner = li.querySelector(".period-panel-inner");
  toggle.addEventListener("click", () => {
    const isOpen = li.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    inner.style.maxHeight = isOpen ? inner.scrollHeight + "px" : "0px";
    if (isOpen) {
      cargarMediaAutores(li);
    }
  });

  return { li, inner };
}

function render() {
  const timeline = document.getElementById("timeline");
  const panelesAbiertos = [];
  periodos.forEach((periodo, indice) => {
    const { li, inner } = crearPeriodo(periodo, indice);
    timeline.appendChild(li);
    panelesAbiertos.push(inner);
  });

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      panelesAbiertos.forEach((inner) => {
        if (inner.closest(".period").classList.contains("open")) {
          inner.style.maxHeight = inner.scrollHeight + "px";
        }
      });
    }, 150);
  });
}

function crearLightbox() {
  const overlay = document.createElement("div");
  overlay.className = "media-lightbox";
  overlay.innerHTML = `
    <button type="button" class="media-lightbox-close" aria-label="Cerrar imagen">&times;</button>
    <img class="media-lightbox-img" alt="">
  `;
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay || event.target.closest(".media-lightbox-close")) {
      cerrarLightbox();
    }
  });
  document.body.appendChild(overlay);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") cerrarLightbox();
  });

  document.addEventListener("click", (event) => {
    const img = event.target.closest(".author-photo, .author-cover");
    if (img) {
      abrirLightbox(img.dataset.full || img.src, img.alt);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const img = event.target.closest(".author-photo, .author-cover");
    if (img) {
      event.preventDefault();
      abrirLightbox(img.dataset.full || img.src, img.alt);
    }
  });

  return overlay;
}

function abrirLightbox(src, alt) {
  const overlay = document.querySelector(".media-lightbox");
  const img = overlay.querySelector(".media-lightbox-img");
  img.src = src;
  img.alt = alt;
  overlay.classList.add("open");
}

function cerrarLightbox() {
  const overlay = document.querySelector(".media-lightbox");
  overlay.classList.remove("open");
}

function activarScrollReveal() {
  const items = document.querySelectorAll(".period");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => {
      el.classList.add("in-view");
      cargarMediaAutores(el);
    });
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Precarga las fotos/portadas apenas la tarjeta entra en pantalla,
          // para que ya esten listas (o en camino) cuando el usuario abra el panel.
          cargarMediaAutores(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

render();
activarScrollReveal();
crearLightbox();
