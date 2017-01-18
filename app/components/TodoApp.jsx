let React = require("react");
let TodoList = require('TodoList');

let TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: "Walk the dog."
                },
                {
                    id: 2,
                    text: "Clean the yard."
                },
                {
                    id: 3,
                    text: "Feed the cat."
                },
                {
                    id: 4,
                    text: "Clean your room."
                }
            ]
        };
    },

    render: function() {
        let {todos} = this.state;

        return (
            <div>
                <TodoList todos={todos}/>
            </div>
        )
    }
});

module.exports = TodoApp;