import React from 'react'

const Main = (props) => {
  const action = type => props.store.dispatch({type});
  return <div>
    <button onClick={()=>action('GET_USERS')}>Action with Fake Api Call (Resolved)</button>
    <button>Action with Fake Api Call (Rejected)</button>
    <fieldset>
      <legend>State</legend>
      <pre>
      {JSON.stringify(props.store.getState())}
    </pre>
    </fieldset>
  </div>;
};

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default Main;