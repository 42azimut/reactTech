import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [data1, setData] = useState(null);
  const URL = 'https://jsonplaceholder.typicode.com/todos/1';
  const onClick = async () => {
    try {
      const result = await axios.get(URL);
      //console.log(result);
      setData(result.data); //state 의 데이터가 아님! res.data 객체임!
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data1 && (
        <textarea
          rows={7}
          value={JSON.stringify(data1.title, null, 2)}
          readOnly
        />
      )}
      {data1 && (
        <textarea rows={7} value={JSON.stringify(data1, null, 2)} readOnly />
      )}
    </div>
  );
};

export default App;
