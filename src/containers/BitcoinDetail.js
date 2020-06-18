import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import './css/BitcoinDetail.css';

const BitcoinDetail = ({details,back}) => {

    //no need of class component, react hook take care of state and lifecycle
    const [bitcoinDetails, setBitcoinDetails] = useState([]);

    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets/bitcoin/history?interval=h1")
        .then(resp => resp.json())
        .then(handleData)
    }, []);

    const data = bitcoinDetails;

    const handleData = (details) => {
        if(details.data.length > 0){
            details.data.length = 12; //only show latest 12 hours

            const newData = details.data.map(d => { 
                return {Time: parseInt(d.date.slice(11,13)),price: parseInt(d.priceUsd)}
                })
            setBitcoinDetails(newData);
        }
    }
    
    return(
        <>
            <h1>Bitcoin Detail Page</h1>
            <button onClick={back}>Home</button>
            <div className="detail-container">
                    <img id="symbol" key={data.id} src={`https://static.coincap.io/assets/icons/${details.symbol.toLowerCase()}@2x.png`}/>
                    <div>
                        <h2>Rank: {details.rank}</h2>
                        <h2>Symbol: {details.symbol}</h2>
                    </div>
                <div>    
                    <h2>Supply: {parseFloat(details.supply).toFixed(2)}</h2>
                    <h2>Price: ${parseFloat(details.priceUsd).toFixed(2)}</h2>
                </div>
            </div>
            

    <h1 id="chart-header">Last 12 Hours Price Chart</h1>

    <LineChart width={1000} height={300} data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip />
  </LineChart>

        </>
    )
}

export default BitcoinDetail;