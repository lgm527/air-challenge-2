import React from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import './App.css';

class App extends React.Component {

  state = {
    loading: false,
    people: [],
    filter: '',
    allPeople: [],
  }

  getPeople = () => {
    fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/090639df-57c7-4fd7-9472-67e00f8aa05f/MOCK_DATA_%282%29.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201123T140032Z&X-Amz-Expires=86400&X-Amz-Signature=ea55262d76c25b7a8f2a85ff90c36899a083dc0af052f7cf54aa4b865c7b141e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MOCK_DATA%2520%282%29.json%22')
    .then(res => res.json())
    .then(people => this.setState({people: people, allPeople: people}))
    .catch((error) => console.log(error))
  }

  handleChange = (event) => {
    let filter = event.currentTarget.value.toLowerCase()
    let filteredPeople = this.state.allPeople.filter((person) => person.name.toLowerCase().includes(filter))
    this.setState({people: filteredPeople, filter: event.currentTarget.value})
  }

  componentDidMount() {
    this.getPeople();
  }

  render() {

    const peopleList = this.state.people.map((person) => <Person key={person.id} person={person} />);

    return (
      <div className="App">
        <header>
        <svg width="61" height="24" viewBox="0 0 61 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M26.1976 4.76667C26.1976 5.81667 26.0294 7.63333 25.6087 9.75C24.6833 9.71667 23.4383 9.75 23.4551 9.75C23.8925 7.63333 24.0776 5.78333 24.0776 4.75C24.0776 2.1 23.2364 2.1 22.883 2.1C18.3065 2.1 8.09343 15.1667 2.7261 23.3833C2.40641 23.8833 1.75022 24.0167 1.26228 23.7C0.757518 23.3833 0.622914 22.7333 0.942598 22.25L0.954006 22.2327C1.18113 21.8881 4.70145 16.5464 8.96835 11.2833C15.1097 3.68333 19.6694 0 22.883 0C24.3973 0 26.1976 0.833333 26.1976 4.76667ZM38.1943 7.74976C38.1943 8.66103 37.4485 9.39977 36.5286 9.39977C35.6086 9.39977 34.8628 8.66103 34.8628 7.74976C34.8628 6.83849 35.6086 6.09976 36.5286 6.09976C37.4485 6.09976 38.1943 6.83849 38.1943 7.74976ZM43.0735 15.45C42.5183 16.2167 41.8789 16.9834 41.1554 17.7167C38.5811 20.3334 35.5862 21.9 33.1465 21.9C31.8846 21.9 31.262 21.3667 31.262 20.3167C31.262 19.2167 31.8677 17.1 34.7954 13.35C35.0309 13.05 35.0814 12.6667 34.9468 12.3167C34.8122 11.9667 34.5093 11.7167 34.1392 11.6667C26.9547 10.4834 17.3473 9.9167 12.4175 14.0667C9.96096 16.1334 9.75905 18.4334 9.75905 19.1C9.75905 21.9 11.9127 24 14.7562 24C18.6261 24 21.8061 21.1167 23.9429 15.6334C24.1617 15.0834 24.3636 14.5167 24.5486 13.95C23.7578 13.95 23.0007 13.9834 22.294 14.0334C20.8639 18.1334 18.4578 21.9 14.7562 21.9C12.8718 21.9 11.8791 20.5 11.8791 19.1C11.8791 18.2167 12.3838 16.85 13.7803 15.6667C16.0518 13.7667 21.0658 11.9 32.0696 13.4667C30.1011 16.25 29.142 18.5 29.142 20.3167C29.142 23.0334 31.3125 24 33.1633 24C36.2087 24 39.6748 22.25 42.6865 19.1834C43.6792 18.1834 44.5373 17.1167 45.244 16.05C43.8475 15.9834 43.0735 15.45 43.0735 15.45ZM57.8465 18.6832C58.2839 18.2998 58.9569 18.3498 59.3439 18.7832C59.7477 19.2332 59.6973 19.8832 59.2766 20.2665C57.6782 21.6498 54.515 23.9832 51.2845 23.9832C49.4001 23.9832 47.4988 22.8165 47.4988 20.1832C47.4988 18.6332 48.1718 16.7498 49.501 14.5498C48.3905 14.8665 47.2464 15.0498 46.2032 15.0498C44.8067 15.0498 43.4775 14.6332 42.468 13.8665C41.2902 12.9832 40.6508 11.6832 40.6508 10.2165C40.6508 7.49984 42.3502 6.08317 44.0496 6.08317C45.9845 6.08317 47.381 7.6165 47.4315 9.78317C47.4483 10.4165 47.3642 11.1165 47.1791 11.8332C46.035 12.0832 45.0086 11.7165 45.0086 11.7165C45.2105 11.0332 45.3283 10.3998 45.3115 9.8165C45.3115 9.43317 45.1937 8.18317 44.0496 8.18317C43.6121 8.18317 42.7708 8.6165 42.7708 10.2165C42.7708 11.5332 43.8477 12.9498 46.2032 12.9498C48.054 12.9498 50.3759 12.2165 51.9575 11.1332C52.395 10.8332 52.9839 10.8832 53.3372 11.2665C53.6906 11.6498 53.7242 12.2165 53.4045 12.6332C50.2582 16.6665 49.602 18.9665 49.602 20.1832C49.602 21.3165 50.174 21.8832 51.2677 21.8832C53.1185 21.8832 55.5077 20.7165 57.8465 18.6832Z" fill="#1B3889"/>
        </svg>
        </header>

        <div className="content-container">
          <div className="intro">
            <h1>The Person Finder</h1>
            <p>If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</p>
          </div>
    
          <Filter handleChange={this.handleChange} />
           
          { peopleList }
        </div>
      </div>
    );
  }
}

export default App;
