// import React, { useCallback } from 'react';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';
// import { useState } from 'react/cjs/react.development';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
