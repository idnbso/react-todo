let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let {TodoSearch}= require('TodoSearch');

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should dispatch SET_SEARCH_TEXT on input change', () => {
        let searchText = 'Dog';
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText
        };
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.searchText.value = action.searchText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox is checked', () => {
        let showCompleted = true;
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);

        todoSearch.refs.showCompleted.checked = showCompleted;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(action);
    });
});