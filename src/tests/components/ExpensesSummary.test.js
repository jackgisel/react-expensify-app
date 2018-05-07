import React from 'react';
import { shallow } from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={5} expensesTotal={23235}/>);
    expect(wrapper).toMatchSnapshot();
});