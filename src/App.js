import React, {useEffect, useState} from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false)
  const [people, setPeople] = useState([])
  const [filter, setFilter] = useState('')

  const getPeople = () => {
    fetch('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/090639df-57c7-4fd7-9472-67e00f8aa05f/MOCK_DATA_%282%29.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201123T140032Z&X-Amz-Expires=86400&X-Amz-Signature=ea55262d76c25b7a8f2a85ff90c36899a083dc0af052f7cf54aa4b865c7b141e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22MOCK_DATA%2520%282%29.json%22')
    .then(res => res.json())
    .then(data => setPeople(data))
    .catch((error) => console.log(error))
  }

  const handleChange = (event) => {
    setFilter(event.currentTarget.value)
    let filteredPeople = people.filter((person) => person.name.search(filter))
    setPeople()
  }

  useEffect(() => {
    setLoading(true)
    setPeople(getPeople())
    setLoading(false)
  }, [])

  // useEffect(() => {
  //   setLoading(true)
  //   setPeople(getPeople())
  //   setLoading(false)
  // }, [filter, people])

  let peopleList = people !== undefined ? people.map((person) => <Person person={person} />) : null

  return (
    <div className="App">
      <header></header>

      <Filter handleChange={handleChange} />

      { peopleList }

    </div>
  );
}

export default App;
