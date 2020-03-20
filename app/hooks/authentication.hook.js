export let authentication = ($transitions, $rootScope) => {
    $transitions.onStart({to: (state) => state.data && state.data.requireAuth}, (trans) => {
        if ($rootScope.student == null) {
            return trans.router.stateService.target('login');
        }
    });
}

export let authenticationWhenLogin = ($transitions, $rootScope) => {
    $transitions.onStart({to: (state) => state.data && state.data.blockWhenAuth}, (trans) => {
        if ($rootScope.student != null) {
            return trans.router.stateService.target('profile');
        }
    });
}