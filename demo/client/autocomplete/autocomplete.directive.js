(function () {
    'use strict';
    var MaterialAutocomplete = function () {
        return {
            restrict: 'E',
            scope: {},
            bindToController : {
                inputName: '@acInputName',
                selectedItem : '=acSelectedItem',
                searchText: '=?acSearchText',
                displayProperty: '@acDisplayProperty',
                itemList:   '=?acItems',
                remoteMethod: '@?acRemoteMethod',
                itemChange:   '&?acSelectedItemChange',
                showInputName: '=?acShowInputName',
                placeHolder: '@?acPlaceHolder',
                dropdownItems:    '=?acDropdownItems',
                clearButton:      '=?acClearButton',
                inputMinlength:   '@acInputMinlength',
                minLength:        '=?acMinLength',
                autocompleteId: '@acAutocompleteId',
                isDisabled:'@?acIsDisabled',
                imageUrl:'=?acImageUrl'


            },
            replace: true,
            controller: 'materialAutocompleteCntrl',
            controllerAs: 'ac',
            templateUrl: 'autocomplete/views/autocomplete.html'
        };
    };

    angular.module('material.autocomplete')
        .directive('materialAutocomplete', [
            MaterialAutocomplete
        ]);
})();
