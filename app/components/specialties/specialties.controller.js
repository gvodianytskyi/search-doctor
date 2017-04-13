(function() {
    "use strict";

    angular
        .module('components')
        .controller('Specialties', Specialties);

    Specialties.$inject = ['specialtiesSrv'];

    function Specialties(specialtiesSrv) {
        var $ctrl = this;

        specialtiesSrv.getSpecialties()
            .then((specialties) => {
                $ctrl.specialties = specialties;
                $ctrl.specialtiesAmount = Object.keys($ctrl.specialties).length;
            }).catch(getDataError);

        specialtiesSrv.getDirections()
            .then((directions) => {
                $ctrl.directions = directions;
                $ctrl.directionsAmount = Object.keys($ctrl.directions).length;
            })
            .catch(getDataError);

        function getDataError(errorMsg) {
            console.log("Error message: " + errorMsg);
        }
    }

})();