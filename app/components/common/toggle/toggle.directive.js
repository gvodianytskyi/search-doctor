(function () {
    'use strict';
    angular.module('commonComponents')
        .directive('gvToggle', gvToggle);

    function gvToggle() {
        return {
            templateUrl: 'components/common/toggle/toggle.html',
            controller: '@',
            controllerAs: '$ctrl'
        }
    }

})();