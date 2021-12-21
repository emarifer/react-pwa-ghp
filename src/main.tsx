import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { registerSW } from 'virtual:pwa-register';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const updateSW = registerSW({
	onNeedRefresh() {
		Swal.fire({
			icon: 'info',
			title: 'New Content Available!!',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok, update it!',
		}).then((result) => {
			if (result.isConfirmed) {
				updateSW();
			}
		});
	},
});

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

/**
 * SOLICITAR ACTUALIZACIÓN DE CONTENIDO NUEVO:
 * https://github.com/antfu/vite-plugin-pwa/issues/156#issuecomment-970165872
 * https://vite-plugin-pwa.netlify.app/guide/prompt-for-update.html
 *
 * PAR EL ERROR DE TYPES SE BUSCO «CANNOT FIND MODULE 'VIRTUAL:PWA-REGISTER' OR ITS CORRESPONDING TYPE DECLARATIONS».
 * PROPORCIONAR TIPOS PARA LAS FUNCIONES DEL CLIENTE DEL MÓDULO 'virtual:pwa-register':
 * https://githubmemory.com/repo/antfu/vite-plugin-pwa/issues/40
 * https://github.com/antfu/vite-plugin-pwa/issues/38
 * https://github.com/antfu/vite-plugin-pwa/blob/main/client.d.ts
 *
 * GIT CLONE BRANCH: CÓMO CLONAR UNA RAMA ESPECÍFICA:
 * https://www.freecodecamp.org/news/git-clone-branch-how-to-clone-a-specific-branch/
 *
 * SOBRE EL USO DE LA BIBLIOTECA SWEETALERT:
 * https://sweetalert2.github.io/
 */
