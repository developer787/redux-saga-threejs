const initialState = {
	color: 0xff3323
}
const cube = (state=initialState, action)=>{
	switch(action.type){
		case "CHANGE_COLOR":
			return Object.assign({}, state,{ color: action.payload})
		default:
			return state
	}
}
export default cube