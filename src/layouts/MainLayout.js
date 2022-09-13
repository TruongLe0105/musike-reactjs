import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import { Box } from "@mui/material";
import FooterMusic from "../components/FooterMusic";

function MainLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet />
      <Box style={{ flexGrow: 1 }} />
    </div>
  );
}

export default MainLayout;
