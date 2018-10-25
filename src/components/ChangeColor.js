import React from 'react'
import {connect} from 'react-redux'
import {
	changeColor,
	} from './actions'

const mapDispatch = dispatch=>({
	changeColor: color=>dispatch(changeColor(color)),
})
const ChangeColor = props=>(
    <button onClick={props.changeColor}>Change Color</button>
)


export default connect(null, mapDispatch)(ChangeColor)
