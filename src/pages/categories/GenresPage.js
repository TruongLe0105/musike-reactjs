import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from 'react-infinite-scroll-component';

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
  const dispatch = useDispatch();
  const { categories, hasCategories } = useSelector(state => state.categories);
  const [loading, setLoading] = useState(true);

  const getData = (category) => {
    const result = categories?.filter(item => item.category === category);
    return result;
  };

  const moodsAction = getData("moods_action");
  const countries = getData("countries");
  const romanticBolero = getData("romantic_bolero");
  const edm = getData("edm");
  const remix = getData("remix");
  const hiphop = getData("hiphop");
  const rAndb = getData("r_b");
  const musicFilm = getData("music_film");
  const indie = getData("india");
  const guitar = getData("guitar");

  useEffect(() => {
    dispatch(getListCategories());
  }, []);

  return (
    categories.length > 0 && (
      <div className="wrapper-genres">
        <div className="img-banner-genres">
          <img
            src="https://photo-zmp3.zmdcdn.me/cover/d/2/2/3/d223524cfa359d16b2c0d6e4497c126f.jpg"
            alt="img"
            className="img"
          />
        </div>
        <MoodAndAction data={moodsAction} />
        <Countries data={countries} />
        <RomanticAndBolero data={romanticBolero} />
        <Edm data={edm} />
        <Remix data={remix} />
        <Hiphop data={hiphop} />
        <RAndB data={rAndb} />
        <MusicFilm data={musicFilm} />
        <Indie data={indie} />
        <Guitar data={guitar} />
      </div>
    )
  );
}

// Scroll khi phần tử xuất hiện ở cuối trang thì sẽ gọi api...

export default Genres;
