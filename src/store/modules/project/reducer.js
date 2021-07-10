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

function handleProjectUpdate(draft, payload){
  draft.title = payload.title;
  draft.features = payload.features;
  draft.description = payload.description;
  draft.benefits = payload.benefits;
  draft.techstack = payload.techstack;
  draft.challenges = payload.challenges;
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "project/UPDATE":
        handleProjectUpdate(draft, action.payload)
        break;
      default:
    }
  });
}
