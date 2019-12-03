export const courses = {
    templateUrl: './app/components/courses/courses.component.html',
    controller: controller,
    controllerAs: '$'
}

function controller($location) {
    this.path = $location.path();

    this.courses = [ 
        {
            title: 'Lập trình game cơ bản',
            logo: 'GAME.png'
        },
        {
            title: 'Lậpn trình Android cơ bản',
            logo: 'ADBS.png'
        },
        {
            title: 'Lập trình Android nâng cao',
            logo: 'ADAV.png'
        },
        {
            title: 'Tạo giao diện Android',
            logo: 'ADUI.png'
        },
        {
            title: 'Kiểm thử Android',
            logo: 'ADTE.png'
        },
        {
            title: 'Lập trình ASP.NET',
            logo: 'ASNE.png'
        },
        {
            title: 'Hướng dẫn dùng cloud',
            logo: 'CLCO.png'
        },
        {
            title: 'Cơ bản CSDL',
            logo: 'DBBS.png'
        },
        {
            title: 'CSDL Nâng Cao',
            logo: 'DBAV.png'
        },
        {
            title: 'Lập Trình Web cơ bản',
            logo: 'HTCS.png'
        },
    ]
   
}