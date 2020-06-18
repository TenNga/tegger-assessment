import React from 'react';
import CryptoCard from '../components/CryptoCard';

const CryptoContainer = ({assets}) => {
    const renderCards = () => {
        if(assets.length > 1){
           return assets.map(asset => <CryptoCard data={asset} key={asset.id}/>)
        }
    }
    return(
        <>
         {renderCards()}
        </>
    )
}

export default CryptoContainer;