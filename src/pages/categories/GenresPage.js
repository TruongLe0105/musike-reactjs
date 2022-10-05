import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MoodAndAction from "../../components/categories/MoodAndAction";
import "../../components/css/genres.css";
import { getListCategories } from "../../modals/genres/GenresSlice";
import GeneralComponent from "../../components/categories/GeneralComponent";

import Countries from "../../components/categories/Countries";

function Genres() {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
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
  const none_lyrics = getData("none_lyrics");
  const acoustic = getData("acoustic");
  const immortalMusic_VN = getData("immortalmusic_vn");
  const music_Trinh = getData("music_trinh");
  const jazz = getData("jazz");
  const rock = getData("rock");
  const latin = getData("latin");
  const piano = getData("piano");
  const classicMusic = getData("classicmusic");
  const immortalMusic_US_UK = getData("immortalmusic_us_uk");

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
        <GeneralComponent data={romanticBolero} title={"Trữ Tình & Bolero"} />
        <GeneralComponent data={edm} title="EDM" />
        <GeneralComponent data={remix} title="Remix" />
        <GeneralComponent data={hiphop} title="HipHop" />
        <GeneralComponent data={rAndb} title={"R&B"} />
        <GeneralComponent data={musicFilm} title="Nhạc Phim" />
        <GeneralComponent data={indie} title="Indie" />
        <GeneralComponent data={guitar} title="Guitar" />
        <GeneralComponent data={none_lyrics} title="Nhạc Không Lời" />
        <GeneralComponent data={acoustic} title="Acoustic" />
        <GeneralComponent data={immortalMusic_VN} title="Nhạc Việt Bất Hủ" />
        <GeneralComponent data={music_Trinh} title="Nhạc Trinh" />
        <GeneralComponent data={jazz} title="Jazz" />
        <GeneralComponent data={rock} title="Rock" />
        <GeneralComponent data={latin} title="Latin" />
        <GeneralComponent data={piano} title="Piano" />
        <GeneralComponent data={classicMusic} title="Nhạc Cổ Điển" />
        <GeneralComponent data={immortalMusic_US_UK} title="Nhạc Âu Mỹ Bất Hủ" />
      </div>
    )
  );
}

export default Genres;
