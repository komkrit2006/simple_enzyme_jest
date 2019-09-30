import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('test component',() => {
    it('render one App component',() => {
        const wrapper = shallow(<App/>)
        expect(wrapper.length).toBe(1)
    })
    it('render .my-class',() => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find('.my-class').length).toBe(1)
    })
    it('render have child',() => {
        const wrapper = shallow(<App/>)
        expect(wrapper.contains(<div className="my-second-class"/>)).toEqual(true)
    })
    it('simulate click events',() => {
        const wrapper = shallow(<App/>)
        expect(wrapper.find('h1').text()).toEqual('Login')
        wrapper.find('button').simulate('click')
        expect(wrapper.find('h1').text()).toEqual('Logout')
        wrapper.find('button').simulate('click')
        expect(wrapper.find('h1').text()).toEqual('Login')
        wrapper.find('button').simulate('click')
        expect(wrapper.find('h1').text()).toEqual('Logout')
    })
})