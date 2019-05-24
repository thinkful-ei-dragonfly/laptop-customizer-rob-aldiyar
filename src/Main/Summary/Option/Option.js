import React from 'react';


/* Option is inside of the cart and is the ultimate selection that is to be calculated in price */
export default class Option extends React.Component {

  render() {
    return (
      <div className='summary__option'>
        <p>Option with name, discription, and price</p>
      </div>
    )
  }
}