(function() {

    angular
        .module("services")
        .factory("dateTimeSrv", dateTimeSrv);

    function dateTimeSrv() {

        let dateSelected = new Date();

        return {
            getDateSelected,
            setDateSelected,
            addHours
        };

        function getDateSelected() {
            return dateSelected;
        }

        function setDateSelected(value) {
            dateSelected = new Date(moment(value, "DD/MM/YYYY"));
        }

        function addHours(date, hours) {
            var result = new Date(date);
            result.setTime(result.getTime() + (hours*60*60*1000));
            return result;
        }
    }

})();