import { combineReducers } from "redux";

import overview from "./overview/reducer";
import project from "./project/reducer";
import team from "./team/reducer";
import pitch from "./pitch/reducer";

export default combineReducers({
  overview, project, team, pitch
});
