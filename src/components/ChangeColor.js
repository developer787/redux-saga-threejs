import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {
	changeColor,
	} from './actions'

const mapDispatch = dispatch=>({
	changeColor: color=>dispatch(changeColor(color)),
})
const ChangeColor = (props)=>(
    <button onClick={props.changeColor}>Change Color</button>
)
const changeColorButton = styled.button`
    color: #fff;
`


export default connect(null, mapDispatch)(ChangeColor)
