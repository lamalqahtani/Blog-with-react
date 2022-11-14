import './assets/styles/App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import PostDetails from './PostDetails';
import Create from './Create';
import Footer from './Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/post/details/:id' element={<PostDetails/>} />
            <Route path='/post/create' element={<Create/>} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
  //   <div className="App">
  //     <Navbar />
  //     <div className="content">
  //       <Home />
  //     </div>
  //   </div>
  // );
}

export default App;
