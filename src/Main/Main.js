import React from 'react';
import Features from './Features/Features';
import Summary from './Summary/Summary';

export default function Main(props) {
  
    return (
      <main>
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          <Features features={props.features} selected={props.selected}/>
        </section>
          <Summary summary={props.summary} total={props.total}/>
      </main>
    );
}