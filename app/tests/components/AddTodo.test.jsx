let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO when valid todo text entered', () => {
        let todoText = 'Check mail';
        let action = {
            type: 'ADD_TODO',
            text: todoText
        };
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO when invalid text input entered', () => {
        let todoText = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});