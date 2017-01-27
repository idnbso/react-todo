let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let actions = require('actions');
let store = require('configureStore').configure();

store.subscribe(() => {
	console.log("New State", store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<TodoApp/>,
    document.getElementById('app')
);
