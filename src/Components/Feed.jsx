import React from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";

import Videos from "./Videos";
import { FetchFromAPI } from "../Utils/FetchFromAPI";

const Feed = () => {
  const [check, setCheck] = useState(false);
  const [videos, setvideos] = useState(null);

  setInterval(() => {
    setCheck((prev) => !prev);
  }, 10000);

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=latest videos`).then((data) =>
      setvideos(data.items)
    );
  }, [check]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, mt: 2 }}>
      <Box
        sx={{
          height: { sx: "auto", md: "auto" },
          borderRight: " 1px solid #3d3d3d",
          px: { sx: "0", md: 2 },
          color: "white",
        }}
      ></Box>

      <Box padding={2} height="130vh" overflowy="auto">
        <Typography
          variant="4"
          mb={2}
          fontWeight="bold"
          sx={{ color: "whitesmoke" }}
          padding="2"
        >
          Latest <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
