
import hobbyReducer from "./hobby";
import userReducer from "./user";
import { combineReducers } from "redux";
import { HobbyState } from './hobby';
import { UserState } from './user';

export interface IReducer {
    hobby: HobbyState,
    user: UserState
}

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer
});

export default rootReducer;
