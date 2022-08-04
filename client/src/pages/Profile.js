import React from 'react';
import './style.css'

let list = localStorage.getItem('cList');
console.log(list, 'list')

let array = JSON.parse(list);
console.log(array,'array');




const Profile= () => {


  

  return (
    <main className='profile'>
      <div className="profileDiv">
        <ul className='profileUl'>
            {array.map(item => {
                return <li key={item} className='profileLi'>{item}</li>
            })}
        </ul>
      </div>
    </main>
  );
};

export default Profile;
