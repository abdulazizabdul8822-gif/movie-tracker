import Filter from "./component/Filter/Filter"
import Banner from "./component/NavBar/Banner/Banner"
import NavBar from "./component/NavBar/NavBar"
import Rating from "./component/Rating/Rating"
import WorkSection from "./component/WorkSection/WorkSection"
import Trending from "./component/Trending/Trending"
import Footer from "./component/Footer/Footer"
import MovieCart from "./component/MovieCart/MovieCart"
import { Suspense,  useState } from "react"


const getMovieCart = async () =>{

  const res = await fetch("/movieData.json")
    return res.json()
}



function App() {

  const [MovieCartPromise] = useState(() => getMovieCart())
   
  return (
    <>
      <NavBar/>
      <Banner/>
      <Suspense fallback={<div className="flex justify-center items-center min-h-[200px]"><span className="loading loading-ring loading-xl"></span></div>}>
        <MovieCart MovieCartPromise={MovieCartPromise}/>
      </Suspense>
      <Rating/>
      <Filter/>

      <WorkSection/>

      <Trending/>

      <Footer/>
      
    </>
  )
}

export default App
