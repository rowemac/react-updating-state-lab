import React from 'react'

class YouTubeDebugger extends React.Component {
    state={
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeResolution = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.video,
                    resolution: '720p'
                }

            }
            
        })

    }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button> <br></br>
                <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
            </div>
        )
    }



}

export default YouTubeDebugger