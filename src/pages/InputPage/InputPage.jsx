import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import { getUser, getUserRepos } from '../../api';
import { NavigationButton } from '../../components';

import logo from '../../img/logo.png';

export const InputPage = observer(() => {
  const {user} = useContext(Context);
  const [login, setLogin] = useState('');
  const [searchError, setSearchError] = useState();
  
  const navigate = useNavigate();
  
  const onSearch = async(e) => {
    try {
      if(e.key === 'Enter') {
        const profileData = await getUser(e.target.value);
        const repos = await getUserRepos(e.target.value);
        if(profileData.login) {
          user.setUser(profileData);
          user.setRepos(repos);
          navigate(`/user/${user.info.login}`);
        }
      }
    } catch (error) {
      setSearchError(error);
    }
  }

  return(
    <main className='text-center h-screen flex flex-col'>
      <div className='flex m-auto mb-2'>
        <img className='h-8 mr-3' src={logo} alt="#githubLogo" />
        <h1 className='text-3xl'>GitHub User Search</h1>
      </div>
      <div className='flex m-auto mt-2'>
        <input 
          className='w-80 p-2 mr-2 border border-gray-300 rounded-md' 
          placeholder='User login'
          type="text" 
          value={login} 
          onChange={e => setLogin(e.target.value)} onKeyDown={onSearch} 
        />
      </div>
      {searchError && 
      (<p className='bg-red-500'>Error ({searchError.response.status || 400}): {`${searchError.response.data.message}. Try enter existing login` || 'Invalid Error'}.</p>)}
    </main>
  )
});