import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header component', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should call start logout on button click', () => {
    const mockLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={mockLogout}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(mockLogout).toHaveBeenCalled();
});
