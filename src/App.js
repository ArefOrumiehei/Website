import React , {Component} from 'react'

//Components
import Navbar from './components/Navbar.js'
import Banner from './components/Banner.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner/>
      </div>
    )
  }
}

export default App