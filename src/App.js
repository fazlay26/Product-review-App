
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
        <Route path='/Reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/DashBoard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
