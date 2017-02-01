let React = require('react');
let {connect} = require('react-redux');
let actions = require('actions');

export let AddTodo = React.createClass({
    onSubmit: function(e) {
        let {dispatch} = this.props;
        e.preventDefault();

        let text = this.refs.todoText.value;

        if (text.length > 0) {
            this.refs.todoText.value = '';
            dispatch(actions.startAddTodo(text));
        } else {
            this.refs.todoText.focus();
        }
    },

    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.onSubmit} className="add-todo-form">
                    <input className="text-center" type="text" ref="todoText"
                           placeholder="What do you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        )
    }
});

export default connect()(AddTodo);