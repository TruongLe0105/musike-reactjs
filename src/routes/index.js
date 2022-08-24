import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import GenresPage from "../pages/categories/GenresPage";
import ExplorePage from "../pages/explore/ExplorePage";
import AlbumsPage from "../pages/albums/AlbumsPage";
import FavouritePage from "../pages/favourite/FavouritePage";
import ArtistsPage from "../pages/ArtistsPage";
import UploadPage from "../pages/UploadPage";
import HotCollectionPage from "../pages/collections/HotCollectionPage";
import MyNFTCollectionPage from "../pages/collections/MyNFTCollectionPage";
import PlayListPage from "../pages/playlist/PlayListPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ExplorePage />} />
        <Route path="/nft-collection" element={<MyNFTCollectionPage />} />
        <Route path="/hot-collection" element={<HotCollectionPage />} />
        <Route path="/albums" element={<AlbumsPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/playlist" element={<PlayListPage />} />
        <Route path="/like-list" element={<FavouritePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
