let React = require('react');

let Todo = React.createClass({
    render: function() {
        let {id, text, completed} = this.props;

        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" defaultChecked={completed}/>&nbsp;
                {text}
            </div>
        )
    }
});

module.exports = Todo;