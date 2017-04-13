(function() {
    "use strict";

    angular
        .module('extendedSearch')
        .controller('RatingFilter', RatingFilter);

    function RatingFilter() {
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