import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIdx: 0,
      currentTitle: this.props.data[0].title,
      currentContent: this.props.data[0].content
    }
    this.updateTab = this.updateTab.bind(this);
    this.setTabIdx = this.setTabIdx.bind(this);
  }

  updateTab() {
    let currentTitle = this.props.data[this.currentTabIdx].title
    this.setState({ currentTitle });
    let currentContent = this.props.data[this.currentTabIdx].content
    this.setState({ currentContent});
  }

  setTabIdx(idx) {
    const currentTabIdx = idx; 
    this.setState({ currentTabIdx }, this.updateTab);
  }

  render() {
    const headerList = this.props.data.map((ele, i) => {
      return <Header data={ele} index={i} key={i} setTabIdx={this.setTabIdx} />
    });

    return (
      <div>
        <h2>Tabs</h2>
        <div className='tabs-wrapper'>
          <ul className="header-list-wrapper">
            {headerList}
          </ul>
          <article className="tabs-content">{ this.state.currentContent }</article>
        </div>
      </div>
    );
  }
}

export default Tabs;