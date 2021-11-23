import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from  './Pages/Contact';
import Category from './Pages/Category';
import Meal from './Pages/Meal';
import NotFound from './Pages/NotFound'




function App() {
  return (
    <Router>
		<Header />
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/category/:name" element={<Category/>} />
				<Route path="/meal/:id" element={<Meal/>} />
				<Route path="*" element={<NotFound/>} />
			</Routes>
		<Footer />      
    </Router>
  );
}

export default App;
