import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
  azimut: {
    name: 'HeeSeok',
    description: '리액트 열공중 ㅅㅂ',
  },
  dustdawn: {
    name: 'jayden',
    description: 'MERN STACK',
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  console.log(username);
  console.log(data[username]);

  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default withRouter(Profile);
