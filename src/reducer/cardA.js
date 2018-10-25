const initialState = {
	items: []
}
const cardA = (state=initialState, action)=>{
	switch(action.type){
		case "ADD_ITEM":
			return Object.assign({}, state,{ items: action.payload})
		default:
			return state
	}
}
export default cardA
