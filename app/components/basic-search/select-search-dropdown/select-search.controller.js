(function() {
    "use strict";

    angular
        .module("basicSearch")
        .controller("SelectSearch", SelectSearch);

    SelectSearch.$inject = ['$scope', 'optionsSrv'];

    function SelectSearch($scope, optionsSrv) {
        let $ctrl = this;

        $ctrl.active = false;

        $ctrl.changeActive = function () {
            $ctrl.active = !$ctrl.active;
        }

        $ctrl.setSelected = function(option) {
            optionsSrv.setSearchSelected(option);
            optionsSrv.setSpecialtyGreyed(true);
        }

        $ctrl.getSelected = function () {
            return optionsSrv.getSearchSelected();
        }
        
        $ctrl.getOptions = function () {
            return optionsSrv.getSelectSearchOptions();
        }
    }

})();