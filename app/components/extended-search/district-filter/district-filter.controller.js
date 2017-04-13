(function() {
    "use strict";

    angular
        .module('extendedSearch')
        .controller('DistrictFilter', DistrictFilter);

    function DistrictFilter() {
        var $ctrl = this;

        $ctrl.checked = true;

        $ctrl.getToggleLabel = function() {
            return $ctrl.checked ? 'ВКЛ' : 'ВЫКЛ';
        }

        $ctrl.changeToggleValue = function () {
            $ctrl.checked = !$ctrl.checked;
        }
    }

})();