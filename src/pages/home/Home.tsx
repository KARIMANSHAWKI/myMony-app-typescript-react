import React, { FC } from 'react';
import Navbar from '../../components/Navbar';
import Login from '../login/Login';
import './home.css';

const Home: FC = () => {
  return (
    <div className='home'>
      <Navbar />
    </div>
  );
};

export default Home;
