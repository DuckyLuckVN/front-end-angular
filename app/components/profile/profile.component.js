export const profile = {
    templateUrl: './app/components/profile/profile.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($rootScope) {
    console.log($rootScope.student, 'a');
}