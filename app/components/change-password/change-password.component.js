import {alertHelper} from '../../modules/helper/alert.helper.js';
import {students} from '../../../database/students.js';
export const changePassword = {
    templateUrl: './app/components/change-password/change-password.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($rootScope, $state) {

    this.changePassword = () => {
        //Kiểm tra mật khẩu cũ
        if (this.password == $rootScope.student.password) 
        {
            //kiểm tra mật khẩu mới và xác nhận
            if (this.newPassword == this.reNewPassword) 
            {
                $rootScope.student.password = this.newPassword;
                alertHelper.simpleSuccess('Cập nhật mật khẩu mới thành công!', '', () => {
                    $state.go('profile');
                })

                console.log(students);
            }
            else
            {
                //thông báo mật khẩu xác nhận ko trùng khớp
                alertHelper.simpleError('Đã có lỗi sảy ra!', 'Mật khẩu mới và xác nhận mật khẩu không trùng khớp.');
            }
        }
        else
        {
            alertHelper.simpleError('Đã có lỗi sảy ra!', 'Mật khẩu cũ nhập vào không chính xác!');
        }
    }


}   