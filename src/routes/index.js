import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import GenresPage from "../pages/categories/GenresPage";
import ExplorePage from "../pages/explore/ExplorePage";
import RadioPage from "../pages/radio/RadioPage";
import FavouritePage from "../pages/favourite/FavouritePage";
import ArtistsPage from "../pages/ArtistsPage";
import NewMusic from "../pages/NewMusic";
import LibraryPage from "../pages/auth/LibraryPage";
import PlayListPage from "../pages/playlist/PlayListPage";
import ZingChartPage from "../pages/zingChart/ZingChartPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ExplorePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/zing-chart" element={<ZingChartPage />} />
        <Route path="/radio" element={<RadioPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/follow" element={<PlayListPage />} />
        <Route path="/like-list" element={<FavouritePage />} />
        <Route path="/new-music" element={<NewMusic />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
