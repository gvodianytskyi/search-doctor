(function() {

    angular
        .module("services")
        .factory("specialtiesSrv", specialtiesSrv);

    function specialtiesSrv($http, $q) {
        return {
            getSpecialties,
            getDirections
        };

        function getDirections() {
            return $http({
                method: "GET",
                url: "./data/directions.json"
            })
                .then(sendResponseData)
                .catch(sendResponseError);
        }

        function getSpecialties() {
            return $http({
                method: "GET",
                url: "./data/specialties.json"
            })
                .then(sendResponseData)
                .catch(sendResponseError);
        }

        function sendResponseData(response) {
            return response.data;
        }

        function sendResponseError(response) {
            return $q.reject(`Error retrieving data. (HTTP status:  ${response.status} )`);
        }
    }

})();