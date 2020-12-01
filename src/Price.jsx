import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class Price extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { price } = this.props.match.params;
    return (
      <>{price ? <h1>Price is {price}</h1> : <h1>No Price Available</h1>}</>
    );
  }
}

export default withRouter(Price);
