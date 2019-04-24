import React from 'react';
import axios from 'axios';

import './App.css';
import AmountSlider from './components/AmountSlider';
import DurationSlider from './components/DurationSlider';
import Spinner from './components/Spinner';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: false, amount: 500, duration: 6, interestRate: 0, monthlyPayment: 0 };
  }

  componentDidMount() {
    this.getInterestRate();
  }

  getInterestRate = () => {
    this.setState({ loading: true });
    const apiUrl = 'https://ftl-frontend-test.herokuapp.com/interest';
    axios.get(`${apiUrl}?amount=${this.state.amount}&numMonths=${this.state.duration}`)
      .then(res => {
        const result = res.data;
        const interestRate = result.interestRate;
        const monthlyPayment = result.monthlyPayment.amount;
        this.setState({ loading: false, interestRate: interestRate, monthlyPayment: monthlyPayment });
      })
  }

  amountChanged = (value) => {
    this.setState({ amount: value }, this.getInterestRate);
  }

  durationChanged = (value) => {
    this.setState({ duration: value }, this.getInterestRate);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Loan amount: {this.state.amount} USD</p>
          <AmountSlider onSliderChange={this.amountChanged} />
          <p>Loan duration: {this.state.duration} months</p>
          <DurationSlider onSliderChange={this.durationChanged} />
          <p>Rate of Interest: {this.state.interestRate}</p>
          <p>Monthly payment: {this.state.monthlyPayment} USD</p>
          <Spinner isLoading={this.state.loading} />
        </header>
      </div>
    );
  }

}
