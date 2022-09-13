import React from "react";
import Channels from "../../components/radio/Channels";
import NewProgramer from "../../components/radio/NewProgramer";
import OneAirRadio from "../../components/radio/OneAirRadio";
import Outstanding from "../../components/radio/OutstandingProgramming";
import PodcastExplore from "../../components/radio/PodcastExplore";
import PodcastGenres from "../../components/radio/PodcastGenres";
import PodCastZingNew from "../../components/radio/PodCastZingNew";
import RadioBanner from "../../components/radio/RadioBanner";
import VietCetera from "../../components/radio/VietCetera";
import XoneRadio from "../../components/radio/XoneRadio";

function RadioPage() {
  return (
    <div className="wrapper-radio-page">
      <RadioBanner />
      <PodcastExplore />
      <PodcastGenres />
      <Outstanding />
      <XoneRadio />
      <PodCastZingNew />
      <VietCetera />
      <OneAirRadio />
      <NewProgramer />
    </div>
  );
}

export default RadioPage;
