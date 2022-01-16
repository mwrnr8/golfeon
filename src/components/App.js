import '../css/App.css';
import {connect} from 'react-redux';
import TitlePage from './TitlePage';
import UserSelect from './UserSelect';

function App(props) {
  return (
    <div className="App">
      
        {props.view === 'titlePage' && <TitlePage/>}
        {props.view === 'userSelect' && <UserSelect/>}
        <div className='copyright'>Copyright &#169; Mark Werner 2022</div>
    </div>
  ); 
}

const mapStateToProps = (state) => {
  return {
    view: state.component.view
  }
}

export default connect(mapStateToProps)(App);
