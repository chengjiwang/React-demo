var initialState = [{name:"alivn",message:"hello",likeNum:0}];

export default function(state = initialState, action) {
    switch(action.type) {
    case 'ADD_COMMENT':
    	state.push(action.payload);
        return [ ...state ];
    case 'DELETE_COMMENT':
    	state.splice(action.payload , 1);
        return [ ...state ];
    case 'EDIT_COMMENT':
        state[action.id].message = action.payload ;
        // console.log(state[action.id].message)
        return [ ...state ];
    case 'LIKE_NUM':
        state[action.id].likeNum = action.payload ;
        return [ ...state ];
    default:
        return state;
    }
} 