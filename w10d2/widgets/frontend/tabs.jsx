import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTabIndex: 0,
    }
    this.setTabIndex = this.setTabIndex.bind(this);
  }

  setTabIndex(i) {
    const currentTabIndex = i; 
    this.setState({ currentTabIndex }, );
  }

  render() {
    const headerList = this.props.data.map((ele, i) => {
      return <Header data={ele} key={i} setTabIndex={this.setTabIndex} index={i}/>
    });

    const currentContent = this.props.data[this.state.currentTabIndex].content;
    // console.log(currentContent);

    return (
      <div className="flex-widget-element">
        <h2>Tabs</h2>
        <div className='tabs-wrapper'>
          <ul className="header-list-wrapper">
            { headerList }
          </ul>
          <article className="tabs-content">
            { currentContent }
            </article>
        </div>
      </div>
    );
  }
}

export default Tabs;
