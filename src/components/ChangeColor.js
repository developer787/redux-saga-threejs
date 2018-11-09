import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {
	changeColor,
	} from './actions'

const mapDispatch = dispatch=>({
	changeColor: color=>dispatch(changeColor(color)),
})
class Container extends React.Component {
    constructor(props){
        super(props)
        this.textDisplay = this.textDisplay.bind(this)
    }
    textDisplay(){
        alert(JSON.stringify(this.state))
        return "TEXT"
    }
    render(){
        return(
            <div>
            <changeColorButton
                onClick={this.props.changeColor} >
                Change Cube Color
            </changeColorButton>
            <changeColorButton
                onClick={this.textDisplay} >
                display Text
            </changeColorButton>
            </div>
        )
    }
}

const changeColorButton = styled.button.attrs({
    text: 'Hello'
})
`
    background-color: #a45690;
    color: #fff;
`
export default connect(null, mapDispatch)(Container)
