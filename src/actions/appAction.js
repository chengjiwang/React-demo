export function addComment(item) {
	return {
		type: 'ADD_COMMENT',
		payload: item
	}
}

export function deleteComment(index) {
	return {
		type: 'DELETE_COMMENT',
		payload: index
	}
}

export function editComment(message,index) {
	return {
		type: 'EDIT_COMMENT',
		payload: message,index,
		id:index
	}
}

export function likeNum(num,index) {
	return {
		type: 'LIKE_NUM',
		payload: num,
		id:index
	}
}
