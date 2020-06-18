import React from 'react';
import CryptoCard from '../components/CryptoCard';
import './css/CryptoContainer.css';

class CryptoContainer extends React.Component {

    //I can elimilate state and class component by using Hooks
    state = {
        column: 3
    }

    //if assets is not empty render cards for each asset elements
    renderCards = () => {
        if(this.props.assets.length > 1){
           return this.props.assets.map(asset => <CryptoCard data={asset} key={asset.id}/>)
        }
    }

    handleFourColumn = () => this.setState({column: 4}) //onclick fourcolumn change column value to 4

    handleThreeColumn = () => this.setState({column: 3}) //onclick threecolumn change column value to 4


    // decides what to render according to value of column in state
    handleColumn = () => {
        if(this.state.column == 3){
            return (
                <div id="card-container-three">
                    {this.renderCards()}
                </div>
            )
        }
        else {
            return(
                <div id="card-container-four">
                    {this.renderCards()}
                </div>
            )
        }
    }

    render(){
        return(
            <>
            <div className="top-header">
                <h1>Welcome To Cryotocurrency Information</h1>
                <div className="header">
                    <button onClick={this.handleFourColumn}>Four Column</button>

                    <button onClick={this.handleThreeColumn}>Three Column</button>

                    <button onClick={this.props.toggleBitcoinPage}>BitCoin Detail</button>
                </div>
            </div>
                {this.handleColumn()}
            </>
        )
    }
}

export default CryptoContainer;