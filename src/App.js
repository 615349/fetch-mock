import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  state = {
    coins: []
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { coins } = this.state; 
    return (
      <>
        <h3>coins:</h3>
        {
          coins.map(coin => (
            <div className='coin-container' key={coin.id}>
              <div className="name">{coin.name}</div>
              <div className="price">{coin.price_usd}</div>
            </div>
          ))
        }
      </>
    );
  }

  fetchData() {
    return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
          .then(response => {
            if(!response.ok) {
              throw new Error('Failed to fetch');
            }
            return response.json();
          })
          .then(coins => {
            this.setState({ coins })
          })
  }
}

export default App;
