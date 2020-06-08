import React from 'react';

function Burger(props) {
  return (
    props.toppings.map((topping, index) => (
      <div 
        key = {index}
        className={topping}
        onClick={() => props.onClick(index)}>
      </div>
    ))
  )
}

export default Burger;