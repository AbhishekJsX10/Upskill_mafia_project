
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AutoSlider from './Components/AutoSlider'
import BlocksSection from './Components/BlocksSection'
import Navbar from './Components/Navbar'
import Strip from './Components/Strip'
import HeroSection from './Pages/HeroSection'
// import Home from './Pages/Home'
import Page2 from './Pages/Page2'
import Page3 from "./Pages/Page3"
import Page4 from './Pages/Page4'
import Page6 from './Pages/Page6'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
      <Strip></Strip>
      <HeroSection></HeroSection>
      <BlocksSection/>
      <Page2></Page2>
      <Page3></Page3>
      <AutoSlider/>
      <Page4></Page4>
      <Page6></Page6>
      {/* <Home></Home> */}
    </BrowserRouter>
    </>
  )
}

export default App
