import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(
	<React.StrictMode>
		<App registerSW={registerSW} />
	</React.StrictMode>,
	document.getElementById('root'),
);

/**
 * PAR EL ERROR DE TYPES SE BUSCO «CANNOT FIND MODULE 'VIRTUAL:PWA-REGISTER' OR ITS CORRESPONDING TYPE DECLARATIONS».
 * PROPORCIONAR TIPOS PARA LAS FUNCIONES DEL CLIENTE DEL MÓDULO 'virtual:pwa-register':
 * https://githubmemory.com/repo/antfu/vite-plugin-pwa/issues/40
 * https://github.com/antfu/vite-plugin-pwa/issues/38
 * https://github.com/antfu/vite-plugin-pwa/blob/main/client.d.ts
 *
 * GIT CLONE BRANCH: CÓMO CLONAR UNA RAMA ESPECÍFICA:
 * https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/
 *
 * SOLICITAR ACTUALIZACIÓN DE CONTENIDO NUEVO:
 * https://vite-plugin-pwa.netlify.app/guide/prompt-for-update.html *
 */
