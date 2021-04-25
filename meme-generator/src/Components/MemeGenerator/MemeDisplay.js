import React from 'react'
import './MemeDisplay.css'

class MemeDisplay extends React.Component {
    render(props) {
        return (
            <div className="container">
                <h2>{this.props.data.topText}</h2>
                <img />
                <h2>{this.props.data.bottomText}</h2>
            </div>
        )
    }
}

export default MemeDisplay