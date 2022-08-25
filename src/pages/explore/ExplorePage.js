import React from "react";
import "../../components/css/explore.css";
import BannerExplore from "../../components/explore/BannerExplore";
import RecentlyExplore from "../../components/explore/RecentlyExplore";

function ExplorePage() {
  return (
    <div className="wrapper-explore">
      <BannerExplore />
      <RecentlyExplore />
    </div>
  );
}

export default ExplorePage;
