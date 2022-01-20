import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 문자열 맨 앞 ? 물음표 생략
  });
  console.log(query);
  const showDetail = query.detail === '123'; //쿼리 파싱 결과 값은 **"문자열"**
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 실습 페이지 입니다.</p>
      {showDetail && <p>detail 값을 true 로 설정 했음!</p>}
    </div>
  );
};

export default About;
