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

export var app = angular.module('main', 
[
    'ui.router',
    'ngSanitize'
]);

app.component("headerNav", header);
app.component("asideMenu", aside);

app.component("register", register);

app.component("appRoot", appRoot);
app.component("home", home);
app.component("contact", contact);
app.component("introduction", introduction);
app.component("courses", courses);
app.component("subjectCard", subjectCard);
app.component("faq", faq);
app.component("faqItem", faqItem);





