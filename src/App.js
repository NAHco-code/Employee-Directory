
import { Component } from 'react';
import './App.css';
import DirectoryHeader from './components/Header';
// import SearchBar from './components/SearchBar';
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
      input: ""
    }
  };
  componentDidMount() {
    this.handleAPIcall();
  };
  handleAPIcall = () => {
    API.getUserData() //fetch returns a promise
      .then(res => res.json())
      .then(data => this.setState({ employees: data.results }));
  };

  render() {
    return (
      <div className="App">
        <DirectoryHeader />
        {/* <SearchBar /> */}
        <TableTemplate employees={this.state.employees}/>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
