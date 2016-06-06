/**
 * Provider to setup the default
 * module options for the directive
 */
.provider('contentEditable', function () {

  var defaults = {
    editableClass: 'editable',
    keyBindings: true, // default true for key shortcuts
    singleLine: false,
    focusSelect: true, // default on focus select all text inside
    renderHtml: false,
    editCallback: false
  }

  this.configure = function (options) {
    return angular.extend(defaults, options);
  }

  this.$get = function () {
    return defaults;
  }

})