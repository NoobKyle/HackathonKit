export function projectUpdate(title, features, description, benefits, techstack, challenges){
	return {
		type: "project/UPDATE",
		payload: {title, features, description, benefits, techstack, challenges}
		};
	}
