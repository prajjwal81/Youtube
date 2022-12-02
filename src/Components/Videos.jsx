import { Box, Stack } from "@mui/material";
import React, { useState } from "react";

import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  const [obj, setObj] = useState("");
  const sortedVideos = () => videos.sort(byDate);
  const byDate = (a, b) => {
    return new Date(a.dob).valueOf() - new Date(a.dob).valueOf();
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos?.map((item, idx) => {
        // console.log(item?.snippet?.publishedAt);

        return (
          <Box key={idx}>{item.id.videoId && <VideoCard videos={item} />}</Box>
        );
      })}
    </Stack>
  );
};

export default Videos;

{
}
