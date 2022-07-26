import React from "react";
import "../../components/css/explore.css";
import BannerExplore from "../../components/explore/BannerExplore";
import NewRelease from "../../components/explore/NewRelease";
import CanYouWantListen from "../../components/explore/CanYouWantListen";
import NewSongEveryDay from "../../components/explore/NewSongEveryDay";
import RecentlyExplore from "../../components/explore/RecentlyExplore";
import TopHundred from "../../components/explore/TopHundred";
import Suggestion from "../../components/explore/Suggestion";
import TrendingCorner from "../../components/explore/TrendingCorner";
import FavouriteArtist from "../../components/explore/FavouriteArtist";
import ZingChart from "../../components/explore/ZingChart";
import SingerBanners from "../../components/explore/SingerBanners";
import Addvertisement from "../../components/explore/Addvertisement";
import ActionFourCard from "../../components/explore/ActionFourCard";

function ExplorePage() {
  return (
    <div className="wrapper-explore">
      <BannerExplore />
      <RecentlyExplore />
      <CanYouWantListen />
      <NewRelease />
      <NewSongEveryDay />
      <TopHundred />
      <Suggestion />
      <FavouriteArtist />
      <ZingChart />
      <SingerBanners />
      <TrendingCorner />
      <ActionFourCard />
      <Addvertisement />
    </div>
  );
}

export default ExplorePage;
