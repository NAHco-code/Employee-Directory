
import { Component } from 'react';
import './App.css';
import DirectoryHeader from './components/Header';
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
      sorted: []
    }
  };
  componentDidMount() {
    this.handleAPIcall();
  };
  handleAPIcall = () => {
    API.getEmpData() //fetch returns a promise
      .then(res => res.json())
      .then(data => this.setState({ employees: data.results }));
  };
  //function to filter users
    //how many years they've been at company
    //first name asc + desc
    //last name asc + desc

  //****** CHECK / REVIEW ******/
  handleFilteredSearch = (userInputEvent) => {
    let value = userInputEvent.target.value;
    this.setState({ input: value })
  };
  searchbyFirst = (userInputEvent) => {
    userInputEvent.preventDefault();

    let filteredEmps = [];
    let employees = this.state.results;
    for (let i = 0; i < employees.length; i++) {
      if ((employees[i].name.first.toLocaleLowerCase() === this.state.input.toLocaleLowerCase()) || (employees[i].name.last.toLocaleLowerCase() === this.state.search.toLocaleLowerCase())) {
        filteredEmps.push(employees[i])
      }
    }
    this.setState({
      employees: filteredEmps
    })
  }
  //****** CHECK / REVIEW ******/

  render() {
    return (
      <div className="App">
        <DirectoryHeader />
        <SearchForm />
        <TableTemplate employees={this.state.employees}/>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
