import {appRoot} from './app.component.js';
import {home} from './components/home/home.component.js';
import {introduction} from './components/introduction/introduction.component.js';
import {header} from './components/header/header.component.js';
import {aside} from './components/aside/aside.component.js';
import {courses} from './components/courses/courses.component.js';
import {subjectCard} from './components/courses/subject-card/subject-card.component.js';
import {faq} from './components/faq/faq.component.js';
import {faqItem} from './components/faq/faq-item/faq-item.component.js';
import {contact} from './components/contact/contact.component.js';
import {register} from './components/register/register.component.js';
import {login} from './components/login/login.component.js';
import {changePassword} from './components/change-password/change-password.component.js';
import {changeProfile} from './components/change-profile/change-profile.component.js';
import {quizPage} from './components/quiz-page/quiz-page.component.js';
import {helper} from './modules/helper/helper.module.js';
import {profile} from './components/profile/profile.component.js';
import {forgetPassword} from './components/forget-password/forget-password.component.js';
import {authentication, authenticationWhenLogin} from './hooks/authentication.hook.js';



export var app = angular.module('main', 
[
    'ui.router',
    'ngSanitize',
    'ngMessages',
    'helper'
]);

app.component("headerNav", header);
app.component("asideMenu", aside);

app.component("register", register);
app.component("login", login);
app.component("changePassword", changePassword);
app.component("changeProfile", changeProfile);

app.component("appRoot", appRoot);
app.component("home", home);
app.component("contact", contact);
app.component("introduction", introduction);
app.component("courses", courses);
app.component("subjectCard", subjectCard);
app.component("faq", faq);
app.component("faqItem", faqItem);
app.component("profile", profile);
app.component("quizPage", quizPage);
app.component("forgetPassword", forgetPassword);

app.run(authentication);
app.run(authenticationWhenLogin);

app.directive('compareTo', compareTo);

function compareTo() {
  return {
    require: 'ngModel',
    scope: {
        otherModelValue: '=compareTo'
    },
    link: function(scope, element, attributes, ngModel) {
      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch('otherModelValue', function() {
        ngModel.$validate();
      });
    }
  };
};





