import React from 'react';
import { Step as HalcyonStep } from 'halcyon';

export default class FirstStep extends HalcyonStep {
  constructor () {
    super();
  }

  render () {
    return <h2>Step 1</h2>;
  }
};
