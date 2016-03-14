(function(module, undefined) {
    var directiveName = 'notepad';
    module.directive(directiveName, directive);

    directive.$inject = ['notesFactory'];
    function directive(notesFactory) {
        return {
            restrict: 'AE',     //Attribute or Element
            scope: {},          //Isolated scope
            link: function(scope, elem, attrs) {
                //empty
            },
            templateUrl: 'templates/notepad.html'
        };
    };

})(window.angular.module('noteApp'))