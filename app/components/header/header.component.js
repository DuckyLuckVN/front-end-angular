export const header = {
    templateUrl: './app/components/header/header.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($location) {
    this.path = $location.path();

    this.title = "HERO STUDY ONLINE";

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
            title: "Giới Thiệu a",
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