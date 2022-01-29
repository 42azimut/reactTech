import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
`;

const NewList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const query = category === 'all' ? '' : `&category=${category}`;
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bd97d44621e043ffb886a0d376c27a24`,
      );
      setArticles(response.data.articles);
      //console.log(query);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  //fetchData();

  useEffect(() => {
    fetchData();
  }, [category]);

  if (loading) return <NewsListBlock>대기중....</NewsListBlock>;

  if (!articles) return null;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewList;
