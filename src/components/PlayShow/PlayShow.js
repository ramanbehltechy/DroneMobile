import React, { useEffect, useState,useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { imagePath } from '../../constants/imagePaths';
import styles from './Style';
import TrackPlayer, {
  usePlaybackState,
  State,
  RepeatMode
} from 'react-native-track-player';
import { useSelector } from 'react-redux';
import { MP3_FILE_BASE_URL, baseURL } from '../../constants/apiConstant';

const PlayShow = ({showData}) => {
  const showDetails=useSelector(state=>state.singleShow.showByLocation);
  const playbackState = usePlaybackState();

  const showTime = new Date(showDetails?.utcDateTime); // Get the current time
  const [comingShowTime, setComingShowTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const playedRef = useRef(false);

  useEffect(() => {
    setupAudioTracks()
    const timer = setInterval(() => {
      const remaining = getRemainingTime();
      setRemainingTime(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        
        if (!playedRef.current) {
          playedRef.current = true;
          togglePlay(playbackState);
        }
        
      } else {
        const formattedTime = formatTime(remaining);
        setHours(formattedTime.hours);
        setMinutes(formattedTime.minutes);
        setSeconds(formattedTime.seconds);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  

  const resetTrack = async () => {
    await TrackPlayer.reset();
  }

  //calculate Remaining time
  function getRemainingTime() {
    const currentTime = new Date();

    return Math.max(showTime.getTime() - currentTime.getTime(), 0);
  }
/////
const setupAudioTracks = async () => {
  const remaining = getRemainingTime();

  
  TrackPlayer.addEventListener('playback-queue-ended', async event => { });
  const tracks = [];
    
    if (showData.pre_show && showData.premp3) {
    
      tracks.push({
        url: `${MP3_FILE_BASE_URL}/${showData?.premp3?.fileName}`,
        title: showData.showTitle,
        artist: 'Artist',
        artwork: imagePath.AudioIcon
      });
    }

    // For Main Show
    if (showData.main_show && showData.mainmp3) {
      tracks.push({
        url: `${MP3_FILE_BASE_URL}/${showData?.mainmp3?.fileName}`,
        title: showData.showTitle,
        artist: 'Artist',
        artwork: imagePath.AudioIcon
      });
    }

    // For Post Show
    if (showData.post_show && showData.postmp3) {
      tracks.push({
        url: `${MP3_FILE_BASE_URL}/${showData?.postmp3?.fileName}`,
        title: showData.showTitle,
        artist: 'Artist',
        artwork: imagePath.AudioIcon
      });
    }
  
  await TrackPlayer.add(tracks);
};

//added
const togglePlay=async(playbackState)=>{
  //await setupAudioTracks()
  const queue = await TrackPlayer.getQueue();
  try {
    
      await TrackPlayer.play();
  } catch (err) {
    console.log('error at track player playing', err);
} 
}

  const togglePause = async (playbackState) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    const remaining = getRemainingTime();
      if (remaining <= 0) {
          if (currentTrack !== null) {
            if (
              playbackState === State.Paused ||
              playbackState === State.Ready ||
              playbackState === State.Connecting ||
              playbackState === State.Buffering
            ) {
              await TrackPlayer.play();
            } else {
              
              await TrackPlayer.pause();
            }
        };
}
}

  //Calculation for Time format
  function formatTime(time) {
    const hours = Math.floor(time / (60 * 60 * 1000));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    return {
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0')
    };
  }
  
  const [showHours, showMinutes] = showDetails?.startTime.split(':');
  // showTime.setHours(showHours, showMinutes, 0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={imagePath.Back} style={styles.image} />
        <TouchableOpacity onPress={()=>togglePause(playbackState)}>
          <Image source={playbackState === State.Paused ||
        playbackState === State.Ready ||
        playbackState === State.Connecting ||
        playbackState === State.Buffering?imagePath.AudioIcon:imagePath.Pause} style={styles.image} />
        </TouchableOpacity>
        <Image source={imagePath.Next} style={styles.image} />
      </View>
      <Text style={styles.title}>{showDetails.showTitle}</Text>
      <Text style={styles.description}>{showDetails.description}</Text>

      {remainingTime > 0 && (
        <View style={styles.timer_view}>
          <Text style={styles.showTime}>Show will be live in</Text>
          <View style={styles.timerContainer}>
            <View style={styles.timerBox}>
              <Text style={styles.timerText}>{hours}</Text>
              <Text style={styles.timerLabel}>Hours</Text>
            </View>
            <View style={styles.timerBox}>
              <Text style={styles.timerText}>{minutes}</Text>
              <Text style={styles.timerLabel}>Minutes</Text>
            </View>
            <View style={styles.timerBox}>
              <Text style={styles.timerText}>{seconds}</Text>
              <Text style={styles.timerLabel}>Seconds</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default PlayShow;

