import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { Header, LinearGradientComponent, LiveShow, SearchBar, Show } from '../../components';
import navigationString from '../../constants/navigationString';
import styles from './Style';
import { data } from '../../constants/jsonConstant';
import { titleConstant } from '../../constants/titleConstant';
import { colorConstant } from '../../constants/colorConstant';
import { useDispatch, useSelector } from 'react-redux';
import { showSearchActions } from '../../store/actions/showSearchActions';
import { imagePath } from '../../constants/imagePaths';
import { setSelectedShow } from '../../store/actions/singleSearchShowAction';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [searchResults, setSearchResults] = useState([]);
  const showSearchs = useSelector(state => state.searchShows.searchShows.shows);
  const [showNoResults, setShowNoResults] = useState(false)
  const timeZone = useSelector(state => state.timezone.timeZoneName);

  const [searchText, setSearchText] = useState('');
  const handleSearchTextChange = (text) => {
    setSearchText(text);
    if (text === '') {
      setSearchResults([]);
    } else {
      search(text);
    }

  };



  const renderItem = ({ item, index }) => {
    const isLastItem = index === data.length - 1;
    const borderBottomColor = isLastItem ? colorConstant.transparent : 'rgba(255, 255, 255, 0.1)';
    const handleAudioIconClick = (item) => {
      dispatch(setSelectedShow(item));
      navigation.navigate(navigationString.SearchShowPlayer)
    };
    return (
      <View style={[styles.itemContainer,
      { borderBottomColor }
      ]} key={item._id}>
        <Show searchShow={item} onAudioIconClick={() => handleAudioIconClick(item)} />
      </View>
    );
  };

  const handleBackPress = () => {
    navigation.navigate(navigationString.MyLocations);
  };
  const search = async (text) => {
    setSearchResults([]);
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDateTime.getDate().toString().padStart(2, '0');
    const hours = currentDateTime.getHours().toString().padStart(2, '0');
    const minutes = currentDateTime.getMinutes().toString().padStart(2, '0');
    const date = `${year}-${month}-${day}`
    const time = `${hours}:${minutes}`
    const payload = {
      showTitle: text,
      date: date,
      time: time,
     timezone: timeZone ? timeZone : 'America/Chicago'
    //  timezone:"Asia/Calcutta"
    }
    dispatch(showSearchActions(payload))
    if (showSearchs?.length > 0) {
      setSearchResults(showSearchs);
      setShowNoResults(false)
    } else {
      setShowNoResults(true)
    }


  };

  return (
    <LinearGradientComponent>
      <SafeAreaView style={styles.container}>
        <View style={{
          alignItems: 'center',
          paddingVertical: 5
        }}>
          <Image
            source={imagePath.SkyElementLogo}
            resizeMode='contain'
          />
        </View>

        <View style={{
          flex: 1,
          paddingHorizontal: 16, 
        }}>
          <Header title={titleConstant.Search} textStyle={{ marginLeft: 22 }} onBackPress={handleBackPress} />
          <View style={styles.serachcontainer}>
            <TextInput
              style={styles.input}
              placeholder={titleConstant.Search}
              placeholderTextColor={colorConstant.white}
              cursorColor={colorConstant.white}
              value={searchText}
              onChangeText={handleSearchTextChange}
            />
            <TouchableOpacity style={styles.searchButton} onPress={() => search(searchText)}>
              <Image source={imagePath.SearchIcon} resizeMode="contain" style={styles.searchIcon} />
            </TouchableOpacity>

          </View>
          {searchResults && searchResults?.length > 0 ?
            (<View style={styles.search_view}>


              <FlatList
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item) => item._id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
              />


            </View>)
            : (
              <Text style={{ textAlign: 'center', color: 'white', alignItems: 'center', marginTop: 100 }}>No Results Found</Text>
            )
          }
        </View>
      </SafeAreaView>
    </LinearGradientComponent>

  );
};


export default SearchScreen;
