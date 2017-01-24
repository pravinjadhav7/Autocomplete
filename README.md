# Autocomplete
============
A simple AngularJS directive that allows you create autocomplete input text that list of the data either from a server or local variable


# installation 
============
`bower install material.autocomplte --save`
Or
`npm install material.autocomplte --save`


### Getting Started
Download the code, and include the autocomplete.min.js file in your page. Then add the material.autocomplte module to your Angular App file
Eg.

```html
 var module = angular.module('testing', ['material.autocomplete']);
```

### Usage 
```html
      <material-autocomplete
        ac-input-name="Products"
        ac-items="test.productList"
        ac-selected-item="test.dataResultprod"
        ac-display-property="name"
        ac-selected-item-change="test.fetchProductList(test.productList)"
        ac-search-text="test.searchTextProduct"
        ac-remote-method="test.fetchDataFromServer(test.searchTextProduct)"
        ac-place-holder=" &#128269; &nbsp; &nbsp; Search the items here...."
        ac-input-minlength="2">
      </material-autocomplete> 
```
### Description of attributes
| Parameter | Type | Description | Binding |
| :------------- |:-------------| :----- | :-----| 
| ac-items | `expression` | An expression in the format of `item in items` to iterate over matches for your search. | = | 
|ac-input-name|`string`|The name attribute given to the input element to be used with FormControlle.|@|
|ac-selected-item|`object`| A model to be bind which is selected item.|=|
|ac-display-property|`string`| A list of the item diaplay use property name |@|
|ac-selected-item-change|`expression`|An expression to be run each time a new item is selected.|&|
|ac-search-text|`expression`| A model to bind the search query text to |=|
|ac-remote-method|`expression`|Handle the searchText result and provide the result|@|
|ac-place-holder|`string`|Secondary Placeholder text that will display after label move|@|
|ac-input-minlength|`number`| The minimum length for the input's value for validation|@|
|ac-show-input-name|`string`|Input text for the hiding secondary palceholder|=|
|ac-dropdown-items|`expression`|For the calculate dropdown height |=|
|ac-clear-button|`expression`|Clear the inputtext if selected value is there|=|
|ac-min-length|`number`|Specifies the minimum length of text before autocomplete will make suggestions|=|



### Running test suite

In order to run tests clone repository and run following commands within
repo's directory:

```
1. npm install
2. bower install
3. grunt
```



# Demo 
============
