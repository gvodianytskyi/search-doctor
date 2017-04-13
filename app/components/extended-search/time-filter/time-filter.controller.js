(function() {
    "use strict";

    angular
        .module('timeFilter')
        .controller('TimeFilter', TimeFilter);

    function TimeFilter($scope, dateTimeSrv, optionsSrv) {
        var $ctrl = this;
        
        $ctrl.checked = true;

        init();

        function init() {
            $ctrl.timeFrom = new Date(dateTimeSrv.getDateSelected());
            $ctrl.timeFrom.setHours(optionsSrv.getTimeFromSelected());
            $ctrl.timeTo = new Date(dateTimeSrv.getDateSelected());
            $ctrl.timeTo.setHours(optionsSrv.getTimeToSelected());
        }

        $ctrl.getToggleLabel = function() {
            return $ctrl.checked ? 'ВКЛ' : 'ВЫКЛ';
        };

        $ctrl.changeToggleValue = function() {
            $ctrl.checked = !$ctrl.checked;
        };

        $scope.$on('dateSelected', function (evt, msg) {
            init();
        });
    }

})();