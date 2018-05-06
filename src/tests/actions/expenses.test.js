import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should return a removed expense action', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should return an edited expense action', () => {
    const action = editExpense('123abc', { amount: 100 });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount: 100
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Coffee',
        note:'big coffee date',
        amount:2.50,
        createdAt:123123
      }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with dafault values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});