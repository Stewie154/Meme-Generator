import React from 'react'
import './Form.css'

class Form extends React.Component {
    render (props) {
        return (
            <form>
                <input onChange={this.props.handleChange} name="topText" type="text" value={this.props.data.topText} placeholder="Enter Top Text"/>
                <input onChange={this.props.handleChange} name="bottomText" type="text" value={this.props.data.bottomText} placeholder="Enter Bottom Text"/>
                <button type="submit">Generate Meme</button>
            </form>
        )
    }
}

export default Form