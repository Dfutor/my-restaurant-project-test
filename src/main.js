// Importamos las librerías necesarias y componentes

import { createApp } from 'vue';
import App from './App.vue';
//Primeflex
import 'primeflex/primeflex.css';
//Components
import components from './common/plugins/components';
//Router
import router from './router.js';
//PrimeVue
import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/lara-dark-teal/theme.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css';



// Creamos la aplicación principal de Vue
const app = createApp(App, {});

// Registramos los componentes globales
Object.keys(components).forEach(key => {
  app.component(key, components[key]);
});





// Agregamos como plugin
app.use(PrimeVue);
app.use(router);

// Montamos la aplicación en el elemento con el id 'app'
app.mount('#app');

