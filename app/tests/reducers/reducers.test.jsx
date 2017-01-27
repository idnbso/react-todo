let expect = require('expect');
let reducers = require('reducers');
let df = require('deep-freeze-strict');

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

        it('should toggle showCompleted', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            let currentState = false;

            let res = reducers.showCompletedReducer(df(currentState), df(action));

            expect(res).toEqual(!currentState);
        });
    });
});