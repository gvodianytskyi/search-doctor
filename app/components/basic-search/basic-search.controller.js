(function() {
    "use strict";

    angular
        .module('basicSearch')
        .controller('BasicSearch', BasicSearch);

    function BasicSearch($rootScope, stateRouter) {
        var $ctrl = this;
        // $ctrl.navigate = stateRouter.navigate;
        $ctrl.showExtendedSearch = function () {
            $rootScope.$broadcast('visible', true);
        }
    }

})();