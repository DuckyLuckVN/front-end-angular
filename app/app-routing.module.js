import {app} from './app.module.js';

app.config(($stateProvider, $locationProvider, $urlRouterProvider ) => {
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    let routes = [
        { name: '/', url: '/', component: "home" },
        { name: 'introduction', url: '/introduction', component: 'introduction' },
        { name: 'courses', url: '/courses', component: 'courses' },
        { name: 'contact', url: '/contact', component: 'contact' },
        { name: 'faq', url: '/faq', component: 'faq' },
        { name: 'register', url: '/register', component: 'register' },
        { name: 'login', url: '/login', component: 'login',  data: {blockWhenAuth: true} },
        { name: 'profile', url: '/profile', component: 'profile', data: {requireAuth: true} },
        { name: 'change-password', url: '/change-password', component: 'changePassword',  data: {requireAuth: true} },
        { name: 'change-profile', url: '/change-profile', component: 'changeProfile',  data: {requireAuth: true} },
        { name: 'quiz-page', url: '/quiz-page', component: 'quizPage',  data: {requireAuth: true} },
        { name: 'forgetPassword', url: '/forget-password', component: 'forgetPassword',  },
    ];

    routes.forEach(route => $stateProvider.state(route));
});