import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_ME_BASIC } from '../utils/queries';
// import Auth from '../utils/auth';


let list = localStorage.getItem('cList');
console.log(list, 'list')

let array = JSON.parse(list);
console.log(array,'array');




const Profile= () => {
  // use useQuery hook to make query request
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // console.log(userData, 'userdata');


//   const loggedIn = Auth.loggedIn();

  

  return (
    <main>
      <div className="flex-row justify-space-between">
        <ul>
            {array.map(item => {
                return <li key={item}>{item}</li>
            })}
        </ul>
      </div>
    </main>
  );
};

export default Profile;
