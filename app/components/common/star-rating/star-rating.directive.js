(function() {

    angular
        .module("commonComponents")
        .directive("starRating", starRating);

    function starRating() {
        return {
            templateUrl: 'components/common/star-rating/star-rating.html',
            controller: 'StarRating',
            controllerAs: '$ctrl',
            bindToController: true,
            scope: {
                ratingValue: '<',
                max: '<'
            },
            link: function (scope, elem, attrs, ctrl) {
                ctrl.toggle = function (index) {
                    ctrl.ratingValue = index + 1;
                };

                var updateStars = function () {
                    ctrl.stars = [];
                    for (var i = 0; i < ctrl.max; i++) {
                        ctrl.stars.push({
                            filled: i < ctrl.ratingValue
                        });
                    }
                };

                scope.$watch(() => ctrl.ratingValue, function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        }
    }
})();