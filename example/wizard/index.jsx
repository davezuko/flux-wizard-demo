import React from 'react';
import { Wizard as HalyconWizard } from 'halcyon';
import FirstStep from '../steps/first';
import SecondStep from '../steps/second';
import ThirdStep from '../steps/third';

class ExampleWizard extends HalyconWizard {
  constructor () {
    super();
  }
};

ExampleWizard.defaultProps = {
  steps : [FirstStep, SecondStep, ThirdStep]
};

export default ExampleWizard;
