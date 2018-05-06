import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import expense from '../fixtures/expense';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id });
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id', () => {
    const state = expensesReducer(expenses, { type: 'REMOVE_EXPENSE', id: '123' });
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '1', updates: { description: 'hydroflask' } });
    expect(state[0].description).toEqual('hydroflask');
});

test('should not edit an expense', () => {
    const state = expensesReducer(expenses, { type: 'EDIT_EXPENSE', id: '5', updates: { description: 'hydroflask' } });
    expect(state).toEqual(expenses);
})