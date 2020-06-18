import React from 'react';
import './App.css';
import CryptoContainer from './containers/CryptoContainer';
import BitcoinDetail from './containers/BitcoinDetail';

class App extends React.Component{

  state = {
    assets: [],
    bitcoinPage: false
  }

  componentDidMount = () => {
    fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => this.setState({assets: data.data}));
  }

  bitcoinDetail = () => {
    this.setState({bitcoinPage: true})
  }

  renderAssets = () => {
    
    if(this.state.assets.length > 0){
      return this.state.assets.map(asset => <img key={asset.id} src={`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`}/>)
    }
  }

  findBitcoinDetail = () => {
    if(this.state.assets.length > 0)
      return this.state.assets.find(asset => asset.id === "bitcoin")
  }

  render(){
    return (
      <div className="App">
        {
        this.state.bitcoinPage? 
        <BitcoinDetail details = {this.findBitcoinDetail()}/> :
       <CryptoContainer assets={this.state.assets} bitcoinDetail={this.bitcoinDetail}/>
        }
      </div>
    );
  }
}

export default App;
