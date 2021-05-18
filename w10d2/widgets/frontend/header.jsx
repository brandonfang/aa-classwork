import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.setCurrentTab = this.setCurrentTab.bind(this);
    }

    setCurrentTab(e) {
        e.preventDefault();
        this.props.setTabIdx(this.props.index);
    }

    render() {
        return (
            <li className='tab-header' onClick={this.setCurrentTab()}>{this.props.title}</li>
        );
    }
}

export default Header;