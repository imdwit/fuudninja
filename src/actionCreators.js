
export function setFilter(filter) {
	return {
		type: 'SET_FILTER',
		filter
	};
}


export function addFuud(fuud) {
	fuud._id = Date.now();
	return {
		type: 'ADD_FUUD',
		fuud
	};
}


export function editFuud(edits) {
	return {
		type: 'EDIT_FUUD',
		edits
	};
}


export function removeFuud(_id) {
	return {
		type: 'REMOVE_FUUD',
		_id
	};
}
