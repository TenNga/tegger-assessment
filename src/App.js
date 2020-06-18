import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  state = {
    assets: []
  }

  componentDidMount = () => {
    fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => this.setState({assets: data.data}));
  }

  renderAssets = () => {
    console.log("state: ", this.state.assets[1])
    if(this.state.assets.length > 0){
      return this.state.assets.map(asset => <h4>{asset.synbol}</h4>)
    }
  }

  render(){
    return (
      <div className="App">
       {this.renderAssets()}
      </div>
    );
  }
}

export default App;
