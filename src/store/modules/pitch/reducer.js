import Produce from "immer";

// images, powerpoint, youtube link
const INITIAL_STATE = {
  images: "No Images",
  powerpoint: "No Powerpoint",
  youtube: "No YouTube"
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "pitch/YOUTUBE":
        draft.youtube = action.payload;
        break;
      default:
    }
  });
}
