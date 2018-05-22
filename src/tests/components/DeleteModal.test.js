import React from 'react';
import { shallow } from 'enzyme';
import DeleteModal from '../../components/DeleteModal';
import expense from '../fixtures/expense';

let wrapper, onCancel, onRemove;

beforeEach(() => {
    onCancel = jest.fn();
    onRemove = jest.fn();

    wrapper = shallow(<DeleteModal
        showModal={true} 
        handleClearSelected={onRemove}
        handleCancel={onCancel}
        expenseTitle={expense.description}
        expenseAmount={expense.amount} />);
});

test('should handle delete', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(onRemove).toHaveBeenCalled();
});

test('should handle cancel', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(onCancel).toHaveBeenCalled();
});