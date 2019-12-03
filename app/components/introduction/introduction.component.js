export let introduction = {
    templateUrl: './app/components/introduction/introduction.component.html',
    controller: controller,
}

function controller($scope) {
    this.test = "day la test scope"
}