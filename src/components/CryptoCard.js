import React from 'react';
import './css/CryptoCard.css';

const CryptoCard = ({data}) => {
    const renderPercent = () => {
        if(data.changePercent24Hr > 0)
            return <h4 id="green">{data.changePercent24Hr}</h4>
        else
            return <h4 id="red">{data.changePercent24Hr}</h4>
    }
   return(
        <div className="crypto-card">
            <div className="title">
                <h1>{data.id}</h1>
            </div>
            <img id="symbol" key={data.id} src={`https://static.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`}/>
            {renderPercent()}
            <div id="chart">
                Chart
            </div>
        </div>
   );
}

export default CryptoCard;