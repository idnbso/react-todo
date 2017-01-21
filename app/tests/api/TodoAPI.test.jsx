let expect = require('expect');

let TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {

    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];

            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            let badTodos = {a: 'b'};

            TodoAPI.setTodos(badTodos);

            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad local storage data', () => {
            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual([]);
        });

        it('should return todo if valid array is in local storage', () => {
            let todos = [{
                id: 23,
                test: 'test all files',
                completed: false
            }];

            localStorage.setItem('todos', JSON.stringify(todos));

            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        let todos = [{
            id: 1,
            text: 'Some text here',
            completed: true
        }, {
            id: 2,
            text: 'Other text here',
            completed: false
        }, {
            id: 3,
            text: 'Some text here',
            completed: true
        }];

        it('should return all items if showCompleted is true', () => {
            let showCompleted = true;
            let searchText = '';

            let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            expect(filteredTodos.length).toBe(3);
        });

        it('should return only non-completed items if showCompleted is false', () => {
            let showCompleted = false;
            let searchText = '';

            let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            expect(filteredTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            let showCompleted = true;
            let searchText = '';

            let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by search text which not empty', () => {
            let showCompleted = true;
            let searchText = 'Some';

            let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if searchText is empty', () => {
            let showCompleted = true;
            let searchText = '';

            let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

            expect(filteredTodos.length).toBe(3);
        });
    });
});