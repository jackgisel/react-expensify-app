import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';
import { defaultFilters } from '../fixtures/filters';

test('should filter by text value', () => {
    const filters = {
        ...defaultFilters,
        text: 'e'
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1] ]);
});

test('should sort by start date', () => {
    const filters = {
        ...defaultFilters,
        startDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should sort by end date', () => {
    const filters = {
        ...defaultFilters,
        endDate: moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should sort by date', () => {
    const filters = {
        ...defaultFilters
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort by amount', () => {
    const filters = {
        ...defaultFilters, 
        sortBy: 'amount'
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});