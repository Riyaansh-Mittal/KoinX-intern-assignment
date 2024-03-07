import { createStore, combineReducers } from "redux";
import platformSettingsReducer from "./platformSettingsReducer";

const rootReducer = combineReducers({
  platformSettings: platformSettingsReducer,
});

const store = createStore(rootReducer);

export default store;
