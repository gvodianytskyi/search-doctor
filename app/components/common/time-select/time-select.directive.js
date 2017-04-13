(function() {

    angular
        .module("commonComponents")
        .directive("timeSelect", timeSelect);

    function timeSelect() {
        return {
            scope: {},
            restrict: 'A',
            templateUrl: "components/common/time-select/time-select.html",
            controller : "@",
            controllerAs: '$ctrl',
            require: ['timeSelect', 'ngModel'],
            transclude: true,
            link: function(scope, element, attr, controllers){
                var ctrl = controllers[0];
                var ngModelController = controllers[1];
                ctrl.setNgModelController(ngModelController);
                element.on('click', function () {
                    if (!ctrl.active) { //dropdown activation
                        $(document).bind('click', function(event){
                            if (element[0].contains(event.target)) { //click on dropdown to make it active
                                scope.$apply(function(){
                                    ctrl.changeActive();
                                });
                            } else { //click outside active dropdown
                                scope.$apply(function(){
                                    ctrl.changeActive();
                                    $(document).unbind('click');
                                });
                            }
                        });
                    } else { //click on active dropdown to deactivate it
                        scope.$apply(function(){
                            ctrl.changeActive();
                            $(document).unbind('click');
                        });
                    }
                });
            }
        }
    };
})();