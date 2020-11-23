import React from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import './App.css';

class App extends React.Component {

  state = {
    loading: false,
    people: [],
    filter: '',
  }

  getPeople = () => {
    fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/090639df-57c7-4fd7-9472-67e00f8aa05f/MOCK_DATA_%282%29.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201123T140032Z&X-Amz-Expires=86400&X-Amz-Signature=ea55262d76c25b7a8f2a85ff90c36899a083dc0af052f7cf54aa4b865c7b141e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MOCK_DATA%2520%282%29.json%22')
    .then(res => res.json())
    .then(people => this.setState({people}))
    .catch((error) => console.log(error))
  }

  handleChange = (event) => {
    this.setState({filter: event.currentTarget.value})
    let filteredPeople = this.state.people.filter((person) => person.name.search(event.currentTarget.value))
    this.setState({people: filteredPeople})
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {

    const peopleList = this.state.people.map((person) => <Person key={person.id} person={person} />);

    return (
      <div className="App">
        <header></header>
  
        <Filter handleChange={this.handleChange} />
  
        { peopleList }
  
      </div>
    );
  }
}

export default App;
