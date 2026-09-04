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
      <p>Códices y calendario; obra referente <em>Popol-Vuh</em> (mitología y creación del hombre de maíz).</p>
      <h3>Cultura Azteca (Náhuatl)</h3>
      <p>Poesía filosófica sobre la muerte y el amor; obra clave <em>Huehuetlahtolli</em>.</p>
      <h3>Cultura Inca (Quechua)</h3>
      <p>Poesía lírica oral, cantos, religión; destaca el <em>Manuscrito de Huarochirí</em>.</p>
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
        <li>José Joaquín Fernández de Lizardi — <em>El Periquillo Sarniento</em>, primera novela de América.</li>
        <li>Vicente López y Planes — Himno Argentino.</li>
        <li>Esteban de Luca — Marcha Patriótica.</li>
        <li>José Trinidad Reyes (Honduras).</li>
      </ul>
    `,
  },
  {
    titulo: "Consolidación y Rebeldía Estética",
    rango_fechas: "Finales del Siglo XIX",
    resumen: "Del Romanticismo al Modernismo: costumbrismo, realismo social y la explosión sensorial de Rubén Darío.",
    detalle: `
      <h3>Romanticismo</h3>
      <p>El individuo en el centro, tono emocional y nostálgico; obra cumbre <em>María</em> de Jorge Isaacs (Colombia).</p>
      <h3>Literatura Gaucha vs. Gauchesca</h3>
      <p>Popular/oral (campesino mestizo) vs. escrita por intelectuales para crítica social.</p>
      <h3>Costumbrismo</h3>
      <p>Retrato de la cotidianidad vía periodismo. Autores: Eugenio Díaz Castro (<em>Manuela</em>), "Jotabeche", Ricardo Palma (<em>Tradiciones Peruanas</em>), Manuel Payno, José María Vergara y Vergara.</p>
      <h3>Realismo</h3>
      <p>Crítica social cruda, influencia de Zola. Autores: Clorinda Matto de Turner (<em>Aves sin nido</em>), Tomás Carrasquilla (<em>La Marquesa de Yolombó</em>), Lucio V. López (<em>La gran aldea</em>).</p>
      <h3>Premodernismo</h3>
      <p>Transición, sinestesia; referente Julián del Casal.</p>
      <h3>Modernismo</h3>
      <p>Musicalidad, sinestesia, símbolos exóticos. Autores: Rubén Darío (<em>Azul</em>, 1888), Leopoldo Lugones, Amado Nervo, Julio Herrera y Reissig, José Santos Chocano, Guillermo Valencia, Enrique Larreta.</p>
      <h3>Realismo Finisecular (1890–1910)</h3>
      <p>Literatura local, dialectos, sátira. Autores: Tomás Carrasquilla (<em>Frutos de mi tierra</em>), Eduardo Acevedo Díaz (<em>Ismael</em>), Vicente Pérez Rosales.</p>
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
      <p>Vicente Huidobro, César Vallejo (<em>Trilce</em>, 1922), Manuel Maples Arce, Jorge Luis Borges (Ultraísmo).</p>
      <h3>La Novela de la Tierra (años 20)</h3>
      <p>La naturaleza como fuerza primitiva. Obras: <em>La vorágine</em> (1924) de José Eustasio Rivera, <em>Doña Bárbara</em> (1929) de Rómulo Gallegos.</p>
      <h3>La Vanguardia Urbana (años 20)</h3>
      <p>Crudeza de la ciudad. Grupo de Boedo y Florida; Roberto Arlt (<em>El juguete rabioso</em>, 1926).</p>
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
      <p>Gabriela Mistral (1945), Miguel Ángel Asturias (1967), Pablo Neruda (1971), Gabriel García Márquez (1982), Octavio Paz (1990), Mario Vargas Llosa (2010).</p>
      <h3>Los Cuatro Grandes del Boom</h3>
      <ul>
        <li>Gabriel García Márquez (Colombia): <em>Cien años de soledad</em> (1967).</li>
        <li>Julio Cortázar (Argentina): <em>Rayuela</em> (1963).</li>
        <li>Mario Vargas Llosa (Perú): <em>La ciudad y los perros</em> (1963).</li>
        <li>Carlos Fuentes (México): <em>La muerte de Artemio Cruz</em> (1962).</li>
      </ul>
    `,
  },
  {
    titulo: "Caos, Redes y Realidad: Literatura Contemporánea",
    rango_fechas: "Hoy",
    resumen: "El Post-Boom da voz a mujeres y minorías; la era digital trae narcotráfico, migración y el descubrimiento por TikTok.",
    detalle: `
      <h3>Post-Boom</h3>
      <p>Rompe el monopolio del Boom, da voz a mujeres y minorías. Obras: <em>Arráncame la vida</em> (Ángeles Mastretta), <em>La noche de Tlatelolco</em> (Elena Poniatowska).</p>
      <h3>Era Digital</h3>
      <p>Internet, narcotráfico, migración; estilo corto y directo tipo chat, mezcla de crónicas, memes y cultura pop; personajes rotos/reales.</p>
      <h3>Autores contemporáneos</h3>
      <p>Mariana Enríquez (<em>Las cosas que perdimos en el fuego</em>), Piedad Bonnett (<em>Lo que no tiene nombre</em>), Guillermo Arriaga (<em>Salvar el fuego</em>), Gilmer Mesa (<em>La cuadra</em>).</p>
      <h3>Consumo literario de hoy</h3>
      <p>De libros académicos a descubrir novelas por TikTok/WhatsApp; de "leer para soñar con Macondo" a "leer para entendernos y hacer resistencia".</p>
    `,
  },
];

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

function activarScrollReveal() {
  const items = document.querySelectorAll(".period");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
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
