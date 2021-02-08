import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss'
import  "./helpers/validation";
import Login from  "./components/login"
class App extends Component {
    render() {
        return (
            <>
              <Login></Login>
            </>
        );
    }
}

export default App;