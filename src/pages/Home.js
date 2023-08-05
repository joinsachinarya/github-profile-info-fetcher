import React, { useState } from 'react';
import Profile from '../components/Profile';
import Spinner from '../components/Spinner';
import Navbar from "../components/Navbar";
import axios from 'axios';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const fetchProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const headers = { 'user-agent': 'node.js' };
      const data = await axios.get(
        `https://api.github.com/users/${userName}?sort=created:asc`,
        headers
      );
      console.log(data);
      if (data.status === 200) {
        setUser(data.data);
      } else {
        setUser(null);
        setError(`Could not find user ${userName}.`);
      }
    } catch (e) {
      setUser(null);
      console.log(e.message);
      setError(`Could not find user ${userName}.`);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className='container p-5'>
        <div className=' row justify-content-md-center'>
          <div className='col col-xs-12 col-md-6' xs={12} md={6}>
            <h3>Feth github user info : </h3>
            <form className='form my-1'>
              <div className='form-floating'>
                <input
                  type='text'
                  className='form-control'
                  id='username'
                  placeholder=''
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label htmlFor='username'>Enter username</label>
              </div>
              <button
                className='mt-3 btn btn-outline-primary'
                type='submit'
                onClick={fetchProfile}>
                Find User
              </button>
            </form>
          </div>
        </div>
        {error && <h4 className='mt-3 row justify-content-md-center text-danger'>{error}</h4>}
        {loading ? <Spinner /> : user && <Profile uprofile={user} />}
      </div>
    </>
  );
};

export default Home;
