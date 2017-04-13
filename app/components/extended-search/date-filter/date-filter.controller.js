(function() {
    "use strict";

    angular
        .module('extendedSearch')
        .controller('DateFilter', DateFilter);
    
    function DateFilter($scope, $rootScope, dateTimeSrv) {
        var $ctrl = this;

        $ctrl.checked = true;
        $ctrl.date = new Date();
        $ctrl.today = new Date();

        $ctrl.getToggleLabel = function() {
            return $ctrl.checked ? 'ВКЛ' : 'ВЫКЛ';
        }

        $ctrl.changeToggleValue = function () {
            $ctrl.checked = !$ctrl.checked;
        }

        $scope.$watch(angular.bind($ctrl, function () {
            return $ctrl.date;
        }), function (newVal) {
            dateTimeSrv.setDateSelected(newVal);
            $rootScope.$broadcast('dateSelected', dateTimeSrv.getDateSelected());
        });

    }

})();