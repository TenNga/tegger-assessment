import React from 'react';
import logo from './logo.svg';
import './App.css';
import CryptoContainer from './containers/CryptoContainer';

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
    
    if(this.state.assets.length > 0){
      return this.state.assets.map(asset => <img key={asset.id} src={`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`}/>)
    }
  }

  render(){
    return (
      <div className="App">
       <CryptoContainer assets={this.state.assets} />
      </div>
    );
  }
}

export default App;
