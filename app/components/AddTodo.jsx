let React = require('react');

let AddTodo = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();

        let text = this.refs.todoText.value;

        if (text.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(text);
        } else {
            this.refs.todoText.focus();
        }
    },

    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
                    <input className="text-center" type="text" ref="todoText"
                           placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;