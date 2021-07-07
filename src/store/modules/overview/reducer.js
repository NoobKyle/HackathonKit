import Produce from "immer";

// team name, members, project name, description, benefits, tech stack, challenges, screenshots,
// presentation, demo link, github link
const INITIAL_STATE = {
  teamname: false,
  projectname: false,
  description: false,
  benefits: false,
  techstack: false,
  challenges: false,
  screenshots: false,
  presentation: false,
  demolink: false,
  githublink: false,
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "overview/TEAM":
        draft.teamname = action.payload;
        break;
      default:
    }
  });
}
