import React, { useRef, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import Slide from '@mui/material/Slide';

function VideoSection() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const togglePlay = () => {
    if (videoRef.current) {
      playing ? videoRef.current.pause() : videoRef.current.play();
      setPlaying(!playing);
    }
  };

  return (
    <Slide in direction="up" timeout={700} mountOnEnter>
      <Box
        component="section"
        sx={(theme) => ({
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: theme.spacing(2), md: theme.spacing(4) },
        })}
      >
        <Box // video container
          sx={(theme) => ({
            position: 'relative',
            width: '100%',
            maxWidth: 900,
            aspectRatio: '16/9',
            borderRadius: theme.shape.borderRadius * 2,
            overflow: 'hidden',
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: theme.shadows[3],
            filter: 'brightness(0.95)',
          })}
        >
          <Box
            component="video"
            ref={videoRef}
            src="/videos/hero-video.mp4"
            muted
            playsInline
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            Your browser does not support the video tag.
          </Box>
          <IconButton
            onClick={togglePlay}
            sx={(theme) => ({
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: theme.palette.common.white,
              bgcolor: 'rgba(0,0,0,0.4)',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
            })}
          >
            {playing ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
          </IconButton>
        </Box>
      </Box>
    </Slide>
  );
}

export default VideoSection;