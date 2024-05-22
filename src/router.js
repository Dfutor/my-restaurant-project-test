// Importamos vue-router y los componentes de las páginas
import { createRouter, createWebHistory } from 'vue-router'; // Importar las funciones correctas de vue-router
// Importa de "Rutas"
//templates
import Base from './views/templates/Base.vue';
import AnotherPage from './views/templates/MenuRest.vue';
//pages
import PMenu from './views/pages/PMenu.vue';
import PHome from './views/pages/PHome.vue';

//components
import NewPage from './views/components/FooterDown.vue'; 
import PPedidos from './views/pages/PPedidos.vue';
import PDomicilios from './views/pages/PDomicilios.vue';

// Configuramos vue-router con las rutas de nuestro proyecto
const routes = [
    {
        path: '/',
        redirect: '/',
        component:  Base,
        children: [
            {
                path: '/',
                name: 'home',
                component: PHome
            },
            {
                path: '/menu',
                name: 'Menu',
                component: PMenu
            },
            {
                path: '/pedidos',
                name: 'Pedidos',
                component: PPedidos
            },
            {
                path: '/domicilios',
                name: 'Domicilios',
                component: PDomicilios
            },

            
        ]
    }, // Ruta para HelloWorld
    { path: '/another', component: AnotherPage }, // Ruta para AnotherPage
    { path: '/new', component: NewPage }, // Agrega la nueva ruta
    // Aquí puedes agregar más rutas para otras páginas
];

const router = createRouter({
    history: createWebHistory(), // Usar createWebHistory para el historial del navegador
    routes // Definimos las rutas
});

export default router