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
                    text: 'Walk the cat'
                };

                let res = reducers.todosReducer(df([]), df(action));

                expect(res.length).toBe(1);
                expect(res[0].text).toEqual(action.text);
            });

            it('should toggle todo', () => {
                let action = {
                    type: 'TOGGLE_TODO',
                    id: 11
                };

                let todos = [
                    {
                        id: 11,
                        text: 'Test features',
                        completed: true,
                        createdAt: 1,
                        completedAt: 2
                    }
                ];

                let res = reducers.todosReducer(df(todos), df(action));

                expect(res[0].completed).toBe(false);
                expect(res[0].completedAt).toEqual(undefined);
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