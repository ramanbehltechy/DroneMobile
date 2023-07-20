import {combineReducers} from 'redux';
import userReducer from './userReducer';
import singleShowReducer from './singleShowReducer';
import singleShowDetailsReducer from './singleShowDetailsReducer';
import nearByShowsReducer from './locationReducer';
import showSearchReducer from './showSearchReducer';
import timeZoneReducer from './timeZoneReducer';
import singleSearchShowReducer from './singleSearchShowReducer';

const rootReducer = combineReducers({
    userList:userReducer,
    nearByShows:nearByShowsReducer,
    singleShow:singleShowReducer,
    singleShowDetails:singleShowDetailsReducer,
    searchShows:showSearchReducer,
    timezone:timeZoneReducer,
    singleSearchShow:singleSearchShowReducer
});

export default rootReducer;

