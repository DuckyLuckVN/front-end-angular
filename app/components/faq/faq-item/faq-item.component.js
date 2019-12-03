export const faqItem = {
    templateUrl: './app/components/faq/faq-item/faq-item.component.html',
    controller: controller,
    controllerAs: '$',
    bindings: {
        faq: "<"
    }
}

function controller($sce) {
    this.$onInit = () => {

    }
}