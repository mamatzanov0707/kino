import logo from './logo.svg';
import './App.scss';
import Header from "./components/header";
import Home from "./components/Home";
import {Routes , Route} from "react-router-dom";
import TopRated from "./components/TopRated";
import Popular from "./components/Popular";
import Playing from "./components/playing";
import DetailPage from "./components/page/DetailPage";
import DetailActors from "./components/DetailActors";
import SearchResult from "./components/page/SearchResult/SearchResult";
import {useState} from "react";

function App() {
    const [dark , setDark] = useState(false)
    const getDark = () =>{
        setDark(!dark)
    }
  return (
      <div style={{
          background:dark ? '#232121' : 'white',
          color: dark ? 'white' : 'black'
      }}>
        <Header getDark={getDark} dark={dark}/>
          {/*<Home/>*/}
          <Routes>
              <Route path={'/'} element={ <Home/> }/>
              <Route path={'/playing'} element={ <Playing/> }/>
              <Route path={'/Top-Rated'} element={ <TopRated/> }/>
              <Route path={'/Popular'} element={ <Popular/> }/>
              <Route path={'/movies/detail-page/:movieId'} element={ <DetailPage /> }/>
              <Route path={'/movies/actors-cast/:castId'} element={ <DetailActors /> }/>
              <Route path={'/movies/search-result/:movieName'} element={ <SearchResult /> }/>
          </Routes>
      </div>
  );
}

export default App;
