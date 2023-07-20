import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { imagePath } from '../../constants/imagePaths';
import styles from './Style';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';
import { useSelector } from 'react-redux';
import { baseURL } from '../../constants/apiConstant';

const SearchShowPlay = ({showData}) => {
  const playbackState = usePlaybackState();
  const showTime = new Date();
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [currentShowId, setCurrentShowId] = useState(null);
  const singleSearchShow=useSelector(state=>state.singleSearchShow.selectedShow);


  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getRemainingTime();
      setRemainingTime(remaining);
      if (remaining <= 0) {
        setupAudioTracks()
        clearInterval(timer);
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

  //calculate Remaining time
  function getRemainingTime() {
    const currentTime = new Date();
    return Math.max(showTime.getTime() - currentTime.getTime(), 0);
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
  
  const [showHours, showMinutes] = showData?.startTime.split(':');
  showTime.setHours(showHours, showMinutes, 0);


  useEffect(() => {

    if (currentShowId !== showData?._id) {
      setupAudioTracks();
    }
  }, [showData?._id]);

  const setupAudioTracks = async () => {
    
    let timeTrack=  Math.max(showTime.getTime() -  new Date().getTime(), 0);
    await TrackPlayer.reset();

    TrackPlayer.addEventListener('playback-queue-ended', async event => {});
    const tracks = [];

    if (timeTrack <= 0) {
      if (showData.pre_show && showData.premp3) {
        
        tracks.push({
          id: showData.premp3.id,
          url: `${baseURL}/${showData.premp3.filePath}`, // Assuming this is a remote URL

          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon,
        });
      }

      // For Main Show
      if (showData.main_show && showData.mainmp3) {
        
        tracks.push({
          id: showData.mainmp3.id,
          url: `${baseURL}/${showData.mainmp3.filePath}`, // Assuming this is a remote URL
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon,
        });
      }

      // For Post Show
      if (showData.post_show && showData.postmp3) {
        
        tracks.push({
          id: showData.postmp3.id,
          url: `${baseURL}/${showData.postmp3.filePath}`, // Assuming this is a remote URL
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon,
        });
      }
    } else{
      if (showData.pre_show && showData.premp3) {

        tracks.push({
          id: showData.premp3.id,
          url: ``, 
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon
        });
      }

      // For Main Show
      if ( showData.main_show && showData.mainmp3) {
        tracks.push({
          id: showData.mainmp3.id,
          url: ``, 
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon
        });
      }

      // For Post Show
      if ( showData.post_show && showData.postmp3) {
        tracks.push({
          id: showData.postmp3.id,
          url: ``, 
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon
        });
      }
    }
    await TrackPlayer.add(tracks);

    setCurrentShowId(showData?._id);
  };
  const toggleAudio = async playbackState => {
     
      const currentTrack = await TrackPlayer.getCurrentTrack();
      
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
      }
    }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={imagePath.Back} style={styles.image} />
        <TouchableOpacity onPress={()=>toggleAudio(playbackState)}>
          <Image source={playbackState === State.Paused ||
        playbackState === State.Ready ||
        playbackState === State.Connecting ||
        playbackState === State.Buffering?imagePath.AudioIcon:imagePath.Pause} style={styles.image} />
        </TouchableOpacity>
        <Image source={imagePath.Next} style={styles.image} />
      </View>
      <Text style={styles.title}>{showData.showTitle}</Text>
      <Text style={styles.description}>{showData.description}</Text>

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

export default SearchShowPlay;

