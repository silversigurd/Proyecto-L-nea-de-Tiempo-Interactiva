# Prompt para Claude Code: agregar foto de autor + portada de obra a cada `<li>`

## Contexto
Sitio: https://silversigurd.github.io/Proyecto-L-nea-de-Tiempo-Interactiva/
Al final de cada `<li>` de la línea de tiempo (cada bullet que menciona un autor) hay que agregar:
1. Una foto/retrato del autor.
2. La portada (o imagen representativa) de la obra mencionada en ese bullet.

## Por qué usar APIs en vez de URLs fijas
No pegues URLs de imágenes "googleadas" a mano: muchas rompen por hotlink-block, quedan desactualizadas o son de baja resolución. Usá estas dos APIs públicas y gratuitas, que devuelven URLs estables y con licencia libre:

### 1. Foto del autor → Wikipedia REST API (retratos, dominio público/CC)
```
GET https://es.wikipedia.org/api/rest_v1/page/summary/{Nombre_Autor_Con_Guiones_Bajos}
```
La respuesta JSON trae `thumbnail.source` (URL directa de la imagen) y `originalimage.source` (resolución completa). Ejemplo real de patrón de uso:
```js
async function fotoAutor(nombreWiki) {
  const res = await fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nombreWiki)}`);
  const data = await res.json();
  return data.thumbnail?.source || data.originalimage?.source || null;
}
// fotoAutor("Gabriel_García_Márquez")
```
Si no hay resultado en español, hacer fallback a `en.wikipedia.org` con el nombre en inglés.

### 2. Portada del libro → Open Library Covers API
```
GET https://openlibrary.org/search.json?q={titulo}+{autor}&limit=1
```
De la respuesta tomar `docs[0].cover_i` y construir:
```
https://covers.openlibrary.org/b/id/{cover_i}-L.jpg
```
Ejemplo:
```js
async function portadaLibro(titulo, autor) {
  const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(titulo + ' ' + autor)}&limit=1`);
  const data = await res.json();
  const coverId = data.docs?.[0]?.cover_i;
  return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : null;
}
```
Si `cover_i` no existe (libros en español, ediciones viejas), mostrar un placeholder con degradé pastel y el título en Times New Roman en vez de romper el layout.

## Implementación pedida
Para cada autor de la lista de abajo:
- Llamar `fotoAutor(nombreWiki)` y `portadaLibro(titulo, autor)`.
- Insertar al final del `<li>` correspondiente un bloque con las dos imágenes en miniatura (thumbnail circular para el autor, rectangular/vertical para la portada), con la misma animación fluida de expansión que ya tiene el acordeón.
- Cachear los resultados (localStorage o un JSON generado en build) para no golpear las APIs en cada carga de página.
- Si ambas fetch fallan, no romper el `<li>`: dejarlo igual que está ahora.

## Lista de autores y obras por sección (nombre para Wikipedia | obra para Open Library)

### II. Búsqueda de Identidad (Neoclasicismo)
- José Joaquín Fernández de Lizardi | El Periquillo Sarniento
- Vicente López y Planes | (sin obra puntual, solo foto)
- Esteban de Luca | (sin obra puntual, solo foto)
- José Trinidad Reyes | (sin obra puntual, solo foto)

### III. Consolidación y Rebeldía Estética (Romanticismo, Costumbrismo, Realismo, Modernismo)
- Jorge Isaacs | María
- Eugenio Díaz Castro | Manuela
- José Joaquín Vallejo "Jotabeche" | (sin obra puntual, solo foto)
- Ricardo Palma | Tradiciones Peruanas
- Manuel Payno | (sin obra puntual, solo foto)
- José María Vergara y Vergara | (sin obra puntual, solo foto)
- Clorinda Matto de Turner | Aves sin nido
- Tomás Carrasquilla | La Marquesa de Yolombó
- Lucio V. López | La gran aldea
- Julián del Casal | (sin obra puntual, solo foto)
- Rubén Darío | Azul
- Leopoldo Lugones | Las montañas de oro
- Amado Nervo | Perlas negras
- Julio Herrera y Reissig | Los éxtasis de la montaña
- José Santos Chocano | Alma América
- Guillermo Valencia | Ritos
- Enrique Larreta | La gloria de don Ramiro
- Eduardo Acevedo Díaz | Ismael
- Vicente Pérez Rosales | Recuerdos del pasado

### IV. Fractura del Lenguaje y la Geografía (Vanguardias, Novela de la Tierra)
- Vicente Huidobro | (sin obra puntual, solo foto)
- César Vallejo | Trilce
- Manuel Maples Arce | (sin obra puntual, solo foto)
- Jorge Luis Borges | (sin obra puntual, solo foto)
- José Eustasio Rivera | La vorágine
- Rómulo Gallegos | Doña Bárbara
- Roberto Arlt | El juguete rabioso

### V. El Boom Latinoamericano
- Gabriela Mistral | (sin obra puntual, solo foto — Nobel 1945)
- Miguel Ángel Asturias | (sin obra puntual, solo foto — Nobel 1967)
- Pablo Neruda | (sin obra puntual, solo foto — Nobel 1971)
- Octavio Paz | (sin obra puntual, solo foto — Nobel 1990)
- Gabriel García Márquez | Cien años de soledad
- Julio Cortázar | Rayuela
- Mario Vargas Llosa | La ciudad y los perros
- Carlos Fuentes | La muerte de Artemio Cruz

### VI. Literatura Contemporánea
- Ángeles Mastretta | Arráncame la vida
- Elena Poniatowska | La noche de Tlatelolco
- Mariana Enríquez | Las cosas que perdimos en el fuego
- Piedad Bonnett | Lo que no tiene nombre
- Guillermo Arriaga | Salvar el fuego
- Gilmer Mesa | La cuadra

## Nota sobre obras anónimas/colectivas
Popol-Vuh, Huehuetlahtolli y el Manuscrito de Huarochirí no tienen autor individual (son obras de tradición oral/colectiva) — para esos `<li>` no corresponde foto de autor; se puede usar solo una imagen representativa del manuscrito/códice si se desea, buscándola por separado.

## Estilo visual (recordatorio del proyecto)
- Paleta pastel, tipografía Times New Roman (o serif similar), animaciones fluidas ya definidas en el sitio actual.
- Las miniaturas nuevas deben integrarse a esa estética: bordes suaves, sombra sutil, sin romper el ritmo del acordeón existente.
