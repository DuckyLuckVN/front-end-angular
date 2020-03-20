import {students} from '../../../database/students.js';
import {alertHelper} from '../../modules/helper/alert.helper.js';

export const forgetPassword = {
    templateUrl: './app/components/forget-password/forget-password.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($rootScope) {



    this.showPassword = () => {
        
        let isFound = false;

        students.forEach(s => {
            if (this.username == s.username) {
                isFound = true;
                if (this.email == s.email) {
                    this.password = s.password;
                    alertHelper.simpleSuccess('Lấy lại mật khẩu thành công!');
                    return;
                }
                else {
                    alertHelper.simpleError('Đã có lỗi sảy ra', 'Email nhập vào không trùng khớp!')
                }
            }
        });

        if (isFound == false) {
            alertHelper.simpleError('Đã có lỗi sảy ra!', 'Tài khoản nhập vào không chính xác!');
        }
    }



}