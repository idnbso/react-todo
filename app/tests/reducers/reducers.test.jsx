let expect = require('expect');
let df = require('deep-freeze-strict');

let reducers = require('reducers');

describe('Reduces', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };

            let res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });

        describe('showCompletedReducer', () => {
            it('should toggle showCompleted', () => {
                let action = {
                    type: 'TOGGLE_SHOW_COMPLETED'
                };
                let currentState = false;

                let res = reducers.showCompletedReducer(df(currentState), df(action));

                expect(res).toEqual(!currentState);
            });
        });

        describe('todoReducer', () => {
            it('should add new todo', () => {
                let action = {
                    type: 'ADD_TODO',
                    todo: {
                        id: 123,
                        text: 'Something to do',
                        completed: false,
                        createdAt: 1234
                    }
                };

                let res = reducers.todosReducer(df([]), df(action));

                expect(res.length).toBe(1);
                expect(res[0]).toEqual(action.todo);
            });

            it('should update todo', () => {
                let todos = [
                    {
                        id: 11,
                        text: 'Test features',
                        completed: true,
                        createdAt: 1,
                        completedAt: 2
                    }
                ];

                let updates = {
                    completed: false,
                    completedAt: undefined
                };

                let action = {
                    type: 'UPDATE_TODO',
                    id: todos[0].id,
                    updates
                };

                let res = reducers.todosReducer(df(todos), df(action));

                expect(res[0].completed).toBe(updates.completed);
                expect(res[0].completedAt).toEqual(updates.completedAt);
                expect(res[0].text).toEqual(todos[0].text);
            });

            it('should add existing todos', () => {
                let todos = [{
                    id: 111,
                    text: 'anything',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 33000
                }];
                let action = {
                    type: 'ADD_TODOS',
                    todos
                };
                let res = reducers.todosReducer(df([]), df(action));

                expect(res.length).toEqual(1);
                expect(res[0]).toEqual(todos[0]);
            });
        });
    });
});