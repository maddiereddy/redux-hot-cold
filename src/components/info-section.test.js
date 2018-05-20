import React from 'react';
import { shallow } from 'enzyme';

import { InfoSection } from './info-section';
import { displayInfo, DISPLAY_INFO } from '../actions';

describe('<InfoSection />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />);
  });

  it('Should dispatch displayInfo when WHAT? is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<InfoSection dispatch={dispatch} />);
    const link = wrapper.find('.done');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(DISPLAY_INFO);
    expect(action.showInfo).toEqual(false);
  });  
});