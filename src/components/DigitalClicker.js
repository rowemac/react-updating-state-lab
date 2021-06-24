import React from 'react'

class DigitalCLicker extends React.Component {

    state={
        
        timesClicked: 0
    }

    handleClick = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}

export default DigitalCLicker