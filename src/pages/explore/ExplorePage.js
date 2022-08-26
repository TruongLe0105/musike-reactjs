import React from "react";
import "../../components/css/explore.css";
import BannerExplore from "../../components/explore/BannerExplore";
import NewRelease from "../../components/explore/NewRelease";
import RecentlyExplore from "../../components/explore/RecentlyExplore";

function ExplorePage() {
  return (
    <div className="wrapper-explore">
      <BannerExplore />
      <RecentlyExplore />
      <NewRelease />
    </div>
  );
}

export default ExplorePage;
