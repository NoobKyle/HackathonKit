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

  localStorage.setItem("project", JSON.stringify(payload));
}

function handleProjectLocalStorage(draft){
  var store, values;

  store = localStorage.getItem("project");
  values = JSON.parse(store);

  draft.title = values.title;
  draft.features = values.features;
  draft.description = values.description;
  draft.benefits = values.benefits;
  draft.techstack = values.techstack;
  draft.challenges = values.challenges;
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "project/UPDATE":
        handleProjectUpdate(draft, action.payload)
        break;
      case "project/STORAGE":
        handleProjectLocalStorage(draft);
        break;
      default:
    }
  });
}
