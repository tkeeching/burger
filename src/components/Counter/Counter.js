import React from 'react';
import './Counter.css';

function Counter(props) {
  return (
    <div className="Counter">
      <button onClick={() => props.addTopping(props.topping)}>+</button>
      <output className="counter-display">{props.toppings.filter(topping => topping === props.topping).length}</output>
      <p>{props.topping === 'bunTop' ? 'top bun' : props.topping === 'bunBottom' ? 'bottom bun' : props.topping}</p>
    </div>
  )
}

export default Counter;