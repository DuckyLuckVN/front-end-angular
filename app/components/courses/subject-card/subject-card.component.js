export const subjectCard = {
    templateUrl: './app/components/courses/subject-card/subject-card.component.html',
    controller: controller,
    controllerAs: '$',
    bindings: {
        subject: '='
    }
}

function controller($state, $rootScope) {

    this.goToQuizPage = () => {
        $rootScope.quizSubject = this.subject;
        $state.go('quiz-page');
    }
   
}