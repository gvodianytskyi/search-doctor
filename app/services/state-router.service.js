(function() {
    "use strict";

    angular.module("services")
        .service("stateRouter", stateRouter);

    function stateRouter($state) {
        this.navigate = function(toState) {
            $state.go(toState);
        }
    }

})();