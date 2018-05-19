import React from 'react';
import { connect } from 'react-redux';

import Header from './header';
import InfoSection from './info-section';
import GuessSection from './guess-section';
import StatusSection from './status-section';

export class Game extends React.Component {
  render() {
    const showInfo  = this.props.showInfo;
    if (!showInfo) {
      return (
        <div>
          <Header />
          <main role="main">
            <GuessSection />
            <StatusSection />
          </main>
        </div>
      );
    } else {
      return (
        <div>
          <InfoSection />
        </div>
      );
    }
		
  }
}	

const mapStateToProps = state => ({
  showInfo: state.showInfo
});

export default connect(mapStateToProps)(Game);