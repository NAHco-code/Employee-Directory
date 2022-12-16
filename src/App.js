import './App.css';
import { Component } from 'react';

import SearchForm from './components/SearchBar';
import TableTemplate from './components/Table';
// import Footer from './components/Footer';
import API from './utils/api';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  // *NOTE: shorthand
  //state = {} //lose functionality - can't do binding
  constructor(props) {
    super();
    this.state = {
      employees: [],
      input: '',
      filteredEmps: []
    }
  };
  componentDidMount() {
    this.handleAPIcall();
  };
  handleAPIcall = () => {
    API.getEmpData() //fetch returns a promise
      .then(res => res.json())
      .then(data => this.setState({ employees: data.results, filteredEmps: data.results })); //keep copy of original unfiltered array
  };

    //first name asc + desc
    //last name asc + desc
    //where to sort?

  handleEmpSearch = (userInputEvent) => {
    let value = userInputEvent.target.value;
    const name = userInputEvent.target.name;

    this.setState({
      [name]: value
    });
  };
  searchEmployees = () => {
    let filteredEmps = this.state.filteredEmps.filter((employee) => {
      return (
        employee.name.first.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) ||
        employee.name.last.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase()) ||
        employee.email.toLocaleLowerCase().includes(this.state.input.toLocaleLowerCase())
      )
    })
    return filteredEmps;
  };

  //sort ascending comparison function for strings
  //TODO: new state - compare asc + desc
  compare = (a, b) => {
    if (a.name.last < b.name.last) {
      return -1;
    }
    if (a.name.last > b.name.last) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  sortLast = () => {
    let sortedEmps = this.state.filteredEmps
    sortedEmps.sort(this.compare);

    this.setState({ filteredEmps: sortedEmps });
  };

  //live page update
  handlePageUpdate = (updateEvent) => {
    // updateEvent.preventDefault();
    const value = updateEvent.target.value;
    this.setState({ input: value }, () => {
      this.searchEmployees();
    })
  }


  render() {
    return (
      <div className="App">
        <SearchForm handleEmpSearch={this.handleEmpSearch}/>
        <TableTemplate employees={this.searchEmployees()} sortLast={this.sortLast}/>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
