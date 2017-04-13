(function() {

    angular
        .module("commonComponents")
        .directive("gvDropdown", gvDropdown);

        function gvDropdown() {
            return {
                scope: {
                    // selectDistrict: '<',
                    // selectSpecialty: '<',
                    greyed: '<'
                },
                bindToController: true,
                restrict: 'A',
                templateUrl: "components/common/dropdown/dropdown.html",
                controller : "@",
                controllerAs: '$ctrl',
                transclude: true,
                link: function(scope, element, attr, ctrl){
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