import { combineReducers } from "redux";
import cardReducer from "../slice/CardSlice";

const rootReducer = combineReducers({
  card: cardReducer,
});

export default rootReducer;
