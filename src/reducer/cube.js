const initialState = {
	color: 0xff993f,
    faceSideA: 0xff0000,
    faceSideB: 0xffff00,
    faceSideC: 0x00ff00,
    faceSideD: 0x00ffff,
    faceSideE: 0x0000ff,
    faceSideF: 0xff00ff,
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
