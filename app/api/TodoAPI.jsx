let $ = require('jquery');

module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            // the stored stringTodos is not a valid array
        }

        return todos && $.inArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText) {
        let filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter(todo => {
            return !todo.completed || showCompleted;
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter(todo => {
            let text = todo.text.toLowerCase();
            return !searchText.length || text.indexOf(searchText.toLowerCase()) > -1;
        });

        // Sort todos with non-completed first
        filteredTodos = filteredTodos.sort((todoA, todoB) => {
            return todoA.completed && !todoB.completed ? 1 : -1;
        });

        return filteredTodos;
    }
};