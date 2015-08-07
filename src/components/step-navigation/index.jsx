import React from 'react';

export default class HalcyonStepNavigation extends React.Component {
  static propTypes = {
    disabled : React.PropTypes.bool,
    onChange : React.PropTypes.func,
    steps    : React.PropTypes.array.isRequired,
    currentStepIndex : React.PropTypes.number.isRequired
  }

  static defaultProps = {
    disabled : false
  }

  constructor () {
    super();
  }

  onClick (idx, e) {
    e.preventDefault();

    // If navigation is not disabled and the step selection is not the current
    // step, emit an onChange event to the parent.
    if (
      !this.props.disabled &&
      idx !== this.props.currentStepIndex &&
      this.props.onChange
    ) {
      this.props.onChange(idx, e);
    }
  }

  getTitleForStep (step) {
    return step.type.name.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  }

  renderStepTabs () {
    return this.props.steps.map((step, idx) => {
      const isActive = idx === this.props.currentStepIndex;

      return (
        <li key={idx} className={isActive ? 'active' : ''}>
          <a href='#'
             disabled={this.props.disabled}
             onClick={this.onClick.bind(this, idx)}>
             <span>{this.getTitleForStep(step)}</span>
          </a>
        </li>
      );
    });
  }

  render () {
    return (
      <div className='halcyon__navigation'>
        <nav className='navbar navbar-static-top'>
          <ul className='nav nav-tabs'>
            {this.renderStepTabs()}
          </ul>
        </nav>
      </div>
    );
  }
}
