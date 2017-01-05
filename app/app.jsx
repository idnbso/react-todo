let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<p>Boilerplate 3 Project</p>,
    document.getElementById('app')
);
