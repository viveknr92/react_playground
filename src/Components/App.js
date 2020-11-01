import React from 'react';
import './App.css';

class App extends React.Component {
  
  onChange = (e) => {
    console.log(this, e.target.value)
  }
  render = () => {
    return (
      <div className="App">
        <div>Learn react</div>
        <input onChange={this.onChange} ref={(input) => this.input = input} />
      </div>
    )
  }
  
}

export default App;
