(function() {
    "use strict";

    angular
        .module('timeFilter')
        .controller('TimeTo', TimeTo);

    function TimeTo($scope, dateTimeSrv, optionsSrv) {
        var $ctrl = this;
        $ctrl.active = false;
        $ctrl.ngModelController = null;
        $ctrl.date;
        $ctrl.time;

        $ctrl.getSelected = function () {
            return optionsSrv.getTimeToSelected();
        };

        $ctrl.getDateSelected = function () {
            return dateTimeSrv.getDateSelected();
        }

        $ctrl.setSelected = function(option) {
            optionsSrv.setTimeToSelected(option);
            // if (option <= optionsSrv.getTimeFromSelected()) {
            //     optionsSrv.setTimeFromSelected(option - 1);
            // }
            $ctrl.ngModelController.$setViewValue(option + ':00');
        }

        $ctrl.changeActive = function () {
            $ctrl.active = !$ctrl.active;
        }

        $ctrl.getOptions = function () {
            return optionsSrv.getTimeToOptions();
        }

        $ctrl.setNgModelController = function (newNgModelController) {
            $ctrl.ngModelController = newNgModelController;

            $ctrl.ngModelController.$formatters.push(function (modelValue) {
                $ctrl.date = ("0" + modelValue.getDate()).slice(-2) +
                    '/' +
                    ("0" + (modelValue.getMonth() + 1)).slice(-2) +
                    '/' +
                    modelValue.getFullYear();
                return modelValue.getHours() + ':00';
            });

            $ctrl.ngModelController.$render = function () {
                $ctrl.time = $ctrl.ngModelController.$viewValue;
            };

            $scope.$watch(() => $ctrl.time, function(newVal) {
                $ctrl.ngModelController.$setViewValue(newVal);
            });

            $ctrl.ngModelController.$parsers.push(function(viewValue) {
                $ctrl.time = viewValue;
                var dateTokens = $ctrl.date.split('/');
                var date = new Date(Number(dateTokens[2]),
                    Number(dateTokens[1]) - 1,
                    Number(dateTokens[0]));
                date.setHours($ctrl.time.split(':')[0]);
                return date;
            });
        }
    }

})();