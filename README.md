# Jslizer Library Project

[![npm version](https://badge.fury.io/js/jslizer.svg)](https://badge.fury.io/js/jslizer)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Project overview
A library to perform automated form validation, api calls, form error bindings. All from json definitions. So that those pesky `if/else` checks for a set of data is no longer needed. Currently supports only Angular 1 and VueJS 2 is supported.

### Next set of project goals
1. Provide a default angular service and controller in core factory. Sample implementation can be found in `DefaultVueController` class.
2. Support for different types of payload like `application/json`, `multipart/form-data` content-type support.
3. Provide `Date` object support in core.
4. Provide `File` object support in core.
5. Provide `UUID` object support in core.
6. Provide `ChoiceField` object support in core.
7. Add success message binding support.
8. Add support for auto type conversion.
9. Add support custom validation method for primitive type properties.
10. Add support to download files from server.
11. Write ***Jslizer*** library usage documentation for `Angular 1` framework.
12. Write ***Jslizer*** library usage documentation for `VueJS 2` library.
13. Add support for schema definition inheritance. Same validations and properties re-usability, for example: address, phone number etc. And custom error message should be same. It means there should be 1 declaration of definitions and usage extends everywhere else.
14. Pre-defined schema property definition templates. That means a particular property definition template can be used over and over again by choosing to extend them or not.
15. Generate component for `VueJS 2`.
16. Generate HTML for `Angular 1` along with provided CSS class and in-line CSS definition.
17. Provide pagination support for listing apis.
18. Write test cases while using `Angular 1` framework.
19. Write test cases while using `VueJS 2` library.
20. Support `ReactJS 16.2.0` framework in ***Jslizer*** library.
21. Write test cases while using `ReactJS 16.2.0` framework.
22. Add support custom validation method for any type of property.
23. Error and success messages should be configurable from a web panel.
24. Schema should be browsable in a panel as a object tree.
25. Add pagination support in listing api calls.
26. Provide `Regex` object support in core.

### Build configurations
1. [Nodejs](https://nodejs.org/dist/latest-v8.x/docs/api/) `8.9.4`.
2. [NPM](https://docs.npmjs.com/) `5.6.0`.
3. [Webpack](https://webpack.js.org/concepts/configuration/) `3.11.0`.
4. Build output is in **ES5**.

### Currently supports
1. Raw javascript code.
2. [Vue](https://vuejs.org/v2/guide/) `2.5.13`.
3. [Angular 1](https://docs.angularjs.org/tutorial) `1.6.6`.

### Other alternative projects that inspired this repository
1. [Joi](https://github.com/hapijs/joi) by [The hapi.js node framework](https://github.com/hapijs/).
2. [Another JSON Schema Validator](https://github.com/epoberezkin/ajv) by [Evgeny Poberezkin](https://github.com/epoberezkin/).
3. [jsonschema](https://github.com/tdegrunt/jsonschema) by [Tom de Grunt](https://github.com/tdegrunt/).
4. [Schema Validation for JavaScript](https://github.com/Nijikokun/Validator) by [Nijiko Yonskai](https://github.com/Nijikokun/).
5. [validate.js](https://github.com/ansman/validate.js) by [Nicklas Ansman Giertz](https://github.com/ansman/).
6. [another-json-schema](https://github.com/nswbmw/another-json-schema) by [nswbmw](https://github.com/nswbmw).
7. [restful.js](https://github.com/marmelab/restful.js) by [marmelab](https://github.com/marmelab).
8. [Restangular](https://github.com/mgonto/restangular) by [Martin Gontovnikas
](https://github.com/mgonto).
9. [axios](https://github.com/axios/axios) by [axios](https://github.com/axios).
10. [SuperAgent](https://github.com/visionmedia/superagent) by [Sloth](https://github.com/visionmedia).
11. [Request - Simplified HTTP client](https://github.com/request/request) by [request](https://github.com/request).
