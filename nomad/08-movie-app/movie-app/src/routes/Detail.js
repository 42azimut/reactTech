import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
//import DetailOne from '../components/DetailOne';

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetail(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(detail);

  return (
    <div>
      {/* <div>
        <img src={detail.medium_cover_image} alt={detail.title} />
        <h2>
          <Link to={`/home`}>Home</Link>
        </h2>
        <h2>
          {detail.title} - {detail.year}
        </h2>
        <p>{detail.description_full}</p>
        <ul>
          {detail.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div> */}
      {/* <DetailOne
        coverImg={detail.medium_cover_image}
        title={detail.title}
        year={detail.year}
        summary={detail.description_full}
        genres={detail.genres}
      /> */}
      <div>
        <Link to={`/home`}>Home</Link>
        <hr />
        {detail && <div>{detail.title}</div>}
        {detail && <img src={detail.medium_cover_image} alt="detail.title" />}
        <div style={{ width: '300px', padding: '10', margin: 10 }}>
          {detail && <p>{detail.description_full}</p>}
        </div>
        {/* {detail && (
          <textarea
            rows={20}
            value={JSON.stringify(detail.description_full, null, 2)}
          />
        )} */}
      </div>
    </div>
  );
}
export default Detail;
