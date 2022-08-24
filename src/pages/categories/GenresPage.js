import { CircularProgress, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../components/css/genres.css";
import listGenres from "../../middleware/GenresListImage";
import { getListCategories } from "../../modals/genres/GenresSlice";

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
  traditional,
} = listGenres;

const LIST = [
  {
    title: "Pop",
    img: pop,
  },
  {
    title: "Music of Asiaop",
    img: asiaop,
  },
  {
    title: "Blues",
    img: blues,
  },
  {
    title: "Country",
    img: country,
  },
  {
    title: "Soul music",
    img: soul,
  },
  {
    title: "Folk music",
    img: folk,
  },
  {
    title: "Hiphop",
    img: hiphop,
  },
  {
    title: "Jazz",
    img: jazz,
  },
  {
    title: "Latin American",
    img: latin,
  },
  {
    title: "Popular music",
    img: popular,
  },
  {
    title: "R&B",
    img: rb,
  },
  {
    title: "Rock music",
    img: rock,
  },
  {
    title: "Traditional",
    img: traditional,
  },
  {
    title: "Middle Eastern",
    img: eastern,
  },
];

function Genres() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getListCategories());
  }, []);

  return (
    <div className="wrapper_genres">
      {/* {loading && <CircularProgress />} */}
      <div className="wrapperItem">
        {categories.length > 0 &&
          categories.map((item, index) => (
            <div className="item" key={index}>
              <img className="image" src={item.image} alt={item.title} />
              <div className="title">{item.title}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Genres;
