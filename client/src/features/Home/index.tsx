import React from 'react';

import { 
  ConnectionManager, 
  // ConnectionState, 
  // HobbyList,
  // Events, 
  // UseReduce,
  MyForm, 
  SignIn,
  SignOut,
  Login,
  Redux,
} from './components';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="">
      {/* <ConnectionState isConnected={ isConnected } /> */}
      {/* <Events events={ fooEvents } /> */}
      <ConnectionManager />
      <MyForm />
      {/* <UseReduce /> */}
      <Login />
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/lazy'>Lazy</Link>
      <SignIn />
      <SignOut />
      <Redux />
      <Link to='/photos'>Go to Photo</Link>
    </div>
  );
}