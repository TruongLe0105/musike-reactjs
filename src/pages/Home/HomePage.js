import { List } from "@mui/material";
import React from "react";
import '../../components/css/home.css';

import listGenres from '../../middleware/HomeImage';

const {
  pop,
  asiaop,
  blues,
  country,
  eastern,
  soul,
  folk,
  hiphop,
  jazz,
  latin,
  popular,
  rb,
  rock,
  traditional
} = listGenres;

const LIST = [
  {
    title: "Pop",
    img: pop
  },
  {
    title: "Music of Asiaop",
    img: asiaop
  },
  {
    title: "Blues",
    img: blues
  },
  {
    title: "Country",
    img: country
  },
  {
    title: "Middle Eastern",
    img: eastern
  },
  {
    title: "Soul music",
    img: soul
  },
  {
    title: "Folk music",
    img: folk
  },
  {
    title: "Hiphop",
    img: hiphop
  },
  {
    title: "Jazz",
    img: jazz
  },
  {
    title: "Latin American",
    img: latin
  },
  {
    title: "Popular music",
    img: popular
  },
  {
    title: "R&B",
    img: rb
  },
  {
    title: "Rock music",
    img: rock
  },
  {
    title: "Traditional",
    img: traditional
  },
]

function Home() {
  return (
    <div className="wrapperHome">
      <h2>Genres</h2>
      <div className="wrapperItem">
        {LIST.map((item, index) => (
          <div className="item" key={index}>
            <img className="image" src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
