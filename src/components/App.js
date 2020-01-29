import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

// getting state and passing it directly to the main component
// creating this.props.posts and this.props.comments
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// getting all the action creators
function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;