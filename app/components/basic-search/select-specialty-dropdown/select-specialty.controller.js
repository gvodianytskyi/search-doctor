(function() {
    "use strict";

    angular
        .module("basicSearch")
        .controller("SelectSpecialty", SelectSpecialty);

    SelectSpecialty.$inject = ['optionsSrv'];

    function SelectSpecialty(optionsSrv) {
        let $ctrl = this;

        $ctrl.active = false;

        $ctrl.changeActive = function () {
            $ctrl.active = !$ctrl.active;
        }

        $ctrl.getGreyed = function () {
            return optionsSrv.getSpecialtyGreyed();
        }

        $ctrl.setSelected = function(option) {
            optionsSrv.setSpecialtySelected(option);
            optionsSrv.setSpecialtyGreyed(false);
            $ctrl.greyed = false;
        }

        $ctrl.getSelected = function () {
            return optionsSrv.getSpecialtySelected();
        }

        $ctrl.getOptions = function () {
            return optionsSrv.getSpecialtyOptions();
        }
    }

})();