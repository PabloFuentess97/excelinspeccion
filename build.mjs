import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
await copyFile('index.html', 'dist/index.html');
console.log('Sitio estático preparado en dist/index.html');
