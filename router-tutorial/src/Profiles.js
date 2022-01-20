import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    background: 'blue',
    color: 'white',
  };
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/azimut">
            Azizmut
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/dustdawn">
            Jayden
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택하세요!</div>}
      />
      <Route path="/profiles/:username" component={Profile}></Route>
    </div>
  );
};

export default Profiles;
