var initialState = [{name:"alivn",message:"hello"}];

export default function(state = initialState, action) {
    switch(action.type) {
    case 'ADD_COMMENT':
    	state.push(action.payload);
        return [ ...state ];
    
    default:
        return state;
    }
} 