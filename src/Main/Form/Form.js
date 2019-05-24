import React from 'react';
import Features from '../Features/Features'

export default class Form extends React.Component {
  render() {
    return (
      <section className='main__form'>
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        <Features />
      </section>
    );
  }
}