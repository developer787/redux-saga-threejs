import React, {Component} from 'react'
class ClickSound extends Component {
    handleSoundLoading(){

    }
    handleSoundPlaying(){

    }
    handleSoundFinishedPlaying(){

    }
    render(){
        return(
            <Sound
              url="cool_sound.mp3"
              playStatus={Sound.status.PLAYING}
              playFromPosition={300 /* in milliseconds */}
              onFinishedPlaying={this.handleSoundFinishedPlaying}
              onPlaying={this.handleSoundPlaying}
              onFinishedPlaying={this.handleSoundFinishedPlaying}
            />
        )
    }
}
export default ClickSound
