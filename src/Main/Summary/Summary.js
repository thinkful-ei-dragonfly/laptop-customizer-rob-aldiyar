import React from 'react';
import Total from './Total/Total';
import Option from './Option/Option';

/* Summary holds our options that we selected and renders those and gives us the total price.
   basically, our total cart!
 */
export default class Summary extends React.Component {

  render() {
    return (
      <section className='main__summary'>
        <h3>NEW GREENLEAF 2018</h3>
        <Option />
        <Option />
        <Option />
        <Option />
        <Total />
      </section>
    )
  }
}