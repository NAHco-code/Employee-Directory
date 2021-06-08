
import { Component } from 'react';
import './App.css';
import API from './utils/api';
import Table from './components/Table';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  // *NOTE: shorthand
  //state = {} //lose functionality - can't do binding

  constructor(props) {
    super();
    this.state = {
      employees: [],

    }
  };

  componentDidMount() {
    this.handleAPIcall();
  };

  handleAPIcall = () => {
    API.getUsers() //fetch returns a promise
      .then(res => res.json())
      .then(data => this.setState({ employees: data.results }));
  };

  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
