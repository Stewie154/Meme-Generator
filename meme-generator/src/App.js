import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import MemeDisplay from './Components/MemeGenerator/MemeDisplay'
import './App.css'
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      topText: '',
      bottomText: '',
      currentImage: '',
      allImages: []
    }

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
      const {name, value} = e.target
      this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Form handleChange={this.handleChange} 
          data={this.state}
        />
        <MemeDisplay 
          data={this.state}
        />
      </div>
    )
  }
  
}

export default App;
