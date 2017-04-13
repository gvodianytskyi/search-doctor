(function() {
    "use strict";

    angular
        .module('extendedSearch')
        .controller('ExtendedSearch', ExtendedSearch);

    function ExtendedSearch($scope) {
        var $ctrl = this;

        $ctrl.visible = true;

        $ctrl.hide = function() {
            $ctrl.visible = false;
        };

        $scope.$on('visible', function (evt, msg) {
            $ctrl.visible = msg;
        });
    }

})();