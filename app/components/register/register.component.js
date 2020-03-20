import {students} from '../../../database/students.js'
import {alertHelper} from '../../modules/helper/alert.helper.js';

export const register = {
    templateUrl: './app/components/register/register.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($state, alertService) {

    this.register = () => {
        if (this.checkExistStudent(this.student.username)) {
            //Tài khoản đã tồn tại
            alertHelper.simpleError('Đăng ký thất bại', 'Tài khoản <b>' + this.student.username + '</b> này đã tồn tại!');
        } else {
            console.log(this.student.password, this.rePassword)
            if (this.student.password == this.rePassword) {
                alertHelper.simpleSuccess('Đăng ký thành công!', '', () => {
                    students.push(this.student);
                    console.log(students);
                    $state.go('login');
                });
            } else {
                alertHelper.simpleError('Đăng ký thất bại', 'Mật khẩu xác nhận không trùng khớp!');
            }
        }
    }

    this.checkExistStudent = (username) => {
        let isExist = false;
        students.forEach( (s) => {
            if (s.username == username)
                isExist = true;
        });
        return isExist;
    }
}