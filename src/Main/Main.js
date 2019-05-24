import React from 'react';
import Form from './Form/Form';
import Summary from './Summary/Summary';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <Form />
        <Summary />
      </main>
    );
  }
}