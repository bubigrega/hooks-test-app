import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiUseEffect = () => {
  const [film, setFilm] = useState({});
  const [value, setValue] = useState(1);
  useEffect(() => {
    try {
      (async () => {
        const response = await axios.get(
          `https://swapi.co/api/films/${value}/`
        );
        setFilm(response.data);
      })();
    } catch (err) {
      console.log(err);
    }
  }, [value]);
  useEffect(() => {
    document.title = film.title;
  }, [film]);
  return (
    <div>
      <h5>Select Star Wars film: </h5>
      <select
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
      </select>
      <h5>{film.title}</h5>
      <p>{film.opening_crawl}</p>
    </div>
  );
};

export default ApiUseEffect;
