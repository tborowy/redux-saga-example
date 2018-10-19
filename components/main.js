import React from 'react'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {getRandomCat} from '../actions/actionsList';

const Main = (props) => {
  return <div>
    <button onClick={props.getRandomCat}>Get random Cat</button>
    <fieldset>
      <legend>State</legend>
      <pre>
      {JSON.stringify(props.state, ' ', 2)}
    </pre>
    </fieldset>
  </div>;
};

function mapStateToProps(state) {
  return {
    state: state
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getRandomCat
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);