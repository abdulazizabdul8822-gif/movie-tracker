import Filter from "./component/Filter/Filter"
import Banner from "./component/NavBar/Banner/Banner"
import NavBar from "./component/NavBar/NavBar"
import Rating from "./component/Rating/Rating"
import WorkSection from "./component/WorkSection/WorkSection"
import Trending from "./component/Trending/Trending"
import Footer from "./component/Footer/Footer"

function App() {
  

  return (
    <>
      <NavBar/>
      <Banner/>
      <Rating/>
      <Filter/>

      <WorkSection/>

      <Trending/>

      <Footer/>
      
    </>
  )
}

export default App
