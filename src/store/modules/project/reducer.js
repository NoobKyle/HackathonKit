import Produce from "immer";

// title, features, description, benefits, tech stack, challenges faced.
const INITIAL_STATE = {
  title: "No Title",
  features: "No Features",
  description: "No Description",
  benefits: "No Benefits",
  techstack: "No Tech Stack",
  challenges: "No Challenges Faced"
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "project/TITLE":
        draft.title = action.payload;
        break;
      default:
    }
  });
}
