import StoreLocator from '../StoreLocator';
import React from 'react';
import { shallow } from 'enzyme';

describe("StoreLocator", function () {

    let mountedStoreLocator;
    beforeEach(() => {
        mountedStoreLocator = shallow(<StoreLocator />);
    })
    it('renders without crashing', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
    });
    it('renders a header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });
    it('renders two buttons', () => {
        const buttons = mountedStoreLocator.find('Button');
        expect(buttons.length).toBe(2);
    })
    it('renders a map', () => {
        const map = mountedStoreLocator.find('Map');
        expect(map.length).toBe(1);
    })
})


