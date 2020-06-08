import React from 'react';
import './App.css';
import Burger from './components/Burger/Burger';
import Counter from './components/Counter/Counter';

class App extends React.Component {
  state = {
    toppings: []
  }

  addTopping = topping => {
    this.setState({
      toppings: [topping, ...this.state.toppings]
    })
  }

  removeTopping = targetIndex => {
    this.setState({
      toppings: this.state.toppings.filter((_, index) => index !== targetIndex )
    })
  }

  buildTrifecta = () => {
    let toppings = [];
    for (let i = 0; i < 3; i++) {
      toppings.push('tomato', 'cheese', 'patty');
    }

    toppings.unshift('bunTop');
    toppings.push('bunBottom');

    this.setState({
      toppings: toppings
    })
  }

  chessiness = () => {
    const { toppings } = this.state;

    if (toppings.filter(topping => topping === 'cheese').length === 2) {
        return 'Double Cheese';
    } else if (toppings.filter(topping => topping === 'cheese').length === 3) {
      return 'Triple Cheese';
    } else if (toppings.filter(topping => topping === 'cheese').length === 4) {
      return 'Quadruple Cheese';
    } else if (toppings.filter(topping => topping === 'cheese').length >= 5) {
      return 'Maximum Cheese';
    }
  }

  calculatePrice = toppings => {
    const unitPrice = {
      cheese: 0.80,
      tomato: 0.60,
      patty: 1.9,
      bunTop: 0.0,
      bunBottom: 0.0
    }

    let totalPrice = toppings.reduce((accum, topping) => {
      accum = accum + unitPrice[topping];
      return accum;
    }, 0)

    return '$' + totalPrice.toFixed(2);
  }

  render() {
    const { toppings } = this.state;

    return (
      <div className="App">
        <div className="container">
          <aside>
            <h2>Make your own</h2>
            <section className="counter-wrapper">
              <Counter toppings={toppings} topping="cheese" addTopping={this.addTopping} />
              <Counter toppings={toppings} topping="tomato" addTopping={this.addTopping} />
              <Counter toppings={toppings} topping="patty" addTopping={this.addTopping} />
              <Counter toppings={toppings} topping="bunTop" addTopping={this.addTopping} />
              <Counter toppings={toppings} topping="bunBottom" addTopping={this.addTopping} />
            </section>
            <section className="special-wrapper">
              <h2>Today's Special</h2>
              <div><button onClick={this.buildTrifecta}>The Melbourne Trifecta</button></div>
            </section>
            <section className="price-wrapper">
              <h2>Total Price:</h2>
              <h3>{this.calculatePrice(toppings)}</h3>
            </section>
          </aside>
          <main>
            <section>
              <h3 className="cheese-level">
                {this.chessiness()}
              </h3>
            </section>
            <section>
              <div className="burger-wrapper">
                <Burger 
                  toppings={toppings} 
                  onClick={this.removeTopping}
                />
              </div>
              <div className="plate"></div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}

export default App;
