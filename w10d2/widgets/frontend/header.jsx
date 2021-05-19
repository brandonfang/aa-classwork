import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.activeClass

    this.setCurrentTab = this.setCurrentTab.bind(this);
  }

  setCurrentTab(e) {
    e.preventDefault();
    this.props.setTabIndex(this.props.index);
    // console.log("tab header was clicked");
  }

  render() {
    return (
      <li className='tab-header' onClick={this.setCurrentTab}>{this.props.data.title}</li>
    );
  }
}

export default Header;