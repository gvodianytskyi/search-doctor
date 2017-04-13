(function() {
    "use strict";

    angular
        .module('extendedSearch')
        .controller('ExperienceFilter', ExperienceFilter);

    ExperienceFilter.$inject = ['$scope'];

    function ExperienceFilter($scope) {
        var $ctrl = this;

        $ctrl.checked = true;

        $ctrl.getToggleLabel = function() {
            return $ctrl.checked ? 'ВКЛ' : 'ВЫКЛ';
        }

        $ctrl.changeToggleValue = function () {
            $ctrl.checked = !$ctrl.checked;
        }

        $ctrl.slider = {
            min: 3,
            options: {
                floor: 0,
                ceil: 20,
                showTicksValues: true,
                showSelectionBarEnd: true,
                disabled: false,
                translate: function(value) {
                    return 'от ' + value + ' лет';
                }
            }
        };

        $ctrl.refreshSlider = function () {
            $timeout(function () {
                $scope.$broadcast('rzSliderForceRender');
            });
        };
    }

})();