import Produce from "immer";

// images, powerpoint, youtube link
const INITIAL_STATE = {
  images: "No Images",
  powerpoint: "No Powerpoint",
  youtube: "No YouTube"
}

function handlePitchUpdate(draft, payload){
  draft.images = payload.images;
  draft.powerpoint = payload.powerpoint;
  draft.youtube = payload.youtube;
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "pitch/YOUTUBE":
        handlePitchUpdate(draft, action.payload)
        break;
      default:
    }
  });
}
