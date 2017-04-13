(function() {

    angular
        .module("services")
        .factory("optionsSrv", optionsSrv);

    function optionsSrv() {

        var titles = {
            'Поиск врача' : 'Введите специальность врача',
            'Поиск клиники' : 'Введите направление клиники'
        };

        var options = {
            'Поиск врача' : [
                'Терапевт',
                'Гастроэнтеролог',
                'ЛОР'
            ],
            'Поиск клиники' : [
                'Стоматология',
                'Поликлиника',
                'Частная клиника'
            ]
        };

        var districtOptions = [
            'Лукьяновская',
            'Золотые ворота',
            'Берестейская',
            'Крещатик',
            'Контрактовая площадь',
        ];

        var timeFromOptions = (function () {
            let result = [];
            for (var i = 8; i <= 22; i++) {
                result.push(i);
            }
            return result;
        })();

        var timeToOptions = (function () {
            let result = [];
            for (var i = 9; i <= 23; i++) {
                result.push(i);
            }
            return result;
        })();

        var searchSelected = Object.keys(options)[0];
        var specialtySelected = titles[searchSelected];
        var districtSelected = 'Введите район или метро';
        var timeFromSelected = timeFromOptions[0];
        var timeToSelected = timeToOptions[timeToOptions.length - 1];
        var specialtyGreyed = true;

        return {
            getSelectSearchOptions,
            getSpecialtyOptions,
            getDistrictOptions,
            getTimeFromOptions,
            getTimeToOptions,
            getSearchSelected,
            getSpecialtySelected,
            getDistrictSelected,
            getTimeFromSelected,
            getTimeToSelected,
            getSpecialtyGreyed,
            setSearchSelected,
            setSpecialtySelected,
            setDistrictSelected,
            setTimeFromSelected,
            setTimeToSelected,
            setSpecialtyGreyed
        };

        function getSelectSearchOptions() {
            return Object.keys(options);
        }

        function getSpecialtyOptions() {
            return options[searchSelected];
        }

        function getDistrictOptions() {
            return districtOptions;
        }

        function getTimeFromOptions() {
            return timeFromOptions;//.map(item => item + ':00');
        }

        function getTimeFromSelected() {
            return timeFromSelected;
        }
        
        function getTimeToSelected() {
            return timeToSelected;
        }

        function getTimeToOptions() {
            return timeToOptions;
        }

        function getSearchSelected() {
            return searchSelected;
        }

        function getSpecialtySelected() {
            return specialtySelected;
        }

        function getDistrictSelected() {
            return districtSelected;
        }

        function getSpecialtyGreyed() {
            return specialtyGreyed;
        }

        function setSpecialtyGreyed(value) {
            specialtyGreyed = value;
        }

        function setSearchSelected(selected) {
            searchSelected = selected;
            specialtySelected = titles[searchSelected];

        }

        function setSpecialtySelected(selected) {
            specialtySelected = selected;
        }

        function setDistrictSelected(selected) {
            districtSelected = selected;
        }

        function setTimeFromSelected(selected) {
            timeFromSelected = selected;
        }

        function setTimeToSelected(selected) {
            timeToSelected = selected;
        }

        function splitOnRows(array, columns) {
            let result = [];
            for (let i = 0; i < array.length; i = i+columns) {
                let row = (function() {
                    let arr = [];
                    for (let j = 0; j < columns; j++) {
                        if (array[i+j]) {
                            arr.push(array[i+j]);
                        }
                    }
                    return arr;
                })();
                result.push(row);
            }
            return result;
        }
    }

})();