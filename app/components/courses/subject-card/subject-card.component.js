export const subjectCard = {
    templateUrl: './app/components/courses/subject-card/subject-card.component.html',
    controller: controller,
    controllerAs: '$',
    bindings: {
        subject: '='
    }
}

function controller($location) {
    this.path = $location.path();

   
}