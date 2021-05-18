import React from 'react';
import Header from 'header';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTabIdx: 0,
            currentTitle: this.props[currentTabIdx].title,
            currentContent: this.props[currentTabIdx].content
        }
    }

    setTabIdx(idx) {
        const currentTabIdx = idx; 
        this.setState({ currentTabIdx }, () => {
            
        });

    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.map( (ele, i) => {
                        <Header title={ele.title} setTabIdx={this.setTabIdx} index={i}/>
                    })}
                </ul>
                <article>{ this.state.currentContent }</article>

            </div>
        )
    }
}

export default Tabs;