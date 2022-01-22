//import NewsList from './components/NewsList';
//import Categories from './components/Categories';
//import { useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  //const [category, setCategory] = useState('all');
  //const onSelect = useCallback((category) => setCategory(category), []);

  return <Route path="/:category?" component={NewsPage} />;
};
export default App;
