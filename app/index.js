(function() {
    "use strict";

    angular.module('app', 
            ['rzModule',
                'ngSanitize', 
                'moment-picker', 
                'ui.router', 
                'services', 
                'components'])
        .config(['momentPickerProvider', function (momentPickerProvider) {
            momentPickerProvider.options({
                locale: 'ru',
                minutesStep: 15,
            });
        }])
        .config(configAppRouter);

    angular.element(document).ready(() => {
        angular.bootstrap(document, ["app"]);
    });

    function configAppRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            // .state("home", {
            //     url: "/",
            //     resolve: {
            //         tasks: function (tasksSrv) {
            //             return tasksSrv.getAllTasks();
            //         }
            //     },
            //     nav: 1,
            //     template: "<task-list tasks='$resolve.tasks'></task-list>" //component
            // })
            .state("extendedSearch", {
                // url: "/extended-search",
                template: "<extended-search></extended-search>"
            })
    }

})();

