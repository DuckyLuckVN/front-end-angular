import {subjects} from '../../../database/subjects.js'

export const courses = {
    templateUrl: './app/components/courses/courses.component.html',
    controller: controller,
    controllerAs: '$'
}

function controller($location) {
    this.courses = subjects;
    console.log(this.subjects)

    this.index = 0;

    this.first = () => {
        this.index = 0;
    }

    this.prevert = () => {
        this.index -= (this.index < 6) ? this.index + 1 : 6;
        if (this.index < 6) {
            this.index = 0;
        } else {
            this.index -= 6;
        }
    }
    
    this.next = () => {
        if ( (this.index + 6) > this.courses - 1) {
            this.last();
        } else {
            this.index += 6;
        }
    }

    this.last = () => {
        this.index = Math.round(this.courses.length / 6) * 6;
    }
   
}