import React from "react";
import Channels from "../../components/radio/Channels";
import Outstanding from "../../components/radio/OutstandingProgramming";
import PodcastExplore from "../../components/radio/PodcastExplore";
import PodcastGenres from "../../components/radio/PodcastGenres";
import RadioBanner from "../../components/radio/RadioBanner";

function RadioPage() {
  return (
    <div className="wrapper-radio-page">
      <RadioBanner />
      <PodcastExplore />
      <PodcastGenres />
      <Outstanding />
    </div>
  );
}

export default RadioPage;
