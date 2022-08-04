import React, {useState} from 'react';
import { LIST_COUNTRIES} from '../../utils/queries'
import {ApolloClient, InMemoryCache, useQuery} from '@apollo/client';
import './style.css';

 export let cList = [];
// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com/'
});

// create a component that renders a select input for coutries
function CountrySelect() {
  const [country] = useState('US');
  const {data, loading, error} = useQuery(LIST_COUNTRIES, {client});


  function addToList(oneCountry) {
    cList.push(oneCountry)
    console.log(cList)
    localStorage.setItem('cList', JSON.stringify(cList)  )
  }

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }


  return (
    <div className='ulDiv'>
    <ul value={country} className='listUl'>
      {data.countries.map(country => (
        <a href='/Profile' key={country.code} >
        <li value={country.code} onClick={event => {
          event.preventDefault();
          console.log(country.name)
          addToList(country.name)
          }}>
          {country.name}
        </li>
        </a>
      ))}
    </ul>
    </div>
  );
}
 export default CountrySelect