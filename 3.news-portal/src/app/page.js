import LatestNews from "@/components/Ui/LatestNews/LatestNews";
import Sidebar from "@/components/Ui/Sidebar/Sidebar";
import { Box, Grid } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={9}>
          <LatestNews />
        </Grid>
        <Grid xs={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
