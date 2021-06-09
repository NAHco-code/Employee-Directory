
import { Component } from 'react';
import './App.css';
import API from './utils/api';
import CardTemplate from './components/Card';
import DirectoryHeader from './components/Header';
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

  //TODO: how do I populate the table with the API response?
  handleAPIcall = () => {
    API.getUsers() //fetch returns a promise
      .then(res => res.json())
      .then(data => this.setState({ employees: data.results }));
    return; //?
  };

  render() {
    return (
      <div className="App">
        <DirectoryHeader />
        {this.state.employees.map(employee => (
          <CardTemplate
            id={employee.login.username}
            key={employee.login.uuid}
            name={employee.name}
            image={employee.picture.thumbnail}
          />
        ))}
      </div>
    );
  }
}

export default App;
