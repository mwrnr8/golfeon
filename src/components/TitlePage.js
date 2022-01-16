import React from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {setComponent} from '../redux/actions/componentActions';

function TitlePage(props) {  
        return (
            <header className="App-header">
                <div className='main_title_header'>
                    <p>Golf Tournament Management</p>
                    <h3>GOLFEON</h3>
                </div>
                {/* <p className='coming_soon'>COMING SOON...</p> */}
                <footer>
                <button onClick={()=>props.setComponent('userSelect')}>
                    Get Started
                </button>
                </footer>
            </header>
        );
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        setComponent: (component) => dispatch(setComponent(component))
    }
}

const mapStateToProps = (state) => {
    return {}
}
  
export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);