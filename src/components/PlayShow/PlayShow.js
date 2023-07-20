import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { imagePath } from '../../constants/imagePaths';
import styles from './Style';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';
import { useSelector } from 'react-redux';

const PlayShow = () => {
  const showDetails=useSelector(state=>state.singleShow.showByLocation);
  const playbackState = usePlaybackState();

  const showTime = new Date(); // Get the current time
  const [comingShowTime, setComingShowTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getRemainingTime();
      setRemainingTime(remaining);

      if (remaining <= 0) {
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

  const togglePause = async (playbackState) => {
    console.log(playbackState,"new playback")
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack !== null) {
      if (
        playbackState === State.Paused ||
        playbackState === State.Ready ||
        playbackState === State.Connecting ||
        playbackState === State.Buffering
      ) {
        console.log("coming")
        await TrackPlayer.play();
      } else {
        console.log("Not coming")
        await TrackPlayer.pause();
      }
  };
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
  showTime.setHours(showHours, showMinutes, 0);
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
            <View style={styles.colenWrapper}>
            <Text style={styles.timerColon}>:</Text>
            </View>
            <View style={styles.timerBox}>
              <Text style={styles.timerText}>{minutes}</Text>
              <Text style={styles.timerLabel}>Minutes</Text>
            </View>
            <View style={styles.colenWrapper}>
            <Text style={styles.timerColon}>:</Text>
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

