import Home from './home';
import './App.css';
import './pages/singlepage';
import {Routes,Route, useParams } from 'react-router-dom';
import Singlepage from './pages/singlepage';
import Signin from './pages/signin';
import Watchlist from './pages/watchlist';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} key={"home"}></Route>
        <Route path="/singlepage/:id" element={<Singlepage/>}  key={"singlepage"}></Route>
        <Route path="/signin" element={<Signin/>} key={"signin"}> </Route>
        <Route path="/watchlist" element={<Watchlist/> } key={"watchlist"}> </Route>
        <Route path='*' element={<div>error 404 </div> } key={"404"}></Route>
      </Routes>
    </div>
  );
}

export default App;
