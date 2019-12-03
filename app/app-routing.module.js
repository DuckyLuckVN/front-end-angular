import {app} from './app.module.js';

app.config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    let routes = [
        { name: '/', url: '/', component: "home" },
        { name: 'introduction', url: '/introduction', component: 'introduction' },
        { name: 'courses', url: '/courses', component: 'courses' },
        { name: 'contact', url: '/contact', component: 'contact' },
        { name: 'faq', url: '/faq', component: 'faq' },
        { name: 'register', url: '/register', component: 'register' },
        { name: 'login', url: '/login', component: 'login' },
        { name: 'change-password', url: '/change-password', component: 'changePassword' },
    ];

    routes.forEach(route => $stateProvider.state(route));
});