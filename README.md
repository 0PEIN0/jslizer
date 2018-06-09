# Jslizer Library Project

[![npm version](https://badge.fury.io/js/jslizer.svg)](https://badge.fury.io/js/jslizer)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Project overview
A library to perform automated form validation, api calls, form error bindings. All from json definitions. So that those pesky `if/else` checks for a set of data is no longer needed. Currently supports only Angular 1 and VueJS 2 is supported. Basically this library combines the functionality of [Joi](https://github.com/hapijs/joi) and [axios](https://github.com/axios/axios) libraries in seamless manner.

### Next set of project goals
- [x] Provide a default angular service and controller in core factory. Sample implementation can be found in `DefaultVueController` class.
- [x] Support `ReactJS 16.2.0` framework in ***Jslizer*** library.
- [ ] Support for different types of payload like `application/json`, `multipart/form-data` content-type support.
- [ ] Provide `Date` object support in core.
- [ ] Provide `File` object support in core.
- [ ] Provide `UUID` object support in core.
- [ ] Provide `ChoiceField` object support in core.
- [ ] Add success message binding support.
- [ ] Add support for auto type conversion.
- [ ] Add support custom validation method for primitive type properties.
- [ ] Add support to download files from server.
- [ ]  Write ***Jslizer*** library usage documentation for `Angular 1` framework.
- [ ] Write ***Jslizer*** library usage documentation for `VueJS 2` library.
- [ ] Add support for schema definition inheritance. Same validations and properties re-usability, for example: address, phone number etc. And custom error message should be same. It means there should be 1 declaration of definitions and usage extends everywhere else.
- [ ] Pre-defined schema property definition templates. That means a particular property definition template can be used over and over again by choosing to extend them or not.
- [ ] Generate component for `VueJS 2`.
- [ ] Generate HTML for `Angular 1` along with provided CSS class and in-line CSS definition.
- [ ] Provide pagination support for listing apis.
- [ ] Write test cases while using `Angular 1` framework.
- [ ] Write test cases while using `VueJS 2` library.
- [ ] Write test cases while using `ReactJS 16.2.0` framework.
- [ ] Add support custom validation method for any type of property.
- [ ] Error and success messages should be configurable from a web panel.
- [ ] Schema should be browsable in a panel as a object tree.
- [ ] Add pagination support in listing api calls.
- [ ] Provide `Regex` object support in core.

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
2. [axios](https://github.com/axios/axios) by [axios](https://github.com/axios).
3. [Another JSON Schema Validator](https://github.com/epoberezkin/ajv) by [Evgeny Poberezkin](https://github.com/epoberezkin/).
4. [jsonschema](https://github.com/tdegrunt/jsonschema) by [Tom de Grunt](https://github.com/tdegrunt/).
5. [Schema Validation for JavaScript](https://github.com/Nijikokun/Validator) by [Nijiko Yonskai](https://github.com/Nijikokun/).
6. [validate.js](https://github.com/ansman/validate.js) by [Nicklas Ansman Giertz](https://github.com/ansman/).
7. [another-json-schema](https://github.com/nswbmw/another-json-schema) by [nswbmw](https://github.com/nswbmw).
8. [restful.js](https://github.com/marmelab/restful.js) by [marmelab](https://github.com/marmelab).
9. [Restangular](https://github.com/mgonto/restangular) by [Martin Gontovnikas
](https://github.com/mgonto).
10. [SuperAgent](https://github.com/visionmedia/superagent) by [Sloth](https://github.com/visionmedia).
11. [Request - Simplified HTTP client](https://github.com/request/request) by [request](https://github.com/request).
