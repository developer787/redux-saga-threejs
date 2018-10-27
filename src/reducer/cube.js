const initialState = {
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
			return Object.assign({}, state,{
                faceSideA: action.payload[0],
                faceSideB: action.payload[1],
                faceSideC: action.payload[2],
                faceSideD: action.payload[3],
                faceSideE: action.payload[4],
                faceSideF: action.payload[5]
            })
		default:
			return state
	}
}
export default cube
