let React = require('react');
let ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp');

let store = require('configureStore').configure();

store.subscribe(() => {
	console.log("New State", store.getState());
});

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
		<TodoApp/>
	</Provider>,
    document.getElementById('app')
);
