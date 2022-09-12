import React from "react";
import Channels from "../../components/radio/Channels";
import PodcastExplore from "../../components/radio/PodcastExplore";
import RadioBanner from "../../components/radio/RadioBanner";

function RadioPage() {
  return (
    <div className="wrapper-radio-page">
      <RadioBanner />
      <PodcastExplore />
    </div>
  );
}

export default RadioPage;
