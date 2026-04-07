import Filter from "./component/Filter/Filter"
import Banner from "./component/NavBar/Banner/Banner"
import NavBar from "./component/NavBar/NavBar"
import Rating from "./component/Rating/Rating"
import WorkSection from "./component/WorkSection/WorkSection"
import Trending from "./component/Trending/Trending"
import Footer from "./component/Footer/Footer"
import MovieCart from "./component/MovieCart/MovieCart"
import { Suspense, useEffect, useState } from "react"
import Cart from "./component/Cart/Cart"
import Cta from "./component/Cta/Cta"


const getMovieCart = async () => {

  const res = await fetch("/movieData.json")
  return res.json()
}



function App() {

  const [MovieCartPromise] = useState(() => getMovieCart());

  const [activeTab, setActiveTab] = useState("Movies");

  const [carts, setCarts] = useState([])
  console.log(carts)

  const [search, setSearch] = useState("");


  
  const [movies, setMovies] = useState([])


  useEffect(() => {
    fetch("/movieData.json")
      .then(res => res.json())
      .then(data => setMovies(data))
  }, [])



  return (
    <>
      <NavBar search={search} setSearch={setSearch}  movies={movies}/>

      

      {activeTab === "WatchList" ? (
        <> 
        <div role="tablist" className="tabs tabs-lift justify-center gap-4 mt-30">
            <a onClick={() => setActiveTab("Movies")} role="tab" className={`tab w-40 font-bold rounded-full transition-transform duration-300 hover:scale-105 ${activeTab === "Movies" ? "tab-active text-white bg-linear-to-r from-[#f63939] to-[#1c14fa]" : ""}`}>Movies</a>

            <a onClick={() => setActiveTab("WatchList")} role="tab" className={`tab w-40 font-bold rounded-full transition-transform duration-300 hover:scale-105 ${activeTab === "WatchList" ? "tab-active text-white bg-linear-to-r from-[#a70202] to-[#4000ff]" : ""}`}>{`Cart (${carts.length})`}</a>
          </div>

          <Cart carts={carts} setCarts={setCarts} search={search} />
        </>
        
      ) : (

        <>
          <Banner />

           <Filter />
          <div role="tablist" className="tabs tabs-lift justify-center gap-4 mb-10">
            <a onClick={() => setActiveTab("Movies")} role="tab" className={`tab w-40 font-bold rounded-full transition-transform duration-300 hover:scale-105 ${activeTab === "Movies" ? "tab-active text-white bg-linear-to-r from-[#f63939] to-[#1c14fa]" : ""}`}>Movies</a>

            <a onClick={() => setActiveTab("WatchList")} role="tab" className={`tab w-40 font-bold rounded-full transition-transform duration-300 hover:scale-105 ${activeTab === "WatchList" ? "tab-active text-white bg-linear-to-r from-[#a70202] to-[#4000ff]" : ""}`}>{`Cart (${carts.length})`}</a>
          </div>

          <Suspense fallback={<div className="flex justify-center items-center min-h-[200px]"><span className="loading loading-ring loading-xl"></span></div>}>
            {activeTab === "Movies" && <MovieCart MovieCartPromise={MovieCartPromise} carts={carts} setCarts={setCarts} search={search} />}
          </Suspense>



          

         

          <WorkSection />

          <Trending />

          
        
        </>
      )}
      {/* <Rating /> */}
      <Cta/>
      <Footer />
    </>
  )
}

export default App
