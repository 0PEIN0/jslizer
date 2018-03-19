# Jslizer Library Project.

[![npm version](https://badge.fury.io/js/jslizer.svg)](https://badge.fury.io/js/jslizer)  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

### Project Overview
A library to perform automated form validation, api calls, form error bindings. All from json definitions. So that those pesky `if/else` checks for a set of data is no longer needed. Currently supports only Angular 1 and VueJS 2 is supported.

### Next set of project goals
1. Provide a default angular service in core factory.
2. Provide different types of form data upload like `application/json`, `multipart/form-data` content-type support.
3. Provide `Date` object support in core.
4. Provide `File` object support in core.
5. Add success message binding support.
6. Add support for auto type conversion.
7. Add support custom validation method for primitive type properties.
8. Add support to download files from server.
9. Write ***Jslizer*** library usage documentation for `Angular 1` framework.
10. Write ***Jslizer*** library usage documentation for `VueJS 2` library.
11. Add support for schema definition inheritance. Same validations and properties re-usability, for example: address, phone number etc. And custom error message should be same. It means there should be 1 declaration of definitions and usage extends everywhere else.
12. Pre-defined schema property definition templates. That means a particular property definition template can be used over and over again by choosing to extend them or not.
13. Generate component for `VueJS 2`.
14. Generate HTML for `Angular 1` along with provided CSS class and in-line CSS definition.
15. Provide pagination support for listing apis.
16. Write test cases while using `Angular 1` framework.
17. Write test cases while using `VueJS 2` library.
18. Support `ReactJS 16.2.0` framework in ***Jslizer*** library.
19. Write test cases while using `ReactJS 16.2.0` framework.
20. Add support custom validation method for any type of property.
21. Error and success messages should be configurable from a web panel.
22. Schema should be browsable in a panel as a object tree.

### Build Configurations
1. [Nodejs](https://nodejs.org/dist/latest-v8.x/docs/api/) `8.9.4`.
2. [NPM](https://docs.npmjs.com/) `5.6.0`.
3. [Webpack](https://webpack.js.org/concepts/configuration/) `3.11.0`.
4. Build output in **ES5**.

### Currently Supports
1. Raw javascript code.
2. [Vue](https://vuejs.org/v2/guide/) `2.5.13`.
3. [Angular 1](https://docs.angularjs.org/tutorial) `1.6.6`.

### Alternative Projects
1. [Joi](https://github.com/hapijs/joi) by [The hapi.js node framework](https://github.com/hapijs/)
2. [Another JSON Schema Validator](https://github.com/epoberezkin/ajv) by [Evgeny Poberezkin](https://github.com/epoberezkin/)
3. [jsonschema](https://github.com/tdegrunt/jsonschema) by [Tom de Grunt](https://github.com/tdegrunt/)
4. [Schema Validation for JavaScript](https://github.com/Nijikokun/Validator) by [Nijiko Yonskai](https://github.com/Nijikokun/)
5. [validate.js](https://github.com/ansman/validate.js) by [Nicklas Ansman Giertz](https://github.com/ansman/)
