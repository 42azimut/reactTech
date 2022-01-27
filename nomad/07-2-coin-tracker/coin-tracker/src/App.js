import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const URL = 'https://api.coinpaprika.com/v1/tickers';
    fetch(URL)
      .then((res) => res.json())
      .then((coinJson) => {
        setCoins(coinJson);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coin Tracker {loading ? '' : `(${coins.length}개)`} </h1>
      {loading ? <strong>loading...</strong> : null}
      <select>
        {coins.map((coin, id) => (
          <option>
            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
