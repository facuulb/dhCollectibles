const fs = require('fs');
const path = require('path');

function importar(marca) {
    const rutaArchivo = path.join(__dirname, 'datos', `figuras${marca}.json`);

    try {
        const contenido = fs.readFileSync(rutaArchivo, 'utf-8');
        return JSON.parse(contenido);
    } catch (error) {
        console.error(`Error al leer el archivo: ${error}`);
        return [];
    }
}

module.exports = {
    importar
};