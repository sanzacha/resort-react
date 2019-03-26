import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Age-label">
          <div>your age: {this.props.age}</div>
          <div>Double Age: {this.props.doubleAge}</div>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <button onClick={this.props.onDoubleAge}>Double Age</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    doubleAge: state.doubleAge
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
    onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
    onDoubleAge: () => dispatch({ type: 'DOUBLE_AGE', value: 1 })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
