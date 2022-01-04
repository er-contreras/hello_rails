import React from "react"
// import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

function getGreetings() {
  console.log('getGreetings() Action!!')
  return {
    type: GET_GREETINGS_REQUEST
  };
};

class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}

        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>getGreetings</button>

      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
