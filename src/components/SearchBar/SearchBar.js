import React,{useState} from 'react';
import { View, TextInput,Image} from 'react-native';
import { imagePath } from '../../constants/imagePaths';
import styles from './Style';
import { colorConstant } from '../../constants/colorConstant';
import { titleConstant } from '../../constants/titleConstant';

const SearchBar = () => {
    const [searchText, setSearchText] = useState('');
    const handleSearchTextChange = (text) => {
      setSearchText(text);
    };
  return (
    <View style={styles.container}> 
    <TextInput
        style={styles.input}
        placeholder={titleConstant.Search}
        placeholderTextColor={colorConstant.white}
        cursorColor={colorConstant.white}
        value={searchText}
        onChangeText={handleSearchTextChange}
      />
      <Image
        source={imagePath.SearchIcon} 
        resizeMode='contain'
      />
    </View>
  );
};



export default SearchBar;
