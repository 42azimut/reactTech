import React from 'react';
import Categories from '../components/Categories';
import NewList from '../components/NewsList';

const NewsPage = ({ match }) => {
  //const category = match.params.category;
  //console.log(category);
  const category = match.params.category || 'all';
  //console.log(match);
  return (
    <>
      <Categories />
      <NewList category={category} />
    </>
  );
};

export default NewsPage;
