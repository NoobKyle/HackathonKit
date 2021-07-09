export function teamOverview( check ){
	return {
		type: "overview/TEAM",
		payload: check
		};
	}

export function projectOverview( check ){
	return {
		type: "overview/PROJECT",
		payload: check
		};
	}
