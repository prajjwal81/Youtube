import React from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState, useEffect } from "react";
import Videos from "./Videos";
import { FetchFromAPI } from "../Utils/FetchFromAPI";
import { useParams } from "react-router-dom";

const Feed = () => {
  const { searchTerm } = useParams();
  const [videos, setvideos] = useState(null);

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      const sortedData = data.items.sort(
        (a, b) =>
          new Date(b.snippet.publishedAt) - new Date(a.snippet.publishedAt)
      );
      setvideos(sortedData);
    });
  }, [searchTerm]);
  console.log(videos);
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
        mt: 2,
        paddingLeft: "150px",
      }}
    >
      <Box padding={2} height="130vh" overflowy="auto">
        <Typography
          variant="4"
          mb={2}
          fontWeight="bold"
          sx={{ color: "whitesmoke" }}
          padding="2"
        >
          <span style={{ color: "#FC1503" }}>
            {" "}
            Search Results of {searchTerm}
          </span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
