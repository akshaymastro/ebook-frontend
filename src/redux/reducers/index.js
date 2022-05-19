import { combineReducers } from "redux";
import ebookReducer from "./ebookreducer";

const rootreducer = combineReducers({
  ebook: ebookReducer,
});

export default rootreducer;
