import React from 'react';
// import TestUtils from 'react-dom/test-utils';
import { configure, shallow, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Timeline from '../containers/Timeline';

describe('Timeline', () => {
  let wrapper;
  it('It iscontained within .Timeline wrapper', () => {
    wrapper = shallow(<Timeline />);
    expect(wrapper.find('.Timeline').length).toEqual(1);
  });

  it('has a title of Timeline', () => {
    wrapper = shallow(<Timeline />)
    expect(wrapper.find('h1').text()).toContain("Timeline");
  });

  describe('listing behavior', () => {
    let listing;
    beforeEach(() => wrapper = mount(<Timeline />))
    beforeEach(() => listing = wrapper.find('ul'))
    
    it('starts out hidden', () => {
      expect(listing.hasClass('active')).toBeFalsy()
    })
    
    it('becomes visible after being clicked on', () => {
      const search = wrapper.find('h1').find('span');
      search.simulate('click');
      expect(listing.hasClass('active')).toBeFalsy();
    })

  })

  describe('status updates', () => {
    it('has 4 status updates at minimum', () => {
      wrapper = mount(<Timeline />)
      expect(wrapper.find('li').length).toBeGreaterThan(3)
    })
  })

});