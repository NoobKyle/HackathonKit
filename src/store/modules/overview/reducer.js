import Produce from "immer";

// team name, members, project name, description, benefits, tech stack, challenges, screenshots,
// presentation, demo link, github link
const INITIAL_STATE = {
  teamname: false,
  projectname: false,
  projectfeatures: false,
  description: false,
  benefits: false,
  techstack: false,
  challenges: false,
  screenshots: false,
  presentation: false,
  demolink: false,
  githublink: false,
}

function calculateTeamCheck(draft, payload){
  if( payload === 3){
    draft.teamname = true;
    console.log('Team Section Done.')
  }else{
    draft.teamname = false;
    console.log('Team Section NOT Done.')
  }
}

function calculateProjectCheck(draft, payload){
  if( payload === 6){
    draft.projectname = true;
    draft.projectfeatures = true;
    draft.description = true;
    draft.benefits = true;
    draft.techstack = true;
    draft.challenges = true;
    console.log('Project Section Done.')
  }else{
    draft.projectname = false;
    draft.projectfeatures = false;
    draft.description = false;
    draft.benefits = false;
    draft.techstack = false;
    draft.challenges = false;
    console.log('Project Section NOT Done.')
  }
}


export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "overview/TEAM":
          calculateTeamCheck(draft, action.payload);
        break;
      case "overview/PROJECT":
          calculateProjectCheck(draft, action.payload);
        break;
      default:
    }
  });
}
