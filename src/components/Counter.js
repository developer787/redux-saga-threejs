import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
	increment, 
	} from './actions'

const mapState = state=>({
	count: state.counter.count
})
const mapDispatch = dispatch=>({
	increment: payload=>dispatch(increment(payload)),
})

class Counter extends React.Component{
	render(){
		const { 
			count, increment} = this.props
		return(
			<CardContainer>
			<CardLabel>
			&lt;{"Counter " + count}&gt;
			</CardLabel>
			<StyledButton
			onClick={increment}>
			{"+"}
			</StyledButton>
			</CardContainer>

		)

	}
}

export default connect(mapState, mapDispatch)(Counter)

const CardContainer = styled.div`
  width: 90%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background: #fff;
  border: none;
  `
const CardLabel = styled.div`
text-align: center;
padding:6px;
background: papayawhip;
font-size: 6vmin;
border: none;
border-radius: 3px;
`
const StyledButton = styled.button`
background: #3CB371;
color: #fff;
border: none;
width: 30px;
height: 30px;
line-height: 30px;
text-align: center;
font-size: 6vmin;
font-weight: 900;
border-radius: 50%;
`

