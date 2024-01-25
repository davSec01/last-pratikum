import React, { useEffect, useState } from 'react';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetchCryptoData();
    const intervalId = setInterval(fetchCryptoData, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchCryptoData = () => {
    fetch('https://api.coincap.io/v2/assets')
      .then((res) => res.json())
      .then((data) => setCryptos(data.data));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cryptos.map((crypto, index) => (
          <tr key={crypto.id}>
            <td>{index + 1}</td>
            <td>{crypto.name}</td>
            <td>{parseFloat(crypto.priceUsd).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CryptoList;