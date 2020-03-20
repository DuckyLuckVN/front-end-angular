import {alertService} from './alert.service.js';


export var helper = angular.module('helper', []);
// helper.alert = function () {
//     alert('test alert')

// }

helper.service('alertService', alertService)