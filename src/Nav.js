import React from 'react';
import { connect } from 'react-redux'

// Action creator
function resetCounter(num) {
    return { type: 'RESET', num: num }
  }

 function NavBar(props){

    function resetClick() {
        props.resetCounter(0);
    }
    return(
        <nav>
           <h1>Counter App</h1>
           <button onClick={resetClick}>RESET</button>
        </nav>
    );
}
function mapStateToProps(state) {
    return {
      count: state.count
    };
  }
  const mapDispatchToProps = {
    resetCounter
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavBar);