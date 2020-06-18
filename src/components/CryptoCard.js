import React from 'react';
import './css/CryptoCard.css';
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";

const CryptoCard = ({data}) => {
    const renderPercent = () => {
        if(data.changePercent24Hr > 0)
            return <h4 id="green"><AiFillCaretUp />{data.changePercent24Hr}</h4>
        else
            return <h4 id="red"><AiFillCaretDown />{data.changePercent24Hr}</h4>
    }
   return(
        <div className="crypto-card">
            <div className="title">
                <h1>{data.id}</h1>
            </div>
  
            <img id="symbol" key={data.id} src={`https://static.coincap.io/assets/icons/${data.symbol.toLowerCase()}@2x.png`}/>
            {renderPercent()}
        </div>
   );
}

export default CryptoCard;