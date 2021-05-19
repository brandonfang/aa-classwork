import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.setCurrentTab = this.setCurrentTab.bind(this);

    console.log(this.props);
  }

  setCurrentTab(e) {
    e.preventDefault();
    this.props.setTabIdx(this.props.data.index);
    console.log("tab header was clicked");
  }

  render() {
    return (
      <li className='tab-header' onClick={this.setCurrentTab}>{this.props.data.title}</li>
    );
  }
}

export default Header;