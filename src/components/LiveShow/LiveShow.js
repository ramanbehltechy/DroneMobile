import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ButtonComp from '../Button/ButtonComp';
import { titleConstant } from '../../constants/titleConstant';
import { imagePath } from '../../constants/imagePaths';
import styles from './Style';
import TrackPlayer, {
  usePlaybackState,
  State,
} from 'react-native-track-player';
import { useNavigation } from '@react-navigation/native';
import navigationString from '../../constants/navigationString';
import { colorConstant } from '../../constants/colorConstant';
import { MP3_FILE_BASE_URL, baseURL } from '../../constants/apiConstant';

const LiveShow = ({ showData, setIsAudioButton }) => {
  const navigation = useNavigation();
  const playbackState = usePlaybackState();
  const showTime = new Date(showData?.utcDateTime);
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isLive, setIsLive] = useState(false);
  const [showHours, showMinutes] = showData?.startTime.split(':');
  // showTime.setHours(showHours, showMinutes, 0);
  useEffect(() => {
    setupAudioTracks();
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
        setIsLive(false);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [showData?._id]);

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



  const setupAudioTracks = async () => {
    const remaining = getRemainingTime();

    await TrackPlayer.reset();

    TrackPlayer.addEventListener('playback-queue-ended', async event => { });
    const tracks = [];
    if (remaining <= 0) {
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
    }
    else {
      if (showData.pre_show && showData.premp3) {

        tracks.push({
          url: ``,
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon
        });
      }

      // For Main Show
      if (showData.main_show && showData.mainmp3) {
        tracks.push({
          url: ``,
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon
        });
      }

      // For Post Show
      if (showData.post_show && showData.postmp3) {
        tracks.push({
          url: ``,
          title: showData.showTitle,
          artist: 'Artist',
          artwork: imagePath.AudioIcon
        });
      }
    }
    await TrackPlayer.add(tracks);

  };

  const toggleAudio = async playbackState => {
    navigation.navigate(navigationString.StartShow)

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
    <View>
      {remainingTime > 0 ? (
        <ButtonComp
          title={`Starts in ${hours}:${minutes}:${seconds} hrs`}
          buttonStyle={{ width: '50%', backgroundColor: colorConstant.bottomtab }}
        />
      ) : (
        <ButtonComp title={titleConstant.Live} buttonStyle={{ width: '25%' }} />
      )}

      <View style={styles.infoContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{showData.showTitle}</Text>
          <View style={styles.locationContainer}>
            <Image
              source={imagePath.PinIcon}
              style={styles.locationIcon}
              resizeMode="contain"
            />
            <Text style={styles.address} numberOfLines={2}>{showData.address}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => toggleAudio(playbackState)} disabled={remainingTime < 0}>
          <Image
            source={imagePath.AudioIcon}
            style={[styles.playIcon, remainingTime < 0 && styles.disabledIcon]}
            resizeMode="contain"
          />

        </TouchableOpacity>

      </View>
    </View>

  );
};

export default LiveShow;