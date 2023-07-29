import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(); // calls parent component

    this.state = { count: 5 };
  }

  render() {
    return (
      <div>
        <button>-</button>
        <span>{this.state.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
