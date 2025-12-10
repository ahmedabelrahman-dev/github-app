import React from 'react';
import ProfileInfo from '../components/ProfileInfo.jsx';
import Repos from '../components/Repos.jsx';
import Search from '../components/Search.jsx';
import SortRepos from '../components/SortRepos.jsx';
import Spinner from '../components/Spinner.jsx';

const HomePage = () => {
  return (
    <div className="m-4">
      <Search />
      <SortRepos />
      <div className="flex gap-4 flex-col lg:flex-row justify-center items-start">
        <ProfileInfo />
        <Repos />
        <Spinner />
      </div>
    </div>
  );
};
export default HomePage;
