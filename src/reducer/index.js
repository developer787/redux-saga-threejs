import { combineReducers } from 'redux'
import counter from './counter'
import cube from './cube'
const rootReducer = combineReducers({
	counter,
	cube
})
export default rootReducer
