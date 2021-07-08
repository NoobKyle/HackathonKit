import Produce from "immer";

// team name, members, team socials
const INITIAL_STATE = {
  team: "No Team Name",
  members: "No Members",
  socials: "No Socials"
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "team/NAME":
        draft.team = action.payload;
        break;
      default:
    }
  });
}
