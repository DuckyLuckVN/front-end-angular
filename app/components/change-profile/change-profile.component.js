import {alertHelper} from '../../modules/helper/alert.helper.js';

export const changeProfile = {
    templateUrl: './app/components/change-profile/change-profile.component.html',
    controller: controller,
    controllerAs: '$',
}

function controller($rootScope, $state) {

    this.$onInit = () => {
        this.student = angular.copy($rootScope.student);
        console.log(this.student)
    }
    this.updateProfile = () => {
        $rootScope.student = angular.copy(this.student);
        alertHelper.simpleSuccess('Cập nhật thông tin thành công!', '', () => {
            $state.go('profile');
        })
    }

}