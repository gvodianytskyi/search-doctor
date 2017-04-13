(function() {
    "use strict";

    angular
        .module('extendedSearch')
        .controller('PriceFilter', PriceFilter);

    PriceFilter.$inject = ['$scope'];

    function PriceFilter($scope) {
        var $ctrl = this;

        $ctrl.checked = true;

        $ctrl.getToggleLabel = function() {
            return $ctrl.checked ? 'ВКЛ' : 'ВЫКЛ';
        }

        $ctrl.changeToggleValue = function () {
            $ctrl.checked = !$ctrl.checked;
        }

        $ctrl.slider = {
            min: 300,
            max: 800,
            options: {
                floor: 0,
                ceil: 1500,
                minRange: 50,
                step: 50,
                pushRange: true,
                showTicksValues: true,
                translate: function(value) {
                    return value + ' ₴';
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