export function teamUpdate(name, members, socials){
	return {
		type: "team/UPDATE",
		payload: {name, members, socials}
		};
	}

export function teamStorageUpdate(){
	return {
		type: "team/STORAGE"
	}
}
