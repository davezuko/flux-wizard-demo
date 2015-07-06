import React, { Component as ReactComponent } from 'react';
import Halcyon from 'halcyon';
import ExampleDispatcher from './dispatcher';
import ExampleWizard from './wizard';

// We can override the default Halcyon Dispatcher
Halcyon.registerStoresWithDispatcher(ExampleDispatcher);

class ExampleApp extends ReactComponent {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='container'>
        <ExampleWizard />
      </div>
    );
  }
}

React.render(<ExampleApp />, document.getElementById('mount-node'));
