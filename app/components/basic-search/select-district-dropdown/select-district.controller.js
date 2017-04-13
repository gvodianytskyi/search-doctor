(function() {
    "use strict";

    angular
        .module("basicSearch")
        .controller("SelectDistrict", SelectDistrict);

    SelectDistrict.$inject = ['optionsSrv'];

    function SelectDistrict(optionsSrv) {
        let $ctrl = this;

        $ctrl.active = false;

        $ctrl.changeActive = function () {
            $ctrl.active = !$ctrl.active;
        }

        $ctrl.setSelected = function(option) {
            optionsSrv.setDistrictSelected(option);
            $ctrl.greyed = false;
        }

        $ctrl.getGreyed = function () {
            return $ctrl.greyed;
        }

        $ctrl.getSelected = function () {
            return optionsSrv.getDistrictSelected();
        }

        $ctrl.getOptions = function () {
            return optionsSrv.getDistrictOptions();
        }
    }

})();