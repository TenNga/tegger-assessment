import React from 'react';
import CryptoCard from '../components/CryptoCard';
import './css/CryptoContainer.css';

class CryptoContainer extends React.Component {
    state = {
        column: 3
    }

    renderCards = () => {
        if(this.props.assets.length > 1){
           return this.props.assets.map(asset => <CryptoCard data={asset} key={asset.id}/>)
        }
    }

    handleFourColumn = () => this.setState({column: 4})

    handleThreeColumn = () => this.setState({column: 3})


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
                <h1>Welcome To Cryotocurrency Information</h1>
                <div className="header">
                    <button onClick={this.handleFourColumn}>Four Column</button>

                    <button onClick={this.handleThreeColumn}>Three Column</button>
                </div>
                {this.handleColumn()}
            </>
        )
    }
}

export default CryptoContainer;