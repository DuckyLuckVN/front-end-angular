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
        // {
        //     name: 'khoa-hoc',
        //     url: '/khoa-hoc',
        //     component: 'appKhoaHoc',
        //     resolve: {
        //         subjects: subjectService => subjectService.getAll()
        //     }
        // },
        // {
        //     name: 'xac-thuc',
        //     url: '/xac-thuc',
        //     component: 'appXacThuc'
        // },
        //     {
        //         name: 'xac-thuc.dang-nhap',
        //         url: '/dang-nhap',
        //         component: 'appDangNhap',
        //     },
        //     {
        //         name: 'xac-thuc.quen-mat-khau',
        //         url: '/quen-mat-khau',
        //         component: 'appQuenMatKhau',
        //     },
        
    ];

    routes.forEach(route => $stateProvider.state(route));
});