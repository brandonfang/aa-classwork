import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
// import Weather from './clock';
import Autocomplete from './autocomplete';

const tabsData = [
  {
    title: 'one',
    content: 'I am the first'
  },
  {
    title: 'two',
    content: 'Second pane here'
  },
  {
    title: 'three',
    content: 'Third pane here'
  }
];

function App() {
  return (
    <div className="wrapper">
      <Clock />
      {/* <Weather /> */}
      <div className="flex-widget-wrapper">
        <Tabs data={tabsData}/>
        <Autocomplete />
      </div>
    </div>
  );
}

export default App;