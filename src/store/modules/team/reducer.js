import Produce from "immer";

// team name, members, team socials
const INITIAL_STATE = {
  team: "No Team Name",
  members: "No Members",
  socials: "No Socials"
}

function handleTeamUpdate(draft, payload){
  draft.team = payload.name;
  draft.members = payload.members;
  draft.socials = payload.socials;

  localStorage.setItem("team", JSON.stringify(payload));
}

function handleTeamLocalStorage(draft){
  var store, values;

  store = localStorage.getItem("team");
  values = JSON.parse(store);

  draft.team = values.name;
  draft.members = values.members;
  draft.socials = values.socials;
}

export default function project(state = INITIAL_STATE, action){
  return Produce(state, draft => {
    switch( action.type ){
      case "team/UPDATE":
        handleTeamUpdate(draft, action.payload)
        break;
      case "team/STORAGE":
        handleTeamLocalStorage(draft);
        break;
      default:
    }
  });
}
