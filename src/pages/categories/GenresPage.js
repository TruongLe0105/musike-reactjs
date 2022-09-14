import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countries from "../../components/categories/Countries";
import Edm from "../../components/categories/Edm";
import Guitar from "../../components/categories/Guitar";
import Hiphop from "../../components/categories/Hiphop";
import Indie from "../../components/categories/Indie";
import MoodAndAction from "../../components/categories/MoodAndAction";
import MusicFilm from "../../components/categories/MusicFilm";
import RAndB from "../../components/categories/RAndB";
import Remix from "../../components/categories/Remix";
import RomanticAndBolero from "../../components/categories/RomanticAndBolero";
import "../../components/css/genres.css";
import { getListCategories } from "../../modals/genres/GenresSlice";

function Genres() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getListCategories());
  }, []);

  return (
    <div className="wrapper-genres">
      <div className="img-banner-genres">
        <img
          src="https://photo-zmp3.zmdcdn.me/cover/d/2/2/3/d223524cfa359d16b2c0d6e4497c126f.jpg"
          alt="img"
          className="img"
        />
      </div>
      <MoodAndAction />
      <Countries />
      <RomanticAndBolero />
      <Edm />
      <Remix />
      <Hiphop />
      <RAndB />
      <MusicFilm />
      <Indie />
      <Guitar />
    </div>
  );
}

export default Genres;
