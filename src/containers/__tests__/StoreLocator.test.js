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
    it('renders a map', () => {
        const map = mountedStoreLocator.find('Map');
        expect(map.length).toBe(1);
    })
})

describe('chooseMap', () => {
    it('updates this.state.currentMap using the location passed to it', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
        let mockEvent = {target:{value:'testland'}};
        mountedStoreLocator.instance().chooseMap(mockEvent);
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
    })
})


