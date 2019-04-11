import React from 'react';
import { shallow } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('contains h3', () => {
    expect(wrapper.find('h3').text()).toEqual('coins:');
  });

  it('should mock fetch successfully', (done) => {
    const response = [{
      id: 'bitcoin',
      name: 'bitcoin',
      price_usd: 1
    }];

    fetchMock.get('https://api.coinmarketcap.com/v1/ticker/?limit=10', response);

    wrapper.instance().fetchData().then(() => {
      expect(wrapper.state()).toEqual({ coins: response, hasError: false });
      done();
    })
  });

  it('should mock fetch failure', (done) => {
    fetchMock.get('https://api.coinmarketcap.com/v1/ticker/?limit=10', 500);

    wrapper.instance().fetchData().then(() => {
      expect(wrapper.state()).toEqual({ hasError: true, coins: [] });
      expect(wrapper.find('.error-message').text()).toEqual('Something is wrong');
      done();
    })
  });
});
