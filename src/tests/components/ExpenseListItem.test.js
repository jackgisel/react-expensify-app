import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expense from '../fixtures/expense';

test('should render ExpenseListItem with expense fixture', () => {
    const wrapper = shallow(<ExpenseListItem {...expense} />)
    expect(wrapper).toMatchSnapshot();
});