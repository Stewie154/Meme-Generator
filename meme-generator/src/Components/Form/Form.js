import React from 'react'
import './Form.css'

class Form extends React.Component {
    render () {
        return (
            <form>
                
                <input  name="topText" type="text" value="" placeholder="Enter Top Text"/>
                <input  name="bottomText" type="text" value="" placeholder="Enter Bottom Text"/>
                <button type="submit">Generate Meme</button>
            </form>
        )
    }
}

export default Form