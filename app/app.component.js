
export const appRoot = {
    templateUrl: './app/app.component.html',
    controller: controller,
    controllerAs: '$'
}

function controller($location) {
    this.path = $location.path();
    console.log(this);
}