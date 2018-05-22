import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage component', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call login for google from button', () => {
    const mockLogin = jest.fn();
    const wrapper = shallow(<LoginPage startGoogle={mockLogin} />);
    wrapper.find('button').at(0).simulate('click');
    expect(mockLogin).toHaveBeenCalled();
});

test('should call login for github from button', () => {
    const mockLogin = jest.fn();
    const wrapper = shallow(<LoginPage startGithub={mockLogin}/>);
    wrapper.find('button').at(1).simulate('click');
    expect(mockLogin).toHaveBeenCalled();
});