import React from 'react';
import Total from './Total/Total';
import Option from './Option/Option';

/* Summary holds our options that we selected and renders those and gives us the total price.
   basically, our total cart!
 */
export default function Summary(props) {


  return (
    <section className="main__summary">
    <h3>NEW GREENLEAF 2018</h3>
    {props.summary}
    <div className="summary__total">
      <div className="summary__total__label">Your Price: </div>
      <div className="summary__total__value">
      { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
          .format(props.total) }
      </div>
    </div>
  </section>
  )
}
