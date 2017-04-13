(function() {
    'use strict';

    angular
        .module("timeFilter")
        .directive("timeFilter", timeFilter);

    function timeFilter() {
        return {
            controller: "TimeFilter",
            controllerAs: "$ctrl",
            templateUrl: "components/extended-search/time-filter/time-filter.html"
            // require: ['ngModel', 'timeFilter'],
            // link: function (scope, iElement, iAttrs, controllers) {
            //     var ngModelController = controllers[0];
            //     var timeFilterController = controllers[1];
            //     timeFilterController.setNgModelController(ngModelController);
            // }
        }
    }

})();