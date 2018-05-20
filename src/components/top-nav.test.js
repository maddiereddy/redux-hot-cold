import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {RESTART_GAME, GENERATE_AURAL_UPDATE, DISPLAY_INFO} from '../actions';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
      shallow(<TopNav />);
  });

  it('Should dispatch restartGame when new game is clicked', () => {
      const dispatch = jest.fn();
      const wrapper = shallow(<TopNav dispatch={dispatch} />);
      const link = wrapper.find('.new');
      link.simulate('click');
      expect(dispatch).toHaveBeenCalled();
      const action = dispatch.mock.calls[0][0];
      expect(action.type).toEqual(RESTART_GAME);
      expect(action.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });

  it('Should dispatch displayInfo when WHAT? is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.what');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(DISPLAY_INFO);
    expect(action.showInfo).toEqual(true);
  });  
});