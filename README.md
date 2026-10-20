# Control de materiales Baan IV

Herramienta HTML para comparar el maestro de stock Baan IV con las líneas rojas del Excel de cargas. Conserva los datos originales de cada incidencia y localiza cantidades del mismo artículo y lote dentro y fuera de INSPE/RECEP.

## Desplegar en Seenode Static Sites

- Repositorio: PabloFuentess97/excelinspeccion
- Rama: main
- Directorio raíz: raíz del repositorio (dejar vacío)
- Lenguaje: Node.js 22
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: desactivado (no hay rutas de aplicación)
- Variables de entorno: ninguna
- Start command: no aplica

El build no necesita instalar dependencias. También se puede usar `node build.mjs` como comando de build.

Documentación: https://seenode.com/docs/services/static-sites

## Uso

Abrir index.html o la URL desplegada, subir ambos Excel y pulsar Comparar materiales. Todas las hojas de cargas se seleccionan inicialmente; se pueden desmarcar. Los archivos se procesan en el navegador y no se envían a un servidor. No se incluyen Excel reales en este repositorio.

Una posible resolución indica cantidad suficiente del artículo y lote fuera de INSPE/RECEP. Hay que comprobar liberación, ubicación y unidad antes de resolver la incidencia. No se hacen reservas ni asignaciones por OF.

La página incluye SheetJS Community Edition 0.20.3 (Apache-2.0) para leer Excel, integrado en el HTML para permitir uso sin conexión. Fuente: https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js

## Exportación

El botón Exportar vista a Excel descarga un archivo .xlsx con todas las columnas y las filas de la vista actual, respetando la búsqueda y el filtro de estado. Las cantidades se exportan como números y los códigos y lotes como texto para conservar los ceros iniciales. Incluye filtros en las cabeceras.
