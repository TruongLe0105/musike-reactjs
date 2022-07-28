import React from "react";
import { Outlet } from "react-router-dom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import { Box } from "@mui/material";

function MainLayout() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <MainHeader />
      <Outlet />
      <Box style={{ flexGrow: 1 }} />
      {/* <MainFooter /> */}
    </div>
  );
}

export default MainLayout;
