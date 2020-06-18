import React from 'react';
import './App.css';
import CryptoContainer from './containers/CryptoContainer';
import BitcoinDetail from './containers/BitcoinDetail';

class App extends React.Component{

  state = {
    assets: [],
    bitcoinPage: false
  }

  //fetch onces in async 
  componentDidMount = () => {
    fetch('https://api.coincap.io/v2/assets')
  .then(response => response.json())
  .then(data => this.setState({assets: data.data}));
  }

  //Toggle bitcoinPage value on calling this function
  toggleBitcoinPage = () => this.setState({bitcoinPage: !this.state.bitcoinPage})

  //find details of bitcoin and pass it to BitcoinDetail component
  findBitcoinDetail = () => {
    if(this.state.assets.length > 0)
      return this.state.assets.find(asset => asset.id === "bitcoin")
  }

  render(){
    return (
      <div className="App">
        {
        this.state.bitcoinPage? 
        <BitcoinDetail details = {this.findBitcoinDetail()} toggleBitcoinPage={this.toggleBitcoinPage}/> :
       <CryptoContainer assets={this.state.assets} toggleBitcoinPage={this.toggleBitcoinPage}/>
        }
      </div>
    );
  }
}

export default App;
