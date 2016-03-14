(function(module, undefined) {
    var directiveName = 'notepad';
    module.directive(directiveName, directive);

    directive.$inject = ['notesFactory'];
    function directive(notesFactory) {
        return {
            restrict: 'AE',     //Attribute or Element
            scope: {},          //Isolated scope
            templateUrl: 'templates/notepad.html',
            link: function(scope, elem, attrs) {
                //init
                var editor = elem.find('#editor');
                
                scope.notes = notesFactory.getAll(); // load notes

                editor.bind('keyup keydown', function() {
                    scope.noteText = editor.text().trim();
                });

                //Edit
                scope.openEditor = function(index) {
                    if (index !== undefined) {
                        scope.noteText = notesFactory.get(index).content;
                        scope.index = index;
                    } else {
                        scope.noteText = undefined;
                    }
                };
            },
        };
    };

})(window.angular.module('noteApp'))