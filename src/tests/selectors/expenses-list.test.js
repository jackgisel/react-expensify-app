import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-list';

test('should return 0 if no expenses', () => {
    const result = selectExpensesTotal([ ]);
    expect(result).toEqual(0);
});

test('should return a single expense total', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toEqual(expenses[0].amount);
});

test('should return a multiple expenses total', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(20145);
});