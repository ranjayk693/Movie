import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import {NavLink ,useParams} from "react-router-dom";
// import useFetch from "./"
import { useParams } from "react-router-dom";

const API_URL = ` http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

// const ErrorPage = (error) => {
//   return (
//     <section>
//       <section>
//         <h1>ErrorPage</h1>
//       </section>
//     </section>
//   );
// };
// const MovieDetailCompunent = (data) => {
//   console.log(data.Released);
//   console.log(data.Poster);
//   return (
//     <>
//       <section className="movie_container" style={{ color: "white" }}>
//         <h2>{data.Title}</h2>
//         <section className="movie_info">
//           <img src={data.Poster} alt="" />
//           <p>{data.Released}</p>
//           <p>{data.Genre}</p>
//           <p>{data.imdbRating}</p>
//           <p>{data.Country}</p>
//           <p>i am good</p>
//           <button>Go Back</button>
//           <section></section>
//         </section>
//       </section>
//     </>
//   );
// };
const MovieDetail = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();

  const DataFetch = async (url) => {
    try {
      const res = await fetch(url);
      const api_data = await res.json();

      console.log(api_data);
      if (api_data.Response === "True") {
        // console.log("set visible become true");
        // MovieDetailCompunent(data);
        setData(api_data);
        console.log("i am never get executed" + data);
        setVisible(true);
      } else {
        // ErrorPage(data.Error);
        // setVisible(() => true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    DataFetch(`${API_URL}&i=${id}`);
  }, []);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      {visible && (
        <section className="movieDetailBody">
          <section className="movie_container-single-page">
            <h2>{data.Title}</h2>

            <section className="movie_info">
              <img src={data.Poster} alt="" />
              <section className="movie-info-meta-data">
                <p>{data.Released}</p>
                <p>{data.Genre}</p>
                <p>{data.imdbRating}</p>
                <p>{data.Country}</p>

                <button onClick={goBack}>Go Back</button>
              </section>
            </section>
          </section>
        </section>
      )}
    </>
  );
};

export default MovieDetail;
