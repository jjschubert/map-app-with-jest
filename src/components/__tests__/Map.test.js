import Map from '../Map';
import React from 'react';
import { shallow } from 'enzyme';



describe("Map", function () {

    let mountedMap;
    beforeEach(() => {
        mountedMap = shallow(<Map />);
    })

    it('contains an image', () => {
        const img = mountedMap.find('img');
        expect(img.length).toBe(1);
    })
    it('renders without crashing', () => {
    });

    it('displays the none map when no params passed', ()=>{
        const defaultMap = mountedMap.find('img [src="images/none.jpg"]');
        expect(defaultMap.length).toBe(1);
    })
})
