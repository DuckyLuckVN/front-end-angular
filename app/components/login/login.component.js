import {students} from '../../../database/students.js';
import {alertHelper} from '../../modules/helper/alert.helper.js';

export const login = {
    templateUrl: './app/components/login/login.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($rootScope, $state, alertService) {

    this.login = () => {
        $rootScope.student = checkUser({username: this.username, password: this.password});
        if($rootScope.student != null) {
            alertHelper.simpleSuccess('Đăng nhập thành công!', '', function() { $state.go('profile') })
        } else {
           alertHelper.simpleError('Đăng nhập thất bại', "Tài khoản hoặc mật khẩu không đúng")
        }
    }

    
    function checkUser(account) {
        let student = null;

        students.forEach( s => {
            if (s.username == account.username && s.password == account.password) 
                student = s;
        });

        return student;
    }
}