import React from 'react';

import CommentBox from './content/index';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App"> 
        <CommentBox />
      </div>
    );
  }
}

export default App;