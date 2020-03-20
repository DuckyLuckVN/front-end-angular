import {alertHelper} from '../../modules/helper/alert.helper.js'
export const header = {
    templateUrl: './app/components/header/header.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($state, $rootScope) {

    this.title = "HERO STUDY ONLINE";

    this.logout = () => {
        $rootScope.student = null;
        alertHelper.simpleSuccess('Đăng xuất thành công', '', function () { $state.go('login') });
    }

    this.menu = [
        {
            title: "Trang Chủ",
            href: "/",
        }, 
        {
            title: "Các Khóa Học",
            href: "courses",
        },
        {
            title: "Giới Thiệu",
            href: "introduction",
        },
        {
            title: "Liên Hệ",
            href: "contact",
        },
        {
            title: "Hỏi Đáp",
            href: "faq",
        }
    ]
}